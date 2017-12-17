
const webpack = require('webpack')
const path    = require('path')

const entry = {
  server: {
   'server-app': './server-app.jsx',
  },
  client: {
   'client-app': './client-app.jsx',
 },
}

const output = {
  server: {
    path: __dirname,
    filename: '[name].js',
    libraryTarget: "commonjs2",
  },
  client: {
    path: __dirname,
    filename: '[name].js',
  },
}

const CONFIG = process.env.CONFIG === 'server' ? 'server' : 'client'

module.exports = {
  context: __dirname,
  target: CONFIG === 'server' ? 'node' : 'web',
  entry:   entry[CONFIG],
  output:  output[CONFIG],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: [
            'es2015',
            'react',
            'stage-2'
          ]
        },
      }
    ]
  }
}
