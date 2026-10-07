// deno-fmt-ignore-file
const state = {
    identifier: 'External',
    variables: []
};
// ------------------------------------------------------------------
// CreateVariable
// ------------------------------------------------------------------
export function CreateVariable(value) {
    const call = `External[${state.variables.length}]`;
    state.variables.push(value);
    return call;
}
// ------------------------------------------------------------------
// ResetExternal
// ------------------------------------------------------------------
export function ResetExternal() {
    state.variables = [];
}
// ------------------------------------------------------------------
// GetExternals
// ------------------------------------------------------------------
export function GetExternal() {
    return { ...state };
}
