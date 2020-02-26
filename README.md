# single-spa.js.org
[![CircleCI](https://circleci.com/gh/single-spa/single-spa.js.org.svg?style=svg)](https://circleci.com/gh/single-spa/single-spa.js.org)

Este repositório contem o código fonte e documentação para o https://pt-pt.single-spa.js.org.

## Começando

### Pré-requisitos

1. Git
2. Node: instalar a versão 8.4 ou acima
3. Yarn: Ver [Instruções de instalação no website do Yarn](https://yarnpkg.com/lang/en/docs/install/)
4. Um _fork_ do repositório (para contribuições)
5. Um clone do repositório [single-spa.js.org](https://github.com/single-spa/single-spa.js.org) na sua máquina

### Instalação

1. `cd single-spa.js.org` dentro da raíz do projeto
2. `yarn` para instalar as dependências _npm_ do site

### Correndo localmente

1. `cd website` seguido de `yarn start` para iniciar o servidor de _hot-reloading_ (fornecido via [Docusaurus](https://docusaurus.io/))
2. abrir `http://localhost:3000` no seu browser preferido para ver o site

## Contribuir

Quer ajudar a melhorar o site do `single-spa.js.org`? Veja os passos abaixo para saber como.

### Crie um branch

1. `git checkout master` a partir de qualquer pasta do seu repositório local do `single-spa.js.org`
2. `git pull origin master` para garantir que tem a versão do código mais atual
3. `git checkout -b nome-do-meu-branch` (mudando `nome-do-meu-branch` para um nome adequado) para criar o branch

### Fazer alterações

1. Guarde as algerações e verifique no browser
2. Alterações a ficheiros na pasta `website/pages/en` serão recarregados via _hot-reload_
3. Alterações a ficheiros de _markdown_ na pasta `docs` serão recarregados via _hot-reload_
4. Alterações aos ficheiros `siteConfig.js` e `sideBards.json` não serão recarregados via _hot-reload_

### Testar as alterações

1. Se possível, teste quaisquer modificações visuais em todas as últimas versões dos browsers mais comuns, tanto em desktop como mobile.

### Fazer push

1. `git add . && git commit -m "A minha mensagem"` (mudando `A minha mensagem` com uma mensagem de commit, tal como `Fixed header logo`) para fazer _stage_ e _commit_ das suas alterações
2. `git push nome-do-meu-fork nome-do-meu-branch`
3. Visite o repositório [single-spa.js.org](https://github.com/single-spa/single-spa.js.org) e deverá ver as pushed branches mais recentes
4. Siga as instruções do GitHub
5. Se possível, inclua screenshots de mudificações visuais

