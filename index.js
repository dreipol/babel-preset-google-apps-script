const transformTemplateLiterals = require('@babel/plugin-transform-template-literals');
const transformUnicodeRegex = require('@babel/plugin-transform-unicode-regex');
const transformArrowFunctions = require('@babel/plugin-transform-arrow-functions');
const transformBlockScopedFunctions = require('@babel/plugin-transform-block-scoped-functions');
const transformBlockScoping = require('@babel/plugin-transform-block-scoping');
const transformClasses = require('@babel/plugin-transform-classes');
const transformComputedProperties = require('@babel/plugin-transform-computed-properties');
const transformDestructuring = require('@babel/plugin-transform-destructuring');
const transformDuplicateKeys = require('@babel/plugin-transform-duplicate-keys');
const transformForOf = require('@babel/plugin-transform-for-of');
const transformFunctionName = require('@babel/plugin-transform-function-name');
const transformLiterals = require('@babel/plugin-transform-literals');
const transformObjectSuper = require('@babel/plugin-transform-object-super');
const transformParameters = require('@babel/plugin-transform-parameters');
const transformShorthandProperties = require('@babel/plugin-transform-shorthand-properties');
const transformSpread = require('@babel/plugin-transform-spread');
const transformMemberExpression = require('@babel/plugin-transform-member-expression-literals');
const transformPropertyLiterals = require('@babel/plugin-transform-property-literals');
const transformExponetiationOperator = require('@babel/plugin-transform-exponentiation-operator');

module.exports = function() {
    return {
        plugins: [
            transformTemplateLiterals,
            transformUnicodeRegex,
            transformArrowFunctions,
            transformBlockScopedFunctions,
            transformBlockScoping,
            transformClasses,
            transformComputedProperties,
            transformDestructuring,
            transformDuplicateKeys,
            transformForOf,
            transformFunctionName,
            transformLiterals,
            transformObjectSuper,
            transformParameters,
            transformShorthandProperties,
            transformSpread,
            transformMemberExpression,
            transformPropertyLiterals,
            transformExponetiationOperator,
        ],
    };
}
