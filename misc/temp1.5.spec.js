const input = [4, 35, 80, 123, 12345, 44, 8, 5, 24, 3, 22, 35, 64];

const columnCount1 = 4;
const columnCount2 = 8;
const columnCount3 = 1;
const columnCount4 = 12;
const columnCount5 = 20;
const columnCount6 = 0;

function getLongestNumberLength(numberList) {
  let longest = 0;

  for (let i = 0; i < numberList.length; i++) {
    const curLength = numberList[i].toString().length;

    if (curLength > longest) {
      longest = curLength;
    }
  }

  return longest;
}

function printEdgeRow(maxDashes, columns) {
  const lineOfOutput = [];

  lineOfOutput.push('+');

  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < maxDashes; j++) {
      lineOfOutput.push('-');
    }
    lineOfOutput.push('+');
  }

  return lineOfOutput.join('');
}

function printNumberRow(maxCharsInColumn, numbers) {
  const lineOfOutput = ['|'];

  for (let i = 0; i < numbers.length; i++) {
    const lineOfOutputOfCurrentNumber = numbers[i].toString().length;

    for (let j = 0; j < maxCharsInColumn - lineOfOutputOfCurrentNumber; j++) {
      lineOfOutput.push(' ');
    }

    lineOfOutput.push(numbers[i]);

    if (i < numbers.length - 1) {
      lineOfOutput.push('|');
    }
  }

  lineOfOutput.push('|');

  return lineOfOutput.join('');
}

function solution(inputList, columnCount) {
  if (!inputList || inputList.length < 1 || columnCount < 1) {
    return null;
  }

  const individualColumnLength = getLongestNumberLength(inputList);

  const output = [];

  for (let i = 0; i < inputList.length; i += columnCount) {
    const columnToPrint = inputList.slice(i, i + columnCount);

    if (i === 0) {
      output.push(
        printEdgeRow(
          individualColumnLength,
          Math.min(columnCount, columnToPrint.length)
        )
      );
    }

    output.push(printNumberRow(individualColumnLength, columnToPrint));
    output.push(
      printEdgeRow(
        individualColumnLength,
        Math.min(columnCount, columnToPrint.length)
      )
    );

    output.forEach(line => console.log(line));
    output.splice(0);
  }
}

solution(input, columnCount1);
console.log('\n');

solution(input, columnCount2);
console.log('\n');

solution(input, columnCount3);
console.log('\n');

solution(input, columnCount4);
console.log('\n');

solution(input, columnCount5);
console.log('\n');

solution(input, columnCount6);
console.log('\n');

solution([input[0], input[1]], 4);
