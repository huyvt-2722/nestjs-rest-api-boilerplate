module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    jest: true,
    es6: true,
    node: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  parserOptions: {
    ecmaVersion: 2022,
    project: './tsconfig.eslint.json',
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays Prettier errors as ESLint errors
  ],
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  rules: {
    // TypeScript-Specific Rules
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Ignore unused variables starting with "_"
    '@typescript-eslint/no-explicit-any': 'warn', // Discourage use of "any"
    '@typescript-eslint/explicit-function-return-type': 'off', // Optional for NestJS
    '@typescript-eslint/no-empty-function': 'off', // Allow empty NestJS lifecycle methods

    // Import Rules
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/no-unresolved': 'off', // TypeScript handles unresolved imports

    // Prettier
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 80,
        tabWidth: 2,
        semi: true,
      },
    ],
  },
  overrides: [
    {
      files: ['*.spec.ts', '*.e2e-spec.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off', // Allow unused variables in test files
      },
    },
  ],
};
