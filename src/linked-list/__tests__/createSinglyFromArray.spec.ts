import { createSinglyFromArray } from '../createSinglyFromArray';
import { SinglyNode } from '../models';

describe('Linked List: createFromArray', () => {
  it('should create a linked list from a non-empty array', () => {
    const dataArr: number[] = [5, 1, 9, 0, 8];
    const head: SinglyNode<number> | null = createSinglyFromArray(dataArr);

    expect(head).not.toBeNull();

    if (head) {
      let index = 0;
      let current: SinglyNode<number> | null = head;

      while (current) {
        expect(current.data).toBe(dataArr[index]);
        index++;
        current = current.next;
      }
    }
  });

  it('should return null from an empty array', () => {
    const dataArr: number[] = [];
    const head: SinglyNode<number> | null = createSinglyFromArray(dataArr);

    expect(head).toBeNull();
  });
});
