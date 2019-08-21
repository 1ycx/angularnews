const express = require('express');
const router = express.Router();
const newsService = require('./app.service');

// routes
router.get('/topHeadlines', topHeadlines);
router.get('/sources', sources);
router.get('/everything', everything);
router.get('/translate', translate);

module.exports = router;

function topHeadlines(req, res, next) {
    console.log("topHeadlines function called: controller")
     newsService.topHeadlines(req.query.category, req.query.sources, req.query.language)
    .then(response => res.json(response))
        .catch(err => next(err));
}


function everything(req, res, next) {
    console.log("everything function called: controller")
    newsService.everything(req.query.q, req.query.sources, req.query.domains, req.query.from, req.query.to,
      req.query.language)
        .then(response => res.json(response))
        .catch(err => next(err));
}

function sources(req, res, next) {
    console.log("sources function called: controller")
    newsService.sources(req.query.category, req.query.language, req.query.country)
        .then(response => res.json(response))
        .catch(err => next(err));
}

function translate(req, res, next) {
    console.log("translate function called: controller")
    console.log(decodeURIComponent(req.query.str))
    newsService.trans(req.query.fromLang, req.query.toLang, decodeURIComponent(req.query.str))
        .then(response => res.json(response))
        .catch(err => next(err));
}





// const express = require('express');
// const router = express.Router();
// const sourcesData = require('./app.service');
//  router.get('/topHeadlines', topHeadlines);
// router.get('/everything', everything); 
// router.get('/sources', sources); 

// module.exports = router;

// function topHeadlines(req, res, next) {

//    console.log("topHeadlines function called: controller")
   
//    sourcesData.topHeadlines(req, res,next).then(response => {
//     console.log("topHeadlines function called: after success"+response);
//     res.send(response);
//   });
// }

// function everything(req, res, next) {

//   console.log("everything function called: controller")
  
//   sourcesData.everything(req,res,next).then(response => {
//    console.log("everything function called: after success"+response);
//    res.send(response);
//  });
// }

// function sources(req, res, next) {

//   console.log("sources function called: controller")
  
//   sourcesData.sources(req,res,next).then(response => {
//    console.log("sources function called: after success"+response);
//    res.send(response);
//  });
// }