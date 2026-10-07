import { isContentEditable } from './isContentEditable';
type GuardedType<T> = T extends (x: any) => x is infer R ? R : never;
export declare function isEditable(element: Element): element is GuardedType<typeof isContentEditable> | (EditableInputOrTextarea & {
    readOnly: false;
});
declare enum editableInputTypes {
    'text' = "text",
    'date' = "date",
    'datetime-local' = "datetime-local",
    'email' = "email",
    'month' = "month",
    'number' = "number",
    'password' = "password",
    'search' = "search",
    'tel' = "tel",
    'time' = "time",
    'url' = "url",
    'week' = "week"
}
export type EditableInputOrTextarea = HTMLTextAreaElement | (HTMLInputElement & {
    type: editableInputTypes;
});
export declare function isEditableInputOrTextArea(element: Element): element is EditableInputOrTextarea;
export {};
