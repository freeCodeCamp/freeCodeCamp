import * as React from "react";

export interface ReactScrollLinkProps {
    to: string;
    containerId?: string | undefined;
    activeClass?: string | undefined;
    activeStyle?: React.CSSProperties | undefined;
    spy?: boolean | undefined;
    hashSpy?: boolean | undefined;
    horizontal?: boolean | undefined;
    smooth?: boolean | string | undefined;
    offset?: number | undefined;
    delay?: number | undefined;
    isDynamic?: boolean | undefined;
    onClick?(): void;
    duration?: number | string | ((distance: number) => number) | undefined;
    absolute?: boolean | undefined;
    onSetActive?(to: string, element: HTMLElement): void;
    onSetInactive?(to: string, element: HTMLElement): void;
    ignoreCancelEvents?: boolean | undefined;
    saveHashHistory?: boolean | undefined;
    spyThrottle?: number | undefined;
}

export type LinkProps = ReactScrollLinkProps & React.HTMLProps<HTMLButtonElement>;

export default class Link extends React.Component<LinkProps> {}
