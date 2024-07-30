module.exports = {
	meta: {
		type: 'problem',
		docs: {
			description: 'Disallow arrow functions in specific files',
			category: 'Best Practices',
			recommended: false,
		},
		schema: [], // No options
	},
	create(context) {
		return {
			ArrowFunctionExpression(node) {
				context.report({
					node,
					message: 'Arrow functions are not allowed.',
				});
			},
		};
	},
};
