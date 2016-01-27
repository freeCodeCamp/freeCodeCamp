import ReactDOM from 'react-dom';
import { Disposable, Observable } from 'rx';
import ProfessorContext from './Professor-Context';

export default function render(Component, DOMContainer) {
  let ContextedComponent;
  try {
    ContextedComponent = ProfessorContext.wrap(Component);
  } catch (e) {
    return Observable.throw(e);
  }

  return Observable.create(observer => {
    try {
      ReactDOM.render(ContextedComponent, DOMContainer, function() {
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
