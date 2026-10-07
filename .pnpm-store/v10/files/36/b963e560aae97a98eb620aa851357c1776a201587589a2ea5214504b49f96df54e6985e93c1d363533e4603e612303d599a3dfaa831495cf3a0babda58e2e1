import * as React from "react";

export interface HLocation<S = unknown> {
    pathname: string;
    search: string;
    state: S;
    hash: string;
    key?: string | undefined;
}
export type WindowLocation<S = unknown> = Window["location"] & HLocation<S>;

export type HistoryActionType = "PUSH" | "POP";
export type HistoryLocation = WindowLocation & { state?: any };
export interface HistoryListenerParameter {
    location: HistoryLocation;
    action: HistoryActionType;
}
export type HistoryListener = (parameter: HistoryListenerParameter) => void;
export type HistoryUnsubscribe = () => void;

export interface History {
    readonly location: HistoryLocation;
    readonly transitioning: boolean;
    listen: (listener: HistoryListener) => HistoryUnsubscribe;
    navigate: NavigateFn;
}

export class Router extends React.Component<RouterProps & React.HTMLProps<HTMLDivElement>> {}

export interface RouterProps {
    basepath?: string | undefined;
    primary?: boolean | undefined;
    location?: WindowLocation | undefined;
    component?: React.ComponentType | string | undefined;
}

export type RouteComponentProps<TParams = {}> = Partial<TParams> & {
    path?: string | undefined;
    default?: boolean | undefined;
    location?: WindowLocation | undefined;
    navigate?: NavigateFn | undefined;
    uri?: string | undefined;
};

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export type AnchorProps = Omit<
    React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
    "href" // remove href, as it's ignored by the router
>;

export interface LinkProps<TState> extends AnchorProps {
    to: string;
    replace?: boolean | undefined;
    getProps?: ((props: LinkGetProps) => {}) | undefined;
    state?: TState | undefined;
    /** @deprecated If using React >= 16.4, use ref instead. */
    innerRef?: React.Ref<HTMLAnchorElement> | undefined;
}

export interface LinkGetProps {
    isCurrent: boolean;
    isPartiallyCurrent: boolean;
    href: string;
    location: WindowLocation;
}

export function Link<TState>(
    // TODO: Define this as ...params: Parameters<Link<TState>> when only TypeScript >= 3.1 support is needed.
    props: React.PropsWithoutRef<LinkProps<TState>> & React.RefAttributes<HTMLAnchorElement>,
): ReturnType<Link<TState>>;
export interface Link<TState> extends
    React.ForwardRefExoticComponent<
        React.PropsWithoutRef<LinkProps<TState>> & React.RefAttributes<HTMLAnchorElement>
    >
{}

export interface RedirectProps<TState> {
    from?: string | undefined;
    to: string;
    noThrow?: boolean | undefined;
    state?: TState | undefined;
    replace?: boolean | undefined;
}

export class Redirect<TState> extends React.Component<RouteComponentProps<RedirectProps<TState>>> {}

export interface MatchProps<TParams> {
    path: string;
    children: MatchRenderFn<TParams>;
}

export type MatchRenderFn<TParams> = (props: MatchRenderProps<TParams>) => React.ReactNode;

export interface MatchRenderProps<TParams> {
    match: null | ({ uri: string; path: string } & TParams);
    location: WindowLocation;
    navigate: NavigateFn;
}

export class Match<TParams> extends React.Component<MatchProps<TParams>> {}

export interface NavigateFn {
    (to: string, options?: NavigateOptions<{}>): Promise<void>;
    (to: number, options?: undefined): Promise<void>;
}

export interface NavigateOptions<TState> {
    state?: TState | undefined;
    replace?: boolean | undefined;
}

export interface LocationProps {
    children: LocationProviderRenderFn;
}

export class Location extends React.Component<LocationProps> {}

export interface LocationProviderProps {
    history?: History | undefined;
    children?: React.ReactNode | LocationProviderRenderFn | undefined;
}

export type LocationProviderRenderFn = (context: LocationContext) => React.ReactNode;

export interface LocationContext {
    location: WindowLocation;
    navigate: NavigateFn;
}

export class LocationProvider extends React.Component<LocationProviderProps> {}

export interface ServerLocationProps {
    url: string;
}

export class ServerLocation extends React.Component<ServerLocationProps> {}

export const navigate: NavigateFn;

export interface HistorySource {
    readonly location: WindowLocation;
    addEventListener(name: string, listener: (event: Event) => void): void;
    removeEventListener(name: string, listener: (event: Event) => void): void;
    history: {
        readonly state: any;
        pushState(state: any, title: string, uri: string): void;
        replaceState(state: any, title: string, uri: string): void;
    };
}

export function createHistory(source: HistorySource): History;

export function createMemorySource(initialPath: string): HistorySource;

export interface RedirectRequest {
    uri: string;
}

export function isRedirect(error: any): error is RedirectRequest;

export function redirectTo(uri: string): void;

export const globalHistory: History;

export function useLocation(): WindowLocation;

export function useNavigate(): NavigateFn;

// TODO: In the next major release update we should update the type parameter default of TPrams from `any` to `{}`,
// it is currently being keep for backwards compatibility with version 1.3.7 or below.
export function useParams<TParams extends { [Param in keyof TParams]?: string } = any>(): TParams;

export function useMatch(pathname: string): null | { uri: string; path: string; [param: string]: string };
