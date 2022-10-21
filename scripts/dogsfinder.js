fetch('https://dog.ceo/api/breeds/list/all')
.then((result) => result.json())
.then((names) =>{
    console.log(names);
    createAlbum(names);
    onInput(names);
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
function onInput(names){
let inputVal = document.getElementById('search');
const name = Object.keys(names.message);
// console.log(name)
inputVal.addEventListener('input',(event)=>{
    const { value } = event.target;
    const userQuery = value.toLowerCase();
    const led = document.getElementById('images');
    led.removeChild(line);
    console.log(userQuery);

    for(let dgNames of name){
        let nme = dgNames.toLowerCase();
        if(nme.includes(userQuery)){
        
        }
    }
})


}
}

}




