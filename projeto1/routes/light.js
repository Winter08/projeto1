
var express = require('express');
const Gpio = require('onoff').Gpio;
const Led = new Gpio (4,'out');
var router = express.Router();


router.post('/on', function(req, res,next) {

    Led.writeSync(1);
    res.json({'status':'OK',
              'data':'LED aceso'
            });
  
  });

router.post('/off', function(req, res,next) {

    Led.writeSync(0);
    res.json({'status':'OK',
              'data':'LED apagado'
            });
  
  });

  module.exports = router;
