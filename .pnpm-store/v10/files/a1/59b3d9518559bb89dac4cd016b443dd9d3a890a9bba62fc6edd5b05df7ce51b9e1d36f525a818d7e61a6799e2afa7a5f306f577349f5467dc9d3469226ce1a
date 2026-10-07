const dayjs = require('dayjs');

// Strip characters browsers ignore inside URLs (control chars and
// embedded HTML comments) that are commonly used to sneak XSS
// payloads past simple scheme checks.
function cleanHref(href) {
  // Browsers ignore character codes of 32 (space) and below in a surprising
  // number of situations. Start reading here:
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet#Embedded_tab
  // eslint-disable-next-line no-control-regex
  href = href.replace(/[\x00-\x20]+/g, '');
  // Clobber any comments in URLs, which the browser might
  // interpret inside an XML data island, allowing
  // a javascript: URL to be snuck through
  while (true) {
    const firstIndex = href.indexOf('<!--');
    if (firstIndex === -1) {
      break;
    }
    const lastIndex = href.indexOf('-->', firstIndex + 4);
    if (lastIndex === -1) {
      break;
    }
    href = href.substring(0, firstIndex) + href.substring(lastIndex + 3);
  }
  return href;
}

// Returns true if `href` should be rejected as unsafe. Used to block
// `javascript:`, `data:` and other dangerous schemes both when
// validating URL fields and when sanitizing HTML attribute values.
//
// `options.allowedSchemes` is an array of permitted URL schemes
// (defaults to the schemes long permitted by `launder().url`).
// `options.allowProtocolRelative` controls whether protocol-relative
// URLs (e.g. `//example.com`) are permitted. Defaults to true.
function naughtyHref(href, options) {
  options = options || {};
  const allowedSchemes = options.allowedSchemes ||
    [ 'http', 'https', 'ftp', 'mailto', 'tel', 'sms' ];
  const allowProtocolRelative = (options.allowProtocolRelative !== false);
  if (typeof href !== 'string') {
    return false;
  }
  href = cleanHref(href);
  // Case insensitive so we don't get faked out by JAVASCRIPT #1
  // Allow more characters after the first so we don't get faked
  // out by certain schemes browsers accept
  const matches = href.match(/^([a-zA-Z][a-zA-Z0-9.\-+]*):/);
  if (!matches) {
    // Protocol-relative URL starting with any combination of '/' and '\'
    if (href.match(/^[/\\]{2}/)) {
      return !allowProtocolRelative;
    }
    // No scheme
    return false;
  }
  const scheme = matches[1].toLowerCase();
  return allowedSchemes.indexOf(scheme) === -1;
}

