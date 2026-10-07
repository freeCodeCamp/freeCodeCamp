// deno-fmt-ignore-file
// deno-coverage-ignore-start
/** Chinese (Simplified) - ISO 639-1 language code 'zh' with script code 'Hans' for Simplified Chinese. */
export function zh_Hans(error) {
    switch (error.keyword) {
        case 'additionalProperties': return '不得有额外属性';
        case 'anyOf': return '必须匹配 anyOf 中的一个模式';
        case 'boolean': return '模式为假';
        case 'const': return '必须等于常量';
        case 'contains': return '必须至少包含一个有效项';
        case 'dependencies': return `当属性 ${error.params.property} 存在时，必须具有属性 ${error.params.dependencies.join(', ')}`;
        case 'dependentRequired': return `当属性 ${error.params.property} 存在时，必须具有属性 ${error.params.dependencies.join(', ')}`;
        case 'enum': return '必须等于允许值中的一个';
        case 'exclusiveMaximum': return `必须 ${error.params.comparison} ${error.params.limit}`;
        case 'exclusiveMinimum': return `必须 ${error.params.comparison} ${error.params.limit}`;
        case 'format': return `必须匹配格式 "${error.params.format}"`;
        case 'if': return `必须匹配 "${error.params.failingKeyword}" 模式`;
        case 'maxItems': return `不得多于 ${error.params.limit} 项`;
        case 'maxLength': return `不得多于 ${error.params.limit} 个字符`;
        case 'maxProperties': return `不得多于 ${error.params.limit} 个属性`;
        case 'maximum': return `必须 ${error.params.comparison} ${error.params.limit}`;
        case 'minItems': return `不得少于 ${error.params.limit} 项`;
        case 'minLength': return `不得少于 ${error.params.limit} 个字符`;
        case 'minProperties': return `不得少于 ${error.params.limit} 个属性`;
        case 'minimum': return `必须 ${error.params.comparison} ${error.params.limit}`;
        case 'multipleOf': return `必须是 ${error.params.multipleOf} 的倍数`;
        case 'not': return '不得有效';
        case 'oneOf': return '必须精确匹配 oneOf 中的一个模式';
        case 'pattern': return `必须匹配模式 "${error.params.pattern}"`;
        case 'propertyNames': return `属性名 ${error.params.propertyNames.join(', ')} 无效`;
        case 'required': return `必须具有必需属性 ${error.params.requiredProperties.join(', ')}`;
        case 'type': return typeof error.params.type === 'string' ? `必须是 ${error.params.type}` : `必须是 ${error.params.type.join(' 或 ')} 之一`;
        case 'unevaluatedItems': return '不得有未评估的项';
        case 'unevaluatedProperties': return '不得有未评估的属性';
        case 'uniqueItems': return `不得有重复项`;
        case '~guard': return `必须与检查函数匹配`;
        case '~refine': return error.params.message;
        default: return '发生未知验证错误';
    }
}
// deno-coverage-ignore-stop
