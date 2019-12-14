const express = require('express');
const path = require('path');
const rp = require('request-promise');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '..', 'public', 'dist')));

const kylesHead = '54.213.38.65'
const patsFacts = '54.213.192.23'
const sayersZest = '18.191.248.186'
const mattsMC = '18.237.82.132'
const innasImages = '35.164.99.110'

app.route('/styled-components')
  .get((req, res) => {
    rp(`http://${kylesHead}:3001/vendors.bundle.js`)
    .then((body) => res.send(body))
    .catch(() => res.sendStatus(500))
  })
app.route('/Kyle-service/bundle.js')
  .get((req, res) => {
    rp(`http://${kylesHead}:3001/main.bundle.js`)
    .then((body) => res.send(body))
    .catch(() => res.sendStatus(404))
  });
app.route('/api/listings/:Listing_id')
  .get((req, res) => {
    console.log(req.params);
    rp(`http://${kylesHead}:3001/api/listings/${req.params.Listing_id}`)
    .then((body) => res.send(body))
    .catch(() => res.sendStatus(500))
  })

app.route('/Patrick-service/bundle.js')
  .get((req, res) => {
    rp(`http://${patsFacts}:3002/bundle.js`)
    .then((body) => res.send(body))
    .catch(() => res.sendStatus(404))
  })
app.route('/listings/:id')
  .get((req, res) => {
    rp(`http://${patsFacts}:3002/listings/${req.params.id}`)
    .then((body) => res.send(body))
    .catch(() => res.sendStatus(500))
  })

app.route('/Sayer-service/bundle.js')
  .get((req, res) => {
    rp(`http://${sayersZest}:3003/bundle.js`)
    .then((body) => res.send(body))
    .catch(() => res.sendStatus(404))
  })
app.route('/api/listing/:id')
  .get((req, res) => {
    rp(`http://${sayersZest}:3003/api/listing/${req.params.id}`)
    .then((body) => res.send(body))
    .catch(() => res.sendStatus(500))
  })

app.route('/Matthew-service/bundle.js')
  .get((req, res) => {
    rp(`http://${mattsMC}:3004/mc.bundle.js`)
    .then((body) => res.send(body))
    .catch(() => res.sendStatus(404))
  })
app.route('/api/houseprices/:id')
  .get((req, res) => {
    rp(`http://${mattsMC}:3004/api/houseprices/${req.params.id}`)
    .then((body) => res.send(body))
    .catch(() => res.sendStatus(500))
  })

app.route('/Inna-service/bundle.js')
  .get((req, res) => {
    rp(`http://${innasImages}:3005/dist/bundle.js`)
    .then((body) => res.send(body))
    .catch(() => res.sendStatus(404))
  })
app.route('/api/photos/:id')
  .get((req, res) => {
    rp(`http://${innasImages}:3005/api/photos/${req.params.id}`)
    .then((body) => res.send(body))
    .catch(() => res.sendStatus(500))
  })

app.listen(PORT, () => console.log(`zobinHood proxy listening on PORT ${PORT}!`));
