const db = require('../config/database');

module.exports = {
    save: (data, callback) => {
        const query = "INSERT INTO JPACM_users (JPACM_lastname, JPACM_firstname, JPACM_email, JPACM_gender, JPACM_address)  VALUES (?, ?, ?, ?, ?)";

        db.query(query, [data.lastname, data.firstname, data.email, data.gender, data.address], callback);
    },
    displayUsers: (callback) => {
        const query = "SELECT * FROM JPACM_users";
        db.query(query, callback);
    }
}