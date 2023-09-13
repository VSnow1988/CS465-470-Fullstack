const fs = require('fs');
const meals_list = JSON.parse(fs.readFileSync('./data/meals.json', 'utf-8'));

/* GET meals view */
const meals = (req, res) => {
    res.render('meals', { title: 'Travlr Getaways', meals_list });
};

module.exports = {
    meals
};