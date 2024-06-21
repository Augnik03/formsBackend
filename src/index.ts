import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const DB_FILE = path.join(__dirname, 'db.json');

// Ensure the db.json file exists
if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify([]));
}

app.get('/ping', (req, res) => {
    res.send(true);
});

app.post('/submit', (req, res) => {
    const newSubmission = req.body;

    // Read the existing submissions from the file
    const data = fs.readFileSync(DB_FILE, 'utf8');
    const submissions = JSON.parse(data);

    // Add the new submission to the list
    submissions.push(newSubmission);

    // Write the updated list back to the file
    fs.writeFileSync(DB_FILE, JSON.stringify(submissions, null, 2));

    res.send({ message: 'Submission received' });
});

app.get('/read', (req, res) => {
    const index = parseInt(req.query.index as string, 10);

    // Read the existing submissions from the file
    const data = fs.readFileSync(DB_FILE, 'utf8');
    const submissions = JSON.parse(data);

    if (index >= 0 && index < submissions.length) {
        res.send(submissions[index]);
    } else {
        res.status(404).send({ error: 'Submission not found' });
    }
});

// New endpoint to fetch all submissions
app.get('/submissions', (req, res) => {
    const data = fs.readFileSync(DB_FILE, 'utf8');
    const submissions = JSON.parse(data);
    res.send(submissions);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
