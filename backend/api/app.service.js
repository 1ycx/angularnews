const NewsAPI = require('newsapi');
const newsAPIObj = new NewsAPI('a188caa95ebe45a1898d065d94db2b57') //921182aceb5443bb8b89f6bd30e9493c');
const translate = require('translate');

// const req = require("requests");

// const key = "1276145b62a76beb6fb7"; //5ef25df7ef8fd3f0336d

module.exports = {
  topHeadlines,
  everything,
  sources,
  trans
};

async function topHeadlines(category, language, q) {
  console.log("topHeadlines function called: " + language)
  return newsAPIObj.v2.topHeadlines({
    q: q,
    category: category,
    country: language,
    pageSize: '50'
  }).then(response => {
    return response;
  });
}

async function everything(q, sources, domains, from, to, language) {
  console.log("everything function called: ")
  return newsAPIObj.v2.everything({
    q: q,
    sources: sources,
    domains: domains,
    from: from,
    to: to,
    language: language,
    sortBy: 'publishedAt',
    pageSize: '50',
  }).then(response => {
    // console.log(response);
    return response;
  });
}

async function sources(category, language, country) {
  console.log("sources function called: ")
  return newsAPIObj.v2.sources({
    category: category,
    language: language,
    country: country
  }).then(response => {
    // console.log(response);
    return response;
  });
}

async function trans(fromLang, toLang, str) {

  // req("https://api.mymemory.translated.net/get?q=" + encodeURIComponent(str) + "&langpair=" + fromLang + "|" + toLang + "&key=" + key)
  //   .on('data', chunk => {
  //     let data = JSON.parse(chunk);
  //     console.log(data.responseData.translatedText)
  //     return data.responseData.translatedText;
  //   })

  if (str == "" || str == null || str == undefined)
    return "";

  convert = await translate(str, { from: fromLang, to: toLang, engine: 'yandex', key: 'trnsl.1.1.20190820T183237Z.bf333331b92fc956.063a4073e6ae47735a362ce3371516e1ca1e29fd' });
  return convert;
}


// //const sourcesData = require('./sources.json');

// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('363df47ca72742c48e9f8f02a46b9284');
// const JSON = require('circular-json');


// function topHeadlines(req,res) 
// {
//     console.log("topHeadlines function called "+JSON.stringify(req.query));

//     return newsapi.v2.topHeadlines({
//       q: req.query.q,
//       category: req.query.category,
//       language: req.query.language,
//       country: req.query. country
//     }).then(res => {
//       console.log("TopHeadlines after giving parameters:");

//       return res;
//     });
// }
// function everything(req,res) 
// {
//   console.log("everything function called");
//   return newsapi.v2.everything({
//   q: req.query.q,
//   sources: req.query.sources,
//   domains: req.query.domains ,
//   language: req.query.language ,
//   from: 2019-07-20,
//   to: 2019-07-,
//   sortBy: req.query.sortBy
// }).then(response => {
//   console.log("Everythng  after giving parameters:");
//   console.log("request given:"+req);
//   return response;
// });
// }

// function sources(req,res) 
// {
//   console.log("sources function called: service");
//   return newsapi.v2.sources({
//     category: req.query.category,
//     language: req.query.language,
//     country: req.query. country
//   }).then(response => {
//   console.log("Sources after giving parameters:");
//   console.log("request given:"+req);
//   return response;
// });
// }

// module.exports = {
//     topHeadlines: topHeadlines,
//     everything: everything,
//     sources: sources 
// }