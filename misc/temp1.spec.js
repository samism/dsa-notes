const A1 = [4, 35, 80, 123, 12345, 44, 8, 5, 24, 3, 22, 35];

const K1 = 4;
const K2 = 8;
const K3 = 1;
const K4 = 12;
const K5 = 20;
const K6 = 0;

function solution(A, K) {
  if (K < 1) return null;
  const maxCharsInColumn = getLongestNumberLength(A);

  console.log(printEdgeRow(maxCharsInColumn, Math.min(K, A.length)));
  console.log(printNumberRow(maxCharsInColumn, A, K));
  // console.log(printEdgeRow(maxCharsInColumn, Math.min(K, A.length)));
}

function getLongestNumberLength(A1) {
  let longest = 0;

  for (let i = 0; i < A1.length; i++) {
    const curLength = A1[i].toString().length;

    if (curLength > longest) {
      longest = curLength;
    }
  }

  return longest;
}

function printEdgeRow(maxDashes, columns) {
  const characters = [];

  characters.push('+');

  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < maxDashes; j++) {
      characters.push('-');
    }
    characters.push('+');
  }

  return characters.join('');
}

function printNumberRow(maxDigits, numbers, columns) {
  const characters = [];

  characters.push('|');

  for (let i = 0; i <= numbers.length; i++) {
    if (i === numbers.length && numbers.length % columns !== 0) {
      characters.push(
        '\n' + printEdgeRow(maxDigits, Math.min(columns, i % columns))
      );
    }

    if (i % columns === 0 && i > 0) {
      characters.push('\n');
      characters.push(printEdgeRow(maxDigits, columns));

      if (i < numbers.length) {
        characters.push('\n|');
      }
    }

    for (
      let j = 0;
      j < (numbers[i] ? maxDigits - numbers[i].toString().length : maxDigits);
      j++
    ) {
      characters.push(' ');
    }

    characters.push(numbers[i]);

    if (i < numbers.length) {
      characters.push('|');
    }
  }

  return characters.join('');
}

solution(A1, K1);
console.log('\n')
solution(A1, K2);
console.log('\n')
solution(A1, K3);
console.log('\n')
solution(A1, K4);
console.log('\n')
solution(A1, K5);
console.log('\n')
solution(A1, K6);
// it('should pass with the naive approach', function() {
//   expect(solution(A1, K1)).toEqual(output1);
//   // expect(solution(input2)).toEqual(output2);
// });
