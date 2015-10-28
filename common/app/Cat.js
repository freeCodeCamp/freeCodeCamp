import { Cat } from 'thundercats';

import { AppActions, AppStore } from './flux';
import { HikesActions, HikesStore } from './routes/Hikes/flux';
import { JobActions, JobsStore} from './routes/Jobs/flux';

export default Cat()
  .init(({ instance: cat, args: [services] }) => {
    cat.register(AppActions, null, services);
    cat.register(AppStore, null, cat);

    cat.register(HikesActions, null, services);
    cat.register(HikesStore, null, cat);

    cat.register(JobActions, null, cat, services);
    cat.register(JobsStore, null, cat);
  });
