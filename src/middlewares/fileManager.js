const fs = require('fs');

class FileManager {
  constructor(filename) {
    this.filename = filename;
  }

  addItem(item) {
    let data = [];
    if (fs.existsSync(this.filename)) {
      const fileData = fs.readFileSync(this.filename);
      data = JSON.parse(fileData);
    }

    data.push(item);
    
    fs.writeFileSync(this.filename, JSON.stringify(data, null, 2));
  }

  getItems(){
    let data = [];
    if (fs.existsSync(this.filename)) {
      const fileData = fs.readFileSync(this.filename);
      data = JSON.parse(fileData);
    }

    return data;
  }
}