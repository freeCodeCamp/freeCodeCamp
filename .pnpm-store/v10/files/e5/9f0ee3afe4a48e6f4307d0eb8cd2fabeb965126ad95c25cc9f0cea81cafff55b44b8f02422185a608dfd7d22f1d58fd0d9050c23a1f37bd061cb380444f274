import { seedSpec } from '../util.js';
export default function getParser({ tokenizers }) {
    return function parseSpec(source) {
        var _a;
        let spec = seedSpec({ source });
        for (const tokenize of tokenizers) {
            spec = tokenize(spec);
            if ((_a = spec.problems[spec.problems.length - 1]) === null || _a === void 0 ? void 0 : _a.critical)
                break;
        }
        return spec;
    };
}
