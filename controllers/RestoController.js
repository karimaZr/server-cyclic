const express = require('express');
const router = express.Router();
const Resto = require('../models/Restaurant');
const RestoService = require('../services/RestoService');
const restoService = new RestoService(Resto);

router.get('/', async (req, res) => {
  try {
    const restos = await restoService.getAllRestos();
    res.json(restos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
//
//router.get('/:id', async (req, res) => {
//  try {
//    const zone = await zoneService.getZoneById(req.params.id);
//    res.json(zone);
//  } catch (err) {
//    console.error(err.message);
//    res.status(500).send('Server Error');
//  }
//});
//
router.get('/:id', async (req, res) => {
  try {
    const restos = await restoService.getRestoById(req.params.id);
    res.json(restos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
//

router.get('/zone/:zoneId', async (req, res) => {
  try {
    const restos = await restoService.getRestoByZoneId(req.params.zoneId);
    res.json(restos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

///Get restos by zone_ID && spacialities_ID
router.get('/zone/:zoneId/specialites/:specialiteIds', async (req, res) => {
  try {
    const specialiteIds = req.params.specialiteIds.split('&');
    const restos = await restoService.getRestoByZandS(req.params.zoneId, specialiteIds);
    res.json(restos);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


//
router.post('/', async (req, res) => {
  try {
    const resto = await restoService.createResto(req.body);
    res.json(resto);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
//



router.put('/:id', async (req, res) => {
  try {
    let resto = await restoService.getRestoById(req.params.id);
    if (!resto) {
      return res.status(404).json({ msg: 'Resto not found' });
    }
    resto.name = req.body.name;
    await restoService.createResto(resto);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'resto not found' });
    }
    res.status(500).send('Server Error');
  }
});
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
