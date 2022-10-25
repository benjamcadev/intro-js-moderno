
const getImage = async() => {

    try {
        const apiKey = '22clqhGlqIPF2VXXbPyRtLzD9HmQ5dkH';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
    
        console.log(data.url);
    } catch (error) {
        console.warn(error)
    }
   
}

getImage();