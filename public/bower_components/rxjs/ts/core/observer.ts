/// <reference path="./disposables/disposable.ts" />
module Rx {
	export interface Observer<T> {
        makeSafe(disposable: IDisposable): Observer<T>;
	}
}

(function() {
    var observer: Rx.Observer<boolean>;
	observer = observer.makeSafe(Rx.Disposable.create(() => {}));
});
