
import { h } from 'preact';
import type { MenuRenderState } from '../../connectors/menu/connectMenu';
import type { ComponentCSSClasses } from '../../types';
import type { MenuSelectCSSClasses, MenuSelectTemplates } from '../../widgets/menu-select/menu-select';
export type MenuSelectComponentCSSClasses = ComponentCSSClasses<MenuSelectCSSClasses>;
export type MenuSelectComponentTemplates = Required<MenuSelectTemplates>;
type MenuItem = {
    /**
     * The value of the menu item.
     **/
    value: string;
    /**
     * Human-readable value of the menu item.
     **/
    label: string;
    /**
     * Number of results matched after refinement is applied.
     **/
    count: number;
    /**
     * Indicates if the refinement is applied.
     **/
    isRefined: boolean;
};
type Props = {
    cssClasses: MenuSelectComponentCSSClasses;
    items: MenuItem[];
    refine: MenuRenderState['refine'];
    templateProps: {
        templates: MenuSelectComponentTemplates;
    };
};
declare function MenuSelect({ cssClasses, templateProps, items, refine }: Props): h.JSX.Element;
export default MenuSelect;
