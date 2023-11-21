const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://127.0.0.1:27017/TicketDB")
  .catch((error) => console.log(error));

// Declare the Schema of the Mongo model
var ticketSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    acive: Boolean,
  },
  {
    timestamps: true,
  }
);

//Export the model
const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);
export default Ticket;
