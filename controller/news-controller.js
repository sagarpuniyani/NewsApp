import newsoperation from "../services/news-operations.js";

function showNewsInCard(eachnews){
    // making DOM from the news
    // Rendering of the header component of the DOM 
    
    const title_header  = document.createElement('div');
    title_header.className = 'row title-header';
    
    const title = document.createElement('h3');
    title.className = 'title col-10';
    title.innerHTML = eachnews.title;

    //making Childs of the title-header
    title_header.appendChild(title);

    document.querySelector('#output').appendChild(title_header);

    const mainTag = document.createElement('main');
    mainTag.className = 'row ';

    const article = document.createElement('div');
    article.className = 'col-7 row article';

    const content = document.createElement('div');
    content.className = 'col-12  content';
    content.innerHTML = eachnews.content;

    const description = document.createElement('div');
    description.className = 'col-12  description';
    description.innerHTML = eachnews.description;

    const img = document.createElement('img');
    img.alt = 'img';
    img.class = 'col-5'
    img.src = eachnews.url;







    
    
}

async function showNews() {
    const news =await newsoperation.readAllNews();
    console.log('NEWS',news);
    
    let length = news.length;
    console.log("Length is " , length) 

    for (let i =0  ; i< length ; i++){
        console.log( i , "th element is " , news[i]);
        console.log("author " , i , "th is " , news[i].author)
        console.log("name " , i , "th is " , news[i].source , typeof(news[i].source))
        showNewsInCard(news[i]);
    }

}
    showNews();
