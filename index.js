
const express = require('express');
const routerApi =require('./routers')
const app = express();
const port = 3000;



app.get('/', (req, res) => {
    res.send('Bienvenido al servidor con express');
});

app.use(express.json());

routerApi(app);


app.listen(port, () => {
    console.log(`Iniciando nuestro servicio el el puerto: ${port}`)
})

