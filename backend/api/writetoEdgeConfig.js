// backend/api/writeToEdgeConfig.js
const express = require('express');
const router = express.Router();
const axios = require('axios');

const EDGE_CONFIG_API_URL = 'https://edge-config.vercel.com/';
const EDGE_CONFIG_API_KEY = process.env.EDGE_CONFIG_API_KEY;

router.post('/write', async (req, res) => {
  const { key, value } = req.body;

  try {
    const response = await axios.post(
      `${EDGE_CONFIG_API_URL}/config`,
      { key, value },
      {
        headers: {
          'Authorization': `Bearer ${EDGE_CONFIG_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to write to EdgeConfig' });
  }
});

module.exports = router;
