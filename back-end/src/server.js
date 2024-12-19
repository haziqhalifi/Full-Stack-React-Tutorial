import express from "express";
import { MongoClient, ServerApiVersion } from 'mongodb'

const articleInfo = [
    { name: 'learn-node', upvotes: 0, comments: [] },
    { name: 'learn-react', upvotes: 0, comments: [] },
    { name: 'mongodb', upvotes: 0, comments: [] },
]

const app = express();

app.use(express.json());

// app.get('/hello', function (req, res) {
//     res.send('Hello!');
// });

// app.get('/hello/:name', function (req, res) {
//     res.send('Hello ' + req.params.name)
// })

// app.post('/hello', function (req, res) {
//     res.send('Hello ' + req.body.name + ' from Post Endpoint')
// });

app.get('/api/articles/:name', async (req, res) => {
    const { name } = req.params;

    const uri = 'mongodb://127.0.0.1:27017';

    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    try {
        await client.connect();
        const db = client.db('full-stack-react-db');
        const article = await db.collection('articles').findOne({ name });

        if (!article) {
            return res.status(404).send('Article not found');
        }

        res.json(article);
    } catch (error) {
        console.error('Error fetching article:', error);
        res.status(500).send('Internal Server Error');
    } finally {
        await client.close();
    }
});

app.post('/api/articles/:name/upvote', (req, res) => {
    console.log(`Received request to upvote article: ${req.params.name}`);
    const article = articleInfo.find(a => a.name === req.params.name);
    if (!article) {
        return res.status(404).send('Article not found');
    }
    article.upvotes += 1;

    res.send('Success! The article ' + req.params.name + ' now has ' + article.upvotes + ' upvotes!')
    res.json(article);
});

app.post('/api/articles/:name/comments', (req, res) => {
    const { name } = req.params.name;
    const { postedBy, text } = req.body;

    const article = articleInfo.find(a => a.name === req.params.name);

    article.comments.push({
        postedBy,
        text
    });

    res.json(article);
})

app.listen(8000, function () {
    console.log("Server is listening on port 8000");
});