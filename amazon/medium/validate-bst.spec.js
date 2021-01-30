const input1 = [2, 1, 3];
const input2 = [5, 1, 4, null, null, 3, 6];

const output2 = true;
const output2 = false;

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  for(let i = 0; i < root.length; i++) {
    if(i === 0) {
      continue;
    }

    const range = Math.pow(2, i); //number of nodes on this level

    

  }
};

it('should pass with the naive approach', function() {
  expect(isValidBST(input1)).toEqual(output1);
  expect(isValidBST(input2)).toEqual(output2);
});
