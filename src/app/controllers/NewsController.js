class NewsController{

    // [GET], '/'
    index(req, res){
        res.render('news');
    }

}

module.exports = new NewsController;