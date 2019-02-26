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
  "presets": ["@dreipol/google-apps-script"]
}
```

### Used plugins

- :white_check_mark: Used
- :o: Not used (not necessary)
- :x: Not used (failure)
- :grey_question: Unknown / untested

#### ES3

- :white_check_mark: [member-expression-literals](https://babeljs.io/docs/en/plugin-transform-member-expression-literals.md)
- :white_check_mark: [property-literals](https://babeljs.io/docs/en/plugin-transform-property-literals.md)
- :grey_question: [reserved-words](https://babeljs.io/docs/en/plugin-transform-reserved-words.md)

#### ES5

- :o: [property-mutators](https://babeljs.io/docs/en/plugin-transform-property-mutators.md)

#### ES2015

- :white_check_mark: [arrow-functions](https://babeljs.io/docs/en/plugin-transform-arrow-functions.md)
- :white_check_mark: [block-scoped-functions](https://babeljs.io/docs/en/plugin-transform-block-scoped-functions.md)
- :white_check_mark: [block-scoping](https://babeljs.io/docs/en/plugin-transform-block-scoping.md)
- :white_check_mark: [classes](https://babeljs.io/docs/en/plugin-transform-classes.md)
- :white_check_mark: [computed-properties](https://babeljs.io/docs/en/plugin-transform-computed-properties.md)
- :white_check_mark: [destructuring](https://babeljs.io/docs/en/plugin-transform-destructuring.md)
- :white_check_mark: [duplicate-keys](https://babeljs.io/docs/en/plugin-transform-duplicate-keys.md)
- :white_check_mark: [for-of](https://babeljs.io/docs/en/plugin-transform-for-of.md)
- :white_check_mark: [function-name](https://babeljs.io/docs/en/plugin-transform-function-name.md)
- :grey_question: [instanceof](https://babeljs.io/docs/en/plugin-transform-instanceof.md)
- :white_check_mark: [literals](https://babeljs.io/docs/en/plugin-transform-literals.md)
- :grey_question: [new-target](https://babeljs.io/docs/en/plugin-transform-new-target.md)
- :white_check_mark: [object-super](https://babeljs.io/docs/en/plugin-transform-object-super.md)
- :white_check_mark: [parameters](https://babeljs.io/docs/en/plugin-transform-parameters.md)
- :white_check_mark: [shorthand-properties](https://babeljs.io/docs/en/plugin-transform-shorthand-properties.md)
- :white_check_mark: [spread](https://babeljs.io/docs/en/plugin-transform-spread.md)
- :o: [sticky-regex](https://babeljs.io/docs/en/plugin-transform-sticky-regex.md)
- :white_check_mark: [template-literals](https://babeljs.io/docs/en/plugin-transform-template-literals.md)
- :x: [typeof-symbol](https://babeljs.io/docs/en/plugin-transform-typeof-symbol.md)
- :white_check_mark: [unicode-regex](https://babeljs.io/docs/en/plugin-transform-unicode-regex.md)

#### ES2016

- :white_check_mark: [exponentiation-operator](https://babeljs.io/docs/en/plugin-transform-exponentiation-operator.md)

#### ES2017

- :x: [async-to-generator](https://babeljs.io/docs/en/plugin-transform-async-to-generator.md)

#### ES2018

- :grey_question: [async-generator-functions](https://babeljs.io/docs/en/plugin-proposal-async-generator-functions.md)
- :grey_question: [dotall-regex](https://babeljs.io/docs/en/plugin-transform-dotall-regex.md)
- :grey_question: [named-capturing-groups-regex](https://babeljs.io/docs/en/plugin-transform-named-capturing-groups-regex.md)
- :grey_question: [object-rest-spread](https://babeljs.io/docs/en/plugin-proposal-object-rest-spread.md)
- :grey_question: [optional-catch-binding](https://babeljs.io/docs/en/plugin-proposal-optional-catch-binding.md)
- :grey_question: [unicode-property-regex](https://babeljs.io/docs/en/plugin-proposal-unicode-property-regex.md)

## Further reading

- [Babel presets documentation](https://babeljs.io/docs/en/presets)
- [Google apps script documentation](https://developers.google.com/apps-script/)
