import * as Arr from "../../Array.js";
import * as Option from "../../Option.js";
/** @internal */
export const Direction = {
  Forward: 0,
  Backward: 1 << 0
};
/** @internal */
export class RedBlackTreeIterator {
  self;
  stack;
  direction;
  count = 0;
  constructor(self, stack, direction) {
    this.self = self;
    this.stack = stack;
    this.direction = direction;
  }
  /**
   * Clones the iterator
   */
  clone() {
    return new RedBlackTreeIterator(this.self, this.stack.slice(), this.direction);
  }
  /**
   * Reverse the traversal direction
   */
  reversed() {
    return new RedBlackTreeIterator(this.self, this.stack.slice(), this.direction === Direction.Forward ? Direction.Backward : Direction.Forward);
  }
  /**
   * Iterator next
   */
  next() {
    const entry = this.entry;
    this.count++;
    if (this.direction === Direction.Forward) {
      this.moveNext();
    } else {
      this.movePrev();
    }
    switch (entry._tag) {
      case "None":
        {
          return {
            done: true,
            value: this.count
          };
        }
      case "Some":
        {
          return {
            done: false,
            value: entry.value
          };
        }
    }
  }
  /**
   * Returns the key
   */
  get key() {
    if (this.stack.length > 0) {
      return Option.some(this.stack[this.stack.length - 1].key);
    }
    return Option.none();
  }
  /**
   * Returns the value
   */
  get value() {
    if (this.stack.length > 0) {
      return Option.some(this.stack[this.stack.length - 1].value);
    }
    return Option.none();
  }
  /**
   * Returns the key
   */
  get entry() {
    return Option.map(Arr.last(this.stack), node => [node.key, node.value]);
  }
  /**
   * Returns the position of this iterator in the sorted list
   */
  get index() {
    let idx = 0;
    const stack = this.stack;
    if (stack.length === 0) {
      const r = this.self._root;
      if (r != null) {
        return r.count;
      }
      return 0;
    } else if (stack[stack.length - 1].left != null) {
      idx = stack[stack.length - 1].left.count;
    }
    for (let s = stack.length - 2; s >= 0; --s) {
      if (stack[s + 1] === stack[s].right) {
        ++idx;
        if (stack[s].left != null) {
          idx += stack[s].left.count;
        }
      }
    }
    return idx;
  }
  /**
   * Advances iterator to next element in list
   */
  moveNext() {
    const stack = this.stack;
    if (stack.length === 0) {
      return;
    }
    let n = stack[stack.length - 1];
    if (n.right != null) {
      n = n.right;
      while (n != null) {
        stack.push(n);
        n = n.left;
      }
    } else {
      stack.pop();
      while (stack.length > 0 && stack[stack.length - 1].right === n) {
        n = stack[stack.length - 1];
        stack.pop();
      }
    }
  }
  /**
   * Checks if there is a next element
   */
  get hasNext() {
    const stack = this.stack;
    if (stack.length === 0) {
      return false;
    }
    if (stack[stack.length - 1].right != null) {
      return true;
    }
    for (let s = stack.length - 1; s > 0; --s) {
      if (stack[s - 1].left === stack[s]) {
        return true;
      }
    }
    return false;
  }
  /**
   * Advances iterator to previous element in list
   */
  movePrev() {
    const stack = this.stack;
    if (stack.length === 0) {
      return;
    }
    let n = stack[stack.length - 1];
    if (n != null && n.left != null) {
      n = n.left;
      while (n != null) {
        stack.push(n);
        n = n.right;
      }
    } else {
      stack.pop();
      while (stack.length > 0 && stack[stack.length - 1].left === n) {
        n = stack[stack.length - 1];
        stack.pop();
      }
    }
  }
  /**
   * Checks if there is a previous element
   */
  get hasPrev() {
    const stack = this.stack;
    if (stack.length === 0) {
      return false;
    }
    if (stack[stack.length - 1].left != null) {
      return true;
    }
    for (let s = stack.length - 1; s > 0; --s) {
      if (stack[s - 1].right === stack[s]) {
        return true;
      }
    }
    return false;
  }
}
//# sourceMappingURL=iterator.js.map