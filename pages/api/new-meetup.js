import { MongoClient } from 'mongodb';

async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const data = req.body;

      const client = await MongoClient.connect(process.env.DATABASE_URL);
      const db = client.db();

      const meetupsCollection = db.collection('meetups');

      const result = await meetupsCollection.insertOne(data);

      console.log(result);

      client.close();

      res.status(201).json({ message: 'Meetup inserted!' });
    }
  } catch (e) {
    console.log(e);
  }
}

export default handler;
