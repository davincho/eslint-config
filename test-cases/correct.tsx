import * as React from 'react';
import type { FC } from 'react';

import lodash from 'lodash';

import { testFunction } from './correct';

export const TestComponent: FC<{ children: React.ReactNode }> = () => {
  return (
    <h1>
      {lodash.pick([], 1)} + {testFunction()}
    </h1>
  );
};
