
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




// app.get('/books', (req, res) => {

//     res.json({
//         bookId:11,
//         authorsID:12,
//         name:"Z Cup",
//         year:1995
//     });
// })

// app.get('/authors',(req,res)=>{

//     res.json({
//         authorsId:12,
//         name:"Alex",
//         lastname:"Capa"
//     });
// });

// app.get('/user', (req, res) => {

//     res.json({
//         userID:123,
//         name:"Alex",
//         lastname:"Capa"
//     });
// });

// app.get('/operation', (req, res) => {

//     res.json({
//         operadorId:123,
//         userId:123,
//         bookId:11,
//         fecha:"16-11-2022",
//     });
// });


// app.get('/authors',(req,res)=>{

//     res.json({
//         authorsId:12,
//         name:"Alex",
//         lastname:"Capa"
//     });
// });


