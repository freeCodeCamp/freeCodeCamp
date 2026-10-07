/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export interface ILocalizeInfo {
  key: string;
  comment: string[];
}

export function localize(info: ILocalizeInfo | string, message: string, ...args: (string | number | boolean | undefined | null)[]): string {
  return message;
}

export interface INLSLanguagePackConfiguration {

  /**
   * The path to the translations config file that contains pointers to
   * all message bundles for `main` and extensions.
   */
  readonly translationsConfigFile: string;

  /**
   * The path to the file containing the translations for this language
   * pack as flat string array.
   */
  readonly messagesFile: string;

  /**
   * The path to the file that can be used to signal a corrupt language
   * pack, for example when reading the `messagesFile` fails. This will
   * instruct the application to re-create the cache on next startup.
   */
  readonly corruptMarkerFile: string;
}

export interface INLSConfiguration {

  /**
   * Locale as defined in `argv.json` or `app.getLocale()`.
   */
  readonly userLocale: string;

  /**
   * Locale as defined by the OS (e.g. `app.getPreferredSystemLanguages()`).
   */
  readonly osLocale: string;

  /**
   * The actual language of the UI that ends up being used considering `userLocale`
   * and `osLocale`.
   */
  readonly resolvedLanguage: string;

  /**
   * Defined if a language pack is used that is not the
   * default english language pack. This requires a language
   * pack to be installed as extension.
   */
  readonly languagePack?: INLSLanguagePackConfiguration;

  /**
   * The path to the file containing the default english messages
   * as flat string array. The file is only present in built
   * versions of the application.
   */
  readonly defaultMessagesFile: string;

  /**
   * Below properties are deprecated and only there to continue support
   * for `vscode-nls` module that depends on them.
   * Refs https://github.com/microsoft/vscode-nls/blob/main/src/node/main.ts#L36-L46
   */
  /** @deprecated */
  readonly locale: string;
  /** @deprecated */
  readonly availableLanguages: Record<string, string>;
  /** @deprecated */
  readonly _languagePackSupport?: boolean;
  /** @deprecated */
  readonly _languagePackId?: string;
  /** @deprecated */
  readonly _translationsConfigFile?: string;
  /** @deprecated */
  readonly _cacheRoot?: string;
  /** @deprecated */
  readonly _resolvedLanguagePackCoreLocation?: string;
  /** @deprecated */
  readonly _corruptedFile?: string;
}
