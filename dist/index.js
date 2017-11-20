"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.use(express.static(`${__dirname}/../public`));
app.get('/', (req, res) => {
    console.log("hi there");
    res.send('Hello word');
});
app.listen(process.argv[2], () => {
    // tslint:disable-next-line:no-console
    console.log(`modern-express-typescript listening on ${process.argv[2]}`);
    console.log('This is updated');
});
//# sourceMappingURL=index.js.map