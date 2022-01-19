const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  console.log("testing get request");

  const query = `SELECT * FROM "test"`;

  pool.query(query)
    .then(dbRes => {
        console.log("test query succeeded", dbRes);
        res.sendStatus(200);
    })
    .catch(err => {
        console.log('error getting test table', err);
        res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
