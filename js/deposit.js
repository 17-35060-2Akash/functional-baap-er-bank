

document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputFieldValueById('amount-deposit');
    const previousDepositTotal = getElementValueById('deposit-total');

    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementValueById('deposit-total', newDepositTotal);

    const previousBalance = getElementValueById('balance-total');
    const newBalance = previousBalance + newDepositAmount;
    setTextElementValueById('balance-total', newBalance);

});