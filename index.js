module.exports = {
  plugins: [
    'react',
    'react-hooks',
    'import',
    'babel'
  ],
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "quotes": [2, "single", { "avoidEscape": true }],
    "react/jsx-wrap-multilines": [
      "error",
      { "declaration": false, "assignment": false }
    ],
    "react/jsx-fragments": [1, "element"],
    "react/jsx-curly-brace-presence": 0,
    "react/forbid-prop-types": 0,
    "react/no-children-prop": 0,
    "react/jsx-filename-extension": 0,
    "react/no-array-index-key": 0,
    "react/prefer-stateless-function": 0,
    "react/require-default-props": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-indent-props": 0,
    "react/jsx-closing-bracket-location": 0,
    "react/jsx-indent": 0,
    "react/jsx-no-undef": [2, { "allowGlobals": true }],
    "import/no-unresolved": 0,
    "import/no-dynamic-require": 0,
    "import/prefer-default-export": 0,
    "import/no-named-as-default": 2,
    "import/no-extraneous-dependencies": 0,
    "import/extensions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/href-no-hash": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/mouse-events-have-key-events": 0,
    "indent": 0,
    "arrow-body-style": [1, "as-needed"],
    "no-unused-vars": 1,
    "no-param-reassign": [
      "error",
      { "props": true, "ignorePropertyModificationsFor": ["draft"] }
    ],
    "no-plusplus": 0,
    "no-shadow": 0,
    "spaced-comment": 1,
    "max-len": 1,
    "class-methods-use-this": 0,
    "no-mixed-operators": [
      0,
      {
        "allowSamePrecedence": 1
      }
    ],
    "function-paren-newline": 0,
    "object-curly-newline": 0,
    "object-curly-spacing": 0,
    "babel/object-curly-spacing": 0,
    "no-restricted-globals": 0,
    "no-underscore-dangle": 0,
    "template-tag-spacing": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
};