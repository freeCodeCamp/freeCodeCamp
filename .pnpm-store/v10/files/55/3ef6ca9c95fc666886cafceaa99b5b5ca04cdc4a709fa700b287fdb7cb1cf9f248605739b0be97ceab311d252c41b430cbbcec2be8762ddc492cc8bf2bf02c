import { ArrayNavigator } from './navigator.js';

class HistoryNavigator {
    constructor(_history = new Set(), limit = 10) {
        this._history = _history;
        this._limit = limit;
        this._onChange();
        if (this._history.onDidChange) {
            this._disposable = this._history.onDidChange(() => this._onChange());
        }
    }
    getHistory() {
        return this._elements;
    }
    add(t) {
        this._history.delete(t);
        this._history.add(t);
        this._onChange();
    }
    next() {
        // This will navigate past the end of the last element, and in that case the input should be cleared
        return this._navigator.next();
    }
    previous() {
        if (this._currentPosition() !== 0) {
            return this._navigator.previous();
        }
        return null;
    }
    current() {
        return this._navigator.current();
    }
    first() {
        return this._navigator.first();
    }
    last() {
        return this._navigator.last();
    }
    isLast() {
        return this._currentPosition() >= this._elements.length - 1;
    }
    isNowhere() {
        return this._navigator.current() === null;
    }
    has(t) {
        return this._history.has(t);
    }
    _onChange() {
        this._reduceToLimit();
        const elements = this._elements;
        this._navigator = new ArrayNavigator(elements, 0, elements.length, elements.length);
    }
    _reduceToLimit() {
        const data = this._elements;
        if (data.length > this._limit) {
            const replaceValue = data.slice(data.length - this._limit);
            if (this._history.replace) {
                this._history.replace(replaceValue);
            }
            else {
                this._history = new Set(replaceValue);
            }
        }
    }
    _currentPosition() {
        const currentElement = this._navigator.current();
        if (!currentElement) {
            return -1;
        }
        return this._elements.indexOf(currentElement);
    }
    get _elements() {
        const elements = [];
        this._history.forEach(e => elements.push(e));
        return elements;
    }
    dispose() {
        if (this._disposable) {
            this._disposable.dispose();
            this._disposable = undefined;
        }
    }
}

export { HistoryNavigator };
