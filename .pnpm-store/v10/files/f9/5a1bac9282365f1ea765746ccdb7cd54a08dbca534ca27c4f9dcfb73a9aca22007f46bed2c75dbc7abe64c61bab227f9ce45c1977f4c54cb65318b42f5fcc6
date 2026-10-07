import * as React from "react";

export type StyleAndClassAndChildren = {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
};

export type ReflexContainerProps = {
    orientation?: "horizontal" | "vertical";
    maxRecDepth?: number;
    windowResizeAware?: boolean;
} & StyleAndClassAndChildren;

export class ReflexContainer extends React.Component<ReflexContainerProps, any> { }

export type PosNeg = -1 | 1;

export type HandlerProps = {
    domElement: Element | Text,
    component: React.ComponentElement<ReflexElementProps, ReflexElement>
};

export type ReflexElementProps = {
    propagateDimensions?: boolean;
    propagateDimensionsRate?: number;
    resizeHeight?: boolean;
    resizeWidth?: boolean;
    size?: number;
    minSize?: number;
    maxSize?: number;
    flex?: number;
    direction?: PosNeg | [PosNeg, PosNeg];
    onStartResize?: (args: HandlerProps) => void;
    onStopResize?: (args: HandlerProps) => void;
    onResize?: (args: HandlerProps) => void;
    name?: string;
} & StyleAndClassAndChildren;

export class ReflexElement extends React.Component<ReflexElementProps, any> { }

export type ReflexSplitterProps = {
    propagate?: boolean;
    onStartResize?: (args: HandlerProps) => void;
    onStopResize?: (args: HandlerProps) => void;
    onResize?: (args: HandlerProps) => void;
} & StyleAndClassAndChildren;

export class ReflexSplitter extends React.Component<ReflexSplitterProps, any> { }

export type ReflexHandleProps = {
    onStartResize?: (args: HandlerProps) => void;
    onStopResize?: (args: HandlerProps) => void;
    propagate?: boolean;
    onResize?: (args: HandlerProps) => void;
} & StyleAndClassAndChildren;

export class ReflexHandle extends React.Component<any, any> { }
