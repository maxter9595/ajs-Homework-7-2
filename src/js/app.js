function formatPhoneNumber(phoneNumber) {
    if (!(typeof phoneNumber === 'string' || phoneNumber instanceof String)) {
        return null;
    }

    if (/[^0-9+\s]/.test(phoneNumber) & /[^0-9\s\\(\\)-]/.test(phoneNumber)) {
        return null;
    }

    let cleanedNumber = phoneNumber.replace(/\D/g, '');
    const length = cleanedNumber.length;

    if (length === 11 && cleanedNumber.startsWith('8')) {
        cleanedNumber = '+7' + cleanedNumber.slice(1);

    } else if (length === 11 && cleanedNumber.startsWith('7')) {
        cleanedNumber = '+' + cleanedNumber;

    } else if (length === 10) {
        cleanedNumber = '+7' + cleanedNumber;

    } else if (length < 10 || length > 15) {
        return null;

    } else if (length > 11) {
        cleanedNumber = '+' + cleanedNumber;
    }

    return cleanedNumber.startsWith('+') ? cleanedNumber : '+' + cleanedNumber;
}

module.exports = formatPhoneNumber;
