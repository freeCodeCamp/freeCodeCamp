import { AsyncScheduler } from './AsyncScheduler';
export class AsapScheduler extends AsyncScheduler {
    flush(action) {
        this.active = true;
        this.scheduled = undefined;
        const { actions } = this;
        let error;
        let index = -1;
        let count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    }
}
//# sourceMappingURL=AsapScheduler.js.map