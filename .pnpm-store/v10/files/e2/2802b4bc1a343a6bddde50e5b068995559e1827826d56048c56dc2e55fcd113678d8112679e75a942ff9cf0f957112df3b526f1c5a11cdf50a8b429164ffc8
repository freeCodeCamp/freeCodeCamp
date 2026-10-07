"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueOrPromise = void 0;
function isPromiseLike(object) {
    return (object != null && typeof object.then === 'function');
}
const defaultOnRejectedFn = (reason) => {
    throw reason;
};
class ValueOrPromise {
    constructor(executor) {
        let value;
        try {
            value = executor();
        }
        catch (reason) {
            this.state = { status: 'rejected', value: reason };
            return;
        }
        if (isPromiseLike(value)) {
            this.state = { status: 'pending', value };
            return;
        }
        this.state = { status: 'fulfilled', value };
    }
    then(onFulfilled, onRejected) {
        const state = this.state;
        if (state.status === 'pending') {
            return new ValueOrPromise(() => state.value.then(onFulfilled, onRejected));
        }
        const onRejectedFn = typeof onRejected === 'function' ? onRejected : defaultOnRejectedFn;
        if (state.status === 'rejected') {
            return new ValueOrPromise(() => onRejectedFn(state.value));
        }
        try {
            const onFulfilledFn = typeof onFulfilled === 'function' ? onFulfilled : undefined;
            return onFulfilledFn === undefined
                ? new ValueOrPromise(() => state.value)
                : new ValueOrPromise(() => onFulfilledFn(state.value));
        }
        catch (e) {
            return new ValueOrPromise(() => onRejectedFn(e));
        }
    }
    catch(onRejected) {
        return this.then(undefined, onRejected);
    }
    resolve() {
        const state = this.state;
        if (state.status === 'pending') {
            return Promise.resolve(state.value);
        }
        if (state.status === 'rejected') {
            throw state.value;
        }
        return state.value;
    }
    static all(valueOrPromises) {
        let rejected = false;
        let reason;
        let containsPromise = false;
        const values = [];
        for (const valueOrPromise of valueOrPromises) {
            const state = valueOrPromise.state;
            if (state.status === 'rejected') {
                if (rejected) {
                    continue;
                }
                rejected = true;
                reason = state.value;
                continue;
            }
            if (state.status === 'pending') {
                containsPromise = true;
            }
            values.push(state.value);
        }
        if (containsPromise) {
            if (rejected) {
                Promise.all(values).catch(() => {
                    // Ignore errors
                });
                return new ValueOrPromise(() => {
                    throw reason;
                });
            }
            return new ValueOrPromise(() => Promise.all(values));
        }
        return new ValueOrPromise(() => values);
    }
}
exports.ValueOrPromise = ValueOrPromise;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsdWVPclByb21pc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvVmFsdWVPclByb21pc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsU0FBUyxhQUFhLENBQUksTUFBZTtJQUN2QyxPQUFPLENBQ0wsTUFBTSxJQUFJLElBQUksSUFBSSxPQUFRLE1BQXlCLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FDeEUsQ0FBQztBQUNKLENBQUM7QUFtQkQsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLE1BQWUsRUFBRSxFQUFFO0lBQzlDLE1BQU0sTUFBTSxDQUFDO0FBQ2YsQ0FBQyxDQUFDO0FBRUYsTUFBYSxjQUFjO0lBR3pCLFlBQVksUUFBa0M7UUFDNUMsSUFBSSxLQUF5QixDQUFDO1FBRTlCLElBQUk7WUFDRixLQUFLLEdBQUcsUUFBUSxFQUFFLENBQUM7U0FDcEI7UUFBQyxPQUFPLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQztZQUNuRCxPQUFPO1NBQ1I7UUFFRCxJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQztZQUMxQyxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBRU0sSUFBSSxDQUNULFdBR1EsRUFDUixVQUdRO1FBRVIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUV6QixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQzlCLE9BQU8sSUFBSSxjQUFjLENBQUMsR0FBRyxFQUFFLENBQzdCLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FDMUMsQ0FBQztTQUNIO1FBRUQsTUFBTSxZQUFZLEdBQ2hCLE9BQU8sVUFBVSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQztRQUV0RSxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssVUFBVSxFQUFFO1lBQy9CLE9BQU8sSUFBSSxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQzVEO1FBRUQsSUFBSTtZQUNGLE1BQU0sYUFBYSxHQUNqQixPQUFPLFdBQVcsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBRTlELE9BQU8sYUFBYSxLQUFLLFNBQVM7Z0JBQ2hDLENBQUMsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBNEIsQ0FBQztnQkFDOUQsQ0FBQyxDQUFDLElBQUksY0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsS0FBVSxDQUFDLENBQUMsQ0FBQztTQUMvRDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsT0FBTyxJQUFJLGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsRDtJQUNILENBQUM7SUFFTSxLQUFLLENBQ1YsVUFHUTtRQUVSLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVNLE9BQU87UUFDWixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRXpCLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDOUIsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyQztRQUVELElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxVQUFVLEVBQUU7WUFDL0IsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQ25CO1FBRUQsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUE0Rk0sTUFBTSxDQUFDLEdBQUcsQ0FDZixlQUFpRDtRQUVqRCxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxNQUFlLENBQUM7UUFDcEIsSUFBSSxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBRTVCLE1BQU0sTUFBTSxHQUE4QixFQUFFLENBQUM7UUFDN0MsS0FBSyxNQUFNLGNBQWMsSUFBSSxlQUFlLEVBQUU7WUFDNUMsTUFBTSxLQUFLLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQztZQUVuQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssVUFBVSxFQUFFO2dCQUMvQixJQUFJLFFBQVEsRUFBRTtvQkFDWixTQUFTO2lCQUNWO2dCQUNELFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ2hCLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO2dCQUNyQixTQUFTO2FBQ1Y7WUFFRCxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO2dCQUM5QixlQUFlLEdBQUcsSUFBSSxDQUFDO2FBQ3hCO1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDMUI7UUFFRCxJQUFJLGVBQWUsRUFBRTtZQUNuQixJQUFJLFFBQVEsRUFBRTtnQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7b0JBQzdCLGdCQUFnQjtnQkFDbEIsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsT0FBTyxJQUFJLGNBQWMsQ0FBQyxHQUFHLEVBQUU7b0JBQzdCLE1BQU0sTUFBTSxDQUFDO2dCQUNmLENBQUMsQ0FBQyxDQUFDO2FBQ0o7WUFFRCxPQUFPLElBQUksY0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN0RDtRQUVELE9BQU8sSUFBSSxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBa0IsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Q0FDRjtBQXRORCx3Q0FzTkMifQ==