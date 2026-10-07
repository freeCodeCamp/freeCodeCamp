///////////////////////////////////////////////////////////
// ReflexEvents
// By Philippe Leefsma
// December 2016
//
///////////////////////////////////////////////////////////
class ReflexEvents {
  constructor() {
    this._events = {};
  }

  /////////////////////////////////////////////////////////
  // Supports multiple events space-separated
  //
  /////////////////////////////////////////////////////////
  on(events, fct) {
    events.split(' ').forEach(event => {
      this._events[event] = this._events[event] || [];
      this._events[event].push(fct);
    });
    return this;
  }

  /////////////////////////////////////////////////////////
  // Supports multiple events space-separated
  //
  /////////////////////////////////////////////////////////
  off(events, fct) {
    if (events == undefined) {
      this._events = {};
      return;
    }
    events.split(' ').forEach(event => {
      if (event in this._events === false) return;
      if (fct) {
        this._events[event].splice(this._events[event].indexOf(fct), 1);
      } else {
        this._events[event] = [];
      }
    });
    return this;
  }
  emit(event /* , args... */) {
    if (this._events[event] === undefined) return;
    var tmpArray = this._events[event].slice();
    for (var i = 0; i < tmpArray.length; ++i) {
      var result = tmpArray[i].apply(this, Array.prototype.slice.call(arguments, 1));
      if (result !== undefined) {
        return result;
      }
    }
    return undefined;
  }
}
export default ReflexEvents;