const app = require("./app");
const supertest = require("supertest");

describe("index", () => {

  it("index", async () => {
    const response = await supertest(app)
      .get("/");
    expect(response).toHaveProperty("statusCode", 200);
  });

});
