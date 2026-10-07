// deno-fmt-ignore-file
// deno-coverage-ignore-start
/** Romanian (Romania) - ISO 639-1 language code 'ro' with ISO 3166-1 alpha-2 country code 'RO' for Romania. */
export function ro_RO(error) {
    switch (error.keyword) {
        case 'additionalProperties': return 'nu trebuie să aibă proprietăți suplimentare';
        case 'anyOf': return 'trebuie să se potrivească cu o schemă din anyOf';
        case 'boolean': return 'schema este falsă';
        case 'const': return 'trebuie să fie egal cu constanta';
        case 'contains': return 'trebuie să conțină cel puțin 1 element valid';
        case 'dependencies': return `trebuie să aibă proprietățile ${error.params.dependencies.join(', ')} când proprietatea ${error.params.property} este prezentă`;
        case 'dependentRequired': return `trebuie să aibă proprietățile ${error.params.dependencies.join(', ')} când proprietatea ${error.params.property} este prezentă`;
        case 'enum': return 'trebuie să fie egal cu una dintre valorile permise';
        case 'exclusiveMaximum': return `trebuie să fie ${error.params.comparison} ${error.params.limit}`;
        case 'exclusiveMinimum': return `trebuie să fie ${error.params.comparison} ${error.params.limit}`;
        case 'format': return `trebuie să se potrivească formatului "${error.params.format}"`;
        case 'if': return `trebuie să se potrivească cu schema "${error.params.failingKeyword}"`;
        case 'maxItems': return `nu trebuie să aibă mai mult de ${error.params.limit} elemente`;
        case 'maxLength': return `nu trebuie să aibă mai mult de ${error.params.limit} caractere`;
        case 'maxProperties': return `nu trebuie să aibă mai mult de ${error.params.limit} proprietăți`;
        case 'maximum': return `trebuie să fie ${error.params.comparison} ${error.params.limit}`;
        case 'minItems': return `nu trebuie să aibă mai puțin de ${error.params.limit} elemente`;
        case 'minLength': return `nu trebuie să aibă mai puțin de ${error.params.limit} caractere`;
        case 'minProperties': return `nu trebuie să aibă mai puțin de ${error.params.limit} proprietăți`;
        case 'minimum': return `trebuie să fie ${error.params.comparison} ${error.params.limit}`;
        case 'multipleOf': return `trebuie să fie multiplu de ${error.params.multipleOf}`;
        case 'not': return 'nu trebuie să fie valid';
        case 'oneOf': return 'trebuie să se potrivească exact unei scheme din oneOf';
        case 'pattern': return `trebuie să se potrivească cu modelul "${error.params.pattern}"`;
        case 'propertyNames': return `numele proprietăților ${error.params.propertyNames.join(', ')} sunt invalide`;
        case 'required': return `trebuie să aibă proprietățile obligatorii ${error.params.requiredProperties.join(', ')}`;
        case 'type': return typeof error.params.type === 'string' ? `trebuie să fie ${error.params.type}` : `trebuie să fie ${error.params.type.join(' sau ')}`;
        case 'unevaluatedItems': return 'nu trebuie să aibă elemente neevaluate';
        case 'unevaluatedProperties': return 'nu trebuie să aibă proprietăți neevaluate';
        case 'uniqueItems': return `nu trebuie să aibă elemente duplicate`;
        case '~guard': return `trebuie să corespundă funcției de verificare`;
        case '~refine': return error.params.message;
        default: return 'a apărut o eroare de validare necunoscută';
    }
}
// deno-coverage-ignore-stop
