
import mongoose from 'mongoose'

const MONGO_URI = "mongodb+srv://mdtagg91:syHu5B9jMAMoKBh8@cluster0.bcim8xo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'Data_Structure_Visualizer'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));


const Schema = mongoose.Schema;

const dataSchema = new Schema({
  checked: {
    "type":Boolean,
    "required":true
  }
})

export default dataSchema
