const server2 = require("./server2");
const request = require("supertest");

describe("test /register", ()=> {
    describe("when registering user and pw", () => {
        it("should respond with 201", async ()=> {
            const response = await request(server2).post("/data/login/register").send({
                userName: "fakeuser",
                passWord: "password"
            })
            expect (response.statusCode).toBe(201)
            
        })
    })
})

describe("testing /loginn", () => {
    describe("valid login", () => {
        it("should respond with 200", async () => {
            const response= await request(server2).post("/data/login/loginn").send({
                userName: "testuser",
                passWord: "testpass"
            })
            expect(response.statusCode).toBe(200)
        })
    }),
    describe("invalid login", () => {
        it("should respond with 401", async()=>{
            const response = await request(server2).post("/data/login/loginn").send({
                userName:"invaliduser",
                passWord:"invalidpass"
            })
            expect(response.statusCode).toBe(401)
        })
    })
})

describe("testing /profile", ()=> {
    it("should respond with 200", async()=> {
        const response = await request(server2).post("/data/login/1/fillprofile").send({
            idd: "1",
            firstn:"proffirst",
            lastn:"proflast",
            addrr1:"1111 prof st",
            addrr2:"2222 prof st",
            cityy:"Houston",
            statee:"TX",
            zipcodee:"77778"
        })
        expect(response.statusCode).toBe(200)
    }),

    describe("first name > 25", () => {
        it("should respond with 400", async()=>{
            const response = await request(server2).post("/data/login/1/fillprofile").send({
                idd: "1",
                firstn:"proffirstaaaaaaaaaaaaaaaaa",
                lastn:"proflast",
                addrr1:"1111 prof st",
                addrr2:"2222 prof st",
                cityy:"Houston",
                statee:"TX",
                zipcodee:"77778"
            })
            expect(response.statusCode).toBe(400)
        })
    })
    describe("last name > 25", () => {
        it("should respond with 400", async()=>{
            const response = await request(server2).post("/data/login/1/fillprofile").send({
                idd: "1",
                firstn:"proffirst",
                lastn:"proflastaaaaaaaaaaaaaaaaaaaa",
                addrr1:"1111 prof st",
                addrr2:"2222 prof st",
                cityy:"Houston",
                statee:"TX",
                zipcodee:"77778"
            })
            expect(response.statusCode).toBe(400)
        })
    })
    describe("addr1 > 100", () => {
        it("should respond with 400", async()=>{
            const response = await request(server2).post("/data/login/1/fillprofile").send({
                idd: "1",
                firstn:"proffirst",
                lastn:"proflast",
                addrr1:"1111 prof st 11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
                addrr2:"2222 prof st",
                cityy:"Houston",
                statee:"TX",
                zipcodee:"77778"
            })
            expect(response.statusCode).toBe(400)
        })
    })
    describe("addr2 > 100", () => {
        it("should respond with 400", async()=>{
            const response = await request(server2).post("/data/login/1/fillprofile").send({
                idd: "1",
                firstn:"proffirst",
                lastn:"proflast",
                addrr1:"1111 prof st",
                addrr2:"2222 prof st 11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
                cityy:"Houston",
                statee:"TX",
                zipcodee:"77778"
            })
            expect(response.statusCode).toBe(400)
        })
    })
    describe("city > 100", () => {
        it("should respond with 400", async()=>{
            const response = await request(server2).post("/data/login/1/fillprofile").send({
                idd: "1",
                firstn:"proffirst",
                lastn:"proflast",
                addrr1:"1111 prof st",
                addrr2:"2222 prof st",
                cityy:"HoustonHoustonHoustonHoustonHoustonHoustonHoustonHoustonHoustonHoustonHoustonHoustonHoustonHoustonHouston",
                statee:"TX",
                zipcodee:"77778"
            })
            expect(response.statusCode).toBe(400)
        })
    })
    describe("zipcode > 9", () => {
        it("should respond with 400", async()=>{
            const response = await request(server2).post("/data/login/1/fillprofile").send({
                idd: "1",
                firstn:"proffirst",
                lastn:"proflast",
                addrr1:"1111 prof st",
                addrr2:"2222 prof st",
                cityy:"Houston",
                statee:"TX",
                zipcodee:"77778-123456"
            })
            expect(response.statusCode).toBe(400)
        })
    })
})

describe("testing /fuelquote", ()=> {
    it("should respond with 201", async()=> {
        const response = await request(server2).post("/data/fuelquote/fuelquoteform").send({
            id: 2,
            gallon: "15",
            delvAddress: "2222 delivery st",
            date:"2022-07-19T02:07:48.000Z",
            pricePerGallon:"11",
            totalPrice:"165"
        })
        expect(response.statusCode).toBe(201)
    })
})