module.exports = function(options) {
  const self = {};
  self.options = options || {};

  self.filterTag = self.options.filterTag || function(tag) {
    tag = tag.trim();
    return tag.toLowerCase();
  };

  self.string = function(s, def) {
    if (typeof (s) !== 'string') {
      if ((typeof (s) === 'number') || (typeof (s) === 'boolean')) {
        s += '';
      } else {
        s = '';
      }
    }
    s = s.trim();
    if (def !== undefined) {
      if (s === '') {
        s = def;
      }
    }
    return s;
  };

  self.strings = function(strings) {
    if (!Array.isArray(strings)) {
      return [];
    }
    return strings.map(function(s) {
      return self.string(s);
    });
  };

  self.integer = function(i, def, min, max) {
    if (def === undefined) {
      def = 0;
    }
    if (typeof (i) === 'number') {
      i = Math.floor(i);
    } else {
      try {
        i = parseInt(i, 10);
        if (isNaN(i)) {
          i = def;
        }
      } catch (e) {
        i = def;
      }
    }
    if ((typeof (min) === 'number') && (i < min)) {
      i = min;
    }
    if ((typeof (max) === 'number') && (i > max)) {
      i = max;
    }
    return i;
  };

  self.padInteger = function(i, places) {
    let s = i + '';
    while (s.length < places) {
      s = '0' + s;
    }
    return s;
  };

  self.float = function(i, def, min, max) {
    if (def === undefined) {
      def = 0;
    }
    if (!(typeof (i) === 'number')) {
      try {
        i = parseFloat(i, 10);
        if (isNaN(i)) {
          i = def;
        }
      } catch (e) {
        i = def;
      }
    }
    if ((typeof (min) === 'number') && (i < min)) {
      i = min;
    }
    if ((typeof (max) === 'number') && (i > max)) {
      i = max;
    }
    return i;
  };

  self.naughtyHref = naughtyHref;

  self.url = function(s, def, httpsFix) {
    s = self.string(s, def);
    // Allow the default to be undefined, null, false, etc.
    if (s === def) {
      return s;
    }
    // Strip characters browsers ignore that are commonly used to
    // smuggle dangerous schemes past validation.
    s = cleanHref(s);
    // Reject naughty URLs (e.g. `javascript:`, `data:`) before fixUrl
    // runs. Otherwise fixUrl could mask such schemes by prepending
    // `https://` to anything containing a `.`, turning
    // `javascript:alert(document.domain)` into a syntactically odd
    // but accepted `https://...` URL.
    if (naughtyHref(s)) {
      return def;
    }
    s = fixUrl(s);
    if (s === null) {
      return def;
    }
    return s;

    function fixUrl(href) {
      if (href.match(/^(((https?|ftp):\/\/)|((mailto|tel|sms):)|#|([^/.]+)?\/|[^/.]+$)/)) {
        // All good - no change required
        return href;
      } else if (href.match(/^[^/.]+\.[^/.]+/)) {
        // Smells like a domain name. Educated guess: they left off http://
        const protocol = httpsFix ? 'https://' : 'http://';
        return protocol + href;
      } else {
        return null;
      }
    };
  };

  self.select = function(s, choices, def) {
    s = self.string(s);
    if (!choices || !choices.length) {
      return def;
    }
    let choice;
    if (typeof (choices[0]) === 'object') {
      choice = choices.find(function(choice) {
        if ((choice.value === null) || (choice.value === undefined)) {
          // Don't crash on invalid choices
          return false;
        }
        return choice.value.toString() === s;
      });
      if (choice != null) {
        return choice.value;
      }
      return def;
    }
    choice = choices.find(function(choice) {
      if ((choice === null) || (choice === undefined)) {
        // Don't crash on invalid choices
        return false;
      }
      return choice.toString() === s;
    });
    if (choice !== undefined) {
      return choice;
    }
    return def;
  };

  self.boolean = function(b, def) {
    if (b === true) {
      return true;
    }
    if (b === false) {
      return false;
    }
    b = self.string(b, def);
    if (b === def) {
      if (b === undefined) {
        return false;
      }
      return b;
    }
    b = b.toLowerCase().charAt(0);
    if ((b === '') || (b === 'n') || (b === '0') || (b === 'f')) {
      return false;
    }
    if ((b === 't') || (b === 'y') || (b === '1')) {
      return true;
    }
    return false;
  };

  // Given an `options` object in which options[name] is a string
  // set to '0', '1', or 'any', this method adds mongodb criteria
  // to the `criteria` object.
  //
  // '0' or false means "the property must be false or absent," '1' or true
  // means "the property must be true," and 'any' or null means "we don't care
  // what the property is."
  //
  // See `booleanOrNull` for additional synonyms accepted for the
  // three possible values.
  //
  // An empty string is considered equivalent to '0'.
  //
  // This is not the same as apos.sanitizeBoolean which is concerned only with
  // true or false and does not address "any."
  //
  // `def` defaults to `any`.
  //
  // This method is most often used with REST API parameters and forms.

  self.addBooleanFilterToCriteria = function(options, name, criteria, def) {
    // if any or null, we aren't changing criteria
    if (def === undefined) {
      def = null;
    }

    // allow object or boolean
    let value = (typeof (options) === 'object' && options !== null) ? options[name] : options;
    value = (value === undefined) ? def : value;
    value = self.booleanOrNull(value);

    if (value === null) {
      // Don't care, show all
    } else if (!value) {
      // Must be absent or false. Hooray for $ne
      criteria[name] = { $ne: true };
    } else {
      // Must be true
      criteria[name] = true;
    }
  };

  // This method is used for tristate filters, i.e. "published,"
  // "unpublished", and "show me both".
  //
  // Accepts `true`, `false`, or `null` and returns them exactly
  // as such; if the parameter is none of those or their synonyms
  // below, returns `def`.
  //
  // Also accepts the strings `'yes'` (or starting with y), `'no'` (or
  // starting with n), `'true'` (or starting with t), `'false'`
  // (or starting with f), `'1'`, `'0'` and the strings `'any'` and
  // `'null'`. The string `'null'` must be an exact match, anything
  // else starting with `n` is taken as `no` (false).
  //
  // These various synonyms are useful for string input, such as from
  // a user friendly query string.

  self.booleanOrNull = function(b, def) {
    if (b === true) {
      return b;
    }
    if (b === false) {
      return b;
    }
    if (b === null) {
      return b;
    }

    b = self.string(b, def);
    if (b === def) {
      if (def === undefined) {
        return null;
      }
      return b;
    }

    // String 'null' must match as a full string to disambiguate from string 'n' for 'no'
    if (b === 'null') {
      return null;
    }

    b = b.toLowerCase().charAt(0);

    if ((b === '') || (b === 'n') || (b === '0') || (b === 'f')) {
      return false;
    }

    if ((b === 't') || (b === 'y') || (b === '1')) {
      return true;
    }

    if ((b === 'a')) {
      return null;
    }

    return def;
  };

  // Accept a user-entered string in YYYY-MM-DD, MM/DD, MM/DD/YY, or MM/DD/YYYY format
  // (tolerates missing leading zeroes on MM and DD). Also accepts a Date object.
  // Returns YYYY-MM-DD.
  //
  // The current year is assumed when MM/DD is used. If there is no explicit default
  // any unparseable date is returned as today's date.
  //
  // If the default is explicitly `null` (not `undefined`) then `null` is returned for
  // any unparseable date.
  //
  // The `now` argument can be passed for performance if you prefer to call
  // `new Date()` just once before many calls to this method and pass that single
  // value to all of them.

  self.date = function(date, def, now) {
    let components;

    function returnDefault() {
      if (def === undefined) {
        def = dayjs().format('YYYY-MM-DD');
      }
      return def;
    }

    if (typeof (date) === 'string') {
      if (date.match(/\//)) {
        components = date.split('/');
        if (components.length === 2) {
          // Convert mm/dd to yyyy-mm-dd
          return (now || new Date()).getFullYear() + '-' + self.padInteger(components[0], 2) + '-' + self.padInteger(components[1], 2);
        } else if (components.length === 3) {
          // Convert mm/dd/yy to mm/dd/yyyy
          if (components[2] < 100) {
            // Add the current century. If the result is more than
            // 50 years in the future, assume they meant the
            // previous century. Thus in 2015, we find that
            // we get the intuitive result for both 1/1/75,
            // 1/1/99 and 1/1/25. It's a nasty habit among
            // us imprecise humans. -Tom
            const d = (now || new Date());
            const nowYear = d.getFullYear() % 100;
            const nowCentury = d.getFullYear() - nowYear;
            let theirYear = parseInt(components[2]) + nowCentury;
            if (theirYear - d.getFullYear() > 50) {
              theirYear -= 100;
            }
            components[2] = theirYear;
          }
          // Convert mm/dd/yyyy to yyyy-mm-dd
          return self.padInteger(components[2], 4) + '-' + self.padInteger(components[0], 2) + '-' + self.padInteger(components[1], 2);
        } else {
          return returnDefault();
        }
      } else if (date.match(/-/)) {
        components = date.split('-');
        if (components.length === 2) {
          // Convert mm-dd to yyyy-mm-dd
          return (now || new Date()).getFullYear() + '-' + self.padInteger(components[0], 2) + '-' + self.padInteger(components[1], 2);
        } else if (components.length === 3) {
          // Convert yyyy-mm-dd (with questionable padding) to yyyy-mm-dd
          return self.padInteger(components[0], 4) + '-' + self.padInteger(components[1], 2) + '-' + self.padInteger(components[2], 2);
        } else {
          return returnDefault();
        }
      }
    }
    try {
      if (date === null) {
        return returnDefault();
      }
      date = (now || new Date(date));
      if (isNaN(date.getTime())) {
        return returnDefault();
      }
      return date.getFullYear() + '-' + self.padInteger(date.getMonth() + 1, 2) + '-' + self.padInteger(date.getDate(), 2);
    } catch (e) {
      return returnDefault();
    }
  };

  // This is likely not relevent to you unless you're using Apostrophe
  // Given a date object, return a date string in Apostrophe's preferred sortable,
  // comparable, JSON-able format, which is YYYY-MM-DD. If `date` is undefined
  // the current date is used.
  self.formatDate = function(date) {
    return dayjs(date).format('YYYY-MM-DD');
  };

  // Accepts a user-entered string in 12-hour or 24-hour time and returns a string
  // in 24-hour time. This method is tolerant of syntax such as `4pm`; minutes and
  // seconds are optional.
  //
  // If `def` is not set the default is the current time.

  self.time = function(time, def) {
    time = self.string(time).toLowerCase();
    time = time.trim();
    const components = time.match(/^(\d+)([:|.](\d+))?([:|.](\d+))?\s*(am|pm|AM|PM|a|p|A|M)?$/);
    if (components) {
      let hours = parseInt(components[1], 10);
      const minutes = (components[3] !== undefined) ? parseInt(components[3], 10) : 0;
      const seconds = (components[5] !== undefined) ? parseInt(components[5], 10) : 0;
      let ampm = (components[6]) ? components[6].toLowerCase() : components[6];
      ampm = ampm && ampm.charAt(0);
      if ((hours === 12) && (ampm === 'a')) {
        hours -= 12;
      } else if ((hours === 12) && (ampm === 'p')) {
        // Leave it be
      } else if (ampm === 'p') {
        hours += 12;
      }
      if ((hours === 24) || (hours === '24')) {
        hours = 0;
      }
      return self.padInteger(hours, 2) + ':' + self.padInteger(minutes, 2) + ':' + self.padInteger(seconds, 2);
    } else {
      if (def !== undefined) {
        return def;
      }
      return dayjs().format('HH:mm');
    }
  };

  // This is likely not relevent to you unless you're using Apostrophe
  // Given a JavaScript Date object, return a time string in
  // Apostrophe's preferred sortable, comparable, JSON-able format:
  // 24-hour time, with seconds.
  //
  // If `date` is missing the current time is used.

  self.formatTime = function(date) {
    return dayjs(date).format('HH:mm:ss');
  };

  // Sanitize tags. Tags should be submitted as an array of strings,
  // or a comma-separated string.
  //
  // This method ensures the input is an array or string and, if
  // an array, that the elements of the array are strings.
  //
  // If a filterTag function is passed as an option when initializing
  // Launder, then all tags are passed through it (as individual
  // strings, one per call) and the return value is used instead. You
  // may also pass a filterTag when calling this function

  self.tags = function(tags, filter) {
    if (typeof (tags) === 'string') {
      tags = tags.split(/,\s*/);
    }
    if (!Array.isArray(tags)) {
      return [];
    }
    const strings = tags.map(tag => self.string(tag));
    const rewritten = strings.map(filter || self.filterTag);
    const filtered = rewritten.filter(tag => tag.length > 0);
    return filtered;
  };

  // Sanitize an id. IDs must consist solely of upper and lower case
  // letters, numbers, and digits unless options.idRegExp is set.

  self.idRegExp = self.options.idRegExp || /^[A-Za-z0-9_]+$/;

  self.id = function(s, def) {
    const id = self.string(s, def);
    if (id === def) {
      return id;
    }
    if (!id.match(self.idRegExp)) {
      return def;
    }
    return id;
  };

  // Sanitize an array of IDs. IDs must consist solely of upper and lower case
  // letters and numbers, digits, and underscores. Any elements that are not
  // IDs are omitted from the final array.
  self.ids = function(ids) {
    if (!Array.isArray(ids)) {
      return [];
    }
    const result = ids.filter(function(id) {
      return (self.id(id) !== undefined);
    });
    return result;
  };
  return self;
};

// Expose `naughtyHref` statically so callers (notably sanitize-html)
// can use it without instantiating a launder.
module.exports.naughtyHref = naughtyHref;
