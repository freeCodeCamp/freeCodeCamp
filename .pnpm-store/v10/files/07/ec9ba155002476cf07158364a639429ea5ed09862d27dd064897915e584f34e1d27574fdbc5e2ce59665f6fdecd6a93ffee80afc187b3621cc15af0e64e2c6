import React from 'react';
export type StatsProps = React.ComponentProps<'div'> & {
    nbHits: number;
    processingTimeMS: number;
    nbSortedHits?: number;
    areHitsSorted?: boolean;
    classNames?: Partial<StatsClassNames>;
    translations: {
        rootElementText: StatsTranslations;
    };
};
export type StatsTranslationOptions = Pick<StatsProps, 'nbHits' | 'processingTimeMS' | 'nbSortedHits' | 'areHitsSorted'>;
export type StatsTranslations = (options: StatsTranslationOptions) => string;
export type StatsClassNames = {
    /**
     * Class names to apply to the root element
     */
    root: string;
};
export declare function Stats({ classNames, nbHits, processingTimeMS, nbSortedHits, areHitsSorted, translations, ...props }: StatsProps): React.JSX.Element;
