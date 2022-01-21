require('dotenv').config();
const { default: axios } = require('axios');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


/**
 * GET route template
 */
router.get('/', (req, res) => {
  

  axios.get('https://api.pathofexile.com/public-stash-tabs', {
    headers: {
      'Authorization': `Bearer ${process.env.REACT_APP_POE_ACCESS_TOKEN}`,
      'User-Agent': `OAuth tronial/1.0.0 (contact: harty.garrett@gmail.com) StrictMode`
    }
  })
    .then(apiRes => {
      const response = apiRes.data.stashes.filter(obj => {
        return obj.public === true;
      });
      console.log("Received API response", response.splice(0-10));
      res.send(response.splice(0-10));
    })
    .catch(err => {
      console.log("Error getting stash tabs", err);
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