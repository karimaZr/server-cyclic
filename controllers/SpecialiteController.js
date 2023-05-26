const express = require('express');
const router = express.Router();
const Specialite = require('../models/Specialité');
const SpecialiteService = require('../services/SpecialiteService');
const specialiteService = new SpecialiteService(Specialite);

router.get('/', async (req, res) => {
  try {
    const specialite = await specialiteService.getAllSpecialite();
    res.json(specialite);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
//
router.get('/:id', async (req, res) => {
  try {
    const specialite = await specialiteService.getSpecialiteById(req.params.id);
    res.json(specialite);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
//
//router.get('/:id', async (req, res) => {
//  try {
//    const restos = await restoService.getRestoById(req.params.id);
//    res.json(restos);
//  } catch (err) {
//    console.error(err.message);
//    res.status(500).send('Server Error');
//  }
//});
////
//
//router.get('/zone/:zoneId', async (req, res) => {
//  try {
//    const restos = await restoService.getRestoByZoneId(req.params.zoneId);
//    res.json(restos);
//  } catch (err) {
//    console.error(err.message);
//    res.status(500).send('Server Error');
//  }
//});
////
router.post('/', async (req, res) => {
  try {
    const specialite = await specialiteService.createSpecialite(req.body);
    res.json(specialite);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
//
//router.put('/:id', async (req, res) => {
//  try {
//    const zone = await zoneService.updateZone(req.params.id, req.body);
//    res.json(zone);
//  } catch (err) {
//    console.error(err.message);
//    res.status(500).send('Server Error');
//  }
//});
//
//router.delete('/:id', async (req, res) => {
//  try {
//    await zoneService.deleteZone(req.params.id);
//    res.json({ msg: 'Zone deleted' });
//  } catch (err) {
//    console.error(err.message);
//    res.status(500).send('Server Error');
//  }
//});

module.exports = router;
