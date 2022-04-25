import express from 'express';
import { urlencoded } from 'express';
import path from 'path';
import { allowedNodeEnvironmentFlags } from 'process';

const __dirname = path.resolve(path.dirname(''));

const app = express();
app.set("view engine" , "ejs" )
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded());

const port = 3001
app.listen(3001 , () => {
  console.log(`Servidor rodando em http://localhost:${port}/`)
})

const pokedex = [
        {
  
          id: 1,
          nome: "Bulbasaur",
          tipo:"Grass",
          imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
          descricao: "Há uma semente de planta em suas costas desde o dia em que este Pokémon nasce. A semente lentamente cresce.",
          altura: "0,7m",
          peso: "6,9 kg",
          categoria: "Semente",
          habilidade: "Overgrow", //Potencializa movimentos do tipo Grama quando o HP do Pokémon está baixo.
          fraquezas: " Fogo , Psiquico ,voador, Gelo "
        },
        {
          id: 2,
          nome: "Ivysaur" ,
          tipo: "Grass" , // e Poison(veneno)
          imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
          descrição: "Quando a lâmpada em suas costas cresce grande, parece perder a capacidade de ficar em suas patas traseiras." ,
          altura: "1.0 m" ,
          peso: "13.0 kg" ,
          categoria: "Semente" ,
          habilidade: "Overgrow" ,
          fraquezas: " Fogo , Psiquico ,voador, Gelo "        
        
        },
        {
          id:3 ,
          nome: "Venusaur" ,
          tipo:"Grass",
          imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
          descricao: "Sua planta floresce quando está absorvendo energia solar. Ele fica em movimento para buscar a luz solar",
          altura: "2m",
          peso: "100Kg",
          categoria: "Semente",
          habilidade: "Overgrow", 
          fraquezas: " Fogo , Psiquico ,voador, Gelo " 
        },
        {
          id: 4,
          nome: "Charmander",
          tipo: "fire" ,
          imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
          descricao: "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta da cauda.",
          altura: "0,6m",
          peso: "8.5Km",
          categoria: "Lagarto",
          habilidade: "Brilhar", //Potencializa movimentos do tipo Fire quando o HP do Pokémon está baixo.
          fraquezas: "Água , chão , Rocha"
        },
        {
          id: 5,
          nome: "Charmeleon",
          tipo: "Fire",
          imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
          descricao: "Tem uma natureza bárbara. Em batalha, ele chicoteia sua cauda ardente ao redor e corta com garras afiadas.",
          altura: "1,1m",
          peso: "19Km",
          categoria: "Chama",
          habilidade: "Brilhar", 
          fraquezas: "Água , chão , Rocha"
        },
        {
          id: 6,
          nome: "Charizard",
          tipo:"Fire", //voador
          imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
          descricao: "Ele cospe fogo que é quente o suficiente para derreter pedregulhos. Pode causar incêndios florestais soprando chamas.",
          altura: "1,7m",
          peso: "90.5Kg",
          categoria: "Chama",
          habilidade: "Brilhar", 
          fraquezas: "Água , Elétrico , Rocha"
        },
          {
            id: 7,
          nome: "Squirtle",
          tipo: "Water",
          imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
          descricao: "Quando ele retrai seu pescoço longo em sua concha, ele esguicha água com força vigorosa.",
          altura: "0.5m",
          peso: "9.0kg",
          categoria: "Tartaruga Minúscula",
          habilidade: "Torrente", //Potencializa movimentos do tipo água quando o HP do Pokémon está baixo.
          fraquezas: "Grama, Elétrico"
          },
          {
            id: 8,
          nome: "Wartortle",
          tipo: "Water",
          imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
          descricao: "É reconhecido como um símbolo de longevidade. Se sua concha tem algas, esse Wartortle é muito velho.",
          altura: "1.0m",
          peso: "22.5kg",
          categoria: "Tartaruga",
          habilidade: "Torrente", 
          fraquezas: "Grama, Elétrico"
          },
          {
            id: 9,
          nome: "Blastoise",
          tipo: "Water",
          imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
          descricao: "Ele esmaga seu inimigo sob seu corpo pesado para causar desmaios. Em uma pitada, ele vai se retirar dentro de sua concha.",
          altura: "1.6m",
          peso: "85.5kg",
          categoria: "Marisco",
          habilidade: "Torrente", 
          fraquezas:"Grama, Elétrico"
          },
          {
            id: 10,
            nome: "Pikachu",
            tipo: "Elétrico",
            imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
            descricao: "Pikachu que pode gerar eletricidade poderosa tem sacos de bochecha que são extra macios e super elásticos.",
            altura: "0.4m",
            peso: "6.0km",
            categoria: "Rato",
            habilidade: "Estático", //O Pokémon é carregado com eletricidade estática, então o contato com ele pode causar paralisia.
            fraquezas: "Chão"
          }, 
          {
            id: 11,
          nome: "Raichu",
          tipo: "Elétrico",
          imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
          descricao: "Sua cauda longa serve como um solo para se proteger de sua própria potência de alta tensão.",
          altura: "0.8m",
          peso: "30.0kg",
          categoria: "Rato",
          habilidade: "Estático", 
          fraquezas: "Chão"
          },
          {
            id: 12,
          nome: "Sandshrew",
          tipo: "Chão",
          imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png",
          descricao: "Adora tomar banho no grão de áreas secas e arenosas. Ao tomar banho de areia, o Pokémon se livra da sujeira e umidade agarradas ao seu corpo.",
          altura: "0.6m",
          peso: "12.0kg",
          categoria: "Rato",
          habilidade: "Véu de Areia", //Aumenta a evasão do Pokémon em uma tempestade de areia.
          fraquezas: "Água , Grama , Gelo"
          }
];

app.get("/" , (req, res) => {
   res.render("index.ejs" , 
   {pokedex})
})

app.get("/detalhes/:id" , (req , res) => {
    let id = +req.params.id 
    const pokemon = pokedex.find(pokedex => pokedex.id === id)
    res.render("detalhes", {pokemon})
})

app.get("/add" , (req , res) => {
  res.render("cadastro.ejs")
      
    res.redirect("/")
})


app.post("/add" , (req, res) => {
 
  const pokemon = req.body;
  pokedex.id = pokedex.length + 1
  pokedex.push(pokemon);
  
  res.redirect("/")
})
