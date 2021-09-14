/**
 * 在有序数组中查找值
 */
function bsearch (arr, target) {
  let l = 0,
    r = arr.length - 1,
    g
  while (l <= r) {
    g = Math.floor((r + l) / 2)
    if (arr[g] === target) return g
    else if (arr[g] > target) r = g - 1
    else l = g + 1
  }
  return -1
}



let a = [0, 2, 3, 4, 7, 9, 14, 23, 34, 44, 56, 65, 66, 78, 90, 102]
console.log(bsearch(a, 22))
console.log(bsearch(a, 34))
console.log(bsearch(a, 102))