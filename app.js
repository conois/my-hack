/*apikey=a7a10611*/
$(document).ready(() => {
	console.log("cargado")
	printMovie();
}); 

function printMovie(){
	for ( var i in peliculas){
		var titleMovie= peliculas[i].title; 
		axios.get('http://www.omdbapi.com?t='+ titleMovie + '&apikey=a7a10611')
		.then((response) => {
			let movieTitle= response.data.Title; 
			let movieActors= response.data.Actors;
			let movieAward= response.data.Awards; 
			let movieCountry= response.data.Country; 
			let movieLanguage= response.data.Language; 
			let movieDescription= response.data.Plot; 
			let movieProduction= response.data.Production; 
			let movieYear= response.data.Year;
			let movieImdbRating = response.data.imdbRating; 
			let movieWriter= response.data.Writer; 
			let movieRuntime= response.data.Runtime; 
			let moviePoster= response.data.Poster; 
			let movieDirector= response.data.Director;
			let movieRating= response.data.Ratings[0].Value; 

			$("#movie-box").append('<div class="row">'+
					'<div class="col s8 pelicula">'+
						'<h4>'+ movieTitle +'</h4>'+
						'<h6>'+ movieYear +'</h6>'+

						'<p class="lala">Duracion:'+ movieRuntime+'</p>'+
						'<p class="lala">Rating:'+ movieRating +' </p>'+
						'<p class="lala">Director:'+ movieDirector+' </p>'+
						'<p class="lala">Actors:'+ movieActors+' </p>'+
						'<p class="lala">Awards:'+ movieAward+' </p>'+
						'<p class="lala">Country:'+ movieCountry+' </p>'+
						'<p class="lala">Language:'+ movieLanguage+' </p>'+
					'</div>'+

					'<div class="col s4 imagen-pelicula">'+
						'<img src="'+ moviePoster+ '">'+
					'</div>'+
				'</div>'+

				'<div class="row pelicula">'+
					'<div class="col-xs-12">'+
						'<p>Sinopsis</p>'+
						'<p class="description">' + movieDescription+ '</p>'+

					'</div>'+
				'</div>')




			})
		.catch((error) => {
			console.log("error")
	
		}); 
	}
	
}

function printBox(){
	console.log("si ejecutó printbox()")
	
}


/*		
	(
				'<div class="row">'+
					'<div class="col s8 pelicula">'+
						'<h4>'+ movieTitle +'</h4>'+
						'<h6>'+ movieYear +'</h6>'+

						'<p class="lala">Duracion:'+ movieRuntime+'</p>'+
						'<p class="lala">Rating:'+ movieRating +' </p>'+
						'<p class="lala">Director:'+ movieDirector+' </p>'+
						'<p class="lala">Actors:'+ movieActors+' </p>'+
						'<p class="lala">Awards:'+ movieAward+' </p>'+
						'<p class="lala">Country:'+ movieCountry+' </p>'+
						'<p class="lala">Language:'+ movieLanguage+' </p>'+
					'</div>'+

					'<div class="col s4 imagen-pelicula">'+
						'<img src="'+ moviePoster+ '">'+
					'</div>'+
				'</div>'+

				'<div class="row pelicula">'+
					'<div class="col-xs-12">'+
						'<p>Sinopsis</p>'+
						'<p class="description">' + movieDescription+ '</p>'+

					'</div>'+
				'</div>')*/