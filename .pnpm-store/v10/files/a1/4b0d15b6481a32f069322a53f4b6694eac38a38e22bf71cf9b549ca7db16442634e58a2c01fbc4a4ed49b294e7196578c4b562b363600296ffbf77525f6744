import type { WorkspaceConfig } from "@turbo/utils";
interface EnvironmentConfig {
    legacyConfig: Array<string>;
    env: Array<string>;
    passThroughEnv: Array<string> | null;
    dotEnv: DotEnvConfig | null;
}
type EnvVar = string;
type EnvTest = (variable: EnvVar) => boolean;
interface EnvironmentTest {
    legacyConfig: EnvTest;
    env: EnvTest;
    passThroughEnv: EnvTest;
    dotEnv: EnvTest;
}
interface DotEnvConfig {
    filePaths: Array<string>;
    hashes: Record<string, string | null>;
}
export interface ProjectKey {
    global: EnvironmentConfig;
    globalTasks: Record<string, EnvironmentConfig>;
    workspaceTasks: Record<string, Record<string, EnvironmentConfig>>;
}
interface ProjectTests {
    global: EnvironmentTest;
    globalTasks: Record<string, EnvironmentTest>;
    workspaceTasks: Record<string, Record<string, EnvironmentTest>>;
}
export declare function getWorkspaceFromFilePath(projectWorkspaces: Array<WorkspaceConfig>, filePath: string): WorkspaceConfig | null;
export declare class Project {
    _key: ProjectKey;
    _test: ProjectTests;
    cwd: string | undefined;
    allConfigs: Array<WorkspaceConfig>;
    projectRoot: WorkspaceConfig | undefined;
    projectWorkspaces: Array<WorkspaceConfig>;
    constructor(cwd: string | undefined);
    valid(): boolean;
    generateKey(): ProjectKey;
    getWorkspacePath(workspaceName: string): string | undefined;
    generateTestConfig(): ProjectTests;
    key(): ProjectKey;
    test(workspaceName: string | undefined, envVar: string): boolean;
    reload(): void;
}
export {};
//# sourceMappingURL=calculate-inputs.d.ts.map