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
                userName: "fakeuser",
                passWord: "password"
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
        const response = await request(server2).post("/data/login/fakeuser/fillprofile").send({
            userName: "fakeuser",
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
            const response = await request(server2).post("/data/login/fakeuser/fillprofile").send({
                userName: "fakeuser",
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
            const response = await request(server2).post("/data/login/fakeuser/fillprofile").send({
                userName: "fakeuser",
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
            const response = await request(server2).post("/data/login/fakeuser/fillprofile").send({
                userName: "fakeuser",
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
            const response = await request(server2).post("/data/login/fakeuser/fillprofile").send({
                userName: "fakeuser",
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
            const response = await request(server2).post("/data/login/fakeuser/fillprofile").send({
                userName: "fakeuser",
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
            const response = await request(server2).post("/data/login/fakeuser/fillprofile").send({
                userName: "fakeuser",
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
            userName: "fakeuser",
            galloN: 15,
            delvAddresS: "2222 delivery st",
            datE:"2022-07-19",
            pricePerGalloN:11,
            totalPricE:165
        })
        expect(response.statusCode).toBe(201)
    })
})