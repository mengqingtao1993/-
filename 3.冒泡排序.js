/**
 * O(n2)
 * 外层循环:负责控制冒到哪里
 * 内层循环:负责具体冒上去
 */
let arr = [33, 43, 21, 6, 22, 7, 96, 4, 32, 5]
function bubble_sort (A) {
  // i指当前轮次最大位置
  for (let i = A.length - 1; i > 0; i--) {
    // j指当前元素
    for (let j = 0; j <= i; j++) {
      if (A[j] > A[j + 1]) {
        swap(A, j, j + 1)
      }
    }
  }
}
function swap (A, i, j) {
  let t = A[i]
  A[i] = A[j]
  A[j] = t
}
bubble_sort(arr)
console.log(arr)