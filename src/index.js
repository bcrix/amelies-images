const fetch = require("node-fetch")

function image(type) {
    let url = `https://developers.ameliebot.com/api/image-api/${type}`;
    let settings = { method: "Get" };

    fetch(url, settings).then(res => res.json()).then((json) => {
        console.log(json.url)
    }).catch(err => {
        return console.log(err)
    })
}

module.exports = {
    image
};