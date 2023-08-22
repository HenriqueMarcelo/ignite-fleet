module.exports = {
  extends: '@rocketseat/eslint-config/react',
  rules: {
    'no-unused-vars': 'off',
    'prefer-template': 1,
    'react/jsx-key': 1,
    'prettier/prettier': 1,
    camelcase: 0,
    '@typescript-eslint/no-unused-vars': [
      'warn', // or "error"
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-empty-interface': 0,
    'react-hooks/exhaustive-deps': 0,
  },
}
