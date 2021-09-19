const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exhandlebars  = require('express-handlebars');
const { resolveSoa } = require('dns');
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
app.use(express.static(path.join(__dirname, 'publics')))

console.log(path.join(__dirname, 'publics'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});

app.get('/getjson', (req, res) => {
    var result = {name : 'duowngTora', age: 18};
    res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

