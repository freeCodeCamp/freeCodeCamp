type ToolsFunction = (
  directory: string
) => Promise<{ stdout: string; stderr: string }>;

type ToolsFunctionWithArg = (
  directory: string,
  start: number
) => Promise<{ stdout: string; stderr: string }>;

export interface ToolsSwitch {
  'create-next-step': ToolsFunction;
  'create-empty-steps': ToolsFunctionWithArg;
  'insert-step': ToolsFunctionWithArg;
  'delete-step': ToolsFunctionWithArg;
  'update-step-titles': ToolsFunction;
}
