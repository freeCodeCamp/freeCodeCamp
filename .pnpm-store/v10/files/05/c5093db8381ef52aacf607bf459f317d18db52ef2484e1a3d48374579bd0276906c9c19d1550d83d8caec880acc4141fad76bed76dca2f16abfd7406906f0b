// deno-fmt-ignore-file
// deno-coverage-ignore-start
/** Arabic (World) - ISO 639-1 language code 'ar' with UN M.49 region code '001' for World. */
export function ar_001(error) {
    switch (error.keyword) {
        case 'additionalProperties': return 'يجب ألا يحتوي على خصائص إضافية';
        case 'anyOf': return 'يجب أن يتطابق مع مخطط في أيٍ مما يلي';
        case 'boolean': return 'المخطط خاطئ';
        case 'const': return 'يجب أن يكون مساويًا للثابت';
        case 'contains': return 'يجب أن يحتوي على عنصر واحد صحيح على الأقل';
        case 'dependencies': return `يجب أن يحتوي على الخصائص ${error.params.dependencies.join(', ')} عندما تكون الخاصية ${error.params.property} موجودة`;
        case 'dependentRequired': return `يجب أن يحتوي على الخصائص ${error.params.dependencies.join(', ')} عندما تكون الخاصية ${error.params.property} موجودة`;
        case 'enum': return 'يجب أن يكون مساويًا لإحدى القيم المسموح بها';
        case 'exclusiveMaximum': return `يجب أن يكون ${error.params.comparison} ${error.params.limit}`;
        case 'exclusiveMinimum': return `يجب أن يكون ${error.params.comparison} ${error.params.limit}`;
        case 'format': return `يجب أن يتطابق مع التنسيق "${error.params.format}"`;
        case 'if': return `يجب أن يتطابق مع مخطط "${error.params.failingKeyword}"`;
        case 'maxItems': return `يجب ألا يحتوي على أكثر من ${error.params.limit} عناصر`;
        case 'maxLength': return `يجب ألا يحتوي على أكثر من ${error.params.limit} أحرف`;
        case 'maxProperties': return `يجب ألا يحتوي على أكثر من ${error.params.limit} خصائص`;
        case 'maximum': return `يجب أن يكون ${error.params.comparison} ${error.params.limit}`;
        case 'minItems': return `يجب ألا يحتوي على أقل من ${error.params.limit} عناصر`;
        case 'minLength': return `يجب ألا يحتوي على أقل من ${error.params.limit} أحرف`;
        case 'minProperties': return `يجب ألا يحتوي على أقل من ${error.params.limit} خصائص`;
        case 'minimum': return `يجب أن يكون ${error.params.comparison} ${error.params.limit}`;
        case 'multipleOf': return `يجب أن يكون مضاعفًا لـ ${error.params.multipleOf}`;
        case 'not': return 'يجب ألا يكون صالحًا';
        case 'oneOf': return 'يجب أن يتطابق مع مخطط واحد بالضبط في واحد مما يلي';
        case 'pattern': return `يجب أن يتطابق مع النمط "${error.params.pattern}"`;
        case 'propertyNames': return `أسماء الخصائص ${error.params.propertyNames.join(', ')} غير صالحة`;
        case 'required': return `يجب أن يحتوي على الخصائص المطلوبة ${error.params.requiredProperties.join(', ')}`;
        case 'type': return typeof error.params.type === 'string' ? `يجب أن يكون ${error.params.type}` : `يجب أن يكون إما ${error.params.type.join(' أو ')}`;
        case 'unevaluatedItems': return 'يجب ألا يحتوي على عناصر غير مقيمة';
        case 'unevaluatedProperties': return 'يجب ألا يحتوي على خصائص غير مقيمة';
        case 'uniqueItems': return `يجب ألا يحتوي على عناصر مكررة`;
        case '~guard': return `يجب أن يتطابق مع دالة الفحص`;
        case '~refine': return error.params.message;
        default: return 'حدث خطأ غير معروف في التحقق من الصحة';
    }
}
// deno-coverage-ignore-stop
