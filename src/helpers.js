export function createMatrix(rows, cols, fill) {
  let arr = [];
  for (let i = 0; i < rows; i++) {
    arr[i] = [];
    for (let j = 0; j < cols; j++) {
      arr[i][j] = fill ? fill : 0;
    }
  }
  return arr;
}