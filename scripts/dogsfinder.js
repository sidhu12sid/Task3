fetch('https://dog.ceo/api/breeds/list/all')
.then((result) => result.json())
.then((names) =>{
    // console.log(names);
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
        line.setAttribute('id','imgdiv')

        let im = document.createElement('img');
        im.setAttribute('style','object-fit:cover;width:100%;height:100%');
        
        led.appendChild(line); 
        line.appendChild(im);

}

}

//search filter
function myFunction(names){
    const searchInput = document.getElementById("searchin");
    
    const name = Object.keys(names.message);

    searchInput.addEventListener('input',  (event)=>{
        const { value } = event.target;
        // console.log(value);
        const searchQuery = value.toLowerCase();
        console.log(searchQuery)

        for(let nameElement of name){
            const elem = document.getElementById('imgdiv')
            elem.remove();
            let names = nameElement.toLowerCase();
            if(names.includes(searchQuery)){
                fetch('https://dog.ceo/api/breed/'+names+'/images/random')
                .then((res) => res.json())
                .then((data)=>{
                    img.src = data.message
                })
                let maindiv = document.getElementById('images')
                let imgDiv = document.createElement('div')
                let img = document.createElement('img')
                imgDiv.setAttribute('style','max-width:300px;max-height:300px;')
                imgDiv.appendChild(img)
                maindiv.appendChild(imgDiv);
                img.setAttribute('style','object-fit:cover;width:100%;height:100%')

                
               
            }
        }
    })
}


