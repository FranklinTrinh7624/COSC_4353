const {validationResult, check} = require("express-validator");




const testAccount = [{username: testuser, password: testpass}];

const testProfile = [{first: "testfirst", last: "testlast", addr1: "111 test st", addr2:"222 test st" , city:"Houston",state:"TX",zip:"77777"}]

function findUser(userArr, user) {
    if(userArr.find(userArr.username === user)) {
        return true;
    }
    return false;
}

function findPassword(passArr, pass) {
    if(passArr.find(passArr.password === pass)) {
        return true;
    }
    return false;
}

exports.validate = (method) => {
    switch(method) {
        case 'createUser': {
            return [check(["userName", "userName doesn't exist"]).exists(),
            check(["passWord", "passWord doesn't exist"]).exists()
            ]
        }
        case 'loginUser': {
            return [req.body(["userName", "userName doesn't exist"]).exists(),
            req.body(["passWord", "passWord doesn't exist"]).exists()
            ]
        }
    }
}


const gatherAllLogin = (req,res)=> {
    res.json({acc: testAccount});
};

const login = (req,res,next)=> {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        res.status(422).json({errors: errors.array() });
        return;
    }

    const {userName, passWord} = req.body;

    const foundUser = findUser(testAccount, userName);
    const foundPassword =findPassword(testAccount, passWord);

    if(!foundUser || !foundPassword) {
        res.status(401).json({errors:errors.array()});
        return;
    }
    res.json({message: "You've logged in"});
};

const registration = (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        res.status(422).json({errors: errors.array() });
        return;
    }

    const {userName, passWord} = req.body;

    const createUser = {userName, passWord};

    const accInfo = {first: "", last: "", addr1: "", addr2: "", city:"",state:"",zip:""}

    testAccount.push(createUser);
    testProfile.push(accInfo);
    res.status(201).json({message:"Created Account", users: createUser});


};

exports.gatherAllLogin = gatherAllLogin;
exports.login = login;
exports.registration = registration;