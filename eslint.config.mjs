import pluginJs from '@eslint/js';
import nextVitals from 'eslint-config-next/core-web-vitals';
import pluginReact from 'eslint-plugin-react';
import { globalIgnores } from 'eslint/config';
import globals from 'globals';

export default [
	...nextVitals,
	{ files: ['**/*.{js,mjs,cjs,jsx}'] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	pluginReact.configs.flat.recommended,
	globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
	{
		rules: {
			'react/jsx-uses-react': 'off',
			'react/react-in-jsx-scope': 'off',
			'no-undef': 'off',
			'no-unused-vars': 'off',
		},
	},
];
