$.get('https://pokeapi.co/api/v2/pokemon?limit=10', function(data) 
{
    data.results.forEach(function(pokemon) {
        var pokemonName = (`<li>${pokemon.name}</li>`);
        var pokemonAbility;
        $('#pokemonNameList').append(pokemonName);

        // Fetch abilities for each pokemon
        $.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`, function(abilitiesData) 
        {
            abilitiesData.abilities.forEach(function(abilityData) 
            {
                console.log(abilitiesData.abilities);
                pokemonAbility = (`<li>${abilityData.ability.name}</li>`);
                $('#pokemonNameList').append(pokemonAbility);

            });
        });
        
    });
});
