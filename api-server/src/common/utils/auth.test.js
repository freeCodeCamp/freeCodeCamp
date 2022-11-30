import { getEncodedEmail, decodeEmail } from './auth';

describe('getEncodedEmail()', () => {
    const tests = [
        {
            name: 'should not return "null"',
            input: "johnsmith@gmail.com",
            expected: "am9obnNtaXRoQGdtYWlsLmNvbQ==",
        },
        {
            name: 'should not return "null"',
            input: "janedoe@yahoo.com",
            expected: "amFuZWRvZUB5YWhvby5jb20=",
        },
        {
            name: 'should return "null"',
            input: "",
            expected: null,
        },
    ];

    tests.forEach(test => {
        it(test.name, () => {
            expect(getEncodedEmail(test.input)).toBe(test.expected);
        });
    });
});

describe('decodeEmail()', () => {
    const tests = [
        {
            name: 'should return email for base64',
            input: "am9obnNtaXRoQGdtYWlsLmNvbQ==",
            expected: "johnsmith@gmail.com",
        },
        {
            name: 'should return email for base64',
            input: "amFuZWRvZUB5YWhvby5jb20=",
            expected: "janedoe@yahoo.com",
        },
        {
            name: 'should return empty string for empty string',
            input: "",
            expected: "",
        },
    ];

    tests.forEach(test => {
        it(test.name, () => {
            expect(decodeEmail(test.input)).toBe(test.expected);
        });
    });
});