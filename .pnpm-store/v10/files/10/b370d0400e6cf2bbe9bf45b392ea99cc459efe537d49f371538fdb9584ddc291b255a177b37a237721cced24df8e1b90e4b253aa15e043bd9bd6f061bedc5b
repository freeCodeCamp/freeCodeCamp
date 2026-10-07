// deno-fmt-ignore-file
// deno-coverage-ignore-start
/** Hungarian (Hungary) - ISO 639-1 language code 'hu' with ISO 3166-1 alpha-2 country code 'HU' for Hungary. */
export function hu_HU(error) {
    switch (error.keyword) {
        case 'additionalProperties': return 'nem lehetnek további tulajdonságai';
        case 'anyOf': return 'meg kell egyeznie az anyOf-ban található sémák egyikével';
        case 'boolean': return 'a séma hamis';
        case 'const': return 'egyenlőnek kell lennie az állandóval';
        case 'contains': return 'legalább 1 érvényes elemet kell tartalmaznia';
        case 'dependencies': return `rendelkeznie kell a(z) ${error.params.dependencies.join(', ')} tulajdonságokkal, ha a(z) ${error.params.property} tulajdonság jelen van`;
        case 'dependentRequired': return `rendelkeznie kell a(z) ${error.params.dependencies.join(', ')} tulajdonságokkal, ha a(z) ${error.params.property} tulajdonság jelen van`;
        case 'enum': return 'egyenlőnek kell lennie az engedélyezett értékek egyikével';
        case 'exclusiveMaximum': return `${error.params.comparison} ${error.params.limit} kell lennie`;
        case 'exclusiveMinimum': return `${error.params.comparison} ${error.params.limit} kell lennie`;
        case 'format': return `meg kell egyeznie a(z) "${error.params.format}" formátummal`;
        case 'if': return `meg kell egyeznie a(z) "${error.params.failingKeyword}" sémával`;
        case 'maxItems': return `nem lehet több, mint ${error.params.limit} eleme`;
        case 'maxLength': return `nem lehet több, mint ${error.params.limit} karaktere`;
        case 'maxProperties': return `nem lehet több, mint ${error.params.limit} tulajdonsága`;
        case 'maximum': return `${error.params.comparison} ${error.params.limit} kell lennie`;
        case 'minItems': return `nem lehet kevesebb, mint ${error.params.limit} eleme`;
        case 'minLength': return `nem lehet kevesebb, mint ${error.params.limit} karaktere`;
        case 'minProperties': return `nem lehet kevesebb, mint ${error.params.limit} tulajdonsága`;
        case 'minimum': return `${error.params.comparison} ${error.params.limit} kell lennie`;
        case 'multipleOf': return `a(z) ${error.params.multipleOf} többszörösének kell lennie`;
        case 'not': return 'nem lehet érvényes';
        case 'oneOf': return 'pontosan egy sémának kell megfelelnie a oneOf-ban';
        case 'pattern': return `meg kell egyeznie a(z) "${error.params.pattern}" mintával`;
        case 'propertyNames': return `a tulajdonságnevek (${error.params.propertyNames.join(', ')}) érvénytelenek`;
        case 'required': return `rendelkeznie kell a(z) ${error.params.requiredProperties.join(', ')} kötelező tulajdonságokkal`;
        case 'type': return typeof error.params.type === 'string' ? `típusának ${error.params.type} kell lennie` : `típusának ${error.params.type.join(' vagy ')} kell lennie`;
        case 'unevaluatedItems': return 'nem lehetnek nem értékelt elemei';
        case 'unevaluatedProperties': return 'nem lehetnek nem értékelt tulajdonságai';
        case 'uniqueItems': return `nem lehetnek ismétlődő elemei`;
        case '~guard': return `meg kell felelnie az ellenőrző függvénynek`;
        case '~refine': return error.params.message;
        default: return 'ismeretlen validációs hiba történt';
    }
}
// deno-coverage-ignore-stop
