/** @jsx createElement */
import type { ComponentProps, Renderer } from '../../types';
import type { ChatEmptyProps } from './types';
export type ChatGreetingTranslations = {
    /**
     * Heading text for the empty screen
     */
    heading: string;
    /**
     * Subheading text for the empty screen
     */
    subheading: string;
};
export type ChatGreetingClassNames = {
    /**
     * Class names to apply to the root element
     */
    root?: string | string[];
    /**
     * Class names to apply to the heading element
     */
    heading?: string | string[];
    /**
     * Class names to apply to the subheading element
     */
    subheading?: string | string[];
    /**
     * Class names to apply to the banner element
     */
    banner?: string | string[];
};
export type ChatGreetingProps = ChatEmptyProps & ComponentProps<'div'> & {
    /**
     * Optional translations
     */
    translations?: Partial<ChatGreetingTranslations>;
    /**
     * Optional class names
     */
    classNames?: ChatGreetingClassNames;
    /**
     * Optional banner image URL
     */
    banner?: string;
};
export declare function createChatGreetingComponent({ createElement, }: Pick<Renderer, 'createElement'>): (userProps: ChatGreetingProps) => JSX.Element;
