function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { Observable, Subject } from 'rxjs';

export var StateObservable = function (_Observable) {
  _inherits(StateObservable, _Observable);

  function StateObservable(stateSubject, initialState) {
    _classCallCheck(this, StateObservable);

    var _this = _possibleConstructorReturn(this, (StateObservable.__proto__ || Object.getPrototypeOf(StateObservable)).call(this, function (subscriber) {
      var subscription = _this.__notifier.subscribe(subscriber);
      if (subscription && !subscription.closed) {
        subscriber.next(_this.value);
      }
      return subscription;
    }));

    _this.value = initialState;
    _this.__notifier = new Subject();
    _this.__subscription = stateSubject.subscribe(function (value) {
      // We only want to update state$ if it has actually changed since
      // redux requires reducers use immutability patterns.
      // This is basically what distinctUntilChanged() does but it's so simple
      // we don't need to pull that code in
      if (value !== _this.value) {
        _this.value = value;
        _this.__notifier.next(value);
      }
    });
    return _this;
  }

  return StateObservable;
}(Observable);