import React from 'react';
import type { HierarchicalMenuProps as HierarchicalMenuUiComponentProps } from '../ui/HierarchicalMenu';
import type { UseHierarchicalMenuProps } from 'react-instantsearch-core';
type UiProps = Pick<HierarchicalMenuUiComponentProps, 'items' | 'createURL' | 'hasItems' | 'onNavigate' | 'canToggleShowMore' | 'onToggleShowMore' | 'isShowingMore' | 'translations'>;
export type HierarchicalMenuProps = Omit<HierarchicalMenuUiComponentProps, keyof UiProps> & UseHierarchicalMenuProps & {
    translations?: Partial<UiProps['translations']>;
};
export declare function HierarchicalMenu({ attributes, limit, rootPath, separator, showMore, showMoreLimit, showParentLevel, sortBy, transformItems, translations, ...props }: HierarchicalMenuProps): React.JSX.Element;
export {};
