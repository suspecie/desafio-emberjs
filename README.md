# Desafio Ember.js

Este é um desafio de Ember.js no qual estou participando.


## Descrição do Desafio

### Introduction

> Nesse teste iremos verificar:

- Configuração do Adapter

- Criação das Rotas e listagem de item simples

- Habilidade de enviar um header específico

- Forma de pegar parâmetro da URL

- Manipulação do ember-data e requests separadamente

- Habilidade de usar o MomentJS e outra lib de validação.

Para isso, iremos montar uma aplicação chamada "Friend List" em EmberJS utilizando Ember-data


> A aplicação irá conter

- Tela de Listagem os "Amigos" da aplicação

- Tela de Detalhe do "Amigo"

- Tela de Criação de novo "Amigo"

- Tela de Edição dos dados do "Amigo" - Utilizaremos a API: https://www.getpostman.com/collections/f714ed27da0ee1c5407a

### Comportamento do App

Na tela de criação, teremos os campos "Nome", "Sobrenome" e "Data de Início da Amizade".

Devemos validar se o campo "Nome" e "Sobrenome" foram preenchidos com mais de 3 caracteres

A "Data de Início da Amizade" deve exibir um datepicker onde só poderá ser escolhido uma data entre 1 mês antes do dia atual e 1 mês depois.

(A validação deve ser feita ao clicar em "Enviar", exibir mensagem específica para cada campo com o erro encontrado)

Ao clicar em SALVAR, exibir um loader, fazer o POST para a API, limpar o formulário e exibir um modal de "Amigo cadastrado" com um link para voltar a listagem.

- Ao exibir o detalhe do Amigo, quando o usuário editar os dados, o comportamento deve ser:

- Quando o usuário for digitando o novo dado, ir atualizando o Ember-Data com os novos dados.

- Ao clicar em SALVAR, Exibir um modal perguntando "Deseja realmente salvar?"

Se sim, enviar um PUT a API,

No PUT, adicionar o seguinte header: "friend-edit: true"

Se não, limpar os dados do Ember-Data para o estado anterior.

Vamos simular uma busca pela URL da app, por exemplo:

- Ao acessar a rota '/amigos?nome=Qualquer-Nome', a aplicação deve fazer uma busca para /friends?name=Qualquer-nome.

- A lista deve ser atualizada com o resultado retornado pela API.


## Pre-requisitos

Você precisa ter os itens abaixo instalados no seu computador.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)

## Instalação

* `git clone https://github.com/suspecie/desafio-emberjs.git` this repository
* `cd desafio-emberjs`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).


## O que eu preciso melhorar:

- Melhorar o entendimento de Controller, Adaptors, pois pesquisando fiquei um poco confusa em qual o jeito certo.
- Tipo muito problemas de erros para os  GET, POST E PUT em um API externa, então preciso melhorar este entendimento.
- Aprender como fazer o query parameters pois não funcionou.
- Lib Datapicker do bootstrap e o value do calendario para enviar no submit do form.
- Validação dos campos e de data.
- Criação de modal.
- Acrescentar loader ao salvar.
