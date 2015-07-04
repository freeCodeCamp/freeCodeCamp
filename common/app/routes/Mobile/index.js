import Mobile from './components/Mobile.jsx';

export default {
  path: 'mobile',

  getComponents(cb) {
    setTimeout(() => {
      cb(null, Mobile);
    }, 0);
  }
};
