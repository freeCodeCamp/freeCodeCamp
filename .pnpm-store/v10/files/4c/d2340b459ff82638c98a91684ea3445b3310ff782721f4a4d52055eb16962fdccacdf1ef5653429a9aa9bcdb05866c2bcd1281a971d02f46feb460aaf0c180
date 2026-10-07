"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const ca_file_1 = require("./ca-file");
it('should read CA file', () => {
    expect((0, ca_file_1.readCAFileSync)(path_1.default.join(__dirname, 'fixtures/ca-file1.txt'))).toStrictEqual([
        `-----BEGIN CERTIFICATE-----
XXXX
-----END CERTIFICATE-----`,
        `-----BEGIN CERTIFICATE-----
YYYY
-----END CERTIFICATE-----`,
        `-----BEGIN CERTIFICATE-----
ZZZZ
-----END CERTIFICATE-----`,
    ]);
});
it('should not fail when the file does not exist', () => {
    expect((0, ca_file_1.readCAFileSync)(path_1.default.join(__dirname, 'not-exists.txt'))).toEqual(undefined);
});
//# sourceMappingURL=ca-file.spec.js.map