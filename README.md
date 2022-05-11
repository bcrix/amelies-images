
## About Amelie Images
Amelies-Images is a public image API that gives you access to the anime images, gifs and wallpapers of Amelie. You can use it for any project and get a wide range of anime images.

We are constantly expanding our images, gifs and wallpapers and always bring new content and categories.

## Installation
```blue
npm i amelies-images
```

## Example usage
### Use standard image size

```js
const amelie = require("amelies-images");
amelie.image("dance").then(e => {
    console.log(e)
})
```

### Use custom image size
```js
const amelie = require("amelies-images");
amelie.image("dance", 512).then(e => { //you can use the sizes 512 and 780
    console.log(e)
})
```

Here you will find categories for images that you need to write in the string to retrieve them.

| Categories |
| ------------ |
| cry |
| dance |
| happy |
| hug |
| kiss |
| hentai [The Hentai category contains NSFW or overly suggestive content!] |