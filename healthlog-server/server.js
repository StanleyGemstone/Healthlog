const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');
const validator = require('validator');

const app = express();


const PORT = process.env.PORT || 3001;

// Create mysql connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'healthlog',
    password: 'health',
    database: 'HealthLog',
    socketPath: '/var/run/mysqld/mysqld.sock',
});

// Connect to mysql
db.connect((err) => {
    if (err) {
        console.error('Error connecting to Database:', err);
        throw err;
    }
    console.log('Connected to database');
});

// Middleware to parse JSON in requests
// app.use(express.json());
app.use(cors());

// Retrievae Hospitals Logic
/* app.get('api/Hospitals', (req, res) => {
    const sql = 'SELECT * FROM Hospitals';

    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error fetching data', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(200).json(result);
    });
}); */

// Add Hospital logic
app.post('/Hospitals', (req, res) => {
    // validate inputs
    /* if (!validator.isEmail(hos_email) || !validator.isMobilePhone(hos_telephone, 'any', { strictMode: false })) {
        return res.status(400).json({ error: 'Invalid input data' });
    } */
    const sql = "INSERT INTO Hospitals ('hos_name', 'hos_address', 'hos_email', 'hos_telephone', 'password') Values (?)";

    const values = [
        req.body.hos_name,
        req.body.hos_address,
        req.body.hos_email,
        req.body.hos_telephone,
        req.body.password
        ]
        db.query(sql, [values], (err, data) => {
            if (err) return res.json(err);
            return res.json(data);
    });
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});