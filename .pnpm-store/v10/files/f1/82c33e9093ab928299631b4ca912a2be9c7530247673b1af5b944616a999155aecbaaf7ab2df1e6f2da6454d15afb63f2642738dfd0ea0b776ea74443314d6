import React from 'react';
import type { MenuProps as MenuUiComponentProps } from '../ui/Menu';
import type { UseMenuProps } from 'react-instantsearch-core';
type UiProps = Pick<MenuUiComponentProps, 'items' | 'onRefine' | 'createURL' | 'canToggleShowMore' | 'onToggleShowMore' | 'isShowingMore' | 'translations'>;
export type MenuProps = Omit<MenuUiComponentProps, keyof UiProps> & UseMenuProps & {
    translations?: Partial<UiProps['translations']>;
};
export declare function Menu({ attribute, limit, showMore, showMoreLimit, sortBy, transformItems, translations, ...props }: MenuProps): React.JSX.Element;
export {};
