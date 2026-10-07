//! moment.js locale configuration
//! locale : Spanish (United States) [es-us]
//! author : bustta : https://github.com/bustta
//! author : chrisrodz : https://github.com/chrisrodz

import moment from '../moment';

var monthsShortDot =
        'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split(
            '_'
        ),
    monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
    monthsParse = [
        /^ene/i,
        /^feb/i,
        /^mar/i,
        /^abr/i,
        /^may/i,
        /^jun/i,
        /^jul/i,
        /^ago/i,
        /^sep/i,
        /^oct/i,
        /^nov/i,
        /^dic/i,
    ],
    monthsRegex =
        /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;

export default moment.defineLocale('es-us', {
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split(
        '_'
    ),
    monthsShort: function (m, format) {
        if (!m) {
            return monthsShortDot;
        } else if (/-MMM-/.test(format)) {
            return monthsShort[m.month()];
        } else {
            return monthsShortDot[m.month()];
        }
    },
    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex:
        /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex:
        /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
    weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'h:mm A',
        LTS: 'h:mm:ss A',
        L: 'MM/DD/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY h:mm A',
        LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A',
    },
    calendar: {
        sameDay: function () {
            return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
        },
        nextDay: function () {
            return '[mañana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
        },
        nextWeek: function () {
            return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
        },
        lastDay: function () {
            return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
        },
        lastWeek: function () {
            return (
                '[el] dddd [pasado a la' +
                (this.hours() !== 1 ? 's' : '') +
                '] LT'
            );
        },
        sameElse: 'L',
    },
    relativeTime: {
        future: 'en %s',
        past: 'hace %s',
        s: 'unos segundos',
        ss: '%d segundos',
        m: 'un minuto',
        mm: '%d minutos',
        h: 'una hora',
        hh: '%d horas',
        d: 'un día',
        dd: '%d días',
        w: 'una semana',
        ww: '%d semanas',
        M: 'un mes',
        MM: '%d meses',
        y: 'un año',
        yy: '%d años',
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
        dow: 0, // Sunday is the first day of the week.
        doy: 6, // The week that contains Jan 6th is the first week of the year.
    },
});
