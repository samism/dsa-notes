const input = [
  'mi2 jog mid pet',
  'wz3 34 54 398',
  'a1 alps cow bar',
  'x4 45 21 7'
];
const n = 4;

const output = [
  'a1 alps cow bar',
  'mi2 jog mid pet',
  'wz3 34 54 398',
  'x4 45 21 7'
];

function orderedJunctionBoxes(numberOfBoxes, boxList) {
  const existingBoxes = [...boxList];
  const newBoxList = [],
    oldBoxList = [];

  for (const junctionBox of existingBoxes) {
    const [, version] = junctionBox.split(' ');
    if (!isNaN(version.replace(' ', ''))) {
      //has numbers, is new string
      newBoxList.push(junctionBox);
    } else {
      oldBoxList.push(junctionBox);
    }
  }

  oldBoxList.sort((a, b) => {
    const [identifierA, versionA] = a.split(' ');
    const [identifierB, versionB] = b.split(' ');

    if (versionA === versionB) {
      return identifierA > identifierB;
    }

    return versionA > versionB;
  });

  return [...oldBoxList, ...newBoxList];
}

it('should pass with the naive approach', function() {
  expect(orderedJunctionBoxes(n, input)).toEqual(output);
});
