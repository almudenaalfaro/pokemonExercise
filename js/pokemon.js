$.get('http://pokeapi.co/api/v2/pokemon/1/', pokedexData);


/*$.ajax({
	dataType: "json",
	url: "http://pokeapi.co/api/v2/pokemon/1/",
	//data: data,
	success: pokedexData 
});*/

function pokedexData(data){
	console.log("Funciona!");
	var tipoPokemon = data.forms/*[0].name*/;
	console.log(tipoPokemon+ " esta es la variable");
	console.log(data+" estos son los datos")
}