const express = require('express');
const cors = require('cors');



class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.users = '/api/users';

        //Middlewares
        this.middlewares();
        //Ruas de la aplicacion

        this.routes();
    }

    middlewares() {
        this.app.use(express.static('public'));
        this.app.use(cors());
        this.app.use(express.json());

    }

    routes() {

        this.app.use(this.users, require('../routes/user'));
    }

    ports() {
        this.app.listen(this.port, () => {
            console.log('SERVIDOR ESCUCHANDO EN PUERTO', this.port);
        });
    }
}

module.exports = Server;