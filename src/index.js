import React from 'react';

export default Component => {
  return props => (
    <div>
      <h1 style={{ color: 'red', fontSize: '32px' }}>
        Dawidek Dawidek Dawidek Dawidek
      </h1>

      <Component {...props} />
    </div>
  );
};
