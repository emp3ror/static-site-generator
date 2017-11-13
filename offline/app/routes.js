module.exports = function (app) {
	app.use('/post',require('./views/post/post.controller'))
	app.use('/',require('./views/home/home.controller'))
}