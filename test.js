const Async = require('./index');

// Async.waterfall([
//   function a(cb) {
//     setTimeout(() => {
//       // cb(null, 2000);
//       cb('err...')
//     }, 1000);
//   }, function b(data, cb) {
//     setTimeout(() => {
//       cb(null, data + 3000);
//     }, 1000);
//   }
// ], function (err, data) {
//   console.log(err, data)
// })

// Async.each([1, 2], function (item, cb) {
//   setTimeout(() => {
//     if (2 === item) {
//       cb('err');
//     } else {
//       console.log(item);
//       cb();
//     }
//   }, 1000);
// }, function (err) {
//   console.log(err)
// })


// var scope = "global scope";
// function checkscope(){
//     var scope = "local scope";
//     function f(){
//         return scope;
//     }
//     return f;
// }

// var foo = checkscope();
// foo();


let buf = ['index.js', 'test.js', 'a.js']
// for (let item of buf) {
//   cb(item);
// }
const fs = require('fs');

for (var i = 0; i < buf.length; i++) {
  // cb(i);
  (function a(item) {
    setTimeout(() => {
      console.log(item);
    }, 1000);
  })(i)
}
function cb(i) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}