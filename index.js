class ClassName {
  constructor(...propsList) {
    propsList
      .forEach((props) => {
        if (Array.isArray(props)) {
          props
            .forEach((prop) => {
              this[prop] = prop;
            });
        } else if (Object.prototype.toString.call(props) === '[object Object]') {
          Object
            .keys(props)
            .forEach((prop) => {
              this[prop] = props[prop];
            });
        } else {
          this[props] = props;
        }
      });
  }

  toString() {
    const whiteList = ['toString'];
    const classNames = Object
      .keys(this)
      .filter(key => !whiteList.includes(key) && !!this[key])
      .join(' ');
    return classNames;
  }
}

module.exports = ClassName;
