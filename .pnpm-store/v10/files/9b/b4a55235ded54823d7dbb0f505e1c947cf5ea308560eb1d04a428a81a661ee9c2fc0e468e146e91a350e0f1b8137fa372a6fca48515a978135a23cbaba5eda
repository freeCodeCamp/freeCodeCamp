import * as G from './guard.mjs';
// ------------------------------------------------------------------
// Identifier
// ------------------------------------------------------------------
const identifierRegExp = /^[\p{ID_Start}_$][\p{ID_Continue}_$\u200C\u200D]*$/u;
/** Returns true if this value is a valid JavaScript identifier */
function IsIdentifier(value) {
    return identifierRegExp.test(value);
}
// ------------------------------------------------------------------
// Logical
// ------------------------------------------------------------------
export function And(left, right) {
    return `(${left} && ${right})`;
}
export function Or(left, right) {
    return `(${left} || ${right})`;
}
export function Not(expr) {
    return `!(${expr})`;
}
// --------------------------------------------------------------------------
// Guards
// --------------------------------------------------------------------------
/** Returns true if this value is an array */
export function IsArray(value) {
    return `Array.isArray(${value})`;
}
/** Returns true if this value is an async iterator */
export function IsAsyncIterator(value) {
    return `Guard.IsAsyncIterator(${value})`;
}
/** Returns true if this value is bigint */
export function IsBigInt(value) {
    return `typeof ${value} === "bigint"`;
}
/** Returns true if this value is a boolean */
export function IsBoolean(value) {
    return `typeof ${value} === "boolean"`;
}
/** Returns true if this value is integer */
export function IsInteger(value) {
    return `Number.isInteger(${value})`;
}
/** Returns true if this value is an iterator */
export function IsIterator(value) {
    return `Guard.IsIterator(${value})`;
}
/** Returns true if this value is null */
export function IsNull(value) {
    return `${value} === null`;
}
/** Returns true if this value is number */
export function IsNumber(value) {
    return `Number.isFinite(${value})`;
}
/** Returns true if this value is an object but not an array */
export function IsObjectNotArray(value) {
    return And(IsObject(value), Not(IsArray(value)));
}
/** Returns true if this value is an object */
export function IsObject(value) {
    return `typeof ${value} === "object" && ${value} !== null`;
}
/** Returns true if this value is string */
export function IsString(value) {
    return `typeof ${value} === "string"`;
}
/** Returns true if this value is symbol */
export function IsSymbol(value) {
    return `typeof ${value} === "symbol"`;
}
/** Returns true if this value is undefined */
export function IsUndefined(value) {
    return `${value} === undefined`;
}
// ------------------------------------------------------------------
// Functions and Constructors
// ------------------------------------------------------------------
export function IsFunction(value) {
    return `typeof ${value} === "function"`;
}
export function IsConstructor(value) {
    return `Guard.IsConstructor(${value})`;
}
// ------------------------------------------------------------------
// Relational
// ------------------------------------------------------------------
export function IsEqual(left, right) {
    return `${left} === ${right}`;
}
export function IsGreaterThan(left, right) {
    return `${left} > ${right}`;
}
export function IsLessThan(left, right) {
    return `${left} < ${right}`;
}
export function IsLessEqualThan(left, right) {
    return `${left} <= ${right}`;
}
export function IsGreaterEqualThan(left, right) {
    return `${left} >= ${right}`;
}
// --------------------------------------------------------------------------
// String
// --------------------------------------------------------------------------
export function IsMinLength(value, length) {
    return `Guard.IsMinLength(${value}, ${length})`;
}
export function IsMaxLength(value, length) {
    return `Guard.IsMaxLength(${value}, ${length})`;
}
// --------------------------------------------------------------------------
// Array
// --------------------------------------------------------------------------
export function Every(value, offset, params, expression) {
    return G.IsEqual(offset, '0')
        ? `${value}.every((${params[0]}, ${params[1]}) => ${expression})`
        : `((value, callback) => { for(let index = ${offset}; index < value.length; index++) if (!callback(value[index], index)) return false; return true })(${value}, (${params[0]}, ${params[1]}) => ${expression})`;
}
// --------------------------------------------------------------------------
// Objects
// --------------------------------------------------------------------------
export function Entries(value) {
    return `Object.entries(${value})`;
}
export function Keys(value) {
    return `Object.getOwnPropertyNames(${value})`;
}
export function HasPropertyKey(value, key) {
    const isProtoField = G.IsEqual(key, '"__proto__"') || G.IsEqual(key, '"constructor"');
    return isProtoField ? `Object.prototype.hasOwnProperty.call(${value}, ${key})` : `${key} in ${value}`;
}
export function IsDeepEqual(left, right) {
    return `Guard.IsDeepEqual(${left}, ${right})`;
}
// ------------------------------------------------------------------
// Expressions
// ------------------------------------------------------------------
export function ArrayLiteral(elements) {
    return `[${elements.join(', ')}]`;
}
export function ArrowFunction(parameters, body) {
    return `((${parameters.join(', ')}) => ${body})`;
}
export function Call(value, arguments_) {
    return `${value}(${arguments_.join(', ')})`;
}
export function New(value, arguments_) {
    return `new ${value}(${arguments_.join(', ')})`;
}
export function Member(left, right) {
    return `${left}${IsIdentifier(right) ? `.${right}` : `[${Constant(right)}]`}`;
}
export function Constant(value) {
    return G.IsString(value) ? JSON.stringify(value) : `${value}`;
}
export function Ternary(condition, true_, false_) {
    return `(${condition} ? ${true_} : ${false_})`;
}
// ------------------------------------------------------------------
// Statements
// ------------------------------------------------------------------
export function Statements(statements) {
    return `{ ${statements.join('; ')}; }`;
}
export function ConstDeclaration(identifier, expression) {
    return `const ${identifier} = ${expression}`;
}
export function If(condition, then) {
    return `if(${condition}) { ${then} }`;
}
export function Return(expression) {
    return `return ${expression}`;
}
// ------------------------------------------------------------------
// Logical
// ------------------------------------------------------------------
export function ReduceAnd(operands) {
    return G.IsEqual(operands.length, 0) ? 'true' : operands.reduce((left, right) => And(left, right));
}
export function ReduceOr(operands) {
    // deno-coverage-ignore - we never observe 0 operands
    return G.IsEqual(operands.length, 0) ? 'false' : operands.reduce((left, right) => Or(left, right));
}
// --------------------------------------------------------------------------
// Arithmetic
// --------------------------------------------------------------------------
export function PrefixIncrement(expression) {
    return `++${expression}`;
}
export function MultipleOf(dividend, divisor) {
    return `Guard.IsMultipleOf(${dividend}, ${divisor})`;
}
