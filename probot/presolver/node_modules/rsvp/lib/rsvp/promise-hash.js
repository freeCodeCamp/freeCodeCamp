import Enumerator from './enumerator';
import {
  PENDING,
  FULFILLED,
  fulfill
} from './-internal';

const hasOwnProperty = Object.prototype.hasOwnProperty;

export default class PromiseHash extends Enumerator {
  constructor(Constructor, object, abortOnReject = true, label) {
    super(Constructor, object, abortOnReject, label);
  }

  _init(Constructor, object) {
    this._result = {};

    this._enumerate(object);
    if (this._remaining === 0) {
      fulfill(this.promise, this._result);
    }
  }

  _enumerate(input) {
    let promise    = this.promise;
    let results    = [];

    for (let key in input) {
      if (hasOwnProperty.call(input, key)) {
        results.push({
          position: key,
          entry: input[key]
        });
      }
    }

    let length = results.length;
    this._remaining = length;
    let result;

    for (let i = 0; promise._state === PENDING && i < length; i++) {
      result = results[i];
      this._eachEntry(result.entry, result.position);
    }
  }
}
