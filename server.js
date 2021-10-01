import express from 'express';
import bcrypt from 'bcrypt-nodejs';
import cors from 'cors';
import knex from 'knex';
import handleRegister from './controllers/register.js';
import handleSignIn from './controllers/signIn.js';
import {handleImage, handleApiCall} from './controllers/image.js';

/*Extra steps due to __dirname not existing in ES6 modules /////////

import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/////////////////////////////////////////////////////////////////*/

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'yul',
        password: 'GforE@P4ch1',
        database: 'iseeyou'
    }
});

app.get('/', (req,res) =>{res.send(database.users);})

app.post('/signin', (req, res) => {handleSignIn(req, res, db, bcrypt);})

app.post('/register', (req, res) => {handleRegister(req, res, db, bcrypt);});

app.put('/image', (req, res) => {handleImage(req, res, db)})

app.post('/imageurl', (req, res) => {handleApiCall (req, res)})

app.listen(3000, () => {console.log('App is running on port 3000');})