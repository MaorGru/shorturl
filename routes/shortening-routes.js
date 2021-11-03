import { encode, decode } from "../shortening-logic/shortening-logic.js"

export const initShorteningRoutes = (app) => {
    app.post('/encode', (req, res) => {
        let ans = { short: encode("test") };
        res.send(ans);
    });
    app.post('/decode', (req, res) => {
        let ans = { orig: decode("test") };
        res.send(ans);
    });
}