const { defaults } = require('jest-config')

module.exports = {
    modulePathIgnorePatterns: [
        ...defaults.modulePathIgnorePatterns,
        '<rootDir>/node_modules/',
        '<rootDir>/build/'
    ]
}
