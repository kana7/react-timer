var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js', 'script!foundation-sites/dist/foundation.min.js', './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [new webpack.ProvidePlugin({
    '$': 'jquery',
    'jquery': 'jquery'
  })],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Navigation: 'app/components/Navigation.jsx',
      Timer: 'app/components/Timer.jsx',
      Countdown: 'app/components/Countdown.jsx',
      Clock: 'app/components/Clock.jsx',
      CountdownForm: 'app/components/CountdownForm.jsx',
      Controls: 'app/components/Controls.jsx',
      applicationStyles: 'app/styles/app.scss'
    },
    extentions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      },
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/
    }]
  },
  devtool: 'eval-source-map'
};
