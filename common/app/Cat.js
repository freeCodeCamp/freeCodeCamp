import { Cat } from 'thundercats';
import { HikesActions, HikesStore } from './routes/Hikes/flux';


export default Cat()
  .init(({ instance }) => {
    instance.register(HikesActions);
    instance.register(HikesStore, null, instance);
  });
