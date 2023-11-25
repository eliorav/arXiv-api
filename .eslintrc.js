module.exports = {
  "env": {
    "es2021": true,
    "node": true
  },
  "parser": "@typescript-eslint/parser",
  "plugins": ["jest", "node", "@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "prettier",
    "plugin:node/recommended",
    "plugin:jest/all"
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "settings": {
    "node": {
      "tryExtensions": [".ts", ".js", ".json", ".node"]
    }
  },
  "rules": {
    "jest/no-untyped-mock-factory": "off",
    "jest/unbound-method": "off",
    "node/no-extraneous-import": "off",
    "node/no-unsupported-features/es-syntax": [
      "error",
      { ignores: ["modules"] }
    ],
    "jest/prefer-expect-assertions": "off",
    "jest/expect-expect": "off",
    "jest/no-hooks": "off",
    "jest/prefer-inline-snapshots": "off"
  }
}
