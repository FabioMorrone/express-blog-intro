const express = require('express');
const app = express();
const port = 3002;

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


app.get('/', (req, res) => {
    console.log('home route requested');

    ree.send('”Server del mio blog”')
})




app.get('/api/v1/post', (req, res) => {


    const post = [
        {
            id: 1,
            titolo: 'Ciambellone',
            contenuto: 'lorem',
            immagine: 'public/images/ciambellone.jpeg',
            tags: [' lorem', 'lorem', 'lorem'],
        },
        {
            id: 2,
            titolo: 'cracker',
            contenuto: 'lorem',
            immagine: 'public/images/cracker_barbabietola.jpeg',
            tags: ['lorem', 'lorem', 'lorem'],
        },
        {
            id: 3,
            titolo: 'pane',
            contenuto: 'lorem',
            immagine: 'public/images/pane_fritto_dolce.jpeg',
            tags: ['lorem', 'lorem', 'lorem'],
        },
        {
            id: 4,
            titolo: 'pasta',
            contenuto: 'lorem',
            immagine: 'public/images/pasta_barbabietola.jpeg',
            tags: ['lorem', 'lorem', 'lorem'],
        },
        {
            id: 5,
            titolo: 'torta',
            contenuto: 'lorem',
            immagine: 'public/images/torta_paesana.jpeg',
            tags: ['lorem', 'lorem', 'lorem'],
        }
    ]



    res.json(post)

})