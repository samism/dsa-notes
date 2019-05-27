const input1 = '42';
const input2 = '   -42';
const input3 = '4193 with words';
const input4 = 'words and 987';
const input5 = '-91283472332';
const input6 = '   +0 123';
const input7 = '3.14159';
const input8 = '  -0012a42';
const input9 = '010';
const input10 = '     +004500';

const output1 = 42;
const output2 = -42;
const output3 = 4193;
const output4 = 0;
const output5 = -2147483648;
const output6 = 0;
const output7 = 3;
const output8 = -12;
const output9 = 10;
const output10 = 4500;

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  str = str.trim();

  let integer = '';
  let sign = str.charAt(0) === '-' ? -1 : 1;

  for (const [index, currentChar] of str.split('').entries()) {
    if (isNaN(parseInt(currentChar))) {
      if (index === 0 && (str.charAt(0) === '-' || str.charAt(0) === '+')) {
        //skip sign
        continue;
      } else if (!isNaN(parseInt(integer))) {
        //return as much of a number as we can
        break;
      } else {
        return 0;
      }
    } else {
      //skip random starting 0's if we've established a non-zero number already
      if (currentChar === '0' && isNaN(parseInt(integer))) {
        continue;
      }
      integer += currentChar;
    }
  }

  integer *= sign; //also accomplishes parseInt()

  if (integer > 2147483648 - 1) {
    return 2147483648 - 1;
  } else if (integer < -2147483648) {
    return -2147483648;
  }
  return integer;
};

it('should pass with the O(n) approach', function() {
  expect(myAtoi(input1)).toEqual(output1);
  expect(myAtoi(input2)).toEqual(output2);
  expect(myAtoi(input3)).toEqual(output3);
  expect(myAtoi(input4)).toEqual(output4);
  expect(myAtoi(input5)).toEqual(output5);
  expect(myAtoi(input6)).toEqual(output6);
  expect(myAtoi(input7)).toEqual(output7);
  expect(myAtoi(input8)).toEqual(output8);
  expect(myAtoi(input9)).toEqual(output9);
  expect(myAtoi(input10)).toEqual(output10);
});
