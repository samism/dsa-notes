---
title: Trees
created: '2019-04-17T21:24:29.739Z'
modified: '2019-04-24T23:21:54.808Z'
---

# Trees

## Binary Search Tree

- A tree data structure in which each node has a left and right node
- The node to the left of the root must be less than the root
- The node to the right must be greater than
- Nodes can have 0 - 2 nodes
- Nodes with no left / right children are called *Leaf Nodes*
- The *height* of a tree is the amount of nodes required to get from the root to the farthest leaf node
- Optimal for unsorted data
- If data is completely/mostly sorted, the tree will essentially be a slanted linked list
- A BST is *balanced* if the height of sub-tree to the left and the sub-tree to the right differ by no more than 1, AND if both subtrees' are recursively balanced also.
- `O(n log(n)` For all operations, except `O(n)` if given near-sorted data
- Not used in production because can easily be unbalanced if data is sorted (see AVL tree)

## AVL Trees

- Same as BST, except is self balancing.
- The only difference is on the way up your recursive calls you check to see if the node is balanced after you added the new node.
  - If one subtree's height is more than two greater than the other subtree, you need to do a rotation.
  - If right side is too heavy, do a right-rotation, else do a left-rotation
  - May have to do a double-rotation if the result of the first rotation is still unbalanced (bent shaped)
  - Double rotation: Turn bent into straight -> turn straight into pyramid

![http://btholt.github.io/four-semesters-of-cs/img/avl2.gif](http://btholt.github.io/four-semesters-of-cs/img/avl2.gif)

## Traversal

### Breadth First Search (BFS)

-


### Depth First Search (DFS)

---

http://btholt.github.io/four-semesters-of-cs/


