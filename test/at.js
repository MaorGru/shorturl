import chai from "chai";
import chaiHttp from "chai-http";
import { getServer } from "../server.js";

//move to other file
const validEncode = {
    "url": "https://codesubmit.io/library/react"
}
const validEncodeRes = {
    "shorturl": "http://short.est/d6bb5d"
}
const invalidEncode = {
    "url": "https://notvalid"
}
const validDecode = validEncodeRes;
const validDecodeRes = validEncode;
const invalidDecode = invalidEncode;


const expect = chai.expect;
chai.use(chaiHttp);
const server = getServer();



describe('sanity test', () => {
    it('encode test', (done) => {
        chai.request(server)
            .post('/encode')
            .set('content-type', 'application/json')
            .send(validEncode)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.deep.equal(validEncodeRes);
                done();
            });
    });

    it('decode test', (done) => {
        chai.request(server)
            .post('/decode')
            .set('content-type', 'application/json')
            .send(validDecode)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.deep.equal(validDecodeRes);
                done();
            });
    });
});

describe('validation test', () => {
    it('encode test', (done) => {
        chai.request(server)
            .post('/encode')
            .set('content-type', 'application/json')
            .send(invalidEncode)
            .end((err, res) => {
                expect(res).to.have.status(400);
                done();
            });
    });

    it('decode test', (done) => {
        chai.request(server)
            .post('/decode')
            .set('content-type', 'application/json')
            .send(invalidDecode)
            .end((err, res) => {
                expect(res).to.have.status(400);
                done();
            });
    });
});