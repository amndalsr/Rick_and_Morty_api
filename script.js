fetch('https://rickandmortyapi.com/api/character',{
    method: 'GET'
})
.then(Response => Response.json())
.then(function(json){

    var container = document.querySelector('.container')

    json.results.map(function(results){

        container.innerHTML+=`
            <div> <img src=`+ results.image +`>  
            <h2> `+ results.name + ` </h2>
            <h4> ` + results.species + ` </h4><br>
            <h5> ` + results.status + ` </h5> 
            </div>
        `;
    })
    
})

