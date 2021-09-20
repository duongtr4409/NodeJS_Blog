const newsRouter = require('./news.router');
const siteRouter = require('./site.router');

function appRouter(app){

    // app.get('/news', (req, res) => {
    //     res.render('news');
    // });
    app.use('/news', newsRouter);

    app.get('/getjson', (req, res) => {
        var result = {name : 'duowngTora', age: 18};
        res.send(result);
    });

    // app.get('/search', (req, res) =>{
    //   res.render('search');
    // });

    // app.get('/', (req, res) => {
    //     res.render('home');
    // });
    app.use('/', siteRouter);

}

module.exports = appRouter;

