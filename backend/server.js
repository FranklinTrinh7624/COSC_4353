console.log('hello')
const express = require('express');
const app = express()
const path = require('path');
const mongoose = require('mongoose');
const UserSchema = require('./models/userSchema');

app.use(express.static(path.join(__dirname, '..','frontend','build')));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


app.get('/', function (req, res) {
    res.redirect('index.html')
  }); 

app.post('/data/clientprofile',(req,res)=>{
    req.accepts('application/json');
    console.log('post /data/clientprofile');
    console.log(req.body);
    res.sendStatus(200);
})

app.post('/data/registration',(req,res)=>{
  req.accepts('application/json');
  console.log('post /data/registration');
  console.log(req.body);
  res.sendStatus(200);
})

app.post('/data/login',(req,res)=>{
  req.accepts('application/json');
  console.log('post /data/login');
  console.log(req.body);
  res.sendStatus(200);
})

app.post('/data/fuelquote',(req,res)=>{
  req.accepts('application/json');
  console.log('post /data/fuelquote');
  console.log(req.body);
  res.sendStatus(200);
})

app.get('/data/FuelQuoteHistory', (req,res)=>{
    res.send([
      {
        "id": 1,
        "Date": "12/13/16",
        "GallonsRequested": "50",
        "DeliveryAddress": "1464 Flemming Dr",
        "DeliveryDate": "12/15/16",
        "SuggestedPrice": "60",
        "TotalAmountDue": "61"
      },
    
      {
        "id": 2,
        "Date": "1/16/20",
        "GallonsRequested": "22",
        "DeliveryAddress": "1513 River Dr",
        "DeliveryDate": "1/20/20",
        "SuggestedPrice": "88",
        "TotalAmountDue": "91"
      }
    ]);
})
  
app.get('/data/FuelQuoteGet', (req,res)=>{
  res.send([
    {
      "id": 1,
      "Address": "15314 Riverside Grove Dr.",
      "PricePerGallon": "48",
      "TotalPrice": "60"
    }
  ]);
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

app.get('/add-userSchema', (req, res)=>{
  const userSchema = new UserSchema({
    username:'sakibzafar',
    password:'diabound798'
  });

  userSchema.save()
    .then((result)=>{
      res.send(result)
    })
    .catch((e)=>{
      console.log(err);
    });
})
