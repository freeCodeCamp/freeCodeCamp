'use strict';

class DatePart {
  constructor({
    token,
    date,
    parts,
    locales
  }) {
    this.token = token;
    this.date = date || new Date();
    this.parts = parts || [this];
    this.locales = locales || {};
  }

  up() {}

  down() {}

  next() {
    const currentIdx = this.parts.indexOf(this);
    return this.parts.find((part, idx) => idx > currentIdx && part instanceof DatePart);
  }

  setTo(val) {}

  prev() {
    let parts = [].concat(this.parts).reverse();
    const currentIdx = parts.indexOf(this);
    return parts.find((part, idx) => idx > currentIdx && part instanceof DatePart);
  }

  toString() {
    return String(this.date);
  }

}

module.exports = DatePart;