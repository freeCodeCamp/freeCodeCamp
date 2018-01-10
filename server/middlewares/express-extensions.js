import { Observable } from 'rx';

// add rx methods to express
export default function() {
  return function expressExtensions(req, res, next) {
    // express flash will overwrite render with one that will
    // dump flash messages to locals on every call to render
    // Use this when that behavior is not wanted
    res.renderWithoutFlash = res.render;
    // render to observable stream using build in render
    res.render$ = Observable.fromNodeCallback(res.render, res);
    next();
  };
}
