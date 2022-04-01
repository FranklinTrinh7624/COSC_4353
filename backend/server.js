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
  //console.log(req.body.userRegister + req.body.passwordRegister);
  // const freshAcc = new UserSchema({
  //   username: username,
  //   password: password
  // });
  // const newProfile = new profileSchema({
  //   username: username,
  //   firstname: "first",
  //   lastname: "last",
  //   address1: "addressone",
  //   address2: "addresstwo",
  //   city: "mycity",
  //   state: "N/A",
  //   zipcode: "00000"
  // })
  

  // newProfile.save()
  // .then((result)=> {
  //   console.log(result);
  // })
  // .catch((err)=>{
  //   console.log(err);
  // })

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
  // UserSchema.findOne({username: username, password:password})
  // .then((result)=> {
  //   if(result) {
  //     console.log(result);
  //     console.log("logged in");
  //   }
  //   else { console.log("fail login");}
  // })
  // .catch((err)=>{
  //   console.log(err);
  // })
})

app.get("/data/clientprofile",(req,res)=> {
  
})

app.post("/data/clientprofile", (req,res)=> {
  //const username = req.body.username;
  const firstname = req.body.firstName;
  const lastname = req.body.lastName;
  const address1 = req.body.address1;
  const address2 = req.body.address2;
  const city = req.body.city;
  const state = req.body.state;
  const zipcode = req.body.zipcode;

  const profileForm = new profileSchema({
    username:"franklin123",
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
  const date = req.body.date;
  const gallons = req.body.gallonsRequeseted;
  const fuelform = new QuoteSchema({
    username: "franklin123",
    date: date,
    gallons: gallons,
    address: "15314 Riverside Dr.",
    pricePerGallon: 65,
    totalPrice: 89
  });
  fuelform.save()
    .then((result)=> {
      console.log(result);
    })
    .catch((err)=>{
      console.log(err);
    })
})

app.get('/fuelquote/:id', (req,res)=>{
  
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

  // app.post('/data/clientprofile',(req,res)=>{
//     req.accepts('application/json');
//     console.log('post /data/clientprofile');
//     console.log(req.body);
//     res.sendStatus(200);
// })

// app.post('/data/registration',(req,res)=>{
//   req.accepts('application/json');
//   console.log('post /data/registration');
//   console.log(req.body);
//   res.sendStatus(200);
// })

// app.post('/data/login',(req,res)=>{
//   req.accepts('application/json');
//   console.log('post /data/login');
//   console.log(req.body);
//   res.sendStatus(200);
// })

// app.post('/data/fuelquote',(req,res)=>{
//   req.accepts('application/json');
//   console.log('post /data/fuelquote');
//   console.log(req.body);
//   res.sendStatus(200);
// })

// app.get('/data/FuelQuoteHistory', (req,res)=>{
//     res.send([
//       {
//         "id": 1,
//         "Date": "12/13/16",
//         "GallonsRequested": "50",
//         "DeliveryAddress": "1464 Flemming Dr",
//         "DeliveryDate": "12/15/16",
//         "SuggestedPrice": "60",
//         "TotalAmountDue": "61"
//       },
    
//       {
//         "id": 2,
//         "Date": "1/16/20",
//         "GallonsRequested": "22",
//         "DeliveryAddress": "1513 River Dr",
//         "DeliveryDate": "1/20/20",
//         "SuggestedPrice": "88",
//         "TotalAmountDue": "91"
//       }
//     ]);
// })
  
// app.get('/data/FuelQuoteGet', (req,res)=>{
//   res.send([
//     {
//       "id": 1,
//       "Address": "15314 Riverside Grove Dr.",
//       "PricePerGallon": "48",
//       "TotalPrice": "60"
//     }
//   ]);
// })



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





// app.get('/add-userSchema', (req, res)=>{
//   const userSchema = new UserSchema({
//     username:'sakibzafar',
//     password:'diabound798'
//   });

//   userSchema.save()
//     .then((result)=>{
//       res.send(result);
//     })
//     .catch((e)=>{
//       console.log(err);
//     });
// })

// app.get('/all-userSchema',(req, res)=>{
//   UserSchema.find()
//     .then((result)=>{
//       res.send(result);
//     })
//     .catch((e)=>{
//       console.log(err);
//     })
// })