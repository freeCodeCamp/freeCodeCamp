/// <reference path="../concurrency/scheduleditem.ts" />
module Rx {
    export module internals {
        // Priority Queue for Scheduling
        export interface PriorityQueue<TTime> {
            length: number;

            isHigherPriority(left: number, right: number): boolean;
            percolate(index: number): void;
            heapify(index: number): void;
            peek(): ScheduledItem<TTime>;
            removeAt(index: number): void;
            dequeue(): ScheduledItem<TTime>;
            enqueue(item: ScheduledItem<TTime>): void;
            remove(item: ScheduledItem<TTime>): boolean;
        }

        interface PriorityQueueStatic {
                new <T>(capacity: number) : PriorityQueue<T>;
                count: number;
        }

        export var PriorityQueue : PriorityQueueStatic;
    }
}

(function() {
    var queue = new Rx.internals.PriorityQueue<number>(100);
    var n : number = queue.length
    var b : boolean = queue.isHigherPriority(1, 100);
    queue.percolate(100);
    queue.heapify(100);
    var item: Rx.internals.ScheduledItem<number> = queue.peek();
    queue.removeAt(100);
    var item: Rx.internals.ScheduledItem<number> = queue.dequeue();
    queue.enqueue(item);
    b = queue.remove(item);

    n = Rx.internals.PriorityQueue.count;
});
