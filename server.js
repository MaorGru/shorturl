import express from 'express';
import { initShorteningRoutes } from "./routes/shortening-routes.js";

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
initShorteningRoutes(app);


app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});

