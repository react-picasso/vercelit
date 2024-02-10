import express from 'express';
import cors from 'cors';
import { generate } from './utils';
import simpleGit from 'simple-git';
import { getFiles } from './file';
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/deploy', async (req, res) => {
    const repoUrl = req.body.repoUrl;
    const id = generate();

    await simpleGit().clone(repoUrl, path.join(__dirname, `output/${id}`));
    
    const files = getFiles(path.join(__dirname, `output/${id}`));
    console.log(files);

    // Put this to S3
    res.json({
        id: id
    });
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});