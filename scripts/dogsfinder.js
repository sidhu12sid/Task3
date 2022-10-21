fetch('https://dog.ceo/api/breeds/list/all')
.then((result) => result.json())
.then((names) =>{
    console.log(names);
    createAlbum(names);
    myInput(names);
})

function createAlbum(names){
    const name = Object.keys(names.message)
    var length = name.length;
    // console.log(length)
    for(let i=0 ; i<length; i++){
        fetch('https://dog.ceo/api/breed/'+name[i]+'/images/random')
        .then((response)=>response.json())
        .then((data)=>{
            // console.log(data);
            im.src = data.message
        })
        const led = document.getElementById('images');
        let line = document.createElement('div');
        line.setAttribute('style','max-width:300px;max-height:300px;')

        let im = document.createElement('img');
        im.setAttribute('style','object-fit:cover;width:100%;height:100%');
        led.appendChild(line); 
        line.appendChild(im);
}

}

function myInput(names){
    let searchInput = document.getElementById('searchinput');
    
    const dogNames = Object.keys(names.message)

    searchInput.addEventListener('input', (event)=>{
        const { value } = event.target;
        const userQuery = value.toLowerCase();
        
    })
}



