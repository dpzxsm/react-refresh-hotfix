# react-refresh-hotfix [![npm version](https://badge.fury.io/js/react-refresh-hotfix.svg)](https://badge.fury.io/js/react-refresh-hotfix)
`react-refresh-hotfix` is [react-refresh-webpack-plugin](https://github.com/pmmmwh/react-refresh-webpack-plugin) additional feature support, to fix some issues like:
- [useEffect be called on re-render in HMR will cause problems](https://github.com/pmmmwh/react-refresh-webpack-plugin/issues/384)
- [Bug: Empty deps useEffect be called on re-render in HMR](https://github.com/facebook/react/issues/21019)
- [React Hooks 在 react-refresh 模块热替换（HMR）下的异常行为](https://github.com/brickspert/blog/issues/42)

Although the React official team doesn't consider this a bug, here is an alternative to improve the HMR development experience for others.

### Installation
```sh
# use npm
npm install -D react-refresh-hotfix
# use yarn
yarn add -D react-refresh-hotfix
```

### Usage
First, follow the official guide [react-refresh-webpack-plugin](https://github.com/pmmmwh/react-refresh-webpack-plugin?tab=readme-ov-file#usage)

Then, add the following to your webpack config:

```js

const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
  alias: {
    ...(isDevelopment ? { react$: 'react-refresh-hotfix/react' } : {}),
  },
  modules: {
    rules: [
      isDevelopment && {
        test: /\.[m|c]?jsx?$/,
        exclude: /node_modules/,
        use: ['react-refresh-hotfix'],
      },
    ].filter(Boolean)
  }
};
```
