import type { InquirerReadline } from '@inquirer/type';
export default class ScreenManager {
    private height;
    private extraLinesUnderPrompt;
    private cursorPos;
    private readonly rl;
    constructor(rl: InquirerReadline);
    write(content: string): void;
    render(content: string, bottomContent?: string): void;
    checkCursorPos(): void;
    done({ clearContent }: {
        clearContent: boolean;
    }): void;
}
