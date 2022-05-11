const fetch = require("node-fetch")

/**
* @param {string} type Set a type of your choice
* @param {int} size Set the size of the image, you can use the sizes 512 and 780 or leave the field empty and use the default size
*/

async function image(type, size) {
    
    let url = ""

    if(!size) {
        url = `https://ameliebot.com/developers/api/image-api/${type}`;
    } else if(size == 512 || size == 780) {
        end = "?size=" + size
        url = `https://ameliebot.com/developers/api/image-api/${type}${end}`;
    } else {
        return console.log("ERROR: Choose the pixels between 512, 780 or use the default values")
    }

    let settings = { method: "Get" };

    return fetch(url, settings).then(res => res.json()).then((json) => {
        return (json.url)
    }).catch(err => {
        return console.log(err)
    })
}

module.exports = {
    image
}