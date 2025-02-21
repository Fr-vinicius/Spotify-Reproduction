
# Reprodução do Spotify

Este projeto é uma aplicação de **Spotify-like** desenvolvida com **Node.js** para o back-end e **JavaScript** para o front-end.

---

## Índice

1. [Descrição](#descrição)  
2. [Pré-requisitos](#pré-requisitos)  
3. [Instalação](#instalação)  
4. [Uso](#uso)  
5. [Contatos](#contatos)

---

## Descrição

O projeto oferece a tela inicial do Spotify, com os artistas e as músicas mais ouvidas, sendo possível passar por cada música e cada artista em destaque.
Acesse pelo link: https://spotify-reproduction.onrender.com

---

## Pré-requisitos

- Node.js instalado.  
- Para o back-end, é necessário ter um usuário e senha para o serviço de bancos de dados.  
  1. Crie um arquivo `.env` na raiz do diretório BE e adicione a variável:
     ```env
     USER2_DB_PASSWORD=YNlIo8hbFprZeU3L
     ```
  2. No arqivo Keys.js, substitua o valor de User por `gitUser`.
   (User: "gitUser")

- Para o front-end, será necessário um ambiente de desenvolvimento com Vite.

---

## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/spotify-clone.git
   cd spotify-clone
   ```

2. Instale as dependências tanto para o back-end quanto para o front-end:
   ```sh
   cd BE
   npm install

   cd ../FE
   npm install
   ```

---

## Uso

1. Para o back-end, inicie o servidor de desenvolvimento:
   ```sh
   cd BE
   npm run start
   ```

2. Para o front-end, inicie o servidor de desenvolvimento:
   ```sh
   cd FE
   npm run dev
   ```

O servidor do back-end estará disponível em `http://localhost:3001` e o front-end em `http://localhost:5173`.

---

## Contato

Se você tiver dúvidas ou sugestões, entre em contato:

Autor: Ederson Vinicius

LinkedIn: https://www.linkedin.com/in/ederson-vinicius-ferreira-rosa-b97550239

Email: evfr.trabalho@gmail.com
