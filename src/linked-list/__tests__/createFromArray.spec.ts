import { createFromArray } from '../createFromArray';
import { Node } from '../models';

describe('Linked List: createFromArray', () => {
  it('should create a linked list from a non-empty array', () => {
    const dataArr: number[] = [5, 1, 9, 0, 8];
    const head: Node<number> | null = createFromArray(dataArr);

    expect(head).not.toBeNull();

    if (head) {
      let index = 0;
      let current: Node<number> | null = head;

      while (current) {
        expect(current.data).toBe(dataArr[index]);
        index++;
        current = current.next;
      }
    }
  });

  it('should return null from an empty array', () => {
    const dataArr: number[] = [];
    const head: Node<number> | null = createFromArray(dataArr);

    expect(head).toBeNull();
  });
});
