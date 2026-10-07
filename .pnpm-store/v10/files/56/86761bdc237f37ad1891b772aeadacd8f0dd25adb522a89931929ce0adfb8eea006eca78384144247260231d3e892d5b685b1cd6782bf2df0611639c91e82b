// deno-fmt-ignore-file
// deno-coverage-ignore-start
/** Chinese (Traditional) - ISO 639-1 language code 'zh' with script code 'Hant' for Traditional Chinese. */
export function zh_Hant(error) {
    switch (error.keyword) {
        case 'additionalProperties': return '不得有額外屬性';
        case 'anyOf': return '必須匹配 anyOf 中的一個模式';
        case 'boolean': return '模式為假';
        case 'const': return '必須等於常數';
        case 'contains': return '必須至少包含 1 個有效項目';
        case 'dependencies': return `當屬性 ${error.params.property} 存在時，必須具有屬性 ${error.params.dependencies.join(', ')}`;
        case 'dependentRequired': return `當屬性 ${error.params.property} 存在時，必須具有屬性 ${error.params.dependencies.join(', ')}`;
        case 'enum': return '必須等於允許值中的一個';
        case 'exclusiveMaximum': return `必須 ${error.params.comparison} ${error.params.limit}`;
        case 'exclusiveMinimum': return `必須 ${error.params.comparison} ${error.params.limit}`;
        case 'format': return `必須匹配格式 "${error.params.format}"`;
        case 'if': return `必須匹配 "${error.params.failingKeyword}" 模式`;
        case 'maxItems': return `不得多於 ${error.params.limit} 個項目`;
        case 'maxLength': return `不得多於 ${error.params.limit} 個字元`;
        case 'maxProperties': return `不得多於 ${error.params.limit} 個屬性`;
        case 'maximum': return `必須 ${error.params.comparison} ${error.params.limit}`;
        case 'minItems': return `不得少於 ${error.params.limit} 個項目`;
        case 'minLength': return `不得少於 ${error.params.limit} 個字元`;
        case 'minProperties': return `不得少於 ${error.params.limit} 個屬性`;
        case 'minimum': return `必須 ${error.params.comparison} ${error.params.limit}`;
        case 'multipleOf': return `必須是 ${error.params.multipleOf} 的倍數`;
        case 'not': return '不得有效';
        case 'oneOf': return '必須精確匹配 oneOf 中的一個模式';
        case 'pattern': return `必須匹配模式 "${error.params.pattern}"`;
        case 'propertyNames': return `屬性名稱 ${error.params.propertyNames.join(', ')} 無效`;
        case 'required': return `必須具有必需屬性 ${error.params.requiredProperties.join(', ')}`;
        case 'type': return typeof error.params.type === 'string' ? `必須是 ${error.params.type}` : `必須是 ${error.params.type.join(' 或 ')} 之一`;
        case 'unevaluatedItems': return '不得有未評估的項目';
        case 'unevaluatedProperties': return '不得有未評估的屬性';
        case 'uniqueItems': return `不得有重複項目`;
        case '~guard': return `必須與檢查函數匹配`;
        case '~refine': return error.params.message;
        default: return '發生未知驗證錯誤';
    }
}
// deno-coverage-ignore-stop
