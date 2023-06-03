



const getRecipesHandler = (req, res) => {
    const { nameRecipe } = req.query;
    if (nameRecipe !== undefined) res.status(200).send(`Busca la receta ${nameRecipe}`);
    else res.status(200).send("NIY: ESTA RUTA TRAE LA INFO DE TODAS LAS RECETAS");
}

const getIdRecipeHandler = (req, res) => {
    const { idRecipe } = req.params;
    res.status(200).send(`Estos son los detalles de la receta: ${idRecipe}`);
}

const getNameRecupeHandler = (req, res) => {
}

const createRecipeHandler = (req, res) => {
    res.status(200).send("NIY: ESTA RUTA CREA UNA NUEVA RECETA");
}

module.exports = { getRecipesHandler, getIdRecipeHandler, getNameRecupeHandler, createRecipeHandler }