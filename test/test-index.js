var main = require("../");

exports["test main"] = function(assert) {
  assert.pass("Unit test running!");
  assert.ok((2 === 2), '2 should be equal to 2');
};

exports["test main async"] = function(assert, done) {
  assert.pass("async Unit test running!");
  done();
};

require("sdk/test").run(exports);
