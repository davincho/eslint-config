import * as cases from 'jest-in-case';

const spawn = require('cross-spawn');

const cwd = __dirname;

const t = 'd';

expect.addSnapshotSerializer({
  test: (val) => typeof val === 'string',
  print: (val: string) => {
    // Remove path information from snapshopts as this would make test fail on other machines
    return (val || '').replace(cwd, '.');
  }
});

cases(
  'Test files',
  ({ file }) => {
    const { output, stderr } = spawn.sync('./node_modules/.bin/eslint', [
      '--format',
      'tap',
      file
    ]);

    expect({
      outout: output.toString(),
      stderr: stderr.toString()
    }).toMatchSnapshot();
  },
  {
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
  }
);
