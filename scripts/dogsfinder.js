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
        let im = document.createElement('img');
        im.setAttribute('style','object-fit:cover;height:100%;width:100%;')
        led.appendChild(line); 
        line.appendChild(im)      
    }

}
