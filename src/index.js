const app = require('express')();

app.get('/', (req, res ) => 
    res.json({ message: 'Learning Docker after I learned to use Kubernetes. 🐳' }) 
);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on http://localhost:${port}`) );
