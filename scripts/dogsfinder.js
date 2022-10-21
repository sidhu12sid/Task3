fetch('https://dog.ceo/api/breeds/list/all')
.then((result) => result.json())
.then((names) =>{
    console.log(names);
    createData(names);
})

function createData(names){
    const name = Object.keys(names.message)
    var length = name.length;
    console.log(length)
    for(let i=0 ; i<length; i++){
        fetch('https://dog.ceo/api/breed/'+name[i]+'/images/random')
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            im.src = data.message
        })
        const led = document.getElementById('images');
        let line = document.createElement('div');
        line.setAttribute('style','max-width:400px;max-height:400px')

        let im = document.createElement('img');
        im.setAttribute('style','object-fit:cover;width:100%;height:100%')

        let head = document.createElement('h2');
        head.innerHTML = name[i];
        head.setAttribute('style','position:absolute;')

        line.appendChild(head)
        led.appendChild(line); 
        line.appendChild(im)      
    }

}

//searchbar filtering

const searchInput = document.getElementById("searchinput");

const search = Object.keys()

