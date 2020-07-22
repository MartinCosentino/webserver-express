const express = require('express')
const app = express()

const hbs = require('hbs');
require('./Handlebars/helpers');

const port = process.env.PORT || 3000;






app.use(express.static(__dirname + '/public'))


//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {

        nombre: 'Martín'
    });
});

app.get('/about', (req, res) => {

    res.render('about', {

        nombre: 'Martín'
    });
});




// app.get('/data', (req, res) => {
//     res.send('Hello World')

// });

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});