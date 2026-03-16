import type { i18n as I18nInstance } from 'i18next';

/**
 * Shared runtime guards and safe lookup helpers for dynamic data access.
 *
 * We use these when values come from i18n namespace objects or other unknown
 * sources where keys are dynamic. This keeps call sites type-safe, avoids
 * `as any` casting, and provides predictable fallbacks when data is missing.
 */

// Narrow unknown values to indexable objects before reading dynamic keys.
export const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;

type I18nResourceAccessor = Pick<
  I18nInstance,
  'language' | 'resolvedLanguage'
> &
  Partial<Pick<I18nInstance, 'getResourceBundle'>> & {
    services?: {
      resourceStore?: {
        data?: Record<string, Record<string, unknown>>;
      };
    };
  };

const getNamespaceBundle = (
  i18n: I18nResourceAccessor,
  language: string,
  namespace: string
): unknown => {
  if (typeof i18n.getResourceBundle === 'function') {
    return i18n.getResourceBundle(language, namespace) as unknown;
  }
  return i18n.services?.resourceStore?.data?.[language]?.[namespace];
};

/**
 * Read an i18n namespace as a plain object for dynamic-key lookups.
 * This avoids selector-root edge cases when requesting entire namespaces.
 */
export const getNamespaceResource = (
  i18n: I18nResourceAccessor,
  namespace: string
): Record<string, unknown> => {
  const language = i18n.resolvedLanguage ?? i18n.language;
  const currentBundle = language
    ? getNamespaceBundle(i18n, language, namespace)
    : undefined;
  if (isRecord(currentBundle)) return currentBundle;

  const englishBundle = getNamespaceBundle(i18n, 'en', namespace);
  return isRecord(englishBundle) ? englishBundle : {};
};

// Safely read dynamic key values from unknown dictionary-like objects.
export const getTitleByKey = (titles: unknown, key: string): string => {
  if (!isRecord(titles)) return key;
  const title = titles[key];
  return typeof title === 'string' ? title : key;
};

const getIntroBlockEntry = (
  introData: unknown,
  superBlock: string,
  block: string
) => {
  if (!isRecord(introData)) return null;

  const superBlockData = introData[superBlock];
  if (!isRecord(superBlockData)) return null;

  const blocks = superBlockData.blocks;
  if (!isRecord(blocks)) return null;

  const blockData = blocks[block];
  return isRecord(blockData) ? blockData : null;
};

export const getIntroBlockTitle = (
  introData: unknown,
  superBlock: string,
  block: string,
  fallbackTitle: string = `${superBlock}.blocks.${block}.title`
): string => {
  const blockData = getIntroBlockEntry(introData, superBlock, block);
  if (!blockData) return fallbackTitle;

  return typeof blockData.title === 'string' ? blockData.title : fallbackTitle;
};

export interface IntroBlockData {
  title: string;
  intro: string[];
}

export const getIntroBlockData = (
  introData: unknown,
  superBlock: string,
  block: string,
  fallbackTitle: string = `${superBlock}.blocks.${block}.title`
): IntroBlockData => {
  const blockData = getIntroBlockEntry(introData, superBlock, block);
  if (!blockData) return { title: fallbackTitle, intro: [] };

  const title =
    typeof blockData.title === 'string' ? blockData.title : fallbackTitle;
  const intro = Array.isArray(blockData.intro)
    ? blockData.intro.filter((item): item is string => typeof item === 'string')
    : [];

  return { title, intro };
};

export interface ModuleIntroData {
  note: string;
  intro: string[];
}

export interface IntroSuperBlockData {
  chapters: Record<string, string>;
  modules: Record<string, string>;
  moduleIntros: Record<string, ModuleIntroData>;
}

const getStringMap = (value: unknown): Record<string, string> => {
  if (!isRecord(value)) return {};

  return Object.entries(value).reduce<Record<string, string>>(
    (acc, [key, entry]) => {
      if (typeof entry === 'string') {
        acc[key] = entry;
      }
      return acc;
    },
    {}
  );
};

const getModuleIntros = (value: unknown): Record<string, ModuleIntroData> => {
  if (!isRecord(value)) return {};

  return Object.entries(value).reduce<Record<string, ModuleIntroData>>(
    (acc, [key, entry]) => {
      if (!isRecord(entry)) return acc;

      const note = typeof entry.note === 'string' ? entry.note : '';
      const intro = Array.isArray(entry.intro)
        ? entry.intro.filter((item): item is string => typeof item === 'string')
        : [];

      acc[key] = { note, intro };
      return acc;
    },
    {}
  );
};

export const getIntroSuperBlockData = (
  introData: unknown,
  superBlock: string
): IntroSuperBlockData => {
  if (!isRecord(introData)) {
    return { chapters: {}, modules: {}, moduleIntros: {} };
  }

  const superBlockData = introData[superBlock];
  if (!isRecord(superBlockData)) {
    return { chapters: {}, modules: {}, moduleIntros: {} };
  }

  return {
    chapters: getStringMap(superBlockData.chapters),
    modules: getStringMap(superBlockData.modules),
    moduleIntros: getModuleIntros(superBlockData['module-intros'])
  };
};

export const getIntroSuperBlockTitle = (
  introData: unknown,
  superBlock: string
): string => {
  if (!isRecord(introData)) return superBlock;

  const superBlockData = introData[superBlock];
  if (!isRecord(superBlockData)) return superBlock;

  return typeof superBlockData.title === 'string'
    ? superBlockData.title
    : superBlock;
};
