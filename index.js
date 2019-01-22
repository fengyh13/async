
function waterfall(task = [], callback = defaultCB) {
  if (!Array.isArray(task) || 0 == task.length) return callback.apply(null, []);

  (function next(...args) {
    if (0 === task.length) return callback.apply(null, [...args]);
    let err = args[0];
    if (err) return callback.apply(null, [...args]);

    args.splice(0, 1);
    var fn = task.splice(0, 1)[0];
    fn.apply(null, [...args, next]);
  })();
}

function each(buf = [], iteratee = defaultCB, callback = defaultCB) {
  if (!Array.isArray(buf) || 0 === buf.length) return callback.apply(null, []);

  for (let item of buf) {
    (function (data) {
      iteratee.apply(null, [data, function (err) {
        if (err) return callback.apply(null, [err]);
      }]);
    })(item);
  }
}

function defaultCB() { }
module.exports.each = each;
module.exports.waterfall = waterfall;