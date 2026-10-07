declare enum clickableInputTypes {
    'button' = "button",
    'color' = "color",
    'file' = "file",
    'image' = "image",
    'reset' = "reset",
    'submit' = "submit",
    'checkbox' = "checkbox",
    'radio' = "radio"
}
export type ClickableInputOrButton = HTMLButtonElement | (HTMLInputElement & {
    type: clickableInputTypes;
});
export declare function isClickableInput(element: Element): element is ClickableInputOrButton;
export {};
