
import newsModel from "../Model/news.js";
import donetworkcall from "./network-call.js"

const newsoperation = {

    async readAllNews(){

        const readnews = await donetworkcall();
        const article = readnews.articles;
        const display_news =[];
        for(let item of article){
            const news = new  newsModel(
                item.author,
                item.title,
                item.description,
                item.url,
                item.urlToImage,
                item.content                
                )
                display_news.push(news);
            }
            return display_news;
    }

}

export default newsoperation;