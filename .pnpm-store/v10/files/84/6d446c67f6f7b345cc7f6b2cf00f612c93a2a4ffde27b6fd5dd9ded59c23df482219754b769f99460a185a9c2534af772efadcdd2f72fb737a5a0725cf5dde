import React, { MutableRefObject } from 'react';
export declare function useRootContainers({ defaultContainers, portals, mainTreeNodeRef: _mainTreeNodeRef, }?: {
    defaultContainers?: (HTMLElement | null | MutableRefObject<HTMLElement | null>)[];
    portals?: MutableRefObject<HTMLElement[]>;
    mainTreeNodeRef?: MutableRefObject<HTMLElement | null>;
}): {
    resolveContainers: () => HTMLElement[];
    contains: (element: HTMLElement) => boolean;
    mainTreeNodeRef: React.MutableRefObject<HTMLElement | null>;
    MainTreeNode: () => JSX.Element | null;
};
export declare function useMainTreeNode(): {
    mainTreeNodeRef: React.MutableRefObject<HTMLElement | null>;
    MainTreeNode: () => JSX.Element;
};
