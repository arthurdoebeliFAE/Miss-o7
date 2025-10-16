// Este é o único arquivo que você precisa.
// Arquivo: index.js

// 1. Pega a ferramenta 'express' que instalamos.
const express = require('express');

// 2. Cria o nosso servidor.
const app = express();
const PORT = 3000; // Define a porta padrão.

// 3. Cria a lista de dados (piadas) que o professor pediu.
const piadas = [
    { "piada": "O que o pato falou para a pata? Vem quá!", "categoria": "Animais" },
    { "piada": "Por que a velhinha não usa relógio? Porque ela é uma senhora.", "categoria": "Trocadilhos" },
    { "piada": "Qual é o cúmulo da sorte? Ser atropelado por uma ambulância.", "categoria": "Cúmulos" },
    { "piada": "Qual a semelhança entre um programador e um peixe? Os dois morrem pela boca.", "categoria": "TI" },
    { "piada": "O que um cromossomo disse para o outro? Cromossomos felizes!", "categoria": "Ciência" },
    { "piada": "Por que o pinheiro não se perde na floresta? Porque ele tem uma pinha (um mapinha).", "categoria": "Trocadilhos" },
    { "piada": "Qual é o animal que não vale mais nada? O javali.", "categoria": "Animais" },
    { "piada": "Qual a diferença entre o programador introvertido e o extrovertido? O introvertido olha para os próprios sapatos, o extrovertido olha para os seus.", "categoria": "TI" }
];

// 4. Cria o endpoint principal que devolve uma piada aleatória.
app.get('/piada', (req, res) => {
    const randomIndex = Math.floor(Math.random() * piadas.length);
    res.json(piadas[randomIndex]);
});

// 5. Cria o endpoint bônus que devolve uma piada de uma categoria específica.
app.get('/piada/:categoria', (req, res) => {
    const categoriaPedida = req.params.categoria.toLowerCase();
    const piadasDaCategoria = piadas.filter(p => p.categoria.toLowerCase() === categoriaPedida);

    if (piadasDaCategoria.length === 0) {
        return res.status(404).json({ error: "Nenhuma piada encontrada para esta categoria." });
    }

    const randomIndex = Math.floor(Math.random() * piadasDaCategoria.length);
    res.json(piadasDaCategoria[randomIndex]);
});

// 6. Uma rota inicial para sabermos que o servidor está funcionando.
app.get('/', (req, res) => {
    res.send('A API de Piadas está no ar! Use a rota /piada para começar.');
});

// 7. Liga o servidor.
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});
