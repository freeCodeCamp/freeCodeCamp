import type { TestError } from "@codesandbox/sandpack-client";
import React from "react";
type TestStatus = "idle" | "running" | "pass" | "fail";
export interface Test {
    name: string;
    blocks: string[];
    status: TestStatus;
    path: string;
    errors: TestError[];
    duration?: number | undefined;
}
interface SandpackTests extends React.HtmlHTMLAttributes<HTMLDivElement> {
    tests: Test[];
}
export declare const Tests: React.FC<SandpackTests>;
export {};
