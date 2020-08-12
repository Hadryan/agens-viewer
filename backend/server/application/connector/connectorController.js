const express = require('express');
const ConnectorService = require('./connectorService')
const AgensDatabaseHelper = require('../db/agensDatabaseHelper');
const router = express.Router();

router.get('/', async (req, res, next) => {
    let agensDatabaseHelper = new AgensDatabaseHelper(req.session.client);

    let connectorService = new ConnectorService(req.session, agensDatabaseHelper);
    let {status, data} = await connectorService.getConnectionStatus();

    res.status(status).json(data).end();
});

router.post('/connect', async (req, res, next) => {
    let agensDatabaseHelper = new AgensDatabaseHelper(req.body);

    let connectorService = new ConnectorService(req.session, agensDatabaseHelper);
    let {status, data} = await connectorService.connectDatabase();

    res.status(status).json(data).end();
});

router.get('/disconnect', (req, res, next) => {
    let agensDatabaseHelper = new AgensDatabaseHelper(req.session.client);

    let connectorService = new ConnectorService(req.session, agensDatabaseHelper);
    let {status, data} = connectorService.disconnectDatabase();

    res.status(status).json(data).end();
});

router.get('/meta', async (req, res, next) => {
    let agensDatabaseHelper = new AgensDatabaseHelper(req.session.client);

    let connectorService = new ConnectorService(req.session, agensDatabaseHelper);
    let metadata = await connectorService.getMetaData();

    res.status(200).json(metadata).end();
});

module.exports = router;
