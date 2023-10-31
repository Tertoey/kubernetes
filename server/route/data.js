const express = require('express')
const router = express.Router()
const data = require('../controller/sensors')
const lineBot = require('../controller/line')

require('dotenv').config();


router.get('/sensors',data.sensors)
router.get('/users',data.users)
router.get('/weather',data.weather)

router.post('/weathersearch',data.weatherSearch)
router.post('/savesensors',data.saveSensorsData)
router.post('/saveuser',data.saveUser)
router.post('/finduser',data.findusers)

router.get('/am319',data.am319)

router.post('/line',lineBot.line_test)


module.exports = router