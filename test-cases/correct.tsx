import React from 'react';

import lodash from 'lodash';

import { testFunction } from './correct';

export const TestComponent = () => {
  return (
    <h1>
      {lodash.pick([], 1)} + {testFunction()}
    </h1>
  );
};
