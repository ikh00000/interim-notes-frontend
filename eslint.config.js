import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import google from 'eslint-config-google';
import lit from 'eslint-plugin-lit';
import wc from 'eslint-plugin-wc';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    plugins: {
      lit,
      wc,
      prettier,
    },
    rules: {
      // Google style guide base rules
      'max-len': ['error', {
        code: 80,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      }],
      'indent': ['error', 2],
      'quotes': ['error', 'single', {avoidEscape: true}],
      'semi': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'no-trailing-spaces': 'error',
      'eol-last': 'error',
      'no-multiple-empty-lines': ['error', {max: 2}],
      'object-curly-spacing': ['error', 'never'],
      'array-bracket-spacing': ['error', 'never'],
      'computed-property-spacing': ['error', 'never'],
      'space-before-function-paren': ['error', {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      }],
      'keyword-spacing': 'error',
      'space-before-blocks': 'error',
      'brace-style': ['error', '1tbs'],
      'camelcase': ['error', {properties: 'never'}],
      'new-cap': ['error', {
        capIsNewExceptions: ['Polymer', 'PolymerElement'],
      }],
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-arrow-callback': 'error',
      'arrow-parens': ['error', 'always'],
      'arrow-spacing': 'error',
      'no-console': ['warn', {allow: ['warn', 'error']}],

      // TypeScript specific
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      }],

      // Lit specific rules
      'lit/no-invalid-html': 'error',
      'lit/no-useless-template-literals': 'error',
      'lit/no-value-attribute': 'error',
      'lit/no-duplicate-template-bindings': 'error',
      'lit/binding-positions': 'error',

      // Web Components rules
      'wc/guard-super-call': 'error',
      'wc/no-closed-shadow-root': 'error',
      'wc/no-constructor-attributes': 'error',

      // Prettier integration
      'prettier/prettier': 'error',
    },
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
  prettierConfig,
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '*.config.js',
      '*.config.ts',
      'vite.config.ts',
    ],
  }
);