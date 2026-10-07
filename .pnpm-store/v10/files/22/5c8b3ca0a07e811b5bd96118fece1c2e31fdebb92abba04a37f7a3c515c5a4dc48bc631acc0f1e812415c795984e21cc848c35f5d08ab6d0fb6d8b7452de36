// deno-fmt-ignore-file
// deno-coverage-ignore-start
/** Korean (South Korea) - ISO 639-1 language code 'ko' with ISO 3166-1 alpha-2 country code 'KR' for South Korea. */
export function ko_KR(error) {
    switch (error.keyword) {
        case 'additionalProperties': return '추가 속성을 가질 수 없습니다';
        case 'anyOf': return 'anyOf의 스키마와 일치해야 합니다';
        case 'boolean': return '스키마가 잘못되었습니다';
        case 'const': return '상수와 같아야 합니다';
        case 'contains': return '최소 1개의 유효한 항목을 포함해야 합니다';
        case 'dependencies': return `속성 ${error.params.property}이(가) 존재할 때 속성 ${error.params.dependencies.join(', ')}을(를) 가지고 있어야 합니다`;
        case 'dependentRequired': return `속성 ${error.params.property}이(가) 존재할 때 속성 ${error.params.dependencies.join(', ')}을(를) 가지고 있어야 합니다`;
        case 'enum': return '허용된 값 중 하나와 같아야 합니다';
        case 'exclusiveMaximum': return `${error.params.comparison} ${error.params.limit}이어야 합니다`;
        case 'exclusiveMinimum': return `${error.params.comparison} ${error.params.limit}이어야 합니다`;
        case 'format': return `"${error.params.format}" 형식과 일치해야 합니다`;
        case 'if': return `"${error.params.failingKeyword}" 스키마와 일치해야 합니다`;
        case 'maxItems': return `항목이 ${error.params.limit}개보다 많을 수 없습니다`;
        case 'maxLength': return `글자 수가 ${error.params.limit}개보다 많을 수 없습니다`;
        case 'maxProperties': return `속성이 ${error.params.limit}개보다 많을 수 없습니다`;
        case 'maximum': return `${error.params.comparison} ${error.params.limit}이어야 합니다`;
        case 'minItems': return `항목이 ${error.params.limit}개보다 적을 수 없습니다`;
        case 'minLength': return `글자 수가 ${error.params.limit}개보다 적을 수 없습니다`;
        case 'minProperties': return `속성이 ${error.params.limit}개보다 적을 수 없습니다`;
        case 'minimum': return `${error.params.comparison} ${error.params.limit}이어야 합니다`;
        case 'multipleOf': return `${error.params.multipleOf}의 배수여야 합니다`;
        case 'not': return '유효하지 않아야 합니다';
        case 'oneOf': return 'oneOf의 스키마 중 정확히 하나와 일치해야 합니다';
        case 'pattern': return `패턴 "${error.params.pattern}"과 일치해야 합니다`;
        case 'propertyNames': return `속성 이름 ${error.params.propertyNames.join(', ')}이(가) 유효하지 않습니다`;
        case 'required': return `필수 속성 ${error.params.requiredProperties.join(', ')}을(를) 가지고 있어야 합니다`;
        case 'type': return typeof error.params.type === 'string' ? `${error.params.type}이어야 합니다` : `${error.params.type.join(' 또는 ')} 중 하나여야 합니다`;
        case 'unevaluatedItems': return '평가되지 않은 항목을 가질 수 없습니다';
        case 'unevaluatedProperties': return '평가되지 않은 속성을 가질 수 없습니다';
        case 'uniqueItems': return `중복 항목을 가질 수 없습니다`;
        case '~guard': return `체크 함수와 일치해야 합니다`;
        case '~refine': return error.params.message;
        default: return '알 수 없는 유효성 검사 오류가 발생했습니다';
    }
}
// deno-coverage-ignore-stop
