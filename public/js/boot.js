require.config({
  paths:{
  	jquery:'/js/libs/jquery.js',
  	underScore:'/js/libs/underscore.js',
  	backBone:'js/libs/backbone.js',
  	text:'js/libs/text.js',
  	templates:'../templates'
  },
  shim:{
  	'backBone':['underScore','jquery']
  	'socialFrame':['backBone']
  }
});

require(['socialFrame'],function(){
	socialFrame.initialize();

});