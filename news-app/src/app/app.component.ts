import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';
import { from } from 'rxjs';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	mArticles: Array < any > ;
	mSources: Array < any > ;

	language: string = "in";
	fromLang: string = "";
	toLang: string = "";
	category: string = "health"

	constructor(private newsapi: NewsApiService) {
		console.log('app component constructor called');
	}


	ngOnInit() {

		this.mSources = [{
			"name":"general",
			"id":1,
			"src":"../assets/icons/general.png"
		  },{
			"name":"science",
			"id":2,
			 "src":"../assets/icons/science.png"
		  },
		  {
			"name":"technology",
			"id":3,
			 "src":"../assets/icons/technology.png"
		  },
		  {
			"name":"entertainment",
			"id":4,
			 "src":"../assets/icons/entertainment.png"
		  },
		  {
			"name":"sports",
			"id":5,
			"src":"../assets/icons/sports.png"
		  },
		  {
			"name":"business",
			"id":6,
			"src":"../assets/icons/business.png"
		  },
		  {
			"name":"health",
			"id":7,
			"src":"../assets/icons/health.png"
		  
		  	}	];

		this.getArticlesBasedOnCategory(this.category, this.language);

	}

	getArticlesBasedOnLanguage(language) {
		this.getArticlesBasedOnCategory(this.category, language);
	}

	getArticlesBasedOnCategory(category, language) {

		this.language = language;
		this.category = category;

		this.newsapi.initArticles(this.language, this.category).subscribe(data => this.mArticles = data['articles']);

	}

	searchArticles(category) {
		console.log("selected category is: " + category);
		this.category = category;
		this.newsapi.getArticlesByID(category, this.language).subscribe(data => this.mArticles = data['articles']);
	}
	
	translate(toLang) {
		this.toLang = toLang;
		switch(this.language){
			case "in": this.fromLang = "en"; break;
			case "us": this.fromLang = "en"; break;
			case "cn": this.fromLang = "zh"; break;
			case "ae": this.fromLang = "ar"; break;
			case "ar": this.fromLang = "es"; break;
		}
		// if(this.fromLang === this.language) return;
		for (let article of this.mArticles) {
			this.newsapi.getTranslations(this.fromLang, this.toLang, encodeURIComponent(article.title))
				.subscribe(data => article.title = data)
			this.newsapi.getTranslations(this.fromLang, this.toLang, encodeURIComponent(article.description))
				.subscribe(data => article.description = data)
		 }
	}
}