/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  rules: {
    'import/order': [
      1,
      {
        groups: [
          'external',
          'builtin',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          {
            pattern: '@pages/**',
            group: 'internal',
          },
          {
            pattern: '@components/**',
            group: 'internal',
          },
          {
            pattern: '@data/**',
            group: 'internal',
          },
          {
            pattern: '@utils/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    'import/no-duplicates': [
      'error',
      { 'prefer-inline': true, considerQueryString: true },
    ],
    'no-console': 'warn',
  },
}
