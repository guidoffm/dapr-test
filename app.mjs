import { DaprClient } from 'dapr-client';
import express from 'express';

const app = express();
const port = 3000;
const daprClient = new DaprClient();
app.get('*', async (_req, res, next) => {
    try {
        const data = await daprClient.secret.getBulk('configstore');
        console.log(data);
        res.setHeader('Content-type', 'application/json');
        res.send(JSON.stringify(data,null,4));
    } catch (err) {
        console.error(err);
        next(err);
    }
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
