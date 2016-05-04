import { Observable } from 'rx';

export default function extendEmail(app) {
  const { Email } = app.models;
  Email.send$ = Observable.fromNodeCallback(Email.send, Email);
}
