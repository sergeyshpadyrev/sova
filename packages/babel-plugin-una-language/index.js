const parser = require('@babel/parser')
const una = require('una-language')

module.exports = () => ({
    parserOverride: (code, opts) =>
        parser.parse(opts.sourceFileName.endsWith('.una') ? una(code) : code, opts)
})