const webpack = require('webpack');

console.log('env', process.env.NODE_ENV)
console.log('called webpack...')


const getPlugins = function() {
  let plugins = [];

  plugins.push(

    new webpack.ProvidePlugin({
      ReactSlick: 'react-slick'
    })

  );

  if (process.env.NODE_ENV === "production") {
    plugins.push(

      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
        sourceMap: true
      })

    );

    plugins.push(

      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      })

    );
  }


  return plugins;
}


if (process.env.NODE_ENV === "development") {
  console.log('not here')

  const development = {
      entry: "./app/app.js",
      output: {
          filename: "app.js",
          publicPath: '.tmp/js/'
      },
      devtool: 'inline-source-map',
      module: {
          loaders: [
            {
              test: /\.js$/,
              loader: 'babel-loader',
              query: {
                presets: ['es2015', 'react']
              }
            }
          ]
      },
      resolve: {
        modules: ['node_modules'],
        extensions: ['', '.js', '.jsx', '.json']
      },
      plugins: getPlugins()

  };

  module.exports = development;
}

if (process.env.NODE_ENV === "production") {
  console.log('come here')
  const production = {
      entry: "./app/app.js",
      output: {
          filename: "app.js",
          path: __dirname + '/dist/js',
      },
      devtool: 'source-map',
      module: {
          loaders: [
            {
              test: /\.js$/,
              loader: 'babel-loader',
              query: {
                presets: ['es2015', 'react']
              }
            }
          ]
      },
      resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx', '.json']
      },
      plugins: getPlugins()

  };

  module.exports = production;
}
