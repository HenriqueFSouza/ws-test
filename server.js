require('dotenv/config')
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


app.get('/api/list-cars', async (req, res) => {
  try {
    const response = await axios.get('https://wswork.com.br/cars_by_brand.json');
    
    // Corrigindo o JSON removendo espaços em branco desnecessários e adicionando a vírgula
    const fixedData = response.data.replace(/(\r\n|\n|\r|\s+)/gm, ' ').replace(/("num_portas"\s*:\s*\d+)/g, '$1,');

    // Analisando a string JSON corrigida
    const parsedData = JSON.parse(fixedData);

    // Enviando a resposta JSON corretamente
    res.json(parsedData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
