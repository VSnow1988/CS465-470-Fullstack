const fs = require('fs');
const room_list = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf-8'));

/* GET rooms view */
const rooms = (req, res) => {
    res.render('rooms', { title: 'Travlr Getaways', room_list });
};

module.exports = {
    rooms
};