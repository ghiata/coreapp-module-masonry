angular.module("corpapp.module.masonry", [])

.run(function(){
	$(document).ready(function() {
	    $('#masonry').masonry({
            itemSelector: '.col-6'
        });
	});
});