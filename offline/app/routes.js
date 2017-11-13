module.exports = function (app) {
	app.use('/',require('./views/home/home.controller'))
}