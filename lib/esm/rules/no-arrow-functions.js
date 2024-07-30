export default {
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
			'FunctionExpression'(node) {
				if (node.parent && node.parent.type === 'VariableDeclarator') {
					if (node.parent.init && node.parent.init.type === 'ArrowFunctionExpression') {
						context.report({
							node: node.parent.init,
							message: 'Arrow functions are not allowed.',
						});
					}
				}
			},
			'FunctionDeclaration'(node) {
				if (node.id && node.id.name) {
					context.report({
						node: node,
						message: 'Function declarations are allowed but arrow functions are not.',
					});
				}
			},
		};
	},
}

