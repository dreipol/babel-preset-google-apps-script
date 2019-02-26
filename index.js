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
