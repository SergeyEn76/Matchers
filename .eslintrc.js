module.exports = {
    'env': {
      'browser': true,
      //'es6': true,
      'es2021': true,
      'jest': true
    },
    'extends': [
      'standart',
      'eslint:recommended'
    ],
    'overrides': [
      {
        'files': ["**/*/*.test.js"],
        'plugins': ['jest'],
        'extends': ['plugin:jest/recommended'],
        'rules': { 'jest/prefer-expect-assertions': 'off' }
      },
        {
          "env": {
            "node": true
          },
          "files": [
            ".eslintrc.{js,cjs}"
          ],
            "parserOptions": {
              "sourceType": "script"
            }
        }
    ],
    'parserOptions': {
      "ecmaFeatures": {
        "jsx": true
      },
      'ecmaVersion': 14,
      'sourceType': 'module'
    },
    'rules': {
      'imprt/extentions': [
        'error',
        'ignorePackages'
      ],
      'no-restricted-syntax': [
        'error',
        'LabeledStatement',
        'WithStatement'
      ]
    }
}