import * as express from 'express';
const app = express();

app.use(express.static(`${__dirname}/../public`));

app.get('/', (req: express.Request, res: express.Response) => {
  // tslint:disable-next-line:no-console
  console.log('hi there');
  res.send('Hello word');
});

app.listen(process.argv[2], () => {
  // tslint:disable-next-line:no-console
  console.log(`modern-express-typescript listening on ${process.argv[2]}`);
  // tslint:disable-next-line:no-console
  console.log('This is updated');
});
