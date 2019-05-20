import express, { Application, Request, Response } from 'express';

import users from './routes/users';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    return res.send("Typescript Node Express");
});


app.use('/users', users);
app.listen(process.env.PORT, () => {
    console.log('Server is up', process.env.PORT);
})