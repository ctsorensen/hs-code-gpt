import Express from "express"
import Path from "path"
import { fileURLToPath } from 'url';
import GptCall from './hs-code-ai.js';

const PORT = 8080;
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = Path.dirname(__filename); // get the name of the directory
const app = new Express();

app.get('/', (req,res) => {
    res.sendFile("/Users/tylersorensen/Development/hs-code-gpt/index.html")
});

app.get('/suggest', async function(req, res){
    var array = Object.entries(req.query);
    var description = array[0][0];
    var suggestion = await GptCall(description);
    console.log('hs code suggestion: '+ suggestion);
    res.send(suggestion);
    res.end();
});


app.use(Express.static('public'));

app.listen(PORT, () => {console.log(`Server is now listening on port ${PORT}`)});

