/**
 * A singly node of the linked list.
 * @typeParam T - Type of the data.
 */
export class SinglyNode<T> {
  /**
   * The data of a node.
   */
  public data: T;

  /**
   * The reference of the next node.
   */
  public next: SinglyNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}
