import { Observable } from 'rx';

// add rx methods to express
export default function expressRx() {
  return function expressRx(req, res, next) {
    // render to observable stream
    res.render$ = Observable.fromNodeCallback(res.render, res);
    next();
  };
}
