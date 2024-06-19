module.exports = {
    require: ['@babel/register'],
    timeout: 5000,
    exclude:['test/example.spec.js'],
    file: 'config/project-setup.js',
    reporter: 'mochawesome'
}