ClassName-X
========

Build a `ClassName` same as a simple object.

### Installing

```shell
yarn add class-name-x # npm install class-name-x
```

### Usage

```jsx
import ClassName from 'class-name-x'

...

render() {
  wrapClassName = new ClassName('default')
  if (Math.random() > .5) {
    wrapClassName.active = true
  }
  return (
    // className='default active' or className='default'
    <div className={wrapClassName}></div>
  )
}
```

```javascript
ClassName = require('class-name-x');

let className;

className = new ClassName('default');
console.log(className.toString() === 'default');

className = new ClassName('default', 'active');
console.log(className.toString() === 'default active');

className = new ClassName('default');
className.active = true;
console.log(className.toString() === 'default active');

className = new ClassName(['default', 'active']);
console.log(className.toString() === 'default active');

className = new ClassName({ default: true, active: false });
console.log(className.toString() === 'default');

className = new ClassName({ default: true, active: false }, { default: false, active: true });
console.log(className.toString() === 'active');

className = new ClassName(['default', 'active'], { default: false, active: true });
console.log(className.toString() === 'active');
```
