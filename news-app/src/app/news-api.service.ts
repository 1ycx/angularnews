import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  
   server_host = "http://localhost:4000/news";

  constructor(private http:HttpClient) { }


  initSources(category) {
    return this.http.get(this.server_host+"/sources?category="+category);
   }
  
   initArticles(language, category) {
    return this.http.get(this.server_host+"/topHeadlines?language="+language+"&category="+category);
   }
   
   initArticlesLanguage(language) {
    return this.http.get(this.server_host+"/topHeadlines?language="+language);
   }
 
   getArticlesByID(category: String, language:string) {
    return this.http.get(this.server_host+"/topHeadlines?category="+category+"&language="+language);
   }

   getTranslations(fromLang: string, toLang: string, str: string) {
    return this.http.get(this.server_host+"/translate?fromLang="+fromLang+"&toLang="+toLang+"&str="+str);
   }  
}


















// import { Injectable } from '@angular/core';
// import { HttpClient  } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class NewsApiService {  


//   host = "http://localhost:4000/news/";

//   constructor(private http:HttpClient) { }

//   headlines(language:String){
//     return this.http.get (this.host+"topHeadlines?language="+language);  
//  }

//   initSources(language:String){
//      return this.http.get (this.host+"sources?language="+language);
   
//   }

//   initArticles(language:string){
//    return this.http.get(this.host+"top-headlines?language="+language);
//   }
//   getArticlesByID(source: String,lang:String){
    
//    return this.http.get(this.host+"top-headlines?sources="+source+"&language="+lang);
//   }
// } 


















































// // import { Injectable } from '@angular/core';
// // import { HttpClient  } from '@angular/common/http';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class NewsApiService {

// //   api_key = '363df47ca72742c48e9f8f02a46b9284';

// //   constructor(private http:HttpClient) { }
// //   initSources(){
// //      return this.http.get('http://localhost:4000/news/sources');
// //    //  https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
// //   }
// //   initArticles(){
// //    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
// //   }
// //   getArticlesByID(source: String){
// //    return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
// //   }
// // } 

