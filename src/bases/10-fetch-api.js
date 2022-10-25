
const apiKey = '22clqhGlqIPF2VXXbPyRtLzD9HmQ5dkH';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

//SE CONOCE COMO PETICIONES ANIDADAS, SIRVE PARA LEER LA DATA
peticion
.then(resp => resp.json())
.then(({data}) => {
    console.log(data.images.original.url);
    const {url} = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
})
.catch(console.warn);