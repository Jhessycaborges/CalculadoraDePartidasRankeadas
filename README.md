# 🎮 Calculadora de Partidas Rankeadas

Projeto desenvolvido durante a Formação Lógica de Programação – DIO.

A aplicação calcula o saldo de vitórias de um jogador e determina o seu nível no ranking a partir de regras pré-definidas.
Este projeto reforça conceitos importantes de lógica de programação, como:

- Variáveis
- Funções
- Estruturas de decisão
- Operadores
- Entrada de dados no terminal

-------------------------------------------------------------

📊 Regras de Classificação

O nível do jogador é definido conforme a quantidade de vitórias:

Vitórias | Nível
0–10     | 🪨 Ferro
11–20    | 🥉 Bronze
21–50    | 🥈 Prata
51–80    | 🥇 Ouro
81–90    | 💎 Diamante
91–100   | 🔥 Lendário
≥ 101    | 🧙 Imortal

-------------------------------------------------------------

🧮 Cálculo do Saldo

saldo = vitórias - derrotas

A função calcularNivel() retorna o nível com base na quantidade de vitórias informada pelo usuário.

-------------------------------------------------------------

🚀 Como Executar o Projeto

1️⃣ Instale o prompt-sync:
npm install prompt-sync

2️⃣ Execute o arquivo principal:
node script.js

3️⃣ Informe os dados solicitados:
- Quantidade de vitórias
- Quantidade de derrotas

O programa exibirá automaticamente o saldo e o nível correspondente.

-------------------------------------------------------------

🖨️ Exemplo de Saída

Digite a quantidade de vitórias: 75
Digite a quantidade de derrotas: 20

O Herói tem de vitórias o saldo: 55. Está no nível: Ouro

-------------------------------------------------------------

🛠 Tecnologias Utilizadas

JavaScript
Node.js
prompt-sync

-------------------------------------------------------------

📂 Estrutura do Projeto

script.js
README.md

-------------------------------------------------------------

⭐ Conclusão

Este projeto demonstra de forma prática a aplicação de lógica de programação e estruturas condicionais em JavaScript.
Simples, direto e ideal para quem está iniciando no desenvolvimento. 🚀💙