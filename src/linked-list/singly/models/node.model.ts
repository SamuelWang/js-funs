/**
 * A node of the linked list.
 * @typeParam T - Type of the data.
 */
export class Node<T> {
  /**
   * The data of a node.
   */
  public data: T;

  /**
   * The reference of the next node.
   */
  public next: Node<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}
