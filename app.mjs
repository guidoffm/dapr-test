import { DaprClient } from 'dapr-client';
import express from 'express';

const app = express();
const port = 3000;
const daprClient = new DaprClient();
app.get(async (_req, res, next) => {
    try {
        const data = await daprClient.secret.getBulk('secretstore');
        console.log(data);
        res.send(data);
    } catch (err) {
        console.error(err);
        next(err);
    }
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
