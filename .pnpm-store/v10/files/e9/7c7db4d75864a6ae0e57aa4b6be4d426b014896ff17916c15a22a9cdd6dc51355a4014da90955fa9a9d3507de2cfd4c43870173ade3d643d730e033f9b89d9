function appendOrSet(a, b) {
    if (typeof b === 'string' && /^\s*\|/.test(b)) {
        return typeof a === 'string'
            ? a + b
            : b.replace(/^\s*\|\s*/, '');
    }

    return b || null;
}

function extractProps(obj, props) {
    const result = Object.create(null);

    for (const prop of Object.keys(obj)) {
        if (props.includes(prop)) {
            result[prop] = obj[prop];
        }
    }

    return result;
}

function mergeDicts(base, ext, fields) {
    const result = { ...base };

    for (const [key, props] of Object.entries(ext)) {
        result[key] = {
            ...result[key],
            ...fields ? extractProps(props, fields) : props
        };
    }

    return result;
}

export default function mix(dest, src) {
    const result = { ...dest };

    for (const [prop, value] of Object.entries(src)) {
        switch (prop) {
            case 'generic':
                result[prop] = Boolean(value);
                break;

            case 'cssWideKeywords':
                result[prop] = dest[prop]
                    ? [...dest[prop], ...value]
                    : value || [];
                break;

            case 'units':
                result[prop] = { ...dest[prop] };
                for (const [name, patch] of Object.entries(value)) {
                    result[prop][name] = Array.isArray(patch) ? patch : [];
                }
                break;

            case 'atrules':
                result[prop] = { ...dest[prop] };

                for (const [name, atrule] of Object.entries(value)) {
                    const exists = result[prop][name] || {};
                    const current = result[prop][name] = {
                        prelude: exists.prelude || null,
                        descriptors: {
                            ...exists.descriptors
                        }
                    };

                    if (!atrule) {
                        continue;
                    }

                    current.prelude = atrule.prelude
                        ? appendOrSet(current.prelude, atrule.prelude)
                        : current.prelude || null;

                    for (const [descriptorName, descriptorValue] of Object.entries(atrule.descriptors || {})) {
                        current.descriptors[descriptorName] = descriptorValue
                            ? appendOrSet(current.descriptors[descriptorName], descriptorValue)
                            : null;
                    }

                    if (!Object.keys(current.descriptors).length) {
                        current.descriptors = null;
                    }
                }
                break;

            case 'types':
            case 'properties':
                result[prop] = { ...dest[prop] };
                for (const [name, syntax] of Object.entries(value)) {
                    result[prop][name] = appendOrSet(result[prop][name], syntax);
                }
                break;

            case 'parseContext':
                result[prop] = {
                    ...dest[prop],
                    ...value
                };
                break;

            case 'scope':
            case 'features':
                result[prop] = mergeDicts(dest[prop], value);
                break;

            case 'atrule':
            case 'pseudo':
                result[prop] = mergeDicts(dest[prop], value, ['parse']);
                break;

            case 'node':
                result[prop] = mergeDicts(dest[prop], value, ['name', 'structure', 'parse', 'generate', 'walkContext']);
                break;
        }
    }

    return result;
}
