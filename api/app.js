//ARCHIVO ORIGINAL
var redis = require('redis');
var express = require('express');

//Conexion a redis
var redis_cliente = redis.createClient(6379, 'db-redis')
var app = express();

var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var jsonParser = bodyParser.json()

redis_cliente.on('connect', function () {
    console.log("conectado a redis")
})

//plantilla 
app.set('view engine', 'ejs');

//HASTA ACA

//redis_cliente.set("kylo", "ren")
//redis_cliente.set("luke", "skywalker")

/*
redis_cliente.get("kylo", function(err, value){
    console.log(value)
})
redis_cliente.get("luke", function(err, value){
    console.log(value)
})

redis_cliente.exists("darth", function(err, value){
    console.log(value)
})
*/
//redis_cliente.lpush("personajes", ["luke", "yoda", "han", "chewbacca", "leia"])

//agregado

/*
app.get('/',function(req,res){
    res.render('personajes');
 });
*/
//aplicacion original

//app.get ('/', function (req, res)  { 
//  res.render('index.ejs');
//});

//app.get('/episodio-i',function(req,res){
//  res.render('episodio-i');
//});

//------FUNCION AGREGAR/ELIMINAR PERSONAJES POR EPISODIO-------------

app.post('/', urlencodedParser, (req, res) => {
    var inputValue = req.body.name;
    if (inputValue == "Agregar Personaje") {
        redis_cliente.lpush("episodio1", req.body.tittle)
        //exito = 'true'
        //console.log(exito)
        res.redirect('/')
    }
    else {
        redis_cliente.lrem("episodio1", 0, req.body.tittle)
        res.redirect('/')
    }
})

app.post('/episodio-ii', urlencodedParser, (req, res) => {
    var inputValue = req.body.name;
    if (inputValue == "Agregar Personaje") {
        redis_cliente.lpush("episodio2", req.body.tittle)
        //exito = 'true'
        //console.log(exito)
        res.redirect('/episodio-ii')
    }
    else {
        redis_cliente.lrem("episodio2", 0, req.body.tittle)
        res.redirect('/episodio-ii')
    }
})

app.post('/episodio-iii', urlencodedParser, (req, res) => {
    var inputValue = req.body.name;
    if (inputValue == "Agregar Personaje") {
        redis_cliente.lpush("episodio3", req.body.tittle)
        //exito = 'true'
        //console.log(exito)
        res.redirect('/episodio-iii')
    }
    else {
        redis_cliente.lrem("episodio3", 0, req.body.tittle)
        res.redirect('/episodio-iii')
    }
})

app.post('/episodio-iv', urlencodedParser, (req, res) => {
    var inputValue = req.body.name;
    if (inputValue == "Agregar Personaje") {
        redis_cliente.lpush("episodio4", req.body.tittle)
        //exito = 'true'
        //console.log(exito)
        res.redirect('/episodio-iv')
    }
    else {
        redis_cliente.lrem("episodio4", 0, req.body.tittle)
        res.redirect('/episodio-iv')
    }
})

app.post('/episodio-v', urlencodedParser, (req, res) => {
    var inputValue = req.body.name;
    if (inputValue == "Agregar Personaje") {
        redis_cliente.lpush("episodio5", req.body.tittle)
        //exito = 'true'
        //console.log(exito)
        res.redirect('/episodio-v')
    }
    else {
        redis_cliente.lrem("episodio5", 0, req.body.tittle)
        res.redirect('/episodio-v')
    }
})

app.post('/episodio-vi', urlencodedParser, (req, res) => {
    var inputValue = req.body.name;
    if (inputValue == "Agregar Personaje") {
        redis_cliente.lpush("episodio6", req.body.tittle)
        //exito = 'true'
        //console.log(exito)
        res.redirect('/episodio-vi')
    }
    else {
        redis_cliente.lrem("episodio6", 0, req.body.tittle)
        res.redirect('/episodio-vi')
    }
})

app.post('/episodio-vii', urlencodedParser, (req, res) => {
    var inputValue = req.body.name;
    if (inputValue == "Agregar Personaje") {
        redis_cliente.lpush("episodio7", req.body.tittle)
        //exito = 'true'
        //console.log(exito)
        res.redirect('/episodio-vii')
    }
    else {
        redis_cliente.lrem("episodio7", 0, req.body.tittle)
        res.redirect('/episodio-vii')
    }
})

//--------FIN FUNCION CARGAR/ELIMINAR POR EPISODIO----------------


//----------FUNCION LISTAR PERSONAJES POR EPISODIOS------------------ 

app.get('/', (req, res) => {
    redis_cliente.lrange("episodio1", 0, -1, function (err, values) {
        res.render(__dirname + '/public/index.ejs', {
            lista: ((values))
        })
    })
})

/*
app.get('/episodio-i', (req,res) =>{
    redis_cliente.lrange("episodio1", 0, -1, function(err,values){
        res.render(__dirname + '/public/episodio-i.ejs',{lista : ((values))
        })             
     })   
})
*/

app.get('/episodio-ii', (req, res) => {
    redis_cliente.lrange("episodio2", 0, -1, function (err, values) {
        res.render(__dirname + '/public/episodio-ii.ejs', {
            lista: ((values))
        })
    })
})


app.get('/episodio-iii', (req, res) => {
    redis_cliente.lrange("episodio3", 0, -1, function (err, values) {
        res.render(__dirname + '/public/episodio-iii.ejs', {
            lista: ((values))
        })
    })
})


app.get('/episodio-iv', (req, res) => {
    redis_cliente.lrange("episodio4", 0, -1, function (err, values) {
        res.render(__dirname + '/public/episodio-iv.ejs', {
            lista: ((values))
        })
    })
})


app.get('/episodio-v', (req, res) => {
    redis_cliente.lrange("episodio5", 0, -1, function (err, values) {
        res.render(__dirname + '/public/episodio-v.ejs', {
            lista: ((values))
        })
    })
})


app.get('/episodio-vi', (req, res) => {
    redis_cliente.lrange("episodio6", 0, -1, function (err, values) {
        res.render(__dirname + '/public/episodio-vi.ejs', {
            lista: ((values))
        })
    })
})

app.get('/episodio-vii', (req, res) => {
    redis_cliente.lrange("episodio7", 0, -1, function (err, values) {
        res.render(__dirname + '/public/episodio-vii.ejs', {
            lista: ((values))
        })
    })
})

//---------FIN FUNCION LISTAR PERSONAJES--------------------------

/*
app.get('/personajes', function( req, res){
    redis_cliente.lrange('personajes', 0, -1, function(err, values){
        res.send(JSON.stringify(values))
    })
})

app.get('/cargar', function( req, res){
    redis_cliente.lpush(req.param("episodio"), [req.param("personaje")])
    res.send("Carga OK!")
})

app.get('/listar', function( req, res){
    redis_cliente.lrange(req.param("name"), 0, -1, function(err, values){
        res.send(JSON.stringify(values))
    })
})

// fin aplicacion original

*/

//--------VACIAR UNA LISTA--------------
//redis_cliente.del("episodio1");

app.listen(3000, function () {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!')
})



