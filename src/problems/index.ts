import { ListNode } from "@/src/shared/types";
import {
  createLinkedList,
  linkedListToArray,
} from "@/src/shared/utils/list-node";

export const reverseList = (head: ListNode | null): ListNode | null => {
  return head;
};

const input = createLinkedList([1, 2, 3, 4]);
const result = reverseList(input);

console.log(linkedListToArray(result));
