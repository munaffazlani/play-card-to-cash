const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@app': path.join(path.resolve(__dirname, './src')),
        }
    }
}