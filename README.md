# Purpose

This package contains an opinionated ESLint configuration for vanilla JS, Typescript and TSX for React.

# Installation

1. Run `yarn add @dvch/eslint-config`
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
