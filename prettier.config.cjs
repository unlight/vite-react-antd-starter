module.exports = {
  printWidth: 80,
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  arrowParens: 'avoid',
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-classnames',
    'prettier-plugin-tailwindcss', // must be loaded last
  ],
  tailwindConfig: './tailwind.config.js',
  tailwindFunctions: ['clsx', 'cn', 'cva'],
  customFunctions: ['clsx', 'cn', 'cva'],
};
