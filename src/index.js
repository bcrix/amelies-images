const fetch = require("node-fetch")

async function image(type) {
    let url = `https://ameliebot.com/developers/api/image-api/${type}`;
    let settings = { method: "Get" };

    return fetch(url, settings).then(res => res.json()).then((json) => {
        return(json.url)
    }).catch(err => {
        return console.log(err)
    })
}

module.exports = {
    image
}
