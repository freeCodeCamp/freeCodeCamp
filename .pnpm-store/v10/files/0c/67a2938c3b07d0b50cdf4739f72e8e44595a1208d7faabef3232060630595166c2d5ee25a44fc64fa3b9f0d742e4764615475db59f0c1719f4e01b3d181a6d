'use strict';

const DatePart = require('./datepart');

const pos = n => {
  n = n % 10;
  return n === 1 ? 'st' : n === 2 ? 'nd' : n === 3 ? 'rd' : 'th';
};

class Day extends DatePart {
  constructor(opts = {}) {
    super(opts);
  }

  up() {
    this.date.setDate(this.date.getDate() + 1);
  }

  down() {
    this.date.setDate(this.date.getDate() - 1);
  }

  setTo(val) {
    this.date.setDate(parseInt(val.substr(-2)));
  }

  toString() {
    let date = this.date.getDate();
    let day = this.date.getDay();
    return this.token === 'DD' ? String(date).padStart(2, '0') : this.token === 'Do' ? date + pos(date) : this.token === 'd' ? day + 1 : this.token === 'ddd' ? this.locales.weekdaysShort[day] : this.token === 'dddd' ? this.locales.weekdays[day] : date;
  }

}

module.exports = Day;