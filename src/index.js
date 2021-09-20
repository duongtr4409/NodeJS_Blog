const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exhandlebars  = require('express-handlebars');
const { resolveSoa } = require('dns');
const appRouter = require('./routers/index.router');


const app = express();
const port = 3000;
    // config handlebars: để thực hiệnt trả về file
app.engine('hbs', exhandlebars({
  extname : 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/resource/views'));
    // config morgan : để xem log request đến
app.use(morgan('combined'));
    // config static folde: cho phép truy cập file
app.use(express.static(path.join(__dirname, 'publics/ ')))
    // config midleware để xử dụng request.body (lấy dữ liệu từ phương thức poss hoặc lấy từ ajax, fetch, ...)
app.use(express.urlencoded({extended : true}));
app.use(express.json());



// app.get('/', (req, res) => {
//   res.render('home');
// });

// app.get('/news', (req, res) => {
//     res.render('news');
// });

// app.get('/getjson', (req, res) => {
//     var result = {name : 'duowngTora', age: 18};
//     res.send(result);
// });

// app.get('/search', (req, res) =>{
//   res.render('search');
// });
appRouter(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

