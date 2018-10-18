

- ##### 将对象转化为数组

```
let obj = {
    a: 1,
    b:2
}

// 将对象转化为数组
var arr = obj.entries(obj) // [['a',1],['b',2]]

// 将对象的值转换为数组
var arr = []
for (var i in obj){
    arr.push(obj[i])
}
```

- ##### 计算数组中除去最小值之外数值的总和，以及除去最大值之外数值的综合

```
var arr =[1,3,4,6,7];
//定义一个方法
function fdinMinMax(array){
	// 计算数组中的最小值
	var min = Math.min.apply(null,array);
	// 计算数组中的最大值
	var max = Math.max.apply(null,array);
	// 计算数组中所有数值的总和
	var arraySum = array.reduce((x,y) => x+y)
	
	// 除去最小值后的数值总和
    maxSum = arraySum - min;
    // 除去最大值后的数值总和
    minSum = arraySum - max;
    
    return JSON.Stringify({minSum: minSum, maxSum: maxSum})
 
}

console.log(fdinMinMax(arr)) // {minSum: 14,maxSum: 20}
```

- ##### 两种不同的方法格式，调用相同的一个函数

  ```
  举例
  add(1,2) add(1)(2)

  function add(num1,num2){
      if(num2 && num2){
          return num1+ num2
      }else{
          return function(num3){
              return num1 + num3
          }
      }
  }
  ```

  ##### 

- ##### 如何实现链式调用


```
var obj = {
    a: 1,
    b: 2,
    getA(){
        console.log(this.a)
    }
    getB(){
        console.log(this.b)
    }
}

// 此时运行的结果是什么
1
报错 ： getB is undefined

如何获取到1和2，也就是链式调用
var obj = {
    a: 1,
    b: 2,
    getA(){
        console.log(this.a)
        return this;
    }      
    getB(){
        console.log(this.b)
    }
}
obj,getA().getB() // 1,2

```

- ##### 求数组中的最小值


```
ES5 写法 var min = Math.min(null,[1,4,5,3,8]) // 1
ES6 写法 var min = Math.min(...[1,4,5,3,8]) // 1
```

- #####  安装最新的版本 npm i npm g

