const path = require('path')

module.exports = {
    entry: { index: path.join(__dirname, './src/index.ts') },
    mode: 'production',
    module: { rules: [{ test: /\.(ts|tsx)$/, use: 'ts-loader' }] },
    output: { filename: '[name].js', path: path.join(__dirname, 'build') },
    resolve: { extensions: [".js", '.ts'] },
}
