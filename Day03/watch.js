const fs = require('fs');

fs.watch('./writeme.txt', (eventType, filename) => {
  console.log(eventType, filename);
});

