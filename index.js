const transformES2015TemplateLiterals = require('babel-plugin-transform-es2015-template-literals');
const transformES2015UnicodeRegex = require('babel-plugin-transform-es2015-unicode-regex');
const transformES2015ArrowFunctions = require('babel-plugin-transform-es2015-arrow-functions');
const transformES2015BlockScopedFunctions = require('babel-plugin-transform-es2015-block-scoped-functions');
const transformES2015BlockScoping = require('babel-plugin-transform-es2015-block-scoping');
const transformES2015Classes = require('babel-plugin-transform-es2015-classes');
const transformES2015ComputedProperties = require('babel-plugin-transform-es2015-computed-properties');
const transformES2015Destructuring = require('babel-plugin-transform-es2015-destructuring');
const transformES2015DuplicateKeys = require('babel-plugin-transform-es2015-duplicate-keys');
const transformES2015ForOf = require('babel-plugin-transform-es2015-for-of');
const transformES2015FunctionName = require('babel-plugin-transform-es2015-function-name');
const transformES2015Literals = require('babel-plugin-transform-es2015-literals');
const transformES2015ObjectSuper = require('babel-plugin-transform-es2015-object-super');
const transformES2015Parameters = require('babel-plugin-transform-es2015-parameters');
const transformES2015ShorthandProperties = require('babel-plugin-transform-es2015-shorthand-properties');
const transformES2015Spread = require('babel-plugin-transform-es2015-spread');
const transformES3MemberExpression = require('babel-plugin-transform-es3-member-expression-literals');
const transformES3PropertyLiterals = require('babel-plugin-transform-es3-property-literals');
const transformExponetiationOperator = require('babel-plugin-transform-exponentiation-operator');

module.exports = function() {
    return {
        plugins: [
            transformES2015TemplateLiterals,
            transformES2015UnicodeRegex,
            transformES2015ArrowFunctions,
            transformES2015BlockScopedFunctions,
            transformES2015BlockScoping,
            transformES2015Classes,
            transformES2015ComputedProperties,
            transformES2015Destructuring,
            transformES2015DuplicateKeys,
            transformES2015ForOf,
            transformES2015FunctionName,
            transformES2015Literals,
            transformES2015ObjectSuper,
            transformES2015Parameters,
            transformES2015ShorthandProperties,
            transformES2015Spread,
            transformES3MemberExpression,
            transformES3PropertyLiterals,
            transformExponetiationOperator,
        ],
    };
}
