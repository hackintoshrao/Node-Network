define(['text!templates/index.html'],function(indexPageTemplate){
	var indexView = Backbone.View.extend({
		el:$(#content),
		render:function(){
			this.$el.html(indexPageTemplate);
		}
	});
	return new indexView;

	

});