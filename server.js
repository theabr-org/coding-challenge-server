const apicache = require('apicache');
const corsAnywhere = require('cors-anywhere');
const express = require('express');
const expressHttpProxy = require('express-http-proxy');

const API_KEY = 'abrradiology';
const APP_PORT = 5001;
const CORS_PROXY_PORT = 5000;
const FISHWATCH_API_URL = 'www.fishwatch.gov/api/species';

// Create CORS Anywhere server
corsAnywhere.createServer({}).listen(CORS_PROXY_PORT, () => {
    console.log(`Internal CORS Anywhere server started at port ${CORS_PROXY_PORT}`);
});

// Create express Cache server
let app = express();

// Register cache middleware for GET and OPTIONS verbs
app.get('/*', cacheMiddleware());
app.options('/*', cacheMiddleware());

// Proxy to CORS server when request misses cache
app.use(
    '/gofish',
    (req, res, next) => {
        // Check for API key.
        if (req.query.apikey === API_KEY) {
            // Append fishwatch URL for cors-anywhere server.
            const urlMinusQuery = req.url.split('?')[0];
            req.url = `${urlMinusQuery}/${FISHWATCH_API_URL}`;
            next();
        } else {
            res.status(401).end();
        }
    },
    expressHttpProxy(`localhost:${CORS_PROXY_PORT}`)
);

app.listen(APP_PORT, () => {
    console.log(`External CORS cache server started at port ${APP_PORT}`);
});

/**
 * Construct the caching middleware
 */
function cacheMiddleware() {
    const cacheOptions = {
        statusCodes: { include: [200] },
        defaultDuration: 1000 * 60 * 60 * 8, // 8 hours.
        appendKey: (req, res) => req.method,
    };
    let cacheMiddleware = apicache.options(cacheOptions).middleware();
    return cacheMiddleware;
}
