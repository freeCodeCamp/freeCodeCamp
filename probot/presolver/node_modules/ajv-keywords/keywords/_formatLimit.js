'use strict';

var TIME = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d:\d\d)?$/i;
var DATE_TIME_SEPARATOR = /t|\s/i;

var COMPARE_FORMATS = {
  date: compareDate,
  time: compareTime,
  'date-time': compareDateTime
};

module.exports = function (minMax) {
  var keyword = 'format' + minMax;
  return function defFunc(ajv) {
    if (ajv.RULES.keywords[keyword])
      return console.warn('Keyword', keyword, 'is already defined');

    defFunc.definition = {
      type: 'string',
      inline: require('./dotjs/_formatLimit'),
      statements: true,
      errors: 'full',
      metaSchema: {
        anyOf: [
          { type: 'string' },
          {
            type: 'object',
            required: [ '$data' ],
            properties: {
              $data: {
                type: 'string',
                anyOf: [
                  { format: 'relative-json-pointer' },
                  { format: 'json-pointer' }
                ]
              }
            },
            additionalProperties: false
          }
        ]
      }
    };

    ajv.addKeyword(keyword, defFunc.definition);
    ajv.addKeyword('formatExclusive' + minMax);
    extendFormats(ajv);
    return ajv;
  };
};


function extendFormats(ajv) {
  var formats = ajv._formats;
  for (var name in COMPARE_FORMATS) {
    var format = formats[name];
    if (typeof format != 'object')
      format = formats[name] = { validate: format };
    if (!format.compare)
      format.compare = COMPARE_FORMATS[name];
  }
}


function compareDate(d1, d2) {
  if (!(d1 && d2)) return;
  if (d1 > d2) return 1;
  if (d1 < d2) return -1;
  if (d1 === d2) return 0;
}


function compareTime(t1, t2) {
  if (!(t1 && t2)) return;
  t1 = t1.match(TIME);
  t2 = t2.match(TIME);
  if (!(t1 && t2)) return;
  t1 = t1[1] + t1[2] + t1[3] + (t1[4]||'');
  t2 = t2[1] + t2[2] + t2[3] + (t2[4]||'');
  if (t1 > t2) return 1;
  if (t1 < t2) return -1;
  if (t1 === t2) return 0;
}


function compareDateTime(dt1, dt2) {
  if (!(dt1 && dt2)) return;
  dt1 = dt1.split(DATE_TIME_SEPARATOR);
  dt2 = dt2.split(DATE_TIME_SEPARATOR);
  var res = compareDate(dt1[0], dt2[0]);
  if (res === undefined) return;
  return res || compareTime(dt1[1], dt2[1]);
}
