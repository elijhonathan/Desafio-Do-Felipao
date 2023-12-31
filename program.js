//# 1️⃣ Desafio Classificador de nível de Herói

//**O Que deve ser utilizado**
//- Variáveis
//- Operadores
//- Laços de repetição
//- Estruturas de decisões

//## Objetivo
//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 6.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante

//## Saída
//Ao final deve se exibir uma mensagem:
//"O Herói de nome **{nome}** está no nível de **{nivel}**"

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o nome do herói: ', (nomeHeroi) => {
    rl.question('Digite a quantidade de experiência: ', (quantidadeExperiencia) => {

// < 1000 ferro
if(quantidadeExperiencia <= 1000)
{
    nivel = "Ferro"
    mensagem = "Todo mundo começa de algum lugar. Continue avançando!..."
}
// 1001 a 2000 bronze
else if(quantidadeExperiencia > 1000 && quantidadeExperiencia <= 2000)
{
    nivel = "Bronze"
    mensagem = "Você está progredindo e aprendendo. Continue assim!"
}
// 2001 a 5000 prata
else if(quantidadeExperiencia > 2000 && quantidadeExperiencia <= 5000)
{
    nivel = "Prata"
    mensagem = "Seu esforço está valendo a pena. Continue crescendo!" 
}
// 5001 a 7000 ouro
else if(quantidadeExperiencia > 5000 && quantidadeExperiencia <= 7000)
{
    nivel = "Ouro"
    mensagem = "Você está se tornando mais habilidoso a cada dia. Mantenha o bom trabalho!" 
}
// 7001 a 8000 platina 
else if(quantidadeExperiencia > 7000 && quantidadeExperiencia <= 8000)
{
    nivel = "Platina"
    mensagem = "Você está no caminho certo para o sucesso. Continue aprimorando suas habilidades."
}
// 8001 a 9000 ascendente
else if(quantidadeExperiencia > 8000 && quantidadeExperiencia <= 9000)
{
    nivel = "Ascendente"
    mensagem = "Sua dedicação está dando frutos. Continue a se superar!"
}
// 9001 a 10000 imortal
else if(quantidadeExperiencia > 9000 && quantidadeExperiencia <= 10000)
{
    nivel = "Imortal"
    mensagem =  "Você está próximo da excelência. Continue buscando a perfeição!"
}
// > 10001 radiante
else if(quantidadeExperiencia > 10000)
{
    nivel = "Radiante"
    mensagem =  "Você é incrivelmente imbatível. Parabéns, você é o melhor!"
}
// seu heroi está no nivel 
console.log("O seu herói chamado " + nomeHeroi + " está com " + quantidadeExperiencia + " de XP, está no nível " + nivel + ", " + mensagem)

rl.close();
});
});
