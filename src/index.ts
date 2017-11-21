import express, { Request, Response } from 'express';

const app = express();

app.use(express.static(`${__dirname}/../public`));

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello word');
});

export function startServer() {
  app.listen(process.argv[2], () => {
    // tslint:disable-next-line:no-console
    console.log(`modern-express-typescript listening on ${process.argv[2]}`);
  });
}

startServer();

export const testConfig = { app, express };
