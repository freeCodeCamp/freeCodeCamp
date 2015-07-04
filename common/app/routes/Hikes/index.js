import Hikes from './components/Hikes.jsx';

export default {
  path: 'hikes(/:id)',

  getComponents(cb) {
    setTimeout(() => {
      cb(null, Hikes);
    }, 0);
  }
};
