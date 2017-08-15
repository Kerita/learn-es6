// 1.交换值
{
  let x = 2;

  let y = 1;

  [x, y] = [y,x]

  console.log(x,y)
}

// 2.遍历中应用
{
  var map  = new Map()

  map.set('a', 'hello')
  map.set('b', 'word')

  for(let [key,value] of map) {
    console.log(key,value)
  }
}


















