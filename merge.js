function merge(start, end) {
  let sortedArr = []
  while (start.length && end.length) {
    start[0] > end[0]  ? sortedArr.push(end.shift()) : sortedArr.push(start.shift())
  }
  return [...sortedArr, ...start, ...end]
}
function mergeSort(array) {
  if (array.length <= 1) return array 
  const half = array.length / 2
  return merge(mergeSort(array.splice(0,half)), mergeSort(end));
}