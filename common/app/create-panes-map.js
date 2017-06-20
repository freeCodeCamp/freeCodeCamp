import { createPanesMap as routesPanes } from './routes/';

export default function createPanesMap() {
  return {
    ...routesPanes()
  };
}
