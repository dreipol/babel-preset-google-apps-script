# babel-preset-google-apps-script
Babel preset for Google Apps Script (surprise!). The plugin is based on [babel-preset-google-apps-script](https://github.com/eiel/babel-preset-google-apps-script/), and adapted for babel7 support. 

## Installation

```sh
npm install --save-dev @dreipol/babel-preset-google-apps-script
```

## Usage

### Via `.babelrc` (recommended)

**.babelrc**

```json
{
  "presets": ["@dreipol/babel-preset-google-apps-script"]
}
```

### Used plugins

- :white_check_mark: Used
- :o: Not used (not necessary)
- :x: Not used (failure)
- :grey_question: Unknown / untested

#### ES3

- :white_check_mark: [member-expression-literals](https://babeljs.io/docs/en/babel-plugin-transform-member-expression-literals)
- :white_check_mark: [property-literals](https://babeljs.io/docs/en/babel-plugin-transform-property-literals)
- :grey_question: [reserved-words](https://babeljs.io/docs/en/babel-plugin-transform-reserved-words)

#### ES5

- :o: [property-mutators](https://babeljs.io/docs/en/babel-plugin-transform-property-mutators)

#### ES2015

- :white_check_mark: [arrow-functions](https://babeljs.io/docs/en/babel-plugin-transform-arrow-functions)
- :white_check_mark: [block-scoped-functions](https://babeljs.io/docs/en/babel-plugin-transform-block-scoped-functions)
- :white_check_mark: [block-scoping](https://babeljs.io/docs/en/babel-plugin-transform-block-scoping)
- :white_check_mark: [classes](https://babeljs.io/docs/en/babel-plugin-transform-classes)
- :white_check_mark: [computed-properties](https://babeljs.io/docs/en/babel-plugin-transform-computed-properties)
- :white_check_mark: [destructuring](https://babeljs.io/docs/en/babel-plugin-transform-destructuring)
- :white_check_mark: [duplicate-keys](https://babeljs.io/docs/en/babel-plugin-transform-duplicate-keys)
- :white_check_mark: [for-of](https://babeljs.io/docs/en/babel-plugin-transform-for-of)
- :white_check_mark: [function-name](https://babeljs.io/docs/en/babel-plugin-transform-function-name)
- :grey_question: [instanceof](https://babeljs.io/docs/en/babel-plugin-transform-instanceof)
- :white_check_mark: [literals](https://babeljs.io/docs/en/babel-plugin-transform-literals)
- :grey_question: [new-target](https://babeljs.io/docs/en/babel-plugin-transform-new-target)
- :white_check_mark: [object-super](https://babeljs.io/docs/en/babel-plugin-transform-object-super)
- :white_check_mark: [parameters](https://babeljs.io/docs/en/babel-plugin-transform-parameters)
- :white_check_mark: [shorthand-properties](https://babeljs.io/docs/en/babel-plugin-transform-shorthand-properties)
- :white_check_mark: [spread](https://babeljs.io/docs/en/babel-plugin-transform-spread)
- :o: [sticky-regex](https://babeljs.io/docs/en/babel-plugin-transform-sticky-regex)
- :white_check_mark: [template-literals](https://babeljs.io/docs/en/babel-plugin-transform-template-literals)
- :x: [typeof-symbol](https://babeljs.io/docs/en/babel-plugin-transform-typeof-symbol)
- :white_check_mark: [unicode-regex](https://babeljs.io/docs/en/babel-plugin-transform-unicode-regex)

#### ES2016

- :white_check_mark: [exponentiation-operator](https://babeljs.io/docs/en/babel-plugin-transform-exponentiation-operator)

#### ES2017

- :x: [async-to-generator](https://babeljs.io/docs/en/babel-plugin-transform-async-to-generator)

#### ES2018

- :grey_question: [async-generator-functions](https://babeljs.io/docs/en/babel-plugin-proposal-async-generator-functions)
- :grey_question: [dotall-regex](https://babeljs.io/docs/en/babel-plugin-transform-dotall-regex)
- :grey_question: [named-capturing-groups-regex](https://babeljs.io/docs/en/babel-plugin-transform-named-capturing-groups-regex)
- :grey_question: [object-rest-spread](https://babeljs.io/docs/en/babel-plugin-proposal-object-rest-spread)
- :grey_question: [optional-catch-binding](https://babeljs.io/docs/en/babel-plugin-proposal-optional-catch-binding)
- :grey_question: [unicode-property-regex](https://babeljs.io/docs/en/babel-plugin-proposal-unicode-property-regex)

## Further reading

- [Babel presets documentation](https://babeljs.io/docs/en/presets)
- [Google apps script documentation](https://developers.google.com/apps-script/)
