import { DsnLike } from './types/dsn';
/**
 * All properties the report dialog supports
 */
export interface ReportDialogOptions extends Record<string, unknown> {
    eventId?: string;
    dsn?: DsnLike;
    user?: {
        email?: string;
        name?: string;
    };
    lang?: string;
    title?: string;
    subtitle?: string;
    subtitle2?: string;
    labelName?: string;
    labelEmail?: string;
    labelComments?: string;
    labelClose?: string;
    labelSubmit?: string;
    errorGeneric?: string;
    errorFormEntry?: string;
    successMessage?: string;
    /** Callback after reportDialog showed up */
    onLoad?(this: void): void;
    /** Callback after reportDialog closed */
    onClose?(this: void): void;
}
//# sourceMappingURL=report-dialog.d.ts.map
