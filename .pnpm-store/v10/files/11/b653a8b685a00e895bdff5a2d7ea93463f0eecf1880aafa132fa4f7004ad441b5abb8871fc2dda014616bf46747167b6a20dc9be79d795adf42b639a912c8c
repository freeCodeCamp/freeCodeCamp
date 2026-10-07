import * as i18nextMod from './index.js';
import type { $Dictionary } from './typescript/helpers.js';

import type { DefaultNamespace, Namespace } from './typescript/options.js';
import type { KeyFromSelectorFn } from './typescript/t.js';

export type WithT<Ns extends Namespace = DefaultNamespace> = i18nextMod.WithT<Ns>;
export type Interpolator = i18nextMod.Interpolator;
export type ResourceStore = i18nextMod.ResourceStore;
export type Formatter = i18nextMod.Formatter;
export type Services = i18nextMod.Services;
export type ModuleType = i18nextMod.ModuleType;
export type Module = i18nextMod.Module;
export type CallbackError = i18nextMod.CallbackError;
export type ReadCallback = i18nextMod.ReadCallback;
export type MultiReadCallback = i18nextMod.MultiReadCallback;
export type BackendModule<TOptions = object> = i18nextMod.BackendModule<TOptions>;
export type LanguageDetectorModule = i18nextMod.LanguageDetectorModule;
export type LanguageDetectorAsyncModule = i18nextMod.LanguageDetectorAsyncModule;
export type PostProcessorModule = i18nextMod.PostProcessorModule;
export type LoggerModule = i18nextMod.LoggerModule;
export type I18nFormatModule = i18nextMod.I18nFormatModule;
export type FormatterModule = i18nextMod.FormatterModule;
export type ThirdPartyModule = i18nextMod.ThirdPartyModule;
export type Modules = i18nextMod.Modules;
export type Newable<T> = i18nextMod.Newable<T>;
export type NewableModule<T extends Module> = i18nextMod.NewableModule<T>;
export type Callback = i18nextMod.Callback;
export type ExistsFunction<
  TKeys extends string = string,
  TInterpolationMap extends object = $Dictionary,
> = i18nextMod.ExistsFunction<TKeys, TInterpolationMap>;
export type CloneOptions = i18nextMod.CloneOptions;

export type * from './typescript/options.js';
export type * from './typescript/t.js';

export interface CustomInstanceExtensions {}

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface i18n extends i18nextMod.i18n, CustomInstanceExtensions {}

declare const i18next: i18n;
export default i18next;

export const createInstance: i18n['createInstance'];

export const dir: i18n['dir'];
export const init: i18n['init'];
export const loadResources: i18n['loadResources'];
export const reloadResources: i18n['reloadResources'];
export const use: i18n['use'];
export const changeLanguage: i18n['changeLanguage'];
export const getFixedT: i18n['getFixedT'];
export const t: i18n['t'];
export const exists: i18n['exists'];
export const setDefaultNamespace: i18n['setDefaultNamespace'];
export const hasLoadedNamespace: i18n['hasLoadedNamespace'];
export const loadNamespaces: i18n['loadNamespaces'];
export const loadLanguages: i18n['loadLanguages'];

export declare const keyFromSelector: KeyFromSelectorFn;
