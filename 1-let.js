// 1. 块作用域
// 2. 因有1，所以每次循环中,i都是一个重新声明的变量
// 3. let没有hoist特性
// 4. 暂时性死区，只要有块中有let或者const，这个区块都被let或者const接管,在let/const声明前使用都会报错，包括typeof,但没有任何定义就使用是undefined
var a = []
for (let i=0; i < 10; i++) {
  a[i] = function () {
    console.log(i)
  }
}

a[6]()

var b = []
for (let i=0; i < 10; i++) {
 b[i] = (function (i) {
   return function () {
     console.log(i)
   }
 })(i)
}

b[6]()


var x = x
console.log(x)

