// deno-fmt-ignore-file
// deno-coverage-ignore-start
/**  German (Germany) - ISO 639-1 language code 'de' with ISO 3166-1 alpha-2 country code 'DE' for Germany. */
export function de_DE(error) {
    switch (error.keyword) {
        case 'additionalProperties': return 'darf keine zusätzlichen Eigenschaften haben';
        case 'anyOf': return 'muss einem Schema in „anyOf“ entsprechen';
        case 'boolean': return 'Schema ist falsch';
        case 'const': return 'muss gleich der Konstante sein';
        case 'contains': return 'muss mindestens 1 gültiges Element enthalten';
        case 'dependencies': return `muss die Eigenschaften ${error.params.dependencies.join(', ')} haben, wenn Eigenschaft ${error.params.property} vorhanden ist`;
        case 'dependentRequired': return `muss die Eigenschaften ${error.params.dependencies.join(', ')} haben, wenn Eigenschaft ${error.params.property} vorhanden ist`;
        case 'enum': return 'muss einem der erlaubten Werte entsprechen';
        case 'exclusiveMaximum': return `muss ${error.params.comparison} ${error.params.limit} sein`;
        case 'exclusiveMinimum': return `muss ${error.params.comparison} ${error.params.limit} sein`;
        case 'format': return `muss dem Format "${error.params.format}" entsprechen`;
        case 'if': return `muss dem Schema "${error.params.failingKeyword}" entsprechen`;
        case 'maxItems': return `darf nicht mehr als ${error.params.limit} Elemente haben`;
        case 'maxLength': return `darf nicht mehr als ${error.params.limit} Zeichen haben`;
        case 'maxProperties': return `darf nicht mehr als ${error.params.limit} Eigenschaften haben`;
        case 'maximum': return `muss ${error.params.comparison} ${error.params.limit} sein`;
        case 'minItems': return `darf nicht weniger als ${error.params.limit} Elemente haben`;
        case 'minLength': return `darf nicht weniger als ${error.params.limit} Zeichen haben`;
        case 'minProperties': return `darf nicht weniger als ${error.params.limit} Eigenschaften haben`;
        case 'minimum': return `muss ${error.params.comparison} ${error.params.limit} sein`;
        case 'multipleOf': return `muss ein Vielfaches von ${error.params.multipleOf} sein`;
        case 'not': return 'darf nicht gültig sein';
        case 'oneOf': return 'muss genau einem Schema in „oneOf“ entsprechen';
        case 'pattern': return `muss dem Muster "${error.params.pattern}" entsprechen`;
        case 'propertyNames': return `Eigenschaftsnamen ${error.params.propertyNames.join(', ')} sind ungültig`;
        case 'required': return `muss die erforderlichen Eigenschaften ${error.params.requiredProperties.join(', ')} haben`;
        case 'type': return typeof error.params.type === 'string' ? `muss ${error.params.type} sein` : `muss entweder ${error.params.type.join(' oder ')} sein`;
        case 'unevaluatedItems': return 'darf keine unbewerteten Elemente haben';
        case 'unevaluatedProperties': return 'darf keine unbewerteten Eigenschaften haben';
        case 'uniqueItems': return `darf keine doppelten Elemente haben`;
        case '~guard': return `muss der Prüffunktion entsprechen`;
        case '~refine': return error.params.message;
        default: return 'ein unbekannter Validierungsfehler ist aufgetreten';
    }
}
// deno-coverage-ignore-stop
