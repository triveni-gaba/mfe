module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/, // babel will work on all files ending with .mjs or .js
                exclude: /node_modules/, // do not run babel on any files under node_modules folder.
                use: {
                    loader: 'babel-loader',
                    options: {
                        // 'preset-react' means babel will process all jsx tags in our react applications
                        // 'preset-env' will transform code (ES15/16/17 etc) to ES5 which is understood by browser
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'] // 'plugin-transform-runtime' will enable additional features like async-await in our browsers
                    }
                }
            }
        ]
    }
}