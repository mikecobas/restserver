const express = require('express')
const cors = require('cors');

class Server{

    constructor(){
        this.app = express()
        this.port = process.env.PORT || 3000
        this.usuariosPath = '/api/usuarios';

        // Middlewares

        this.middlewares()

        // Rutas de la app
        this.routes()
    }
    middlewares(){
        // CORS
        this.app.use(cors())

        // Parseo y lectura del body
        this.app.use(express.json())

        //Directorio publico
         this.app.use(express.static('public')); 
    }

    routes(){
         
      this.app.use(this.usuariosPath, require('../routes/users'))

    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('servidor corriendo en el puerto',  this.port);
        });
    }

   

}

module.exports = Server