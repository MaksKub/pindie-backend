  // Создаём роут для запросов категорий 
  const categoriesRouter = require('express').Router();
  
  // Импортируем вспомогательные функции
  const {findAllCategories, createCategory, findCategoryById, updateCategory, deleteCategory, checkIsCategoryExists, checkEmptyName} = require('../middlewares/categories');
  const {sendAllCategories, sendCategoryCreated, sendCategoryById, sendCategoryUpdated, sendCategoryDeleted} = require('../controllers/categories');
  
  // Обрабатываем GET-запрос с роутом '/categories'
  categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
  categoriesRouter.post(
    "/categories",
    findAllCategories,
    checkIsCategoryExists,
    checkEmptyName,
    createCategory,
    sendCategoryCreated
  );
  categoriesRouter.get('/categories/:id', findCategoryById, sendCategoryById)


  // Файл routes/categories.js

  categoriesRouter.put(
    "/categories/:id",
    checkEmptyName,
    updateCategory,
    sendCategoryUpdated
  ); 
  

categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted);


  // Экспортируем роут для использования в приложении — app.js
  module.exports = categoriesRouter;
  