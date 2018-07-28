export default {
  entry: 'src/index.js',
  extraBabelPlugins: [
    ['import', {libraryName: 'antd', libraryDirectory: 'es', style: true}],
  ],
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
    },
  },
  browserslist: [
    "> 1%",
    "last 2 versions"
  ],
  copy: [
    {
      from: __dirname + '/public/origin.js',
      to: __dirname + '/dist/origin.js'
    },
  ],
  theme: {
    'primary-color': '#2c8adb',
  }
}
