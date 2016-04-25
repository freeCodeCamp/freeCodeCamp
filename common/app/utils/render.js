import ReactDOM from 'react-dom';
import { Disposable, Observable } from 'rx';

export default function render(Component, DOMContainer) {
  return Observable.create(observer => {
    try {
      ReactDOM.render(Component, DOMContainer, function() {
        observer.onNext(this);
      });
    } catch (e) {
      return observer.onError(e);
    }

    return Disposable.create(() => {
      return ReactDOM.unmountComponentAtNode(DOMContainer);
    });
  });
}
