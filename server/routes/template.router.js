const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  console.log("in router");
  const query = `SELECT * FROM "test" WHERE "id"=1`;
  
  pool.query(query)
    .then(dbRes => {
        console.log("Received response from db", dbRes.rows);
        res.send(dbRes.rows);
    })
    .catch(err => {
        console.log("Server error", err);
        res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;