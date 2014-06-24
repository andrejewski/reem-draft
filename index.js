
module.exports = function() {
	return function(item, reem, done) {
		if(item.draft && reem.env.production) {
			item.ignore = true;
		}
		done(null, item);
	}
}