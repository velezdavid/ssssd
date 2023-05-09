// src/test/book.test.js

const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../src/index");
const Book = require("../src/models/bookModel");

chai.use(chaiHttp);
chai.should();

describe("Books", () => {
  before(async () => {
    await Book.deleteMany({});
  });

  describe("GET /books", () => {
    it("should get all books", async () => {
      const res = await chai.request(app).get("/books");
      res.should.have.status(200);
      res.body.should.be.a("array");
      res.body.length.should.be.eql(0);
    });
  });

  describe("POST /books", () => {
    it("should create a book", async () => {
      const book = {
        title: "El Quijote",
        author: "Miguel de Cervantes",
        year: 1605,
      };
      const res = await chai.request(app).post("/books").send(book);
      res.should.have.status(201);
      res.body.should.be.a("object");
      res.body.should.have.property("title").eql("El Quijote");
      res.body.should.have.property("author").eql("Miguel de Cervantes");
      res.body.should.have.property("year").eql(1605);
    });
  });
});
