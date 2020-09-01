
module.exports = function asyncOnEnd(onEnd) {
  var a = false

  function once (abort, cb) {
    if(a || !onEnd) return cb(null)
    a = true
    onEnd(abort === true ? null : abort, cb)
  }

  return function (read) {
    return function (end, cb) {
      if (!end) return read(end, cbRead)
      once(end, ()=>read(end, cbRead))
      
      function cbRead(end, data) {
        if (!end) return cb(end, data)
        once(end, ()=>cb(end, data))
      }
    }
  }
}
