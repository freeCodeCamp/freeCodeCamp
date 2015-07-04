import Hikes from './components/Hikes.jsx';

export default {
  path: 'hikes',

  getComponents(cb) {
    setTimeout(() => {
      cb(null, Hikes);
    }, 0);
  }
};
