import newsoperation from "../services/news-operations.js";

function showNewsInCard(eachnews){
    // making DOM from the news
    // Rendering of the header component of the DOM 
    
    const title_header  = document.createElement('div');
    title_header.className = 'row m-4 title-header';
    
    const title = document.createElement('h3');
    title.className = 'title m-2 col-10';
    title.innerHTML = eachnews.title;

    //making Childs of the title-header
    title_header.appendChild(title);

    document.querySelector('#output').appendChild(title_header);

    const mainTag = document.createElement('main');
    mainTag.className = 'row m-2 ';

    const article = document.createElement('div');
    article.className = 'col-7 m-2  row article';

    const content = document.createElement('div');
    content.className = 'col-12 m-2 content';
    content.innerHTML = eachnews.content;

    // const description = document.createElement('div');
    // description.className = 'col-12 m-2  description';
    // description.innerHTML = eachnews.description;

    const img = document.createElement('img');
    img.alt = 'img';
    img.class = 'col-5 m-1 '
    img.src = eachnews.urlToimage;

    mainTag.appendChild(article);
    mainTag.appendChild(img);

    article.appendChild(content);
    // article.appendChild(description);

    document.querySelector('#output').appendChild(mainTag);


    // makin of the about section of the news 

    const about = document.createElement('div');
    about.className = 'row m-1  about';

    const aWrap = document.createElement('a');
    aWrap.className = 'col-7'
    aWrap.href = eachnews.url;

    const btn = document.createElement('button');
    btn.className = 'col-7 m-2  btn btn-info';
    btn.innerHTML = 'Read More>>>'

    const author = document.createElement('div');
    author.className = 'border col-5 author';
    author.innerHTML = ' By - '+ eachnews.author;

    about.appendChild(aWrap);
    about.appendChild(author);

    aWrap.appendChild(btn);

    document.querySelector('#output').appendChild(about);

    
}

async function showNews() {
    const news =await newsoperation.readAllNews();
    // console.log('NEWS',news);
    
    let length = news.length;
    // console.log("Length is " , length) 

    for (let i =0  ; i< length ; i++){
        // console.log( i , "th element is " , news[i]);
        // console.log("author " , i , "th is " , news[i].author)
        // console.log("name " , i , "th is " , news[i].source , typeof(news[i].source))
        // console.log('url ' + news[i].urlToimage)

        showNewsInCard(news[i]);
    }

}
    showNews();
