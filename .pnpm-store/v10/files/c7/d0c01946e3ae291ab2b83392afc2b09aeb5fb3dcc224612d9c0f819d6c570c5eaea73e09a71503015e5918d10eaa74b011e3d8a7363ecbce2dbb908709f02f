import buildLocalizeFn from "../../../_lib/buildLocalizeFn/index.js";
var eraValues = {
  narrow: ['B', 'คศ'],
  abbreviated: ['BC', 'ค.ศ.'],
  wide: ['ปีก่อนคริสตกาล', 'คริสต์ศักราช']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['ไตรมาสแรก', 'ไตรมาสที่สอง', 'ไตรมาสที่สาม', 'ไตรมาสที่สี่']
};
var dayValues = {
  narrow: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
  short: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
  abbreviated: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
  wide: ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์']
};
var monthValues = {
  narrow: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
  abbreviated: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
  wide: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']
};
var dayPeriodValues = {
  narrow: {
    am: 'ก่อนเที่ยง',
    pm: 'หลังเที่ยง',
    midnight: 'เที่ยงคืน',
    noon: 'เที่ยง',
    morning: 'เช้า',
    afternoon: 'บ่าย',
    evening: 'เย็น',
    night: 'กลางคืน'
  },
  abbreviated: {
    am: 'ก่อนเที่ยง',
    pm: 'หลังเที่ยง',
    midnight: 'เที่ยงคืน',
    noon: 'เที่ยง',
    morning: 'เช้า',
    afternoon: 'บ่าย',
    evening: 'เย็น',
    night: 'กลางคืน'
  },
  wide: {
    am: 'ก่อนเที่ยง',
    pm: 'หลังเที่ยง',
    midnight: 'เที่ยงคืน',
    noon: 'เที่ยง',
    morning: 'เช้า',
    afternoon: 'บ่าย',
    evening: 'เย็น',
    night: 'กลางคืน'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'ก่อนเที่ยง',
    pm: 'หลังเที่ยง',
    midnight: 'เที่ยงคืน',
    noon: 'เที่ยง',
    morning: 'ตอนเช้า',
    afternoon: 'ตอนกลางวัน',
    evening: 'ตอนเย็น',
    night: 'ตอนกลางคืน'
  },
  abbreviated: {
    am: 'ก่อนเที่ยง',
    pm: 'หลังเที่ยง',
    midnight: 'เที่ยงคืน',
    noon: 'เที่ยง',
    morning: 'ตอนเช้า',
    afternoon: 'ตอนกลางวัน',
    evening: 'ตอนเย็น',
    night: 'ตอนกลางคืน'
  },
  wide: {
    am: 'ก่อนเที่ยง',
    pm: 'หลังเที่ยง',
    midnight: 'เที่ยงคืน',
    noon: 'เที่ยง',
    morning: 'ตอนเช้า',
    afternoon: 'ตอนกลางวัน',
    evening: 'ตอนเย็น',
    night: 'ตอนกลางคืน'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  return String(dirtyNumber);
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
export default localize;