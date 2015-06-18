import { Store } from 'thundercats';

export default class JobsStore extends Store {
  constructor(cat) {
    super();
    let JobsActions = cat.getActions('JobsActions');
  }
  static displayName = 'JobsStore'
}
