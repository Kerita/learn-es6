// 1. Number.isFinity() Number.isNaN 与 全局isFinity(), isNaN()区别
// Number方法，只要非Number类型/非NaN就返回false，Number下会先转换
if (Infinity+1 > Infinity) {
  console.log(true)
} else {
  console.log(false) // false
}

console.log(isFinite('26')) // true
console.log(Number.isFinite('26')) //false
console.log(isNaN(1)) // false

// 2. NaN不等于自己
console.log(NaN == NaN) //false

// 3. Number.isInteger() JS中3与3.0都为整数，因为浮点数和整数的存储方法一样。
console.log(Number.isInteger(3))
console.log(Number.isInteger(3.0))
console.log(Number.isInteger(3.2))

// 4. Number.EPSILON,对于浮点数计算，如果小于Number.EPSILON，就可以认为是正确的

if (0.1 +　0.2 - 0.3 < Number.EPSILON) {
  console.log(true)
}

// 5. Number.isSafeInteger() -2^53到2^53之间 Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER
//当一个数超过范围，就会不准确
console.log(Math.pow(2,53)+1 === Math.pow(2,53))
console.log(-Math.pow(2,53)-1 === -Math.pow(2,53))

// 6. ES6增加17个数学相关的静态函数，只能在Math上调用
// Math.trunc() 去除小数
console.log(Math.trunc('te'))
console.log(Math.trunc(-1.09))
Math.trunc = Math.trunc || function(x) {
  return x < 0 ? Math.ceil(x) : Math.floor(x);
};

// Math.hypot() 返回所有参数平方和的平方根
console.log(Math.hypot(3,4))

// 7.Integer类型用于金融和科学计算,提案状态
// console.log(typeof 1n+2n)
// console.log(Integer)





















