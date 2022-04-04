console.log('hello')
const express = require('express');
const app = express()
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const UserSchema = require('./models/userSchema');
const profileSchema = require('./models/userInfoSchema');
const QuoteSchema = require('./models/quoteSchema');
const { restart } = require('nodemon');

app.use(express.static(path.join(__dirname, '..','frontend','build')));
app.use(cors());
app.use(express.json());
//app.use(bodyParser.urlencoded({extended:true}));
app.use(express.urlencoded({
    extended: true
}));


app.get('/', function (req, res) {
    res.redirect('index.html')
  }); 


app.post('/data/registration', (req,res)=> {
  //req.accepts('application/json');
  const username = req.body.userRegister;
  const password = req.body.passwordRegister;
  const {userRegister, passwordRegister} = req.body;
  let hashpass;
  hashpass = bcrypt.hash(passwordRegister,10).then((hash) => {
    const freshAcc = new UserSchema({
      username: userRegister,
      password: hash
    })
    freshAcc.save()
    .then((result)=> {
      console.log(result);
    })
    .catch((err)=>{
      console.log(err);
    })
  }) 

})

app.post('/data/login', async (req,res)=> { //very basic, needs more functionality
  const username = req.body.logUser;
  const password = req.body.logPassword;
  const {logUser, logPassword} = req.body;
  const existing = await UserSchema.findOne({username: logUser});
  if(!existing) res.status(400).json({error:"User doesn't exist"});

  const dbPassword = existing.password;
  bcrypt.compare(logPassword, dbPassword).then((match)=> {
    if(!match) {
      console.log("wrong stuff");
      //res.status(400).json({error: "Wrong user and pass combination"});
    } else {
      console.log("LOGGED IN");
    }
  });

})

/*app.get("/data/clientprofile",(req,res)=> {
  
})*/

app.post("/data/clientprofile", (req,res)=> {
  const username = req.body.username;
  const firstname = req.body.firstName;
  const lastname = req.body.lastName;
  const address1 = req.body.address1;
  const address2 = req.body.address2;
  const city = req.body.city;
  const state = req.body.state;
  const zipcode = req.body.zipcode;

  const profileForm = new profileSchema({
    username: username,
    firstname: firstname,
    lastname: lastname,
    address1: address1,
    address2: address2,
    city: city,
    state: state,
    zipcode: zipcode,

  });
  profileForm.save()
  .then((result)=> {
    console.log(result);
  })
  .catch((err)=>{
    console.log(err);
  })
})

app.post('/data/fuelquote', (req,res)=>{
  const username = req.body.username;
  const date = req.body.date;
  const gallons = req.body.gallons;
  const pricePerGallon = req.body.pricePerGallon;
  const address = req.body.address;
  const fuelform = new QuoteSchema({
    username: username,
    date: date, //look up javascript date formating
    gallons: gallons,
    address: address,
    pricePerGallon: 65, 
    totalPrice: 89
  });
  console.log(fuelform);
  fuelform.save()
    .then((result)=> {
      console.log(result);
    })
    .catch((err)=>{
      console.log(err);
    })
    res.status(200).send(":D");
})

app.get('/fuelquote/:username', async(req,res)=>{
  const quote = await QuoteSchema.find({
    username: req.params.username
  })
  res.send(quote);
})

mongoose.connect("mongodb+srv://sakibz:sakibzafar123@cluster0.gslom.mongodb.net/FuelApplication?retryWrites=true&w=majority", {useNewUrlParser: true})
  .then(() => {
    app.listen(3000, () => {
      console.log('serving port 3000');
    })
  })
  .catch((err)=> {
    console.log(err);
  });

