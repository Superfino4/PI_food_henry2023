const { Router } = require('express');
const recipeRouter = require('./recipeRouter.js');
const dietsRoutes = require('./dietsRoutes.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
mainRouter.use('/recipes', recipeRouter);
mainRouter.use('/diets', dietsRoutes);


module.exports = mainRouter;

// server.get("/", (req, res) => {
//     res.status(200).send("OK");
// });

// server.get("/lop", (req, res) => {
//     res.status(200).send("Estoy en LOP");
// });

// server.get("/lop/:id", (req, res) => {
//     res.status(200).send("Detalles de LOP");
// });

// server.post("/lop", (req, res) => {
//     res.status(200).send("En LOP se creara un usuario");
// });

// server.get("/posts", (req, res) => {
//     res.status(200).send("Estoy en posts deLOP");
// });

// server.get("/posts/:id", (req, res) => {
//     res.status(200).send("Detalles del posts de LOP");
// });
