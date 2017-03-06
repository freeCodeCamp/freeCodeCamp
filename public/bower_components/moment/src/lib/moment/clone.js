import { Moment } from './constructor';

export function clone () {
    return new Moment(this);
}
