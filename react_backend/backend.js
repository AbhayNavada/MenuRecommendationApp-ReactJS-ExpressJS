const express = require('express')
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

const port = 4000

//Images of appetizers to be sent to the frontend component
appetizerImages = [
    {
        image: 'https://images.unsplash.com/photo-1607098665874-fd193397547b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwZXRpemVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
        image: 'https://images.unsplash.com/photo-1598309141235-06d295271f81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwcGV0aXplcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
        image: 'https://images.unsplash.com/photo-1611759650297-9fd869c36f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGFwcGV0aXplcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    }
]

//Images of sweets to be sent to the frontend component
sweetImages = [
    {
        image: 'https://images.unsplash.com/photo-1570476922354-81227cdbb76c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3dlZXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
        image: 'https://images.unsplash.com/photo-1543773495-2cd9248a5bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3dlZXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
        image: 'https://images.unsplash.com/photo-1585653621032-a5fec164ee92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHN3ZWV0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
    }
]

//Images of soft drinks to be sent to the frontend component
softDrinkImages = [
    {
        image: 'https://images.unsplash.com/photo-1601055903647-ddf1ee9701b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHNvZnQlMjBkcmlua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
        image: 'https://images.unsplash.com/photo-1506353219544-65860ffc5f41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHNvZnQlMjBkcmlua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
    },
    {
        image: 'https://images.unsplash.com/photo-1603394461809-ecff477290da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHNvZnQlMjBkcmlua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
    }
]

//End-point which sends 'appetizerImages' to the frontend
app.get('/appetizerImages', (req, res) => {
    res.send(appetizerImages);
})

//End-point which sends 'sweetImages' to the frontend
app.get('/sweetImages', (req, res) => {
    res.send(sweetImages);
})

//End-point which sends 'softDrinkImages' to the frontend
app.get('/softDrinkImages', (req, res) => {
    res.send(softDrinkImages);
})

//End-point which receives the uri of the clicked image from the frontend
app.get('/clickedImage', (req, res) => {
    console.log(req.query.uri)
    res.send('Image received');
})

//End-point which receives the user preferences from the frontend
app.get('/userPreferences', (req, res) => {
    console.log(JSON.parse(req.query.prefs));
    res.send('User preferences received!');
});

//Express server running on port 4000 of the localhost
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
