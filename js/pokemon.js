$.get('http://pokeapi.co/api/v2/pokemon/1/', pokedexData);
$.get('http://pokeapi.co/api/v2/characteristic/1/', pokedexDescription);


/*$.ajax({
	dataType: "json",
	url: "http://pokeapi.co/api/v2/pokemon/1/",
	//data: data,
	success: pokedexData 
});*/

function pokedexData(data){
	console.log("Funciona!");
	var tipoPokemon 	 = data;
	var name			 = tipoPokemon.forms[0].name;
	var type1 	 		 = tipoPokemon.types[0].type.name;
	var type2 	 		 = tipoPokemon.types[1].type.name;
	var pokeImg			 = tipoPokemon.sprites.front_default;

	$("h2").append(name);
	$(".type").append(type1+" / "+type2);
	$("h2").before("<img class='card-img-top' src='" + pokeImg + "'>");
}
function pokedexDescription (data){
	console.log("Funciona tambien!");
	var descript 		 = data.descriptions[1].description;

	$(".description").append(descript);	
}