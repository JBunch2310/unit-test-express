const sut = require("../src/index")
const supertest = require("supertest")


describe('Verifies all the endpoints', () => {
    it("should return Hello Darkness!", async () => {
        //Arrange
        const request = supertest(sut)
        const expectedResult = "Hello Darkness!"

        //Act
        const result = await request.get("/")
        const actualResult = result.text

        //Assert
        expect(actualResult).toBe(expectedResult)
    })
})