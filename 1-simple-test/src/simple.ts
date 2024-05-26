import express from "express";
import { sum } from ".";

export const app = express();
app.use(express.json());

app.post("/sum", (req: express.Request, res: express.Response) => {
    const a = req.body.a;
    const b = req.body.b;
    const result = a + b;
    res.json({
        answer: result
    })
})


//while testing the http server you dont want the tests also start the http server and also run app.listen
// so usually you have test in express app listening logic exists in separate file i.e bin.ts
// node dist/bin.js if you want to start the http server.