// class Dog {
//     constructor(name, url) {
//         this.name = name;
//         this.url = url;
//     }
// }

let dogList = [];   //created an empty arry  

//fetched the name and pushed into the empty array
fetch('https://dog.ceo/api/breeds/list/all')
    .then((response) => response.json())
    .then(async (data) => {
        var names = Object.keys(data.message)
        // console.log(names);
        // createAlbum(names);
        names.forEach((x) => {
            dogList.push({
                name: x,
                url: null
            })
        })
        // for (let i = 0; i < names.length; i++) {
        //     dogList.push({
        //         name: names[i],
        //         url: null
        //     })
        //     // let res = await fetch('https://dog.ceo/api/breed/' + names[i] + '/images/random');
        //     // if (res && res.ok) {
        //     //     let y = await res.json();
        //     //     dogList.push({
        //     //         name: names[i],
        //     //         url: y.message
        //     //     });
        //     // }
        // }
        createAlbum(dogList); //called an function for creating the album
    });
//function for removing the child nodes
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//function for the creation of the image album

async function createAlbum(names) {
    // console.log("siree");
    var len = names.length;
    // console.log("length when I reached", len);
    const mainDiv = document.getElementById('images');
   //if childnodes existed for the main div delete those nodes
    if (mainDiv.hasChildNodes) {
        removeAllChildNodes(mainDiv);
    }
    for (i = 0; i < len; i++) {
        // fetch('https://dog.ceo/api/breed/' + names[i] + '/images/random')
        //     .then((res) => res.json())
        //     .then((img) => {
        //         // console.log(img)
        //         imegs.src = img.message;
        //     })
        const imgDiv = document.createElement('div'); //creating the sub divs for the image 
        const imegs = document.createElement('img');
    
        // fetching the images of the dogs using the url and if htere is no url set the url
        if (!names[i].url) {
            let res = await fetch('https://dog.ceo/api/breed/' + names[i].name + '/images/random');
            if (res && res.ok) {
                names[i].url = (await res.json()).message;
            }
        }
        imegs.src = names[i].url;
        // setting the url for displaying the image
        imgDiv.appendChild(imegs)
        mainDiv.appendChild(imgDiv)
        imgDiv.setAttribute('style', 'max-width:300px;max-height:300px;')
        imgDiv.setAttribute('id', 'imgdiv')
        imegs.setAttribute('style', 'object-fit:cover;width:100%;height:100%');
        imegs.setAttribute('class', 'dogName')


    }

}
//search filter  uso=ing the input event and the filter function
let searchBox = document.getElementById("searchin");
searchBox.addEventListener("input", () => {
    let searchText = searchBox.value;
    let filteredList = dogList.filter(x => x.name.includes(searchText));
    createAlbum(filteredList);
});