/************************************BLOG SERVER*************************************/

const express = require('express')      // Import del framework Express
const chalk = require('chalk');         // Import del pacchetto chalk
const posts = require('./listaPosts')   // Import array posts
/***************************
    CONFIGURAZIONE EXPRESS
****************************/
const app = express()            // Inizializzazione dell'app Express
const port = 3000;               // Definizione porta su cui il server deve rimanere in ascolto


/************
    ROTTE
************/

/* Rotta Principale */
app.get('/', (req, res) => {
    res.send('<h1>Server del mio blog</h1>') // Testo da inviare al client quando arriva una richiesta HTTP di tipo GET all'indirizzo "/"
})

/* Rotta Bacheca */
app.get('/bacheca', (req, res) => {
    res.json(posts)                 // Lista dei post (in formato Json) da inviare al client quando arriva una richiesta HTTP di tipo GET all'indirizzo "/bacheca"
})

/**************
    FN EXTRA
***************/
app.use(express.static('img')); /* Middleware che serve per i file statici */


/*********************
    AVVIO SERVER
*********************/
/* Il server viene messo in ascolto sulla porta 3000 */
app.listen(port, () => {
    console.log(chalk.red("Server in ascolto sulla porta " + port));
})