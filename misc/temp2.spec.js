const rank1 = [3, 4, 3, 0, 2, 2, 3, 0, 0];
const rank2 = [4, 2, 0];
const rank3 = [4, 4, 3, 3, 1, 0];

const n1 = 5;
const n2 = 0;
const n3 = 3;

function solution(ranks) {
  let numberOfReports = 0;

  const superiors = new Set(); //hash set: superior, number of them

  for (let i = 0; i < ranks.length; i++) {
    superiors.add(ranks[i]);
  }

  for (let i = 0; i < ranks.length; i++) {
    if (superiors.has(ranks[i] + 1)) {
      numberOfReports++;
    }
  }

  return numberOfReports;
}

it('should pass with the naive approach', function() {
  expect(solution(rank1)).toEqual(n1);
  expect(solution(rank2)).toEqual(n2);
  expect(solution(rank3)).toEqual(n3);
});
