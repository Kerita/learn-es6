// 1.字符串遍历接口
{
  var text = String.fromCodePoint(0x20BB7);
  for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
  }
  for (let i of text) {
    console.log(i); // "𠮷"
  }

  let s = "Hello world"
  for (let i of s) {
    console.log(i)
  }
}

// 2.includes() startsWith() endsWith()
// 都支持的第二个参数，表示从哪个位置搜索，endsWith行为不同，表示前几个字符
{
  let s = 'Hello world'
  console.log(s.includes('Hello'))
  console.log(s.startsWith('Hello'))
  console.log(s.endsWith('d'))
}

// 3.repeat(n) 将一个字符重复n次
// 0为空，正数小数取整，负数Infinity报错,其他类型尝试转为数字，NaN跟0一样效果
{
  console.log('kerita'.repeat('4'))
  console.log(Number('k'))
}

//4.padStart() padEnd()
//在字符串前面或者后面补全，前一个参数补充到的长度，后一个参数是用来补全的字符串，没有用空格补全
{
  console.log('kerita'.padEnd(18, 'dorusn'))
}

//5.模板字符串
//利用反引号定义单行字符串、多行字符串以及嵌入变量
// 模板字符串中还可嵌套模板字符串
{
  let name = 'kerita'
  console.log(`My name is 
  kkkkkkk
  ${name}`)
}

//6. String.raw,将所有变量替换，并对字符串进行转义























