'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var index = (function (Component) {
  return function (props) {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        { style: { color: 'red', fontSize: '32px' } },
        'Dawidek Dawidek Dawidek Dawidek'
      ),
      React.createElement(Component, props)
    );
  };
});

module.exports = index;
//# sourceMappingURL=index.js.map
