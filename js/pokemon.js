
$("select").change(choose);

function choose(){

	$.get('http://pokeapi.co/api/v2/type/', selectType);
	function selectType(data){
		var dataType     = data.results;
		for (var i=0; i< dataType.length; i++){
			if (dataType[i].name == $("select").val()){
				$.get(dataType[i].url, findType);
				function findType(data){													//Devuelve los datos del tipo seleccionado

					var typeUrl = data.pokemon;
					for (var i=0; i< 1; i++){												//typeUrl.length para sacarlos todos

						$.get(typeUrl[i].pokemon.url, pokedexData);							//Se llama a cada una de las url y se ejecuta la funcion
						//$.get(typeUrl[i].pokemon.url, pokedexDescription);
					}	

					function pokedexData(data){

						var tipoPokemon 	 = data;
						var name			 = tipoPokemon.forms[0].name;
						var type1 	 		 = tipoPokemon.types[0].type.name;
				//		var type2 	 		 = tipoPokemon.types[1].type.name;
						var pokeImg			 = tipoPokemon.sprites.front_default;

						$(".container-fluid").append("<div class='container-fluid card2'></div>");
						$(".card2").prepend("<p>Type: "+type1+"</p>");
						$(".card2").prepend("<h4>Name: "+name+"</h4>");
						
						$(".card2").prepend("<img class='card-img-top' src='" + pokeImg + "'>");
					}

				/*	function pokedexDescription (data){
						console.log("Funciona tambien!");
						var descript 		 = data.descriptions[1].description;

						$(".description").append(descript);	
					}
				*/
				}

				

				console.log("encontrado el tipo "+ $("select").val() );
			}
		}
	
	}
}
