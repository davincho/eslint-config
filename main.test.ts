import path from 'node:path';
import url from 'node:url';

import spawn from 'cross-spawn';
import { expect, describe, it } from 'vitest';

const cwd = path.dirname(url.fileURLToPath(import.meta.url));

expect.addSnapshotSerializer({
  test: (val) => typeof val === 'string',
  print: (val: string) => {
    // Remove path information from snapshopts as this would make test fail on other machines
    return (val || '').replace(cwd, '.');
  }
});

const definitions = {
  'Incorrect JS file': {
    file: 'test-cases/incorrect.js'
  },
  'Correct JS file': {
    file: 'test-cases/correct.js'
  },
  'Incorrect TS file': {
    file: 'test-cases/incorrect.ts'
  },
  'Correct TS file': {
    file: 'test-cases/correct.ts'
  },
  'Incorrect TSX file': {
    file: 'test-cases/incorrect.tsx'
  },
  'Correct TSX file': {
    file: 'test-cases/correct.tsx'
  }
};

describe('Test files', () => {
  for (const [key, value] of Object.entries(definitions)) {
    it(key, () => {
      const { file } = value;

      const { output, stderr } = spawn.sync('./node_modules/.bin/eslint', [
        '--format',
        'tap',
        file
      ]);

      expect({
        outout: output.toString(),
        stderr: stderr.toString()
      }).toMatchSnapshot();
    });
  }
});
