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
        const led = document.getElementById(images);
        
    }

}
