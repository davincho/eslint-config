# Purpose

This package contains an opinionated ESLint configuration for vanilla JS, Typescript and TSX for React.

# Installation

Assuming your project has already installed the peerDependecies `prettier`, `eslint` (and potentially `typescript` - if not run `yarn add --dev eslint typescript prettier`), the following steps are necessary:

1. Run `yarn add eslint @dvch/eslint-config`
2. Create a new file called `.eslintrc.json`
3. Paste the following snippet into the file

```
{
  "extends": ["./node_modules/@dvch/eslint-config/{YOUR-VERSION}"]
}
```

Depending on your usecase replace {YOUR-VERSION} with one of the following:

- `javascript.json`
- `typescript.json`
- `react.json`
