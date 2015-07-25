import { Cat } from 'thundercats';
import { HikesActions, HikesStore } from './routes/Hikes/flux';
import { AppActions, AppStore } from './flux';

export default Cat()
  .init(({ instance: cat, args: [services] }) => {
    cat.register(AppActions, null, services);
    cat.register(AppStore, null, cat);
    cat.register(HikesActions, null, services);
    cat.register(HikesStore, null, cat);
  });
