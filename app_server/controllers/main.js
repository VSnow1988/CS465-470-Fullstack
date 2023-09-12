/* GET HOMEPAGE */
const index = (req, res) => {
    res.render('index', { title: 'Travlr getaways' });
};
module.exports = {
    index
};