const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../src/index");
const ControlIdioma = require("../src/models/ControlIdiomaModel");

chai.use(chaiHttp);
chai.should();

describe("ControlIdioma", () => {
  before(async () => {
    await ControlIdioma.deleteMany({});
  });

  describe("GET /control-idioma", () => {
    it("should get all register", async () => {
      const res = await chai.request(app).get("/control-idioma");
      res.should.have.status(200);
      res.body.should.be.a("array");
      res.body.length.should.be.eql(0);
    });
  });

  describe("POST /control-idioma", () => {
    it("should create a register", async () => {
      const data = {
        ID_estudiante: 1,
        ID_idioma: 1,
        porcentaje_lectura: "55%",
        porcetaje_escritura: "33%",
        porcetaje_escuchar_hablar: "44%",
      };
      const res = await chai.request(app).post("/control-idioma").send(data);
      res.should.have.status(201);
      res.body.should.be.a("object");
      res.body.should.have.property("ID_estudiante").eql(1);
      res.body.should.have.property("ID_idioma").eql(1);
      res.body.should.have.property("porcentaje_lectura").eql("55%");
      res.body.should.have.property("porcetaje_escritura").eql("33%");
      res.body.should.have.property("porcetaje_escuchar_hablar").eql("44%");
    });
  });
});
