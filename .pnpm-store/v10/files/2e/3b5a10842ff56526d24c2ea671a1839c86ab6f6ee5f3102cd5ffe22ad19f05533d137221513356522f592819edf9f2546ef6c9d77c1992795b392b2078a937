interface ITaskQueueNode<ValueType> {
    value: ValueType;
    next?: ITaskQueueNode<ValueType>;
    prev?: ITaskQueueNode<ValueType>;
}
/**
 * Task queue implemented with doubly linked list
 */
export declare class TaskQueue<ValueType> {
    private head?;
    private tail?;
    [Symbol.iterator](): Iterator<ITaskQueueNode<ValueType>>;
    /**
     * Puts new task at the end of the list
     * @param task Task to add to the queue
     */
    enqueue(task: ValueType): void;
    /**
     * Remove a task node from the queue
     * @param taskNode Queue's node to remove
     */
    remove(taskNode: ITaskQueueNode<ValueType>): void;
}
export {};
