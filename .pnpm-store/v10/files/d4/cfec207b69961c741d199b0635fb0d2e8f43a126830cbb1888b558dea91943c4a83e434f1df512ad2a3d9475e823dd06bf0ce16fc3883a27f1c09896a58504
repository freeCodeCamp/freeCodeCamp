// deno-fmt-ignore-file
// deno-coverage-ignore-start
/** Persian (Iran) - ISO 639-1 language code 'fa' with ISO 3166-1 alpha-2 country code 'IR' for Iran. */
export function fa_IR(error) {
    switch (error.keyword) {
        case 'additionalProperties': return 'نباید ویژگی‌های اضافی داشته باشد';
        case 'anyOf': return 'باید با یکی از طرح‌واره‌های anyOf مطابقت داشته باشد';
        case 'boolean': return 'طرح‌واره نادرست است';
        case 'const': return 'باید برابر با ثابت باشد';
        case 'contains': return 'باید حداقل 1 مورد معتبر داشته باشد';
        case 'dependencies': return `باید دارای ویژگی‌های ${error.params.dependencies.join(', ')} باشد زمانی که ویژگی ${error.params.property} وجود دارد`;
        case 'dependentRequired': return `باید دارای ویژگی‌های ${error.params.dependencies.join(', ')} باشد زمانی که ویژگی ${error.params.property} وجود دارد`;
        case 'enum': return 'باید برابر با یکی از مقادیر مجاز باشد';
        case 'exclusiveMaximum': return `باید ${error.params.comparison} ${error.params.limit} باشد`;
        case 'exclusiveMinimum': return `باید ${error.params.comparison} ${error.params.limit} باشد`;
        case 'format': return `باید با فرمت "${error.params.format}" مطابقت داشته باشد`;
        case 'if': return `باید با طرح‌واره "${error.params.failingKeyword}" مطابقت داشته باشد`;
        case 'maxItems': return `نباید بیشتر از ${error.params.limit} آیتم داشته باشد`;
        case 'maxLength': return `نباید بیشتر از ${error.params.limit} کاراکتر داشته باشد`;
        case 'maxProperties': return `نباید بیشتر از ${error.params.limit} ویژگی داشته باشد`;
        case 'maximum': return `باید ${error.params.comparison} ${error.params.limit} باشد`;
        case 'minItems': return `نباید کمتر از ${error.params.limit} آیتم داشته باشد`;
        case 'minLength': return `نباید کمتر از ${error.params.limit} کاراکتر داشته باشد`;
        case 'minProperties': return `نباید کمتر از ${error.params.limit} ویژگی داشته باشد`;
        case 'minimum': return `باید ${error.params.comparison} ${error.params.limit} باشد`;
        case 'multipleOf': return `باید مضربی از ${error.params.multipleOf} باشد`;
        case 'not': return 'نباید معتبر باشد';
        case 'oneOf': return 'باید دقیقاً با یک طرح‌واره در oneOf مطابقت داشته باشد';
        case 'pattern': return `باید با الگوی "${error.params.pattern}" مطابقت داشته باشد`;
        case 'propertyNames': return `نام ویژگی‌ها ${error.params.propertyNames.join(', ')} نامعتبر است`;
        case 'required': return `باید ویژگی‌های الزامی ${error.params.requiredProperties.join(', ')} را داشته باشد`;
        case 'type': return typeof error.params.type === 'string' ? `باید ${error.params.type} باشد` : `باید یکی از این دو باشد: ${error.params.type.join(' یا ')}`;
        case 'unevaluatedItems': return 'نباید آیتم‌های ارزیابی نشده داشته باشد';
        case 'unevaluatedProperties': return 'نباید ویژگی‌های ارزیابی نشده داشته باشد';
        case 'uniqueItems': return `نباید آیتم‌های تکراری داشته باشد`;
        case '~guard': return `باید با تابع بررسی مطابقت داشته باشد`;
        case '~refine': return error.params.message;
        default: return 'یک خطای اعتبارسنجی ناشناخته رخ داده است';
    }
}
// deno-coverage-ignore-stop
