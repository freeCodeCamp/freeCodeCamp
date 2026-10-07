import { MutableRefObject } from 'react';
type Container = MutableRefObject<HTMLElement | null> | HTMLElement | null;
type ContainerCollection = Container[] | Set<Container>;
type ContainerInput = Container | ContainerCollection;
export declare function useOutsideClick(containers: ContainerInput | (() => ContainerInput), cb: (event: MouseEvent | PointerEvent | FocusEvent | TouchEvent, target: HTMLElement) => void, enabled?: boolean): void;
export {};
