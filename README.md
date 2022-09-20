# ABR Coding Challenge Server

This is a server that can be used to provide data for ABR coding challenges. Some public APIs are not accessible directly from the client because of CORS. This server provides a proxy.

## API Key

The API key is `abrradialogy`.

## Local usage

- Clone this repo.
- `cd` into the repo root.
- Run `npm install`
- Run `node server.js`

## Paths

Paths can be used to provide the expected data. For example:

`http://localhost:5001/gofish?apikey=abrradiology`

The above provides the fish data for the fish coding challenge.