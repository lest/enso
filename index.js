var ch = require('./src/ch')
var loop = require('./src/loop')

var actionsCh = ch()

module.exports = {
  loop: function(initialState, render, rescue) {
    loop(actionsCh, initialState, render, rescue)
  },

  put: actionsCh.put
}
