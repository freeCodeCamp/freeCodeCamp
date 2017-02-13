import { Observable } from 'rx';
import {
  fetchChallenges
} from '../../common/app/routes/challenges/redux/actions';

let seedChanged = false;
const socket = new WebSocket('ws://localhost:4000');
socket.onopen = () => {
  socket.send('handshake');
};
export default function challengeSeedChangedSaga(actions$) {
  return Observable.zip(
      Observable.timer(1000, 1000),
      actions$,
      (a, b) => b
    )
    .selectMany(() => {
    socket.onmessage = (e) => {
      if (e.data === 'seedChanged') {
        seedChanged = true;
      }
    };
    if (seedChanged) {
      seedChanged = false;
      return Observable.of(fetchChallenges());
    }
    return Observable.just(null);
  });
}
