let arr = [33, 43, 21, 6, 22, 7, 96, 4, 32, 5]
function sort_fn (A) {
  for (let index = 1; index < arr.length; index++) {
    sort_insert(A, index, A[index])
  }
}
function sort_insert (A, i, x) {
  // p指向下一个比较的元素
  // p+1指向空位
  let p = i - 1
  while (A[p] > x && p > 0) {
    A[p + 1] = A[p]
    p--
  }
  A[p + 1] = x
}

sort_fn(arr)
console.log(arr)