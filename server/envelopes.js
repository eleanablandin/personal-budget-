const express = require('express')
const envelopeRouter = express.Router();
const {envelopes} = require('../Envelopes');




envelopeRouter.get('/', (req, res) => {
    res.send(envelopes);
  });




  module.exports = envelopeRouter;