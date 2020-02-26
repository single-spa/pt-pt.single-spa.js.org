---
id: getting-started-overview
title: Começando com o single-spa
sidebar_label: Começando com o single-spa
---

## Microfrontends de JavaScript

[Juntar-se ao chat no Slack](https://join.slack.com/t/single-spa/shared_invite/enQtODAwNTIyMzc4OTE1LWUxMTUwY2M1MTY0ZGMzOTUzMGNkMzI1NzRiYzYwOWM1MTEzZDM1NDAyNWM3ZmViOTAzZThkMDcwMWZmNTFmMWQ)

single-spa é uma _framework_ que junta vários microfrontends em Javascript numa única aplicação de frontend. Usar o single-spa na arquitetura do seu frontend fornece vários benefícios, tal como:

- [Use várias frameworks](ecosystem.md#help-for-frameworks) nam esma página [sem refresh de páginas](building-applications.md)
  ([React](ecosystem-react.md), [AngularJS](ecosystem-angularjs.md), [Angular](ecosystem-angular.md), [Ember](ecosystem-ember.md), ou outro que esteja usando)
- Deploy independente de microfrontends
- Escreva código usando uma nova framework, sem reescrever toda a sua app existente
- Lazy load code para melhor load time inicial.

## Demos e exemplos

Ver a nossa [página de exemplos](/docs/examples).

## Arquitetura

single-spa inspira-se de _lifecycle components frameworks_ modernas aplicando _lifecycles_ a aplicações inteiras.
Nasceu do desejo da Canopy em usar React + react-router em vez de ficar preso eternamente com uma aplicação AngularJS + ui-router. Agora o single-spa suporta práticamente qualquer framework. Sendo que o JavaScript é conhecido pelo tempo de vida curto das suas múltiplas frameworks, decidimos fazer com que seja fácil mudar entre as frameworks que quiser.

As aplicações de single-spa consistem no seguinte:

1. [Aplicações](building-applications.md), em que cada uma é uma SPA inteira (mais ou menos). Cada aplicação pode reagir a eventos de URL routing e deve saber como fazer bootstrap, mount e unmount de si mesmo perante a DOM. A principal diferença entre uma SPA tradicional e aplicações de single-spa é que estas devem poder coexistir com outras aplicações e não necessitam de ter cada uma a sua pópria página de HTML.
	
	Por exemplo, a suas SPAs de React ou Angular são aplicações. Quando ativas, estas ficam à escuta de eventos de URL routing e inserem conteúdo na DOM. Quando inativas, estas não reagem a eventos e são totalmente removidas da DOM.

2. O [single-spa-config](configuration), que contém a página de HTML _e_ o JavaScript que regista as aplicações perante o single-spa. Cada aplicação é registada com três coisas:
    - Um nome
    - Uma função que carrega o código da aplicação
    - Uma funcção que determina quando é que a aplicações está ativa/inativa


## O setup recomendado

A equipa code do single-spa criou em conjunto documentação, ferramentas e vídeos mostrando as melhores práticas incentivadas pelo single-spa. Veja [esta documentação](./recommended-setup.md) para mais informações.

## Quão difícil será usar o single-spa?

single-spa funciona com ES5, ES6+, TypeScript, Webpack, SystemJS, Gulp, Grunt, Bower, ember-cli, ou realmente qualquer _build system_ disponível. Pode fazer _npm install_ ou mesmo apenas usar uma tag `<script>` se preferir.

O nosso objetivo é fazer com que o uso do single-spa seja o mais fácil possível. Mas também devemos salientar que esta é uma arquitetura avançada que é diferente de como as aplicações de frontend geralmente são desenvolvidas.

Se não está a começar a sua aplicação do zero, deverá [migrar a sua SPA](migrating-existing-spas.md) para se tornar numa aplicação single-spa.

* [React - Migrando para single-spa](migrating-react-tutorial.md)
* [AngularJS - Migrando para single-spa](migrating-angularJS-tutorial.md)

single-spa funciona em Chrome, Firefox, Safari, IE11, e Edge.

## single-spa não é um nome redundante?

Sim.

## Documentação

A documentação está dividida em várias seções:

* [Começando](getting-started-overview.md)
* [Aplicaçõs de single-spa](building-applications.md)
* [Parcels de single-spa](parcels-overview.md)
* [Exemplos](examples.md)
* [Ecossistema](ecosystem.md)
* [Guia de contribuição](contributing-overview.md)
* [Blog](https://single-spa.js.org/blog/)
* [Onde obter suporte](https://single-spa.js.org/en/help.html)

Você pode ajudar a melhorar o site do single-spa enviando _pull requests_ para o repositório [`single-spa.js.org`](https://github.com/single-spa/single-spa.js.org).

## Uso simples

Para ver um exemplo completo, consulte [este exemplo simples do webpack](https://github.com/joeldenning/simple-single-spa-webpack-example) ou [este tutorial a partir do zero](startup-from-scratch.md ).

Para criar uma aplicação single-spa, deverá fazer três coisas:

1. Criar um ficheiro HTML:

```html
<html>
<body>
	<script src="single-spa-config.js"></script>
</body>
</html>
```

2. Criar um single-spa-config. Veja a [documentação](configuration) para mais detalhes.

```js
import * as singleSpa from 'single-spa';

const appName = 'app1';

/* A loading function é uma função que retorna uma Promise e faz resolve com o módulo de javascript da aplicação.
 * O seu propósito é o de facilitar o lazy loading -- single-spa não irá carregar o código até que este seja necessário.
 * Neste exemplo, import() é suportado no webpack e retorna uma Promise, mas o single-spa funciona com qualquer loading function que retorne uma Promise
 */
const loadingFunction = () => import('./app1/app1.js');

 /* single-spa faz algum top-level routing para determinar que aplicação (ou aplicações) está ativa para qualquer URL. Pode implementar este routing da forma que preferir.
 * Uma convenção útil poderá ser a de criar um prefixo no URL com o nome da aplicação ativa, de forma a manter o top-level routing simples.
 */
const activityFunction = location => location.pathname.startsWith('/app1');

singleSpa.registerApplication(appName, loadingFunction, activityFunction);
singleSpa.start();
```

3. Crie uma aplicação. Veja a [documentação](building-applications.md) para mais detalhes.

```js
//app1.js

let domEl;

export function bootstrap(props) {
	return Promise
		.resolve()
		.then(() => {
			domEl = document.createElement('div');
			domEl.id = 'app1';
			document.body.appendChild(domEl);
		});
}

export function mount(props) {
	return Promise
		.resolve()
		.then(() => {
			// Isto é geralmente onde a framework seria mounted com alguma interface na DOM. Ver https://single-spa.js.org/docs/ecosystem.html.
			domEl.textContent = 'App 1 is mounted!'
		});
}

export function unmount(props) {
	return Promise
		.resolve()
		.then(() => {
			// Isto é geralmente onde diría à framework para fazer unmount da interface da DOM. Ver https://single-spa.js.org/docs/ecosystem.html.
			domEl.textContent = '';
		})
}
```

## API

Leia mais em [single-spa API](api.md) e [API de aplicações](building-applications.md#application-lifecycle).

## Contribuindo

O principal objetivo deste repositório é o de continuar a evolução do single-spa, tornando-o melhor e mais fácil de usar. O desenvolvimento do single-spa e do seu [ecossistema](ecosystem.md) é feito no seio do GitHub, e somos gratos à comunidade por contribuir com correções e melhorias. Leia abaixo para saber como você pode participar da melhoria do single-spa.

### [Código de conduta](CODE_OF_CONDUCT.md)

single-spa adotou um Código de Conduta que esperamos que os participantes do projeto cumpram. Leia [o texto completo](CODE_OF_CONDUCT.md) para que possa entender quais as ações que serão ou não toleradas.

### [Guia de contribuição](contributing-overview.md)

Leia o nosso [guia de contribuição](./contributing-overview.md) para aprender sobre nosso processo de desenvolvimento, como propor correções e melhorias e como desenvolver e testar suas alterações no single-spa.

## Quem usa isto?

Ver o [user showcase](/users).

A sua empresa ou projeto usam o single-spa? Informe-nos submetendo um PR para [esta secção](https://github.com/single-spa/single-spa.js.org/blob/master/website/src/data/users.js)!
