"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.getDateResolver = exports.GraphQLDate = void 0;
exports.isDate = isDate;
exports.looksLikeADate = looksLikeADate;
var _moment = _interopRequireDefault(require("moment"));
var _graphql = require("graphql");
var _commonTags = require("common-tags");
var _cacheLmdb = _interopRequireDefault(require("../../utils/cache-lmdb"));
const ISO_8601_FORMAT = [`YYYY`, `YYYY-MM`, `YYYY-MM-DD`, `YYYYMMDD`,
// Local Time
`YYYY-MM-DDTHH`, `YYYY-MM-DDTHH:mm`, `YYYY-MM-DDTHHmm`, `YYYY-MM-DDTHH:mm:ss`, `YYYY-MM-DDTHHmmss`, `YYYY-MM-DDTHH:mm:ss.SSS`, `YYYY-MM-DDTHHmmss.SSS`, `YYYY-MM-DDTHH:mm:ss.SSSSSS`, `YYYY-MM-DDTHHmmss.SSSSSS`,
// `YYYY-MM-DDTHH:mm:ss.SSSSSSSSS`,
// `YYYY-MM-DDTHHmmss.SSSSSSSSS`,

// Local Time (Omit T)
`YYYY-MM-DD HH`, `YYYY-MM-DD HH:mm`, `YYYY-MM-DD HHmm`, `YYYY-MM-DD HH:mm:ss`, `YYYY-MM-DD HHmmss`, `YYYY-MM-DD HH:mm:ss.SSS`, `YYYY-MM-DD HHmmss.SSS`, `YYYY-MM-DD HH:mm:ss.SSSSSS`, `YYYY-MM-DD HHmmss.SSSSSS`,
// `YYYY-MM-DD HH:mm:ss.SSSSSSSSS`,
// `YYYY-MM-DD HHmmss.SSSSSSSSS`,

// Coordinated Universal Time (UTC)
`YYYY-MM-DDTHHZ`, `YYYY-MM-DDTHH:mmZ`, `YYYY-MM-DDTHHmmZ`, `YYYY-MM-DDTHH:mm:ssZ`, `YYYY-MM-DDTHHmmssZ`, `YYYY-MM-DDTHH:mm:ss.SSSZ`, `YYYY-MM-DDTHHmmss.SSSZ`, `YYYY-MM-DDTHH:mm:ss.SSSSSSZ`, `YYYY-MM-DDTHHmmss.SSSSSSZ`,
// `YYYY-MM-DDTHH:mm:ss.SSSSSSSSSZ`,
// `YYYY-MM-DDTHHmmss.SSSSSSSSSZ`,

// Coordinated Universal Time (UTC) (Omit T)
`YYYY-MM-DD HHZ`, `YYYY-MM-DD HH:mmZ`, `YYYY-MM-DD HHmmZ`, `YYYY-MM-DD HH:mm:ssZ`, `YYYY-MM-DD HHmmssZ`, `YYYY-MM-DD HH:mm:ss.SSSZ`, `YYYY-MM-DD HHmmss.SSSZ`, `YYYY-MM-DD HH:mm:ss.SSSSSSZ`, `YYYY-MM-DD HHmmss.SSSSSSZ`,
// `YYYY-MM-DD HH:mm:ss.SSSSSSSSSZ`,
// `YYYY-MM-DD HHmmss.SSSSSSSSSZ`,

// Coordinated Universal Time (UTC) (Omit T, Extra Space before Z)
`YYYY-MM-DD HH Z`, `YYYY-MM-DD HH:mm Z`, `YYYY-MM-DD HHmm Z`, `YYYY-MM-DD HH:mm:ss Z`, `YYYY-MM-DD HHmmss Z`, `YYYY-MM-DD HH:mm:ss.SSS Z`, `YYYY-MM-DD HHmmss.SSS Z`, `YYYY-MM-DD HH:mm:ss.SSSSSS Z`, `YYYY-MM-DD HHmmss.SSSSSS Z`, `YYYY-[W]WW`, `YYYY[W]WW`, `YYYY-[W]WW-E`, `YYYY[W]WWE`, `YYYY-DDDD`, `YYYYDDDD`];
const GraphQLDate = new _graphql.GraphQLScalarType({
  name: `Date`,
  description: (0, _commonTags.oneLine)`
    A date string, such as 2007-12-03, compliant with the ISO 8601 standard
    for representation of dates and times using the Gregorian calendar.`,
  serialize: String,
  parseValue: String,
  parseLiteral(ast) {
    return ast.kind === _graphql.Kind.STRING ? ast.value : undefined;
  }
});
exports.GraphQLDate = GraphQLDate;
const momentFormattingTokens = /(\[[^[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
const momentFormattingRegexes = {
  YYYY: `\\d{4}`,
  MM: `\\d{2}`,
  DD: `\\d{2}`,
  DDDD: `\\d{4}`,
  HH: `\\d{2}`,
  mm: `\\d{2}`,
  ss: `\\d{2}`,
  SSS: `\\d{3}`,
  SSSSSS: `\\d{6}`,
  E: `\\d`,
  W: `\\d`,
  WW: `\\d{2}`,
  "[W]": `W`,
  ".": `\\.`,
  Z: `(Z|[+-]\\d\\d(?::?\\d\\d)?)`
};
const ISO_8601_FORMAT_AS_REGEX = ISO_8601_FORMAT.map(format => {
  const matchedFormat = format.match(momentFormattingTokens);
  if (matchedFormat === null) return ``;
  // convert ISO string to a map of momentTokens ([YYYY, MM, DD])
  return [...matchedFormat].map(token =>
  // see if the token (YYYY or ss) is found, else we just return the value
  momentFormattingRegexes[token] ? momentFormattingRegexes[token] : token).join(``);
}).join(`|`);

// calculate all lengths of the formats, if a string is longer or smaller it can't be valid
const ISO_8601_FORMAT_LENGTHS = [...new Set(ISO_8601_FORMAT.reduce((acc, val) => {
  if (!val.endsWith(`Z`)) {
    return acc.concat(val.length);
  }

  // we add count of +01 & +01:00
  return acc.concat([val.length, val.length + 3, val.length + 5]);
}, []))];

// lets imagine these formats: YYYY-MM-DDTHH & YYYY-MM-DD HHmmss.SSSSSS Z
// this regex looks like (/^(\d{4}-\d{2}-\d{2}T\d{2}|\d{4}-\d{2}-\d{2} \d{2}\d{2}\d{2}.\d{6} Z)$)
const quickDateValidateRegex = new RegExp(`^(${ISO_8601_FORMAT_AS_REGEX})$`);
const looksLikeDateStartRegex = /^\d{4}/;
// this regex makes sure the last characters are a number or the letter Z
const looksLikeDateEndRegex = /(\d|Z)$/;

/**
 * looksLikeADate isn't a 100% valid check if it is a real date but at least it's something that looks like a date.
 * It won't catch values like 2010-02-30
 * 1) is it a number?
 * 2) does the length of the value comply with any of our formats
 * 3) does the str starts with 4 digites (YYYY)
 * 4) does the str ends with something that looks like a date
 * 5) Small regex to see if it matches any of the formats
 * 6) check momentjs
 *
 * @param {*} value
 * @return {boolean}
 */
function looksLikeADate(value) {
  // quick check if value does not look like a date
  if (!value || value.length && !ISO_8601_FORMAT_LENGTHS.includes(value.length) || !looksLikeDateStartRegex.test(value) || !looksLikeDateEndRegex.test(value)) {
    return false;
  }

  // If it looks like a date we parse the date with a regex to see if we can handle it.
  // momentjs just does regex validation itself if you don't do any operations on it.
  if (typeof value === `string` && quickDateValidateRegex.test(value)) {
    return true;
  }
  return isDate(value);
}

/**
 * @param {*} value
 * @return {boolean}
 */
function isDate(value) {
  const momentDate = _moment.default.utc(value, ISO_8601_FORMAT, true);
  return typeof value !== `number` && momentDate.isValid();
}
let formatDateCache;
function getFormatDateCache() {
  if (!formatDateCache) {
    formatDateCache = new _cacheLmdb.default({
      name: `format-date-cache`,
      encoding: `string`
    }).init();
  }
  return formatDateCache;
}
const formatDate = async ({
  date,
  fromNow,
  difference,
  formatString,
  locale = `en`
}) => {
  const normalizedDate = JSON.parse(JSON.stringify(date));
  if (formatString) {
    const cacheKey = `${normalizedDate}-${formatString}-${locale}`;
    const cachedFormat = await getFormatDateCache().get(cacheKey);
    if (cachedFormat) {
      return cachedFormat;
    }
    const result = _moment.default.utc(normalizedDate, ISO_8601_FORMAT, true).locale(locale).format(formatString);
    await getFormatDateCache().set(cacheKey, result);
    return result;
  } else if (fromNow) {
    return _moment.default.utc(normalizedDate, ISO_8601_FORMAT, true).locale(locale).fromNow();
  } else if (difference) {
    return (0, _moment.default)().diff(_moment.default.utc(normalizedDate, ISO_8601_FORMAT, true).locale(locale), difference);
  }
  return normalizedDate;
};
const getDateResolver = (options = {}, fieldConfig) => {
  const {
    locale,
    formatString,
    fromNow,
    difference
  } = options;
  return {
    args: {
      ...fieldConfig.args,
      formatString: {
        type: `String`,
        description: (0, _commonTags.oneLine)`
        Format the date using Moment.js' date tokens, e.g.
        \`date(formatString: "YYYY MMMM DD")\`.
        See https://momentjs.com/docs/#/displaying/format/
        for documentation for different tokens.`,
        defaultValue: formatString
      },
      fromNow: {
        type: `Boolean`,
        description: (0, _commonTags.oneLine)`
        Returns a string generated with Moment.js' \`fromNow\` function`,
        defaultValue: fromNow
      },
      difference: {
        type: `String`,
        description: (0, _commonTags.oneLine)`
        Returns the difference between this date and the current time.
        Defaults to "milliseconds" but you can also pass in as the
        measurement "years", "months", "weeks", "days", "hours", "minutes",
        and "seconds".`,
        defaultValue: difference
      },
      locale: {
        type: `String`,
        description: (0, _commonTags.oneLine)`
        Configures the locale Moment.js will use to format the date.`,
        defaultValue: locale
      }
    },
    async resolve(source, args, context, info) {
      const resolver = fieldConfig.resolve || context.defaultFieldResolver;
      const date = await resolver(source, args, context, {
        ...info,
        from: options.from || info.from,
        fromNode: options.from ? options.fromNode : info.fromNode
      });
      if (date == null) {
        return null;
      }
      if (Array.isArray(date)) {
        return await Promise.all(date.map(d => formatDate({
          date: d,
          ...args
        })));
      }
      return await formatDate({
        date,
        ...args
      });
    }
  };
};
exports.getDateResolver = getDateResolver;
//# sourceMappingURL=date.js.map