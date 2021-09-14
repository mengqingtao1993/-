/**
 * 在有序数组中插入一项
 */
let a = [2, 4, 7, 9, 14]
let target = 1
// // js原始实现
// let b = a.find(x => x > target)
// if (b) {
//   let index = a.indexOf(b)
//   a.splice(index, 0, target)
// } else {
//   a.push(target)
// }
// console.log(a)
// // 优化一下
// let c = a.find(x => x > target)
// let indexc = a.indexOf(c)
// a.splice(indexc === -1 ? a.length : indexc, 0, target)
// console.log(a)

// 函数实现
function insert (a, target) {
  // p指向下一个比较的元素
  // p+1指向空位,等待插入
  let p = a.length - 1
  while (a[p] > target && p >= 0) {
    a[p + 1] = a[p]
    p--
  }
  a[p + 1] = target
}
insert(a, target)
console.log(a)

// 完整插入排序实现
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
  while (A[p] > x && p >= 0) {
    A[p + 1] = A[p]
    p--
  }
  A[p + 1] = x
}

sort_fn(arr)
console.log(arr)