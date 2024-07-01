require('dotenv/config')
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

// Define a porta do servidor
const PORT = process.env.PORT || 5000;

// Middleware para servir o aplicativo React em produção
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

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
  console.log(`Server is running on ${PORT}`);
});
