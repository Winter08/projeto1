
const Gpio = require('onoff').Gpio;
const Led = new Gpio (4,'out');


router.get('/on', function(req, res) {

    Led.writeSync(1);
  
  });
  