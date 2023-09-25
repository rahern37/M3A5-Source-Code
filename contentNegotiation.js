var query = 'https://swapi.dev/api/people/1';

fetch(query, {
        method: 'Get',
        header: {
            'Content-Type': 'application/xml',
            'accept': 'application/json',
            'User-Agent': '*'
        },
    }
).then(function(response){
    console.log(`response = ${response}`); //json
    return response.text();
    })
    .then(function(xml){
        //covert to workable json
        console.log(`XML = ${xml}`);//json
    })
    .catch((error) => {
        console.log('Error:', error);
    });
