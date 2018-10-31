const path = require('path');
const webpack = require('webpack');

module.exports = {
  title: 'Wardrobe',
  defaultExample: true,
  pagePerSection: true,
  skipComponentsWithoutExample: true,
  assetsDir: 'src/static',

  sections: [
    { name: 'Theme', components: 'src/style/**/*.js', content: 'docs/style.md' },
    { name: 'Layout', components: 'src/layout/**/*.js' },
    { name: 'Components', components: 'src/components/**/*.js', content: 'docs/components.md' },
    { name: 'Animations', components: 'src/animations/**/*.js' },
  ],

  components: 'src/components/**/*.js',

  require: [path.join(__dirname, 'src/globals/styles.js')],

  // TODO: Get the right import statement: import { Component } from '@fashiontrade/wardrobe`.
  // Current Problem: DropdownItem should be used as Dropdown.Item but is imported from Dropdown
  getComponentPathLine() {
    return null;
  },

  styleguideComponents: {
    Wrapper: path.join(__dirname, 'tools/ThemeWrapper'),
  },


  compilerConfig: {
    transforms: { dangerousTaggedTemplateString: true },
  },

  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules&importLoaders=1',
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader',
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader', // creates style nodes from JS strings
            },
            {
              loader: 'css-loader', // translates CSS into CommonJS
            },
            {
              loader: 'sass-loader', // compiles Sass to CSS
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          IS_STYLEGUIDE: JSON.stringify(true),
        },
      }),
    ],
    resolve: {
      modules: [
        path.join(__dirname, 'src'),
        path.join(__dirname, 'src/components'),
        'node_modules',
      ],
      extensions: ['.js', '.scss'],
    },
  },
};
