const parseInt = globalThis.parseInt;
function buildTimeValue(value) {
    const onlyDigitsValue = value.replace(/\D/g, '');
    if (onlyDigitsValue.length < 2) {
        return value;
    }
    const firstDigit = parseInt(onlyDigitsValue[0], 10);
    const secondDigit = parseInt(onlyDigitsValue[1], 10);
    if (firstDigit >= 3 || firstDigit === 2 && secondDigit >= 4) {
        let index;
        if (firstDigit >= 3) {
            index = 1;
        } else {
            index = 2;
        }
        return build(onlyDigitsValue, index);
    }
    if (value.length === 2) {
        return value;
    }
    return build(onlyDigitsValue, 2);
}
function build(onlyDigitsValue, index) {
    const hours = onlyDigitsValue.slice(0, index);
    const validHours = Math.min(parseInt(hours, 10), 23);
    const minuteCharacters = onlyDigitsValue.slice(index);
    const parsedMinutes = parseInt(minuteCharacters, 10);
    const validMinutes = Math.min(parsedMinutes, 59);
    return `${validHours.toString().padStart(2, '0')}:${validMinutes.toString().padStart(2, '0')}`;
}
function isValidDateOrTimeValue(element, value) {
    const clone = element.cloneNode();
    clone.value = value;
    return clone.value === value;
}

export { buildTimeValue, isValidDateOrTimeValue };
