const { Router } = require('express');
const recipeRouter = Router();
const { getRecipesHandler, getIdRecipeHandler, getNameRecupeHandler, createRecipeHandler } = require("../handlers/recipesHandlers.js")



recipeRouter.get("/", getRecipesHandler);

recipeRouter.get("/:idRecipe", getIdRecipeHandler);

recipeRouter.get("/name?=", getNameRecupeHandler);

recipeRouter.post("/", createRecipeHandler);



module.exports = recipeRouter;
