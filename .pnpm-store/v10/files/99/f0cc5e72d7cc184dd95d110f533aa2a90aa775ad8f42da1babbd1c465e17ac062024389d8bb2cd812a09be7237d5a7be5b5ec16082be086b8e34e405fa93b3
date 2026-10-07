// deno-fmt-ignore-file
// deno-coverage-ignore-start
/** Swedish (Sweden) - ISO 639-1 language code 'sv' with ISO 3166-1 alpha-2 country code 'SE' for Sweden. */
export function sv_SE(error) {
    switch (error.keyword) {
        case 'additionalProperties': return 'får inte ha ytterligare egenskaper';
        case 'anyOf': return 'måste matcha ett schema i anyOf';
        case 'boolean': return 'schemat är falskt';
        case 'const': return 'måste vara lika med konstanten';
        case 'contains': return 'måste innehålla minst 1 giltigt objekt';
        case 'dependencies': return `måste ha egenskaperna ${error.params.dependencies.join(', ')} när egenskapen ${error.params.property} finns`;
        case 'dependentRequired': return `måste ha egenskaperna ${error.params.dependencies.join(', ')} när egenskapen ${error.params.property} finns`;
        case 'enum': return 'måste vara lika med ett av de tillåtna värdena';
        case 'exclusiveMaximum': return `måste vara ${error.params.comparison} ${error.params.limit}`;
        case 'exclusiveMinimum': return `måste vara ${error.params.comparison} ${error.params.limit}`;
        case 'format': return `måste matcha formatet "${error.params.format}"`;
        case 'if': return `måste matcha "${error.params.failingKeyword}" schema`;
        case 'maxItems': return `får inte ha fler än ${error.params.limit} objekt`;
        case 'maxLength': return `får inte ha fler än ${error.params.limit} tecken`;
        case 'maxProperties': return `får inte ha fler än ${error.params.limit} egenskaper`;
        case 'maximum': return `måste vara ${error.params.comparison} ${error.params.limit}`;
        case 'minItems': return `får inte ha färre än ${error.params.limit} objekt`;
        case 'minLength': return `får inte ha färre än ${error.params.limit} tecken`;
        case 'minProperties': return `får inte ha färre än ${error.params.limit} egenskaper`;
        case 'minimum': return `måste vara ${error.params.comparison} ${error.params.limit}`;
        case 'multipleOf': return `måste vara en multipel av ${error.params.multipleOf}`;
        case 'not': return 'får inte vara giltigt';
        case 'oneOf': return 'måste matcha exakt ett schema i oneOf';
        case 'pattern': return `måste matcha mönstret "${error.params.pattern}"`;
        case 'propertyNames': return `egenskapernas namn ${error.params.propertyNames.join(', ')} är ogiltiga`;
        case 'required': return `måste ha obligatoriska egenskaper ${error.params.requiredProperties.join(', ')}`;
        case 'type': return typeof error.params.type === 'string' ? `måste vara ${error.params.type}` : `måste vara antingen ${error.params.type.join(' eller ')}`;
        case 'unevaluatedItems': return 'får inte ha oidentifierade objekt';
        case 'unevaluatedProperties': return 'får inte ha oidentifierade egenskaper';
        case 'uniqueItems': return `får inte ha dubbletter`;
        case '~guard': return `måste matcha kontrollfunktionen`;
        case '~refine': return error.params.message;
        default: return 'ett okänt valideringsfel uppstod';
    }
}
// deno-coverage-ignore-stop
