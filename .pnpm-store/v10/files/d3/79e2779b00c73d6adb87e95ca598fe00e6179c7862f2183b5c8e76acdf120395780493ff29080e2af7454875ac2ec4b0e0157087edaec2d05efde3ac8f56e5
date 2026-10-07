// deno-fmt-ignore-file
// deno-coverage-ignore-start
/** Portuguese (Portugal) - ISO 639-1 language code 'pt' with ISO 3166-1 alpha-2 country code 'PT' for Portugal. */
export function pt_PT(error) {
    switch (error.keyword) {
        case 'additionalProperties': return 'não deve ter propriedades adicionais';
        case 'anyOf': return 'deve corresponder a um esquema em anyOf';
        case 'boolean': return 'o esquema é falso';
        case 'const': return 'deve ser igual à constante';
        case 'contains': return 'deve conter pelo menos 1 item válido';
        case 'dependencies': return `deve ter as propriedades ${error.params.dependencies.join(', ')} quando a propriedade ${error.params.property} estiver presente`;
        case 'dependentRequired': return `deve ter as propriedades ${error.params.dependencies.join(', ')} quando a propriedade ${error.params.property} estiver presente`;
        case 'enum': return 'deve ser igual a um dos valores permitidos';
        case 'exclusiveMaximum': return `deve ser ${error.params.comparison} ${error.params.limit}`;
        case 'exclusiveMinimum': return `deve ser ${error.params.comparison} ${error.params.limit}`;
        case 'format': return `deve corresponder ao formato "${error.params.format}"`;
        case 'if': return `deve corresponder ao esquema "${error.params.failingKeyword}"`;
        case 'maxItems': return `não deve ter mais de ${error.params.limit} itens`;
        case 'maxLength': return `não deve ter mais de ${error.params.limit} carateres`;
        case 'maxProperties': return `não deve ter mais de ${error.params.limit} propriedades`;
        case 'maximum': return `deve ser ${error.params.comparison} ${error.params.limit}`;
        case 'minItems': return `não deve ter menos de ${error.params.limit} itens`;
        case 'minLength': return `não deve ter menos de ${error.params.limit} carateres`;
        case 'minProperties': return `não deve ter menos de ${error.params.limit} propriedades`;
        case 'minimum': return `deve ser ${error.params.comparison} ${error.params.limit}`;
        case 'multipleOf': return `deve ser múltiplo de ${error.params.multipleOf}`;
        case 'not': return 'não deve ser válido';
        case 'oneOf': return 'deve corresponder exatamente a um esquema em oneOf';
        case 'pattern': return `deve corresponder ao padrão "${error.params.pattern}"`;
        case 'propertyNames': return `os nomes das propriedades ${error.params.propertyNames.join(', ')} são inválidos`;
        case 'required': return `deve ter as propriedades obrigatórias ${error.params.requiredProperties.join(', ')}`;
        case 'type': return typeof error.params.type === 'string' ? `deve ser ${error.params.type}` : `deve ser ${error.params.type.join(' ou ')}`;
        case 'unevaluatedItems': return 'não deve ter itens não avaliados';
        case 'unevaluatedProperties': return 'não deve ter propriedades não avaliadas';
        case 'uniqueItems': return `não deve ter itens duplicados`;
        case '~guard': return `deve corresponder à função de verificação`;
        case '~refine': return error.params.message;
        default: return 'ocorreu um erro de validação desconhecido';
    }
}
// deno-coverage-ignore-stop
