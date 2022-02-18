# 微任务与宏任务

## 基本概述

因为 js 是单线程语言，也就是说只有一个人来干活，所以不可能同时干多个事情，所以就会产生任务队列和优先级，任务队列一般分为三个，一个是**主任务**，优先级最大，其次是**微任务**，最后是**宏任务**

见下面代码

```js
setTimeout(() => {
  console.log('定时器')
}, 0)

new Promise(() => {
  console.log('promise')
})

Promise.resolve((res) => {
  console.log('resolve')
})

console.log('主线程')
```

打印结果是：

```
promise
主线程
resolve
定时器
```

因为 `setTimeout` 属于是宏任务，所以最后执行，`pending` 状态的 `Promise` 也是属于主任务，所以最先执行，`resolve` 状态的 `Promise` 属于是异步函数，它属于 `微任务`，所以要等主线执行完再执行，最后一段代码是主任务，因为它是第二个主任务，所以第二个执行。

## 定时器任务编排

使用 `setTimeout` 来举例，下面定义一个 4 毫秒后执行的定时器，但是它并不是真正的 4 毫秒之后就会执行，一定要等主线程执行完毕之后再执行

```js
setTimeout(() => console.log('哈哈'), 4)

for (let i = 0; i < 10000; i++) {
  console.log('1')
}
console.log('循环结束')
```

## DOM 渲染任务

如果我们将外部引入的 `*.js` 文件全部放在 dom 渲染之前进行加载，那么载入的时候就需要先将引入的文件全部加载完成之后再进行渲染 dom，那么就会产生加载白屏的状态，所以需要将外部加载的模块放在 dom 渲染之后加载

**反例**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <script src="./js/1.js"></script>
  </head>

  <body>
    <h1>hello</h1>
  </body>
</html>
```

**推荐的**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>

  <body>
    <h1>hello</h1>
    <script src="./js/1.js"></script>
  </body>
</html>
```

## 进度条例子

```html
<style>
  #sel {
    height: 20px;
    background-color: green;
  }
</style>

<div id="sel"></div>
<script>
  function handle() {
    let i = 0
    ;(function run() {
      sel.innerHTML = i
      sel.style.width = i + '%'
      if (++i <= 100) {
        setTimeout(run, 20)
      }
    })()
  }

  handle()
</script>
```

## Promise 微任务处理复杂业务

```js
async function load(num) {
  const res = await Promise.resolve().then((_) => {
    let count = 0
    for (let i = 0; i < num; i++) {
      count += num--
    }
    return count
  })
  console.log(res)
}
load(987654321)
console.log('主任务不要被影响')
```