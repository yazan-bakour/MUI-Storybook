module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.js', '../src/**/*.stories.tsx'],

  addons: ['@storybook/addon-essentials'],
  core: {
    builder: 'webpack5'
  },
  refs: {
    'mui-storybook': {
      title: 'MUI Storybook',
      url: 'https://61c23f8c33dad8003adc12f6-cwovkuxnql.chromatic.com/',
    },
  },
}