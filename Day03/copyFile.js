const fs = require('fs');

fs.copyFile('../Day02/readme.txt', 'writeme.txt', (error) => {
  if (error) {
    return console.error(error);
  }
  console.log('복사 완료');
});
