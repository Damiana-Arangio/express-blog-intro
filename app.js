/************************************BLOG SERVER*************************************/

const express = require('express')  // Import del framework Express
const chalk = require("chalk");     // Import del pacchetto chalk

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
    res.send('Server del mio blog') // Testo da inviare al client quando arriva una richiesta HTTP di tipo GET all'indirizzo "/"
})
    

/*********************
    AVVIO SERVER
*********************/
/* Il server viene messo in ascolto sulla porta 3000 */
app.listen(port, () => {
    console.log(chalk.red("Server in ascolto sulla porta " + port));
})