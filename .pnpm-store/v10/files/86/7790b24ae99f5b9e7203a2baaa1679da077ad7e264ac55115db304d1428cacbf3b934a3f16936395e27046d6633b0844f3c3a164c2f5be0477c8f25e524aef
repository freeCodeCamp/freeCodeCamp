import React from 'react';
import type { StatsProps as StatsUiComponentProps } from '../ui/Stats';
import type { UseStatsProps } from 'react-instantsearch-core';
type UiProps = Pick<StatsUiComponentProps, 'nbHits' | 'nbSortedHits' | 'processingTimeMS' | 'areHitsSorted' | 'translations'>;
export type StatsProps = Omit<StatsUiComponentProps, keyof UiProps> & UseStatsProps & {
    translations?: Partial<UiProps['translations']>;
};
export declare function Stats({ translations, ...props }: StatsProps): React.JSX.Element;
export {};
