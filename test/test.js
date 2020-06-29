const assert = require('power-assert');
const ClassName = require('../index.js');

describe('class name', function () {
  it('"default"', function () {
    const className = new ClassName('default');
    assert(className.toString() === 'default');
  });

  it('"default", "active"', function () {
    const className = new ClassName('default', 'active');
    assert(className.toString() === 'default active');
  });

  it('"default", add "active"', function () {
    const className = new ClassName('default');
    className.active = true;
    assert(className.toString() === 'default active');
  });

  it('["default", "active"]', function () {
    const className = new ClassName(['default', 'active']);
    assert(className.toString() === 'default active');
  });

  it('{ default: true, active: false }', function () {
    const className = new ClassName({ default: true, active: false });
    assert(className.toString() === 'default');
  });

  it('{ default: true, active: false }, { default: false, active: true }', function () {
    const className = new ClassName({ default: true, active: false }, { default: false, active: true });
    assert(className.toString() === 'active');
  });

  it('["default", "active"], { default: false, active: true }', function () {
    const className = new ClassName(['default', 'active'], { default: false, active: true });
    assert(className.toString() === 'active');
  });
});
