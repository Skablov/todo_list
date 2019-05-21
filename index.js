const config = require("./config.js");
const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const mongoClient = new MongoClient(config.MONGO_URL, { useNewUrlParser: true }); // установка точки подключения
const objectId = require("mongodb").ObjectID;
const bodyParser = require("body-parser"); // Подключение необходимого стека

const app = express(); // включаем express

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

mongoClient.connect((err, client) => { //стандартное подключение к бд типа MongoDb
  if(err) return console.log(err); // если ошибка, то все останавливаем и реторнем ошибку
  dbClient = client;
  app.locals.collection = client.db('todolist').collection(''); // указыем имя кластера
  app.listen(config.PORT, () => console.log(`Server start on ${config.PORT}`)) // начинаем слушать
})

app.get('/', (req, res) => {res.render('index')});
app.post('/login', (req, res) => {

})
app.get('/register', (req, res) => {res.render('register')})
app.post('/register', (req, res) => {
  let login = req.body.login;
  let password = req.body.password;
  if(login && password){
    console.log("Успешно" + login + password + but);
  }
  else {
    res.json({
      ok: false,
      error: "Не введен пароль или логин"
    });
  }
})
