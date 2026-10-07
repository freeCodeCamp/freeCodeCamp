// deno-fmt-ignore-file
// deno-coverage-ignore-start
/** Turkish (Turkey) - ISO 639-1 language code 'tr' with ISO 3166-1 alpha-2 country code 'TR' for Turkey. */
export function tr_TR(error) {
    switch (error.keyword) {
        case 'additionalProperties': return 'ek özelliklere sahip olmamalıdır';
        case 'anyOf': return 'anyOf içindeki bir şemayla eşleşmelidir';
        case 'boolean': return 'şema yanlış';
        case 'const': return 'sabit değere eşit olmalıdır';
        case 'contains': return 'en az 1 geçerli öğe içermelidir';
        case 'dependencies': return `${error.params.property} özelliği mevcutken ${error.params.dependencies.join(', ')} özelliklerine sahip olmalıdır`;
        case 'dependentRequired': return `${error.params.property} özelliği mevcutken ${error.params.dependencies.join(', ')} özelliklerine sahip olmalıdır`;
        case 'enum': return 'izin verilen değerlerden birine eşit olmalıdır';
        case 'exclusiveMaximum': return `${error.params.comparison} ${error.params.limit} olmalıdır`;
        case 'exclusiveMinimum': return `${error.params.comparison} ${error.params.limit} olmalıdır`;
        case 'format': return `"${error.params.format}" formatıyla eşleşmelidir`;
        case 'if': return `"${error.params.failingKeyword}" şemasıyla eşleşmelidir`;
        case 'maxItems': return `${error.params.limit} öğeden fazla olmamalıdır`;
        case 'maxLength': return `${error.params.limit} karakterden fazla olmamalıdır`;
        case 'maxProperties': return `${error.params.limit} özellikten fazla olmamalıdır`;
        case 'maximum': return `${error.params.comparison} ${error.params.limit} olmalıdır`;
        case 'minItems': return `${error.params.limit} öğeden az olmamalıdır`;
        case 'minLength': return `${error.params.limit} karakterden az olmamalıdır`;
        case 'minProperties': return `${error.params.limit} özellikten az olmamalıdır`;
        case 'minimum': return `${error.params.comparison} ${error.params.limit} olmalıdır`;
        case 'multipleOf': return `${error.params.multipleOf} sayısının katı olmalıdır`;
        case 'not': return 'geçerli olmamalıdır';
        case 'oneOf': return 'oneOf içindeki tam olarak bir şemayla eşleşmelidir';
        case 'pattern': return `"${error.params.pattern}" deseniyle eşleşmelidir`;
        case 'propertyNames': return `özellik adları ${error.params.propertyNames.join(', ')} geçersiz`;
        case 'required': return `gerekli özelliklere sahip olmalıdır: ${error.params.requiredProperties.join(', ')}`;
        case 'type': return typeof error.params.type === 'string' ? `${error.params.type} türünde olmalıdır` : `${error.params.type.join(' veya ')} türlerinden biri olmalıdır`;
        case 'unevaluatedItems': return 'değerlendirilmemiş öğelere sahip olmamalıdır';
        case 'unevaluatedProperties': return 'değerlendirilmemiş özelliklere sahip olmamalıdır';
        case 'uniqueItems': return `yinelenen öğelere sahip olmamalıdır`;
        case '~guard': return `kontrol fonksiyonuyla eşleşmelidir`;
        case '~refine': return error.params.message;
        default: return 'bilinmeyen bir doğrulama hatası oluştu';
    }
}
// deno-coverage-ignore-stop
