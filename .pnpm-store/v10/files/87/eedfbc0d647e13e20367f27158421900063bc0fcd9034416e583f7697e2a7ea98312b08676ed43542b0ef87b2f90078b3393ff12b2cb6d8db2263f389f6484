// deno-fmt-ignore-file
// deno-coverage-ignore-start
/** Spanish (Argentina) - ISO 639-1 language code 'es' with ISO 3166-1 alpha-2 country code 'AR' for Argentina. */
export function es_AR(error) {
    switch (error.keyword) {
        case 'additionalProperties': return 'no debe tener propiedades adicionales';
        case 'anyOf': return 'debe coincidir con un esquema en cualquiera de';
        case 'boolean': return 'el esquema es falso';
        case 'const': return 'debe ser igual a la constante';
        case 'contains': return 'debe contener al menos 1 elemento válido';
        case 'dependencies': return `debe tener las propiedades ${error.params.dependencies.join(', ')} cuando la propiedad ${error.params.property} está presente`;
        case 'dependentRequired': return `debe tener las propiedades ${error.params.dependencies.join(', ')} cuando la propiedad ${error.params.property} está presente`;
        case 'enum': return 'debe ser igual a uno de los valores permitidos';
        case 'exclusiveMaximum': return `debe ser ${error.params.comparison} ${error.params.limit}`;
        case 'exclusiveMinimum': return `debe ser ${error.params.comparison} ${error.params.limit}`;
        case 'format': return `debe coincidir con el formato "${error.params.format}"`;
        case 'if': return `debe coincidir con el esquema "${error.params.failingKeyword}"`;
        case 'maxItems': return `no debe tener más de ${error.params.limit} elementos`;
        case 'maxLength': return `no debe tener más de ${error.params.limit} caracteres`;
        case 'maxProperties': return `no debe tener más de ${error.params.limit} propiedades`;
        case 'maximum': return `debe ser ${error.params.comparison} ${error.params.limit}`;
        case 'minItems': return `no debe tener menos de ${error.params.limit} elementos`;
        case 'minLength': return `no debe tener menos de ${error.params.limit} caracteres`;
        case 'minProperties': return `no debe tener menos de ${error.params.limit} propiedades`;
        case 'minimum': return `debe ser ${error.params.comparison} ${error.params.limit}`;
        case 'multipleOf': return `debe ser múltiplo de ${error.params.multipleOf}`;
        case 'not': return 'no debe ser válido';
        case 'oneOf': return 'debe coincidir exactamente con un esquema en uno de';
        case 'pattern': return `debe coincidir con el patrón "${error.params.pattern}"`;
        case 'propertyNames': return `los nombres de las propiedades ${error.params.propertyNames.join(', ')} son inválidos`;
        case 'required': return `debe tener las propiedades requeridas ${error.params.requiredProperties.join(', ')}`;
        case 'type': return typeof error.params.type === 'string' ? `debe ser ${error.params.type}` : `debe ser ${error.params.type.join(' o ')}`;
        case 'unevaluatedItems': return 'no debe tener elementos no evaluados';
        case 'unevaluatedProperties': return 'no debe tener propiedades no evaluadas';
        case 'uniqueItems': return `no debe tener elementos duplicados`;
        case '~guard': return `debe coincidir con la función de verificación`;
        case '~refine': return error.params.message;
        default: return 'ocurrió un error de validación desconocido';
    }
}
// deno-coverage-ignore-stop
