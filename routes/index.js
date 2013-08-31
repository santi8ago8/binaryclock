/*
 * GET home page.
 */

exports.index = function(req, res) {
	res.render('index', {
		title: 'Binary Clock by Santiago N. Córdoba'
	});
};