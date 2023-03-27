import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  title: String,
  clickStart: Date,
  clickEnd: Date,
  dateRegister: Date,
});

const Click = mongoose.model('Click', schema);

export default Click;