import * as React from "react";
import { ReactScrollLinkProps } from "../components/Link";
import { Scroller } from "./scroller";

export type ScrollLinkProps<P> =
    & ReactScrollLinkProps
    & P
    & {
        container?: HTMLElement | undefined;
    };

export default function ScrollLink<P>(
    component: React.ComponentType<P>,
    customScroller?: Scroller,
): React.ComponentClass<ScrollLinkProps<P>>;
