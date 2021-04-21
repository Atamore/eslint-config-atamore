## @atamore/eslint-config-atamore

This package provides [ESLint](http://eslint.org/) configuration.

### Installation

To make use of this config, install this packages as a development dependency of your project:

```
yarn add @atamore/eslint-config-atamore eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-babel eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier -D
```

Create a `.eslintrc.js` file in the root of your project directory (it should live where `package.json` does). Your `.eslintrc.js` file should look like this:

```json
{
  "extends": [
    "@atamore/eslint-config-atamore",
    ...
  ]
}
```
