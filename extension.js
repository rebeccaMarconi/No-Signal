(function(){
	//all code goes here in function 

	// console.log('hello world!');  //=print log

	
	// });
 //    //change css of every paragraph through jquery 


	// // * = ALL items on page

	
	$('*').each( function() {
	 	$(this).css( { 'background-color' : 'rgb(0,0,0)' } );

	 });

	// go through each image on the page
	$('img').each( function() {
		console.log($(this).attr('src'));


		// change the image's source url
		$(this).attr('src', 'https://silverspaceship.com/static/shot_1_thumb.png' );
	});
	$('*').each( function() {
	 	$(this).css( { 'color': 'rgb(150,0,0)', 'font-size': '13px', 'font-style': 'italic', 'font-family': 'Helvetica', 'font-weight': 'bold', 'text-transform': 'uppercase', 'text-decoration': 'line-through'} );

	});
	
	$('p','img','a').mouseover (function(){
		$(this).css( { 'color': 'rgb(40,0,0)', 'font-size': '20px', 'font-style': 'italic', 'font-family': 'Helvetica', 'font-weight': 'bold', 'text-transform': 'uppercase', 'text-decoration': 'line-through'} );
	//}).mouseout (function(){
		//$(this).fadeIn(1000);
	});
	 
})();







