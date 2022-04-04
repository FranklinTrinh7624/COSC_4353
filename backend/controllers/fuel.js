const {validationResult, check} = require("express-validator");
const QuoteSchema = require('../models/quoteSchema');

//https://www.freecodecamp.org/news/how-to-make-input-validation-simple-and-clean-in-your-express-js-app-ea9b5ff5a8a7/

let testFuelQuote = [{id: 1, gallon:"5", delvAddress: "1111 test st", date: "2022-03-19T02:07:48.000Z", pricePerGallon: "8", totalPrice: "60"}]

exports.validate = (method) => {
    switch(method) {
        case 'checkFuel': {
            return [
            check(["id"]).exists()
            ]
        }
    }
}


const fuelQuote = (req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        res.status(422).json({errors: errors.array() });
        return;
    }

    const {userName, galloN, delvAddresS, datE, pricePerGalloN, totalPricE} = req.body;
    try {
        const newFuelQuote = new QuoteSchema({
            username: userName,
            date: datE,
            gallons: galloN,
            address: delvAddresS,
            pricePerGallon: pricePerGalloN,
            totalPrice: totalPricE
        });
        newFuelQuote.save();
    } catch(err) {
        res.status(422).json({errors: errors.array() });
        return;
    }
    //const checkFuel = {iD, galloN, delvAddresS, datE, pricePerGalloN, totalPricE};

    //const fuelFormInfo = {id:2, gallon: galloN, delvAddress: delvAddresS, date: datE, pricePerGallon: pricePerGalloN, totalPrice:totalPricE}

    //testFuelQuote.push(fuelFormInfo);
    res.status(201).json({message:"All inputs filled"});
};

exports.fuelQuote = fuelQuote;