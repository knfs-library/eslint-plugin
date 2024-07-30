const { RuleTester } = require('eslint');
const rule = require('./../../lib/cjs/index').rules['no-arrow-functions'];

const ruleTester = new RuleTester({
	languageOptions: {
		globals: {
			node: true,
			jest: true,
		},
		parserOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
		},
	},
},);

ruleTester.run('no-arrow-functions', rule, {
	valid: [
		'function myFunction() { return 1; }',
		'const myFunc = function() { return 1; };'
	],
	invalid: [
		{
			code: 'const myFunc = () => { return 1; };',
			errors: [{ message: 'Arrow functions are not allowed.' }]
		},
		{
			code: 'let myFunc = (a, b) => a + b;',
			errors: [{ message: 'Arrow functions are not allowed.' }]
		}
	]
});
