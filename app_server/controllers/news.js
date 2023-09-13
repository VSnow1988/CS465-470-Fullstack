const fs = require('fs');
const news_list = JSON.parse(fs.readFileSync('./data/news.json', 'utf-8'));

/* GET news view */
const news = (req, res) => {
    res.render('news', { title: 'Travlr Getaways', news_list });
};

module.exports = {
    news
};