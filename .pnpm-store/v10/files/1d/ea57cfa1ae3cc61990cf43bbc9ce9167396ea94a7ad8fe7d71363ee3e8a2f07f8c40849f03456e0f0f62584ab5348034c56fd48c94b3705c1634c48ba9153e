// deno-fmt-ignore-file
// deno-coverage-ignore-start
/** Vietnamese (Vietnam) - ISO 639-1 language code 'vi' with ISO 3166-1 alpha-2 country code 'VN' for Vietnam. */
export function vi_VN(error) {
    switch (error.keyword) {
        case 'additionalProperties': return 'không được có các thuộc tính bổ sung';
        case 'anyOf': return 'phải khớp với một schema trong bất kỳ trường hợp nào';
        case 'boolean': return 'schema là sai';
        case 'const': return 'phải bằng hằng số';
        case 'contains': return 'phải chứa ít nhất 1 mục hợp lệ';
        case 'dependencies': return `phải có các thuộc tính ${error.params.dependencies.join(', ')} khi thuộc tính ${error.params.property} hiện diện`;
        case 'dependentRequired': return `phải có các thuộc tính ${error.params.dependencies.join(', ')} khi thuộc tính ${error.params.property} hiện diện`;
        case 'enum': return 'phải bằng một trong các giá trị được phép';
        case 'exclusiveMaximum': return `phải là ${error.params.comparison} ${error.params.limit}`;
        case 'exclusiveMinimum': return `phải là ${error.params.comparison} ${error.params.limit}`;
        case 'format': return `phải khớp với định dạng "${error.params.format}"`;
        case 'if': return `phải khớp với schema "${error.params.failingKeyword}"`;
        case 'maxItems': return `không được có nhiều hơn ${error.params.limit} mục`;
        case 'maxLength': return `không được có nhiều hơn ${error.params.limit} ký tự`;
        case 'maxProperties': return `không được có nhiều hơn ${error.params.limit} thuộc tính`;
        case 'maximum': return `phải là ${error.params.comparison} ${error.params.limit}`;
        case 'minItems': return `không được có ít hơn ${error.params.limit} mục`;
        case 'minLength': return `không được có ít hơn ${error.params.limit} ký tự`;
        case 'minProperties': return `không được có ít hơn ${error.params.limit} thuộc tính`;
        case 'minimum': return `phải là ${error.params.comparison} ${error.params.limit}`;
        case 'multipleOf': return `phải là bội số của ${error.params.multipleOf}`;
        case 'not': return 'không được hợp lệ';
        case 'oneOf': return 'phải khớp chính xác một schema trong oneOf';
        case 'pattern': return `phải khớp với mẫu "${error.params.pattern}"`;
        case 'propertyNames': return `tên thuộc tính ${error.params.propertyNames.join(', ')} không hợp lệ`;
        case 'required': return `phải có các thuộc tính bắt buộc ${error.params.requiredProperties.join(', ')}`;
        case 'type': return typeof error.params.type === 'string' ? `phải là ${error.params.type}` : `phải là một trong ${error.params.type.join(' hoặc ')}`;
        case 'unevaluatedItems': return 'không được có các mục chưa được đánh giá';
        case 'unevaluatedProperties': return 'không được có các thuộc tính chưa được đánh giá';
        case 'uniqueItems': return `không được có các mục trùng lặp`;
        case '~guard': return `phải khớp với hàm kiểm tra`;
        case '~refine': return error.params.message;
        default: return 'đã xảy ra lỗi xác thực không xác định';
    }
}
// deno-coverage-ignore-stop
