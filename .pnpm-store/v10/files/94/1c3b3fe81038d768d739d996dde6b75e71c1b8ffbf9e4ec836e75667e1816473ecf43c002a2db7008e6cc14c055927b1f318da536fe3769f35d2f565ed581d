import { Lazy } from './lazy.js';
import { LANGUAGE_DEFAULT } from './platform.js';

const safeIntl = {
    DateTimeFormat(locales, options) {
        return new Lazy(() => {
            try {
                return new Intl.DateTimeFormat(locales, options);
            }
            catch {
                return new Intl.DateTimeFormat(undefined, options);
            }
        });
    },
    Collator(locales, options) {
        return new Lazy(() => {
            try {
                return new Intl.Collator(locales, options);
            }
            catch {
                return new Intl.Collator(undefined, options);
            }
        });
    },
    Segmenter(locales, options) {
        return new Lazy(() => {
            try {
                return new Intl.Segmenter(locales, options);
            }
            catch {
                return new Intl.Segmenter(undefined, options);
            }
        });
    },
    Locale(tag, options) {
        return new Lazy(() => {
            try {
                return new Intl.Locale(tag, options);
            }
            catch {
                return new Intl.Locale(LANGUAGE_DEFAULT, options);
            }
        });
    },
    NumberFormat(locales, options) {
        return new Lazy(() => {
            try {
                return new Intl.NumberFormat(locales, options);
            }
            catch {
                return new Intl.NumberFormat(undefined, options);
            }
        });
    }
};

export { safeIntl };
