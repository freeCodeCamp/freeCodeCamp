import { Compile } from 'typebox/compile';
import { Value } from 'typebox/value';
export * from 'typebox';
export { default as Format } from 'typebox/format';
export const TypeBoxValidatorCompiler = ({ schema, httpPart }) => {
    const typeCheck = Compile(schema);
    return (value) => {
        const converted = httpPart === 'body' ? value : Value.Convert(schema, value);
        if (typeCheck.Check(converted)) {
            return { value: converted };
        }
        const errors = typeCheck.Errors(converted);
        return {
            error: errors
        };
    };
};
