

async function donetworkcall(  ){
    const URL = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cab22c6c96b34079918a800601281733';
    try {
        const response = await fetch(URL);
        const Object = await  response.json();
        return Object;
    }
    catch(err)
    {
        throw err;
    }
}

export default donetworkcall;