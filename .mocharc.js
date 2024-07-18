module.exports = {
    require: ['@babel/register'],
    timeout: 20000,
    exclude:['test/example.spec.js'],
    file: 'config/project-setup.js',
    reporter: 'mochawesome'
}