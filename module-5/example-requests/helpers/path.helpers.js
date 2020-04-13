const path = require('path');

// Get a path from de file whose is responsible to start the application
module.exports = path.dirname(process.mainModule.filename);
