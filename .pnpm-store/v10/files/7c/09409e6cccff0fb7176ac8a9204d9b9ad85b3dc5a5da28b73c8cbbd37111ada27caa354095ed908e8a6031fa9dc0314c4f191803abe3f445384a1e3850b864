import React, { type ElementType, type MutableRefObject, type Ref } from 'react';
import type { Props } from '../../types.js';
import { HasDisplayName, RefProp } from '../../utils/render.js';
declare let DEFAULT_PORTAL_TAG: React.ExoticComponent<{
    children?: React.ReactNode;
}>;
interface PortalRenderPropArg {
}
export type PortalProps<TTag extends ElementType> = Props<TTag, PortalRenderPropArg>;
declare function PortalFn<TTag extends ElementType = typeof DEFAULT_PORTAL_TAG>(props: PortalProps<TTag>, ref: Ref<HTMLElement>): React.ReactPortal | null;
declare let DEFAULT_GROUP_TAG: React.ExoticComponent<{
    children?: React.ReactNode;
}>;
interface GroupRenderPropArg {
}
export type PortalGroupProps<TTag extends ElementType> = Props<TTag, GroupRenderPropArg> & {
    target: MutableRefObject<HTMLElement | null>;
};
declare function GroupFn<TTag extends ElementType = typeof DEFAULT_GROUP_TAG>(props: PortalGroupProps<TTag>, ref: Ref<HTMLElement>): JSX.Element;
export declare function useNestedPortals(): readonly [React.MutableRefObject<HTMLElement[]>, ({ children }: {
    children: React.ReactNode;
}) => JSX.Element];
export interface _internal_ComponentPortal extends HasDisplayName {
    <TTag extends ElementType = typeof DEFAULT_PORTAL_TAG>(props: PortalProps<TTag> & RefProp<typeof PortalFn>): JSX.Element;
}
export interface _internal_ComponentPortalGroup extends HasDisplayName {
    <TTag extends ElementType = typeof DEFAULT_GROUP_TAG>(props: PortalGroupProps<TTag> & RefProp<typeof GroupFn>): JSX.Element;
}
export declare let Portal: _internal_ComponentPortal & {
    Group: _internal_ComponentPortalGroup;
};
export {};
