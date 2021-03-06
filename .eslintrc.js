// Doing this so that updates to this file are picked up and not cached.
delete require.cache[require.resolve('./schema.json')]

module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "mocha": true
  },

  "parserOptions": {
    "ecmaFeatures": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "jsx": true
    },
  },

  "globals": {
    "window": true
  },

  "plugins": [
    "react",
    "classes",
    "graphql"
  ],

  "rules": {
    "array-bracket-spacing": [2, "never"],
    "arrow-parens": [2, "always"],
    "block-spacing": [2, "always"],
    "brace-style": [2, "1tbs", { "allowSingleLine": true }],
    "camelcase": [2, {"properties": "always"}],
    "comma-dangle": [2, "never"],
    "comma-spacing": [2, {"before": false, "after": true}],
    "comma-style": [2, "last"],
    "computed-property-spacing": [2, "never"],
    "consistent-return": [0],
    "dot-notation": [2],
    "indent": [2, 2],
    "key-spacing": [2, {"beforeColon": false, "afterColon": true}],
    "keyword-spacing": [2],
    "new-cap": [2],
    "no-debugger": [2],
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-semi": 2,
    "no-func-assign": 2,
    "no-unreachable": 2,
    "no-multi-spaces": [0],
    "no-multi-str": 0,
    "no-trailing-spaces": [2],
    "no-mixed-spaces-and-tabs": [2],
    "no-restricted-syntax": [2, "WithStatement"],
    "no-spaced-func": 2,
    "no-empty": 2,
    "no-shadow": [0],
    "no-var": [2],
    "no-unneeded-ternary": 2,
    "no-cond-assign": 2,
    "no-const-assign": [2],
    "no-unused-vars": [2, {"vars": "all", "args": "none"}],
    "no-unused-expressions": 2,
    "object-curly-spacing": [2, "always"],
    "prefer-const": [2],
    "quotes": [2, "single", {"avoidEscape": true, "allowTemplateLiterals": true}],
    "quote-props": [2, "as-needed"],
    "space-in-parens": [2, "never"],
    "strict": [2, "never"],
    "semi": [2, "always"],
    "semi-spacing": [2, {"before": false, "after": true}],
    "space-before-function-paren": [2, {"anonymous": "always", "named": "never"}],
    "space-before-blocks": 2,
    "space-unary-ops": [2, { "words": true, "nonwords": false }],
    "space-infix-ops": [2],
    "use-isnan": 2,
    "valid-typeof": 2,
    "valid-jsdoc": 2,
    "wrap-iife": [2, "outside"],
    "yoda": [2, "never"],

    "classes/name": [2, "class", "method"],

    "react/jsx-uses-vars": [2],
    "react/jsx-no-undef": [2],
    "react/jsx-pascal-case": [2],
    "react/jsx-no-duplicate-props": [2],
    "react/jsx-uses-react": [2],
    "react/jsx-key": 2,
    "react/jsx-closing-bracket-location": 2,
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-curly-spacing": [2, "never"],
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-boolean-value": [2, "never"],
    "react/jsx-handler-names": [2, {
      "eventHandlerPrefix": "handle",
      "eventHandlerPropPrefix": "on[A-Z]"
    }],
    "react/display-name": [2, { "ignoreTranspilerName": false }],
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-unknown-property": [2],
    "react/prop-types": 2,
    "react/prefer-es6-class": 2,
    "react/wrap-multilines": 2,
    "react/sort-comp": [2, {
      "order": [
        "lifecycle",
        "everything-else",
        "/^handle.+$/",
        "/^render.+$/",
        "render"
      ]
    }],

    "graphql/template-strings": ['error', {
      env: 'apollo',

      schemaJson: require("./schema.json")
    }]
  }
};
