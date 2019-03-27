import React from 'react';

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

export default index;
//# sourceMappingURL=index.es.js.map
