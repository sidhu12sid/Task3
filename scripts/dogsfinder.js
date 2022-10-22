fetch('https://dog.ceo/api/breeds/list/all')
.then((result) => result.json())
.then((names) =>{
    console.log(names);
    createAlbum(names);
    myFunction(names);
})
function createAlbum(names){
    const name = Object.keys(names.message);
    var length = name.length;
    // console.log(length)
    for(let i=0 ; i<length; i++){
        fetch('https://dog.ceo/api/breed/'+name[i]+'/images/random')
        .then((response)=>response.json())
        .then((data)=>{
            im.src = data.message
        })
        const led = document.getElementById('images');
        let line = document.createElement('div');
        line.setAttribute('style','max-width:300px;max-height:300px;')

        let im = document.createElement('img');
        im.setAttribute('style','object-fit:cover;width:100%;height:100%');
        
        led.appendChild(line); 
        line.appendChild(im);


//search filter

}

}

function myFunction(names){
const inputValue = document.getElementById('search');
inputValue.addEventListener('input',(event)=>{
    coiuu
})
}


