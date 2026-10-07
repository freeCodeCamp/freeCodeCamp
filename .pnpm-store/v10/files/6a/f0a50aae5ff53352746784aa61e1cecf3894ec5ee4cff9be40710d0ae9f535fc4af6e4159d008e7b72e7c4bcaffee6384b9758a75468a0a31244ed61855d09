// @flow
import EventEmitter from 'events';
import {child} from './childState';

class Bus extends EventEmitter {
  emit(event: string, ...args: Array<any>): boolean {
    if (child) {
      child.workerApi.callMaster(
        {
          location: __filename,
          method: 'emit',
          args: [event, ...args],
        },
        false,
      );
      return true;
    } else {
      return super.emit(event, ...args);
    }
  }
}

export default (new Bus(): Bus);
