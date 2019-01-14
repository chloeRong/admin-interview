console.log('script start');
async function async1() {
    console.log('async1 start');
    await new Promise(function (resolve, reject) {
        console.log('resolve start');
        resolve('await start');
        console.log('resolve end');
    }).then(function (value) {
        console.log(value);
        console.log('await end')
    });
    console.log('async1 end');
}

async1();
console.log('srcipt end');

// 控制台打印结果
/*
*        script start
VM3036:4 async1 start
VM3036:6 resolve start
VM3036:8 resolve end
VM3036:17 srcipt end
VM3036:10 await start
VM3036:11 await end
VM3036:13 async1 end
* */


new Promise(function (resolve, reject) {
    console.log('resolve start');
    resolve('await start');
    console.log('resolve end');
}).then(function (value) {
    console.log(value);
    console.log('await end')
});console.log('async1 end');

// 控制台打印结果
/*
*        resolve start
VM3127:4 resolve end
VM3127:8 async1 end
VM3127:6 await start
VM3127:7 await end
* */

//
const contains = (() =>
        Array.prototype.includes ? (arr, value) => arr.includes(value): arr.some(el =>  el == value)

)();

const contains1 = (() => Array.prototype.includes ? Array.includes(value) : arr.some(el => el == value))();