# Teste Técnico Target


Este repositório contém o projeto de desafio técnico desenvolvido utilizando Node.js. O objetivo do projeto é demonstrar habilidades em desenvolvimento backend, manipulação de arquivos JSON, 
cálculo de métricas financeiras, execução de comandos e manipulação de strings.



## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- **`src/data`**: Arquivo JSON contendo os dados de faturamento mensal.
- **`src/modules`**: Pasta que contém os módulos separados por funcionalidades:
  - `soma.js`: Implementa o cálculo da soma de números inteiros.
  - `fibonacci.js`: Determina se um número pertence à sequência de Fibonacci.  - 
  - `faturamento.js`: Lógica para calcular métricas de faturamento mensal.
  - `percentual.js`: Percentual de representação.
  - `inverteString.js`: Inverte uma string dada pelo usuário.
- **`src/main.js`**: Arquivo principal para execução dos módulos.

## Funcionalidades

O projeto oferece as seguintes funcionalidades:

1.  **Soma:**
    *   Implementa o cálculo da soma dos números naturais até um determinado índice. 

2.  **Fibonacci:**
    *   Determina se um número pertence à sequência de Fibonacci.

3. **Faturamento:**
    *   Carrega os dados de faturamento mensal a partir do arquivo `faturamento.json`.
    *   Calcula o menor, maior valor de faturamento e a média mensal.
    *   Exibe o número de dias com faturamento acima da média.

4. **Percentual:**
    *   Calcula o percentual do faturamento diário em relação ao total mensal.

5.  **InverteString:**
    *   Inverte uma string fornecida pelo usuário. 

## Como Executar o Projeto

Siga os passos abaixo para executar o projeto localmente:

1.  Clone o repositório:

    ```bash
    git clone [https://github.com/Cezarj59/teste_tecnico_target.git](https://github.com/Cezarj59/teste_tecnico_target.git)
    ```

2.  Entre no diretório do projeto:

    ```bash
    cd teste_tecnico_target  
    ```

3.  Instale as dependências:

    ```bash
    npm install
    ```

4.  Para executar o programa, utilize o comando:

    ```bash
    npm start
    ```

5.  No Terminal, escolha o módulo que deseja executar (soma, fibonacci, inverteString, faturamento ou percentual).

