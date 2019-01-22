const Async = require('./index');

Async.waterfall([
  function a(cb) {
    setTimeout(() => {
      cb(null, 2000);
      // cb('err...')
    }, 1000);
  }, function b(data, cb) {
    setTimeout(() => {
      cb(null, data + 3000);
    }, 1000);
  }
], function (err, data) {
  console.log(err, data)
})

Async.each([1, 2], function (item, cb) {
  setTimeout(() => {
    if (2 === item) {
      cb('err');
    } else {
      console.log(item);
      cb();
    }
  }, 1000);
}, function (err) {
  console.log(err)
})
