import type { ComponentProps, MutableRef } from '../../types';
type BaseHit = Record<string, unknown>;
export type AutocompleteIndexConfig<TItem extends BaseHit> = {
    indexName: string;
    getQuery?: (item: TItem) => string;
    getURL?: (item: TItem) => string;
    onSelect?: (params: {
        item: TItem;
        query: string;
        setQuery: (query: string) => void;
        url?: string;
    }) => void;
};
type GetInputProps = () => ComponentProps<'input'>;
type ValidAriaRole = 'combobox' | 'row' | 'grid';
type GetItemProps = (item: {
    __indexName: string;
} & Record<string, unknown>, index: number) => {
    id?: string;
    role?: ValidAriaRole;
    'aria-selected'?: boolean;
} & {
    onSelect: () => void;
    onApply: () => void;
};
type GetPanelProps = () => {
    id?: string;
    hidden?: boolean;
    role?: ValidAriaRole;
    'aria-labelledby'?: string;
};
type GetRootProps = () => {
    ref?: MutableRef<HTMLDivElement | null>;
};
type CreateAutocompletePropGettersParams = {
    useEffect: (effect: () => void, inputs?: readonly unknown[]) => void;
    useId: () => string;
    useMemo: <TType>(factory: () => TType, inputs: readonly unknown[]) => TType;
    useRef: <TType>(initialValue: TType | null) => {
        current: TType | null;
    };
    useState: <TType>(initialState: TType) => [TType, (newState: TType) => unknown];
};
export type UsePropGetters<TItem extends BaseHit> = (params: {
    indices: Array<{
        indexName: string;
        indexId: string;
        hits: Array<{
            [key: string]: unknown;
        }>;
    }>;
    indicesConfig: Array<AutocompleteIndexConfig<TItem>>;
    onRefine: (query: string) => void;
    onSelect: NonNullable<AutocompleteIndexConfig<TItem>['onSelect']>;
    onApply: (query: string) => void;
    /**
     * Called when the form is submitted (Enter pressed).
     * Useful for detached mode to close the modal.
     */
    onSubmit?: () => void;
    placeholder?: string;
    /**
     * Whether the autocomplete is in detached mode (mobile).
     * In detached mode:
     * - Panel stays open (doesn't close on body click)
     * - Tab key doesn't close panel
     */
    isDetached?: boolean;
    /**
     * Whether the panel should be hidden even when open
     * (e.g., when all sources are empty and there's no custom content to show).
     */
    shouldHidePanel?: boolean;
    /**
     * Whether the input should be focused and the panel open initially.
     */
    autoFocus?: boolean;
}) => {
    getInputProps: GetInputProps;
    getItemProps: GetItemProps;
    getPanelProps: GetPanelProps;
    getRootProps: GetRootProps;
    /**
     * Whether the panel is open.
     */
    isOpen: boolean;
    /**
     * Function to set the panel open state. Useful for detached mode.
     */
    setIsOpen: (isOpen: boolean) => void;
    /**
     * Function to focus the input. Useful for detached mode to show the keyboard.
     */
    focusInput: () => void;
};
export declare function createAutocompletePropGetters({ useEffect, useId, useMemo, useRef, useState, }: CreateAutocompletePropGettersParams): <TItem extends BaseHit>({ indices, indicesConfig, onRefine, onSelect: globalOnSelect, onApply, onSubmit, placeholder, isDetached, shouldHidePanel, autoFocus, }: Parameters<UsePropGetters<TItem>>[0]) => ReturnType<UsePropGetters<TItem>>;
export {};
