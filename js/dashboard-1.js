/* organize kore function usse kkore dashboard js kora hoyese eta advance but ager dashboard.js ta basic and dashboard-1.js ta dashboard.html e connect kora hoyese..basisc ta jokon lagbe oita connect kore dilei hoye jabe */
//use function and call the function...
function getInputValue(inputId) {
    const InputField = document.getElementById(inputId);
    const inputAmountText = InputField.value;
    //string theke number e convert korar jonno parsefloat use kora hoy
    const inputAmount = parseFloat(inputAmountText);
    InputField.value = '';
    return inputAmount;
};
function UpdateTotalField(inputAmountId, Amount) {
    const totalField = document.getElementById(inputAmountId);
    const AmountText = totalField.innerText;
    //string theke number e convert korar jonno parsefloat use kora hoy
    const previousTotal = parseFloat(AmountText);
    //previousammount+new amount= total depo amount
    const newDepositeTotal = previousTotal + Amount;
    totalField.innerText = newDepositeTotal;
};
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}
function updateBalance(Amounts, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        const newBalanceTotal = previousBalanceTotal + Amounts;
        balanceTotal.innerText = newBalanceTotal;
    }
    else {
        const newBalanceTotal = previousBalanceTotal - Amounts;
        balanceTotal.innerText = newBalanceTotal;
    }
}
document.getElementById('deposite-button').addEventListener('click', function () {
    const newDepositeAmount = getInputValue('deposite-input');
    if (newDepositeAmount > 0) {
        UpdateTotalField('deposite-total', newDepositeAmount);
        updateBalance(newDepositeAmount, true);
    }
});
//withdraw event handaler
document.getElementById('withdraw-button').addEventListener('click', function () {
    /*     const newwithdrawAmount = getInputValue('withdraw-input');
        current balance er theeke withdraw beshi korte chaile hbe na setar validation [const currentBalance = getCurrentBalance();&& newwithdrawAmount < currentBalance);  if (newwithdrawAmount > currentBalance) {
            console.log('please input correct ammount');
        }]  */
    const currentBalance = getCurrentBalance();
    if (newwithdrawAmount > 0 && newwithdrawAmount < currentBalance) {
        UpdateTotalField('withdraw-total', newwithdrawAmount);
        updateBalance(newwithdrawAmount, false);
    }
    if (newwithdrawAmount > currentBalance) {
        console.log('please input correct ammount');
    }
});