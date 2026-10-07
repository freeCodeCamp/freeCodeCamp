import React from 'react';
import type { PartialKeys } from '../types';
import type { ToggleRefinementProps as ToggleRefinementUiComponentProps } from '../ui/ToggleRefinement';
import type { UseToggleRefinementProps } from 'react-instantsearch-core';
type UiProps = Pick<ToggleRefinementUiComponentProps, 'onChange' | 'checked'>;
export type ToggleRefinementProps = PartialKeys<Omit<ToggleRefinementUiComponentProps, keyof UiProps>, 'label'> & UseToggleRefinementProps;
export declare function ToggleRefinement({ attribute, on, off, ...props }: ToggleRefinementProps): React.JSX.Element;
export {};
