function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValueFloat = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValueFloat;
}

function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

function setTextElementValueById(elementid, newValue) {
    const textElement = document.getElementById(elementid);
    textElement.innerText = newValue;
}