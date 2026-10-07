import type { $Subtract, $Tuple } from './helpers.js';
import type {
  ReactOptions,
  i18n,
  Resource,
  FlatNamespace,
  Namespace,
  TypeOptions,
  TFunction,
  KeyPrefix,
} from 'i18next';
import * as React from 'react';
import {
  Trans,
  TransProps,
  TransSelectorProps,
  ErrorCode,
  ErrorArgs,
} from './TransWithoutContext.js';
export { initReactI18next } from './initReactI18next.js';

export const TransWithoutContext: typeof Trans;
export { Trans, TransProps, TransSelectorProps, ErrorArgs, ErrorCode };

export function setDefaults(options: ReactOptions): void;
export function getDefaults(): ReactOptions;
export function setI18n(instance: i18n): void;
export function getI18n(): i18n;
export function composeInitialProps(ForComponent: any): (ctx: unknown) => Promise<any>;
export function getInitialProps(): {
  initialI18nStore: {
    [ns: string]: {};
  };
  initialLanguage: string;
};

export interface ReportNamespaces {
  addUsedNamespaces(namespaces: Namespace): void;
  getUsedNamespaces(): string[];
}

declare module 'i18next' {
  // interface i18n {
  //   reportNamespaces?: ReportNamespaces;
  // }
  interface CustomInstanceExtensions {
    reportNamespaces?: ReportNamespaces;
  }
}

type ObjectOrNever = TypeOptions['allowObjectInHTMLChildren'] extends true
  ? Record<string, unknown>
  : never;

type ReactI18NextChildren = React.ReactNode | ObjectOrNever;

declare module 'react' {
  namespace JSX {
    interface IntrinsicAttributes {
      i18nIsDynamicList?: boolean;
    }
  }

  interface HTMLAttributes<T> {
    // This union is inspired by the typings for React.ReactNode. We do this to fix "This JSX tag's 'children' prop
    // expects a single child of type 'ReactI18NextChildren', but multiple children were provided":
    // https://github.com/DefinitelyTyped/DefinitelyTyped/blob/5a1e9f91ed0143adede394adb3f540e650455f71/types/react/index.d.ts#L268
    children?: ReactI18NextChildren | Iterable<ReactI18NextChildren>;
  }
}

type _DefaultNamespace = TypeOptions['defaultNS'];

export function useSSR(initialI18nStore: Resource, initialLanguage: string): void;

// If the version is earlier than i18next v25.4.0, enableSelector does not exist in TypeOptions, so a conditional type is used to maintain type compatibility.
type _EnableSelector = TypeOptions extends { enableSelector: infer U } ? U : false;

export type UseTranslationOptions<KPrefix> = {
  i18n?: i18n;
  useSuspense?: boolean;
  keyPrefix?: KPrefix;
  bindI18n?: string | false;
  nsMode?: 'fallback' | 'default';
  lng?: string;
  // other of these options might also work: https://github.com/i18next/i18next/blob/master/index.d.ts#L127
};

export type UseTranslationResponse<Ns extends Namespace, KPrefix> = [
  t: TFunction<Ns, KPrefix>,
  i18n: i18n,
  ready: boolean,
] & {
  t: TFunction<Ns, KPrefix>;
  i18n: i18n;
  ready: boolean;
};

// Workaround to make code completion to work when suggesting namespaces.
// This is a typescript limitation when using generics with default values,
// it'll be addressed in this issue: https://github.com/microsoft/TypeScript/issues/52516
export type FallbackNs<Ns> = Ns extends undefined
  ? _DefaultNamespace
  : Ns extends Namespace
    ? Ns
    : _DefaultNamespace;

export const useTranslation: _EnableSelector extends true | 'optimize'
  ? UseTranslationSelector
  : UseTranslationLegacy;

interface UseTranslationLegacy {
  <
    const Ns extends FlatNamespace | $Tuple<FlatNamespace> | undefined = undefined,
    const KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined,
  >(
    ns?: Ns,
    options?: UseTranslationOptions<KPrefix>,
  ): UseTranslationResponse<FallbackNs<Ns>, KPrefix>;
}

interface UseTranslationSelector {
  <
    const Ns extends FlatNamespace | $Tuple<FlatNamespace> | undefined = undefined,
    const KPrefix = undefined,
  >(
    ns?: Ns,
    options?: UseTranslationOptions<KPrefix>,
  ): UseTranslationResponse<FallbackNs<Ns>, KPrefix>;
}

// Need to see usage to improve this
export function withSSR(): <Props>(WrappedComponent: React.ComponentType<Props>) => {
  ({
    initialI18nStore,
    initialLanguage,
    ...rest
  }: {
    initialI18nStore: Resource;
    initialLanguage: string;
  } & Props): React.FunctionComponentElement<Props>;
  getInitialProps: (ctx: unknown) => Promise<any>;
};

export interface WithTranslation<
  Ns extends FlatNamespace | $Tuple<FlatNamespace> | undefined = undefined,
  KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined,
> {
  t: TFunction<FallbackNs<Ns>, KPrefix>;
  i18n: i18n;
  tReady: boolean;
}

export interface WithTranslationProps {
  i18n?: i18n;
  useSuspense?: boolean;
}

export function withTranslation<
  Ns extends FlatNamespace | $Tuple<FlatNamespace> | undefined = undefined,
  KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined,
>(
  ns?: Ns,
  options?: {
    withRef?: boolean;
    keyPrefix?: KPrefix;
  },
): <
  C extends React.ComponentType<React.ComponentProps<any> & WithTranslationProps>,
  ResolvedProps = React.JSX.LibraryManagedAttributes<
    C,
    $Subtract<React.ComponentProps<C>, WithTranslationProps>
  >,
>(
  component: C,
) => React.ComponentType<Omit<ResolvedProps, keyof WithTranslation<Ns>> & WithTranslationProps>;

export interface I18nextProviderProps {
  children?: React.ReactNode;
  i18n: i18n;
  defaultNS?: string | string[];
}

export const I18nextProvider: React.FunctionComponent<I18nextProviderProps>;
export const I18nContext: React.Context<{ i18n: i18n }>;

export interface TranslationProps<
  Ns extends FlatNamespace | $Tuple<FlatNamespace> | undefined = undefined,
  KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined,
> {
  children: (
    t: TFunction<FallbackNs<Ns>, KPrefix>,
    options: {
      i18n: i18n;
      lng: string;
    },
    ready: boolean,
  ) => React.ReactNode;
  ns?: Ns;
  i18n?: i18n;
  useSuspense?: boolean;
  keyPrefix?: KPrefix;
  nsMode?: 'fallback' | 'default';
}

export function Translation<
  Ns extends FlatNamespace | $Tuple<FlatNamespace> | undefined = undefined,
  KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined,
>(props: TranslationProps<Ns, KPrefix>): any;
