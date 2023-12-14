const bodyParser = require('body-parser')
const express = require("express")
const supabaseClient = require('@supabase/supabase-js')
const app = express()
const port = 4000

app.use(bodyParser.json())

// this allows us to use all files in the public folder
app.use(express.static(__dirname + '/public'))

const supabaseUrl = 'https://mptzzikzkqeoyxjdlqxz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wdHp6aWt6a3Flb3l4amRscXh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0OTYxNDAsImV4cCI6MjAxODA3MjE0MH0.Ck-6F_f_yAfyHLDCmMeT5dht1m45NAoDQRGhj2uKEfo'
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);

// GET, which serves the index.html page
app.get("/", (req, res) => {
    res.sendFile("public/index.html", { root: __dirname })
})

// GET, which serves the about.html page
app.get("/about", (req, res) => {
    res.sendFile("public/about.html", { root: __dirname })
})

// GET, which serves the doc.html page
app.get("/doc", (req, res) => {
    res.sendFile("public/doc.html", { root: __dirname })
})

app.get('/getsavedpalettes', async (req, res) => {
    try {
      const { data, error } = await supabase.from('Saved Palettes').select();
      if (error) {
        throw new Error('Failed to fetch color palettes');
      }
      res.json(data);
    } catch (error) {
      console.error('Error fetching color palettes:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.post('/savedpalettes', async (req, res) => {
    const colorPalette = req.body;
    console.log('Received color palette:', colorPalette);

    try {
        const { data, error } = await supabase
            .from(`Saved Palettes`)
            .insert([
                {
                    'Color 1': colorPalette.color1,
                    'Color 2': colorPalette.color2,
                    'Color 3': colorPalette.color3,
                    'Color 4': colorPalette.color4,
                    'Color 5': colorPalette.color5,
                }
            ])
            .select();

        if (error) {
            console.error('Error inserting into Supabase:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        console.log('Data inserted into Supabase:', data);
        res.header('Content-type', 'application/json');
        res.json(data);
    } catch (error) {
        console.error('Error processing Supabase request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port)