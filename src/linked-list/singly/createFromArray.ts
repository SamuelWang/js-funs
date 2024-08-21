import { Node } from './models';

/**
 * Create a linked list from a data array.
 * @typeParam T - Type of the data.
 * @param arr The data array.
 * @returns Return the head node if the data array is not empty; otherwise, return null.
 */
export function createFromArray<T>(arr: T[]): Node<T> | null {
  let head: Node<T> | null = null;
  let prevNode: Node<T> | null = null;

  if (arr.length) {
    head = prevNode = new Node(arr[0]);

    for (let i = 1; i < arr.length; i++) {
      const node = new Node(arr[i]);
      prevNode.next = node;
      prevNode = node;
    }
  }

  return head;
}
