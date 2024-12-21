const formatPhoneNumber = require('../app');

describe('formatPhoneNumber', () => {
    test('should format valid Russian phone numbers correctly', () => {
        expect(formatPhoneNumber('8 (927) 000-00-00')).toBe('+79270000000');
        expect(formatPhoneNumber('+7 960 000 00 00')).toBe('+79600000000');
        expect(formatPhoneNumber('89270000000')).toBe('+79270000000');
        expect(formatPhoneNumber('79270000000')).toBe('+79270000000');
        expect(formatPhoneNumber('+79270000000')).toBe('+79270000000');
    });

    test('should format valid international phone numbers correctly', () => {
        expect(formatPhoneNumber('+86 000 000 0000')).toBe('+860000000000');
        expect(formatPhoneNumber('+15 551 234 567')).toBe('+15551234567');
        expect(formatPhoneNumber('+44 791 112 3456')).toBe('+447911123456');
    });

    test('should format number starting with 8 and length 11', () => {
        expect(formatPhoneNumber('81234567890')).toBe('+71234567890');
    });

    test('should format number starting with 7 and length 11', () => {
        expect(formatPhoneNumber('71234567890')).toBe('+71234567890');
    });

    test('should format valid Russian number with 10 digits', () => {
        expect(formatPhoneNumber('9270000000')).toBe('+79270000000');
    });

    test('should return null for invalid phone numbers', () => {
        expect(formatPhoneNumber('123')).toBe(null);
        expect(formatPhoneNumber('123456789')).toBe(null);
        expect(formatPhoneNumber('1234567890123456')).toBe(null);
        expect(formatPhoneNumber('abc')).toBe(null);
        expect(formatPhoneNumber('')).toBe(null);
        expect(formatPhoneNumber(1234567890)).toBe(null);
        expect(formatPhoneNumber(null)).toBe(null);
        expect(formatPhoneNumber(undefined)).toBe(null);
        expect(formatPhoneNumber({})).toBe(null);
        expect(formatPhoneNumber([])).toBe(null);
        expect(formatPhoneNumber('+7 960 000 00 00abc')).toBe(null);
    });

    test('should handle edge cases', () => {
        expect(formatPhoneNumber('912345678')).toBe(null);
    });

    test('should return null if original string includes not numbers chars and they were removed', () => {
        expect(formatPhoneNumber('+7 927 000-00-0a')).toBe(null);
        expect(formatPhoneNumber('8 (927) 000-00-0#')).toBe(null);
    });

    test('should format international number when length is more than 11', () => {
        expect(formatPhoneNumber('712345678901')).toBe('+712345678901');
    });
});
