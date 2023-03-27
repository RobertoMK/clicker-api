import FileManager from '../middlewares/fileManager.js'

class ClickController {

    constructor(){
        this.file = FileManager
    }

    async get(req, res) {
        try {
          const entries = await this.file.getItems();
          res.send(entries);
        } catch (err) {
          res.status(400).send(err.message);
        }
    }

    async create(req, res) {
        const entry = req.body;
        try {
          await this.file.addItem(entry);
          res.status(201).send(entry);
        } catch (err) {
          res.status(422).send(err.message);
        }
      }

}
export default new ClickController();