"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_replace_1 = require("./env-replace");
const ENV = {
    foo: 'foo_value',
    bar: 'bar_value',
    zoo: '',
};
test.each([
    ['-${foo}-${bar}', '-foo_value-bar_value'],
    ['\\${foo}', '${foo}'],
    ['\\${zoo}', '${zoo}'],
    ['\\\\${foo}', '\\foo_value'],
    ['-${foo-fallback-value}-${bar:-fallback-value}', '-foo_value-bar_value'],
    ['-${qar-fallback-value}-${zoo-fallback-value}', '-fallback-value-'],
    ['-${qar-fallback-value}-${zoo:-fallback-for-empty-value}', '-fallback-value-fallback-for-empty-value']
])('success %s => %s', (settingValue, expected) => {
    const actual = (0, env_replace_1.envReplace)(settingValue, ENV);
    expect(actual).toEqual(expected);
});
test('fail when the env variable is not found', () => {
    expect(() => (0, env_replace_1.envReplace)('${baz}', ENV)).toThrow(`Failed to replace env in config: \${baz}`);
    expect(() => (0, env_replace_1.envReplace)('${foo-}', ENV)).toThrow(`Failed to replace env in config: \${foo-}`);
    expect(() => (0, env_replace_1.envReplace)('${foo:-}', ENV)).toThrow(`Failed to replace env in config: \${foo:-}`);
});
//# sourceMappingURL=env-replace.spec.js.map