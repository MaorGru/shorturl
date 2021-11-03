import { json } from "express";
import { body, validationResult } from 'express-validator';
import { encode, decode } from "../shortening-logic/shortening-logic.js"


export const initShorteningRoutes = (app) => {
    app.post('/encode', json(), body('url').isURL(), (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let ans = { shorturl: encode(req.body.url) };
        res.send(ans);
    });
    app.post('/decode', json(), body('shorturl').isURL(), (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        let ans = { url: decode(req.body.shorturl) };
        res.send(ans);
    });
}