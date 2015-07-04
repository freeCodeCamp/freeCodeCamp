import Hikes from './components/Hikes.jsx';

/*
 * show video /hikes/someVideo
 * show question /hikes/someVideo/question1
 */

export default {
  path: 'hikes(/:id)',

  getComponents(cb) {
    setTimeout(() => {
      cb(null, Hikes);
    }, 0);
  }
};
