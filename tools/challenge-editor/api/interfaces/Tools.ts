type ToolsFunction = (
  directory: string
) => Promise<{ stdout: string; stderr: string }>;

type ToolsFunctionWithArg = (
  directory: string,
  start: number
) => Promise<{ stdout: string; stderr: string }>;

type ToolsFunctionWithArgs = (
  directory: string,
  start: number,
  end: number
) => Promise<{ stdout: string; stderr: string }>;

export interface ToolsSwitch {
  'create-next': ToolsFunction;
  'create-empty': ToolsFunctionWithArgs;
  'create-between': ToolsFunctionWithArg;
  'delete-step': ToolsFunctionWithArg;
  reorder: ToolsFunction;
}
