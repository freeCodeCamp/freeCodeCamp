import BrowserHistory from 'react-router/lib/BrowserHistory';
import debugFactory from 'debug';
import { Cat } from 'thundercats';

import AppFactory from '../common/app/appFactory';

const debug = debugFactory('fcc:client');
const DOMContianer = document.getElemenetById('#fCC');
const fcc = new Cat();

// returns an observable
fcc.render(AppFactory(BrowserHistory), DOMContianer)
  .subscribe(
    function() {
      debug('react rendered');
    },
    function(err) {
      debug('an error has occured', err.stack);
    }
  );
