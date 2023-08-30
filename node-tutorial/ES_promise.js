const promise = new Promise(function(resolve, reject) {
    // ... some code

    console.log(1)
      resolve();
      console.log(2)

  });

promise.then(() => {
    console.log(3)
})
console.log(4)

// 解析：
// Promise 构造函数是同步执行的，promise.then 中的函数是异步执行的。

// 运行结果：

// => 1
// => 2
// => 4
// => 3