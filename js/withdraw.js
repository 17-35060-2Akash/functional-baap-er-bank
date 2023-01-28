document.getElementById('btn-withdraw').addEventListener('click', function (event) {
    const newWithdrawAmount = getInputFieldValueById('amount-withdraw');
    const prevWithdrawTotal = getElementValueById('withdraw-total');
    const prevTotalBalance = getElementValueById('balance-total');

    const newWithdrawTotal = prevWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);

    const newTotalBalance = prevTotalBalance - newWithdrawAmount;
    setTextElementValueById('balance-total', newTotalBalance);
});