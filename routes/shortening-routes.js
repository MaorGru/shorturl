import { json } from "express";
import { encode, decode } from "../shortening-logic/shortening-logic.js"


export const initShorteningRoutes = (app) => {
    app.post('/encode', json(), (req, res) => {
        //add json validation
        let ans = { shorturl: encode(req.body.url) };
        res.send(ans);
    });
    app.post('/decode', json(), (req, res) => {
        //add json validation
        let ans = { url: decode(req.body.shorturl) };
        res.send(ans);
    });
}