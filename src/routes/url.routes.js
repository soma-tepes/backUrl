const express = require('express');
const router = express.Router();

const urlController = require('../controllers/genericController');

const urlModels = require('../models/urlAcceso.model'); // Importa todas las funciones de creación



for (let modelName in urlModels) {
    const createModelFunction = urlModels[modelName];

    const listRoute = `/list${modelName.charAt(modelName.length - 1)}`;
    const listRouteWithId = `/list${modelName.charAt(modelName.length - 1)}/:id`;

    router
        .route(listRoute)
        .get(urlController.showUrl(createModelFunction))
        .post(urlController.createUrl(createModelFunction));

    router
        .route(listRouteWithId)
        .get(urlController.getFindOne(createModelFunction))
        .patch(urlController.updateModel(createModelFunction))
        .delete(urlController.deleteUrl(createModelFunction));
}

module.exports = router;
