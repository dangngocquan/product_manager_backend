const serviceCategories = require('../services/categories');

async function getByPage(req, res, next) {
    try {
        res.json(await serviceCategories.getCategoriesByPage(req.query.page));
    } catch (err) {
        console.error("Error while getting categories. ",  err.message);
        next(err);
    }
}

module.exports = {
    getByPage: getByPage
}