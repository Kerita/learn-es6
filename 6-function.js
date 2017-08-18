
// 1.函数参数的默认值，ES6之前不能直接设置
let p = 10
function log (x = ++p) { // ES6写法
  // x = x || 1 ,当传入的x为falsy值，也会被默认值覆盖,当然下面传入undefined也会错误
  // if(typeof x === undefined) {
  //   x = 1
  // }
  // var x = 2
  console.log(x)
}

log()

console.log(p)

log(1)
console.log(p)
// 2. 函数属性length

console.log((function log2(x,y, z) {}).length)
console.log(log.length)

// 3. reset参数（形式为...参数名）
function add(...value) {
  console.log(value.sort())
}

add(1,3,5,-1)

function addAnother() {
  console.log([].slice.call(arguments).sort())
  console.log(Array.prototype.slice.call(arguments).sort())
}

addAnother(1,5,2,-1)

// 4. name属性

var f = function () {
  console.log('f')
}

console.log(f.name)

// 5.箭头函数

const full = ({first, last}) => first + ' ' + last

console.log(full({first:'kerita',last:'chan'}))

var arr = [1,2,3].map(x => x * x)
console.log(arr)

// 6. 箭头函数中的this
// 箭头函数没有自己的this，所以无法用call,bind,apply去改变this的指向，也没有arguments对象，用rest获取
// 箭头函数内的this就是定义时所在的对象

function Timer () {
  this.s1 = 0
  this.s2 = 0

  setInterval(() => this.s1++, 1000)
  setInterval(function () {
    this.s2++
  },1000)
}

// var timer = new Timer()
// setTimeout(() => console.log('s1:',timer.s1), 3100)
// setTimeout(() => console.log('s2:', timer.s2), 3100)

// 7. pipeline
const pipeline = (...funcs) =>
  val => funcs.reduce((a, b) => b(a), val);

const plus1 = a => a + 1;
const mult2 = a => a * 2;
const addThenMult = pipeline(plus1, mult2);

console.log(addThenMult(5))

// 8. 尾调用 Tail Call 尾调用优化：不用到外部函数变量时，只保留内部函数的调用帧
function f () {
  let m = 1
  let n = 2
  return  g(m+n)
}


// 9.尾调用实现尾递归优化
function fibonacci(n, total) {
  if (n === 1) return total
  return fibonacci(n-1, total * n)
}

console.log(fibonacci(5,1))

// 10. currying柯里化
function curry(fn, n) {
  return fn.call(this,m,n)
}







