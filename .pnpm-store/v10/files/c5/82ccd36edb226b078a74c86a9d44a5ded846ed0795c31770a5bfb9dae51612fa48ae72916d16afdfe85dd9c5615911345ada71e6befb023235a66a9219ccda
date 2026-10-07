type ListNode<T, K> = {
	key: K;
	next: undefined | ListNode<T, K>;
	value: T;
};
type RootNode<T, K> = {
	next: undefined | ListNode<T, K>;
};

export function listGetNode<T, K>(list: RootNode<T, K>, key: ListNode<T, K>['key'], isDelete?: boolean): ListNode<T, K> | undefined;
export function listGet<T, K>(objects: undefined | RootNode<T, K>, key: ListNode<T, K>['key']): T | undefined;
export function listSet<T, K>(objects: RootNode<T, K>, key: ListNode<T, K>['key'], value: T): void;
export function listHas<T, K>(objects: undefined | RootNode<T, K>, key: ListNode<T, K>['key']): boolean;
export function listDelete<T, K>(objects: undefined | RootNode<T, K>, key: ListNode<T, K>['key']): ListNode<T, K> | undefined;
