
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined) {
        return []};
    let newArray = [];
    for (let i=0; i <matrix.length; i+=1) {
      const unpacked = (index, matrix) => {
        switch (index) {
          case 0: return matrix[i];
          case 1: return matrix[i].reverse();
          case 2: return matrix[i];
          case 3: return matrix[i].reverse();
          default: return matrix[i];
        }
      }
      newArray.push(...unpacked(i, matrix))

      
      
    }
  return newArray;
}

const matrix = [
    [1, 2, 4],
    [5, 6, 7, 8],
    [9, 12],
];
