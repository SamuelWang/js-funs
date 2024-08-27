import { SinglyNode } from './models';

/**
 * Create a singly linked list from a data array.
 * @typeParam T - Type of the data.
 * @param arr The data array.
 * @returns Return the head node if the data array is not empty; otherwise, return null.
 */
export function createSinglyFromArray<T>(arr: T[]): SinglyNode<T> | null {
  let head: SinglyNode<T> | null = null;
  let prevNode: SinglyNode<T> | null = null;

  if (arr.length) {
    head = prevNode = new SinglyNode(arr[0]);

    for (let i = 1; i < arr.length; i++) {
      const node = new SinglyNode(arr[i]);
      prevNode.next = node;
      prevNode = node;
    }
  }

  return head;
}
