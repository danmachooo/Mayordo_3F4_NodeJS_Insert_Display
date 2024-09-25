const model = require('../model/user_model.js');

module.exports = {
    index: (req, res) => {
        res.render('create');
    },
    save: (req, res) => {
        const data = req.body;
        model.save(data, (err) => {
            if(err) throw err;
            res.redirect('/');
        })
        console.log(data);  
         
    },
    display: (req, res) => {
        model.displayUsers((err, results) => {
            if(err) throw err;
            res.render('display', {users: results})
            
        })
    }
}