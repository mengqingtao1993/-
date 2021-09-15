/**
 * O(nlgn)
 */

// 合并两个有序数组
let A = [2, 34, 68, 90]
let B = [1, 13, 34, 67, 89, 102]
let AB = [2, 34, 68, 90, 1, 13, 34, 67, 89, 102]
/**
 * 
 * @param {*} a 
 * @param {*} p 左边开始位置
 * @param {*} q 左边结束,右边开始位置
 * @param {*} r 右边结束位置
 */
function merge (a, p, q, r) {
  let A1 = a.slice(p, q)
  // console.log(A1)
  let A2 = a.slice(q, r)
  // console.log(A2)
  // 追加哨兵
  A1.push(Number.MAX_SAFE_INTEGER)
  A2.push(Number.MAX_SAFE_INTEGER)
  for (let i = p, j = 0, k = 0; i < r; i++) {
    // j A1指针
    // k A2指针
    a[i] = A1[j] < A2[k] ? A1[j++] : A2[k++]
  }
}
// merge(AB, 0, 4, 10)
// console.log(AB)


// 合并排序完整实现
function merge_sort (a, p, r) {
  if (r - p < 2) return
  let q = Math.ceil((r + p) / 2)
  merge_sort(a, p, q)
  merge_sort(a, q, r)
  console.log(p, q, r)
  merge(a, p, q, r)
}
merge_sort(AB, 0, 10)
console.log(AB)