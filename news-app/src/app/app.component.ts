import { Component } from '@angular/core';
// import { FormControl } from '@angular/forms';

import { NewsApiService } from './news-api.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	mArticles: Array<any>;
	mSources: Array<any>;

	language: string = "us";
	fromLang: string = "";
	toLang: string = "";
	category: string = "general";

	// control: FormControl = new FormControl('');

	constructor(private newsapi: NewsApiService) {
		console.log('app component constructor called');
	}


	ngOnInit() {

		this.mSources = [{
			"name": "general",
			"id": 1,
			"src": "../assets/icons/general.png"
		}, {
			"name": "science",
			"id": 2,
			"src": "../assets/icons/science.png"
		},
		{
			"name": "technology",
			"id": 3,
			"src": "../assets/icons/technology.png"
		},
		{
			"name": "entertainment",
			"id": 4,
			"src": "../assets/icons/entertainment.png"
		},
		{
			"name": "sports",
			"id": 5,
			"src": "../assets/icons/sports.png"
		},
		{
			"name": "business",
			"id": 6,
			"src": "../assets/icons/business.png"
		},
		{
			"name": "health",
			"id": 7,
			"src": "../assets/icons/health.png"

		}];

		this.getArticlesBasedOnCategory(this.category, this.language);

	}

	// handleSearch(val) {
	// 	this.newsapi.initArticles(this.language, this.category, val).subscribe(data => this.mArticles = data['articles']);
	// 	val = "";
	// }

	getArticlesBasedOnLanguage(language) {
		this.getArticlesBasedOnCategory(this.category, language);
	}

	getArticlesBasedOnCategory(category, language) {

		this.language = language;
		this.category = category;

		this.newsapi.initArticles(this.language, this.category, "").subscribe(data => this.mArticles = data['articles']);

	}

	searchArticles(category) {
		console.log("selected category is: " + category);
		this.category = category;
		this.newsapi.getArticlesByID(category, this.language).subscribe(data => this.mArticles = data['articles']);
	}

	translate(toLang) {
		this.toLang = toLang;
		let link = "";
		let google_trans = "https://translate.google.com/translate?hl=en&sl=auto&tl=";

		if (this.fromLang == "") {
			switch (this.language) {
				case "in": this.fromLang = "en"; break;
				case "us": this.fromLang = "en"; break;
				case "cn": this.fromLang = "zh"; break;
				case "ae": this.fromLang = "ar"; break;
				case "ar": this.fromLang = "es"; break;
				case "at": this.fromLang = "de"; break;
				case "au": this.fromLang = "en"; break;
				case "be": this.fromLang = "fr"; break;
				case "bg": this.fromLang = "bg"; break;
				case "br": this.fromLang = "pt"; break;
				case "ca": this.fromLang = "en"; break;
				case "ch": this.fromLang = "de"; break;
				case "co": this.fromLang = "es"; break;
				case "cu": this.fromLang = "es"; break;
				case "cz": this.fromLang = "cs"; break;
				case "de": this.fromLang = "de"; break;
				case "eg": this.fromLang = "ar"; break;
				case "gb": this.fromLang = "en"; break;
				case "gr": this.fromLang = "el"; break;
				case "hk": this.fromLang = "zh"; break;
				case "hu": this.fromLang = "hu"; break;
				case "id": this.fromLang = "id"; break;
				case "ie": this.fromLang = "en"; break;
				case "il": this.fromLang = "he"; break;
				case "jp": this.fromLang = "ja"; break;
				case "kr": this.fromLang = "ko"; break;
				case "lt": this.fromLang = "lt"; break;
				case "lv": this.fromLang = "lv"; break;
				case "ma": this.fromLang = "fr"; break;
				case "mx": this.fromLang = "es"; break;
				case "my": this.fromLang = "en"; break;
				case "ng": this.fromLang = "en"; break;
				case "nl": this.fromLang = "nl"; break;
				case "no": this.fromLang = "no"; break;
				case "nz": this.fromLang = "en"; break;
				case "ph": this.fromLang = "en"; break;
				case "pl": this.fromLang = "pl"; break;
				case "ro": this.fromLang = "ro"; break;
				case "rs": this.fromLang = "hr"; break;
				case "ru": this.fromLang = "ru"; break;
				case "sa": this.fromLang = "ar"; break;
				case "se": this.fromLang = "sv"; break;
				case "sg": this.fromLang = "en"; break;
				case "si": this.fromLang = "sl"; break;
				case "sk": this.fromLang = "sk"; break;
				case "th": this.fromLang = "th"; break;
				case "tr": this.fromLang = "tr"; break;
				case "tw": this.fromLang = "zh"; break;
				case "ua": this.fromLang = "uk"; break;
				case "ve": this.fromLang = "es"; break;
				case "za": this.fromLang = "en"; break;
			}
		}


		for (let article of this.mArticles) {
			this.newsapi.getTranslations(this.fromLang, this.toLang, encodeURIComponent(article.title))
				.subscribe(data => article.title = data)
			this.newsapi.getTranslations(this.fromLang, this.toLang, encodeURIComponent(article.description))
				.subscribe(data => article.description = data)
			if (article.url.includes("translate")) {
				link = article.url.split("u=")[1]
				article.url = google_trans + this.toLang + "&u=" + link;
			}
			else
				article.url = google_trans + this.toLang + "&u=" + article.url;
		}
		this.fromLang = this.toLang;
	}
}