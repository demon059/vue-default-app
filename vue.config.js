const path = require('path')

const jsxFiles = ['main.js', 'bar.js'].join('|')

const jsxFilesTestRegexp = new RegExp(`(${jsxFiles})$`)

module.exports = {
    configureWebpack: {
        entry: {
            app: __dirname + '/src/app.js',
        },
        resolve: {
            alias: {
                '~': path.resolve(__dirname, 'src/'),
            },
        },
        module: {
            rules: [
                {
                    // Некоторые файлы в element-ui используют jsx
                    test: jsxFilesTestRegexp,
                    loader: 'babel-loader',
                    options: {},
                },
            ],
        }
    }
}
