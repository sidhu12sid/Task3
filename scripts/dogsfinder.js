fetch('https://dog.ceo/api/breeds/list/all')
.then((result) => result.json())
.then((names) =>{
    console.log(names);
    createData(names);
    searchInput(names);
})

function createData(names){
    const name = Object.keys(names.message)
    var length = name.length;
    console.log(length)
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
        im.setAttribute('style','object-fit:cover;width:100%;height:100%')
        led.appendChild(line); 
        line.appendChild(im)      
    }

}

//searchbar filtering

function searchInput(names){
    const searchIn = document.getElementById('searchinput');
    const name = Object.keys(names.message);

    //getting the value of user input on keyup event
        searchIn.addEventListener('input',(event)=>{
        const{value} =event.target;

        //converting the  user input value into lowercase and storing it in a value
        const Query = value.toLowerCase();

        //converting the name value in the dom element to lowercase
        
        for(let nameElement of name){
            let dogName  = nameElement.toLowerCase();
            if(dogName.includes(Query)){
                for(i=0;i<dogName.length;i++){
                    
                }
            }
            
           
        }
            
            
    })

}

