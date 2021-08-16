
document.getElementById('deposite-button').addEventListener('click', function () {
    const depositeInput = document.getElementById('deposite-input');
    const newDepositeAmountText = depositeInput.value;
    //string theke number e convert korar jonno parsefloat use kora hoy
    const newDepositeAmount = parseFloat(newDepositeAmountText);
    // console.log(depositeAmount);
    //update deposite total
    const depositeTotal = document.getElementById('deposite-total');
    const previousDepositeAmountText = depositeTotal.innerText;
    //string theke number e convert korar jonno parsefloat use kora hoy
    const previousDepositeAmount = parseFloat(previousDepositeAmountText);
    //previousammount+new amount= total depo amount
    const newDepositeTotal = previousDepositeAmount + newDepositeAmount;
    depositeTotal.innerText = newDepositeTotal;
    //update account  balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositeAmount;
    balanceTotal.innerText = newBalanceTotal;

    //input box e lekhar por jate clear hoye jay tai eta use kora hoy depositeInput.value = '';
    depositeInput.value = '';

});
//withdraw event handaler
document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdrawInput.value;
    // console.log(newWithdrawAmountText);
    const newwithdrawAmount = parseFloat(newWithdrawAmountText);
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmountTotalText = withdrawTotal.innerText;
    const prewithdrawTotalAmount = parseFloat(previousWithdrawAmountTotalText);
    const newWithdrawTotal = prewithdrawTotalAmount + newwithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    //withdraw update account  balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newwithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;
    //input box e lekhar por jate clear hoye jay tai eta use kora hoy withdrawInput.value = '';
    withdrawInput.value = '';
})