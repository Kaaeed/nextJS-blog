import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    // store it in a database
    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    const connectionString = `${process.env.mongodb_name}:${process.env.mongodb_password}@${process.env.mongodb_clustername}`;

    try {
      // "mongodb+srv://nextjsblog:nextjsblog@nextjs-blog.rakgjgb.mongodb.net/?retryWrites=true&w=majority"
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: "Could not connect to the database." });
      return;
    }

    const db = client.db();

    let result;
    try {
      result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing the message failed!" });
      return;
    }

    client.close();

    res.status(201).json({
      message: "Successfully stored the message!",
      message: newMessage,
    });
  }
}

export default handler;
