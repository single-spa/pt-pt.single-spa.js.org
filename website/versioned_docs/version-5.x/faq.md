---
id: faq
title: Perguntas Frequentes
sidebar_label: Perguntas Frequentes
---

## O que é que o single-spa faz?
single-spa é um _top level router_. Quando uma route está ativa, este descarrega e executa o código dessa route.

O código para a route é chamado de aplicação e cada pode (opcionalmente) estar no seu próprio repositório Git, ter o seu próprio processo de CI e ser _deployed_ separadamente.
As aplicações podem ser todas implementadas na mesma _framework_ ou em _frameworks_ diferentes.

## Existe um _setup_ recomendado?
Sim, aqui está a [documentação para o nosso setup recomendado](/docs/recommended-setup/).

## Devo ter uma app _root_ e apps _children_?
Não. Nós encorajamos fortemente que a sua app _single-spa-config_ ou _root_ não use qualquer framework de Javascript (React, Angular, Angularjs, Vue, etc). Na nossa experiência um simples módulo de Javasript é melhor para o _single-spa-config_ e apenas as aplicações registadas efetivamente usam uma _framework_ (Angular, React, Vue, etc).

Porque? Acaba por criar uma estrutura com todas as desvantagens dos microsserviços sem qualquer uma das vantagens: as suas apps estão agora acopladas e precisa atuaçizar várias apps ao mesmo tempo para fazer updates. Bons microsserviços são totalmente **independentes** e este padrão quebra essa regra.

## Qual é o impacto na performace?
Quando o setup é feito da [forma recomendada](#is-there-a-recommended-setup), a performance do código e _bundle size_ são quase idênticos a uma aplicação única com _code-split_. As principais diferenças serão a adição da biblioteca do _single-spa_ (e SystemJS se decidir usar). Outras diferenças resumem-se principalmente à diferença entre um _bundle_ (webpack / rollup / etc.) e módulos ES no browser.

## Posso carregar apenas ter uma versão carregada (React, Vue, Angular, etc.)?
Sim e é altamente recomendado que o faça! Usando o [setup recomendado](#is-there-a-recommended-setup), configure o seu _[import-map](#what-are-import-maps)_ de forma a que a sua biblioteca seja definida apenas uma vez. Depois, indique a cada app para _não_ fazer _bundle_ dessa biblioteca; em vez disso, a biblioteca será fornecida em _runtime_ pelo _browser_. Veja como fazer em _[webpack’s externals](https://webpack.js.org/configuration/externals/)_ (outros _bundlers_ têm opções semelhantes).

Têm de adicionar a opção de _não_ excluir essas bibliotecas (por exemplo, se quiser experimentar uma versão mais recente ou uma biblioteca diferente), mas esteja ciente do efeito que isso terá sobre os tamanho do _bundle_ no _user_ e a velocidade da app.

## O que são import maps?
[Import maps](https://github.com/WICG/import-maps) melhoram a experiência do _developer_ com módulos ES no _browser_ permitindo-lhe escrever algo como `import React from "react"` em vez de precisar de usar um URL absoluto ou relativo para as importações. O mesmo também é verdade ao importar de outras aplicações registadas com o _single-spa_, ex. `import {MyButton} from "styleguide"`. A especificação do _import-map_ encontra-se neste momento em fase de aceitação enquanto _standard_ da _web_ e no momento da escriva foi [implementada no Chrome](https://developers.google.com/web/updates/2019/03/kv-storage#import_maps), e um _polyfill_ para _browsers_ <= IE11 foi implementada no [SystemJS >= 3.0](https://github.com/systemjs/systemjs). Ver também o [setup recomendado](#is-there-a-recommended-setup).

## Como posso partilhar o estado entre aplicações?
No geral, recomendamos evitar isto - as aplicações ficam demasiado dependentes. Se você faz isso com frequência entre apps, considere em juntar essas apps separadas numa só app.

Geralmente, é melhor fazer um pedido API para os dados que cada app precisa, mesmo que partes tenham sido pedidos por outras apps. Na prática, se desenhou corretamente os limites das aplicações, acabará por haver muitos poucos estados que sejam efetivamente partilhados — por exemplo, a sua lista de amigos tem requisitos diferentes do seu _feed_ social.

No entando, não quer dizer que não possa ser feito. Aqui estão alguas formas:
1. Crie uma biblioteca de pedidos de API partilhada e cacheie os pedidos e respostas. Se uma app requisitar a API e depois essa API é requisitada por outra app, pode apenas usar a cache
1. Exponha o estado partilhado como um _export_ e deixe as outras aplicações importá-lo. Observáveis (como [RxJS](https://rxjs-dev.firebaseapp.com/)) são úteis visto que podem fazer _stream_ de novos dados aos _subscribers_
1. Use [custom browser events](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events#Creating_custom_events) para comunicar
1. Use [cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies), [local/session storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), ou outros métodos semelhantes para guardar e ler estados. Estes métodos funcionam melhor quando as coisas não mudam frequentemente, ex. a info do utilizador logado.

**Por favor note que isto é apenas quando à partilha de estados entre apps. Partilhas funções, componentes, etc é tão fácil como um `export` num projeto e um `import` noutro. Ver a documentação do _[import map](#what-are-import-maps)_ para mais detalhes**

## Devo usar microsserviços no frontend?
Se você se deparou com algumas das dores de cabeça de um repo monolítico, deve realmente considerá-lo.

Para mais, se sua organização estiver configurada num modelo estilo Spotify (por exemplo, onde existem equipas autónomas que são donas de _features full-stack_), os microsserviços no frontend irão encaixar-se muito bem na sua configuração.

No entanto, se estier apenas a começar e tem um projeto ou equipa pequenos, recomendamos que fique com um monólito (i.e. não microsserviços no frontend) até que chegue ao ponto que _scaling_ (ex. scaling organizational, scaling de _features_, etc.) se torne difícil. Não se preocupe, estaremos cá para o ajudar a migrar quando for preciso.

## Posso usar mais que uma _framework_?
Sim. No entanto, é algo que deve sériamente ser considerdo porque divide sua organização de frontend em especialidades incompatíveis (por exemplo, um especialista em React pode ter problemas ao trabalhar em uma app em Angular) e também faz com que mais código seja enviado para o user.

No entanto, é ótimo para migrar de uma biblioteca mais antiga ou já não desejada, o que permite extrair lentamente o código na app antiga e substituí-lo por código novo na nova biblioteca (ver resultados no Google para _[the strangler pattern](https://www.google.com/search?q=the+strangler+pattern&oq=the+strangler+pattern)_).

Também é uma forma de permitir que organizações maiores experimentem diferentes bibliotecas sem se comprometerem fortemente com elas.

**Simplesmente esteja consciente do efeito nos seus users e a sua experiência ao usar a sua app.**

## Como é a experiência do desenvolvedor?
Se estiver a usar a [configuração recomendada] (#is-there-a-recommended-setup) para o single-spa, basta aceder ao _link_ de desenvolvimento, adicionar um _import-map_ a apontar para o URL da sua instância local e fazer refresh à página.

Existe uma [biblioteca](https://github.com/joeldenning/import-map-overrides) que você pode usar ou até mesmo fazer a sua própria - vai ver que o código fonte é bastante simples.

A ideia principal é que pode ter vários _[import-maps] (# what-are-import-maps)_ e que o último é o que é escolhido - você adiciona um _import-map_ que substitui o URL _default_ com o de uma app do seu _local host_.

Também queremos fornecer essa funcionalidade como uma [extensão para o Chrome/Firefox](https://github.com/single-spa/single-spa-inspector).

Por fim, esta configuração também permite fazer substituições _no ambiente de produção_. Obviamente deve ser usado com cautela, mas permite ter uma forma poderosa de fazer _debug_ de problemas e validar soluções.

Como ponto de referência, quase todos os desenvolvedores com quem trabalhamos **preferem a experiência de desenvolvedor de microsserviços + single-spa** em vez de um setup monolítico.

## Cada app single-spa pode ter o seu próprio repo Git?
Sim! E até pode dar-lhes o seu próprio package.json, configuração _webpack_, e processo de CI/CD, usando o _SystemJS_ para as reunir todas no _browser_.

## Ass apps single-spa podem ser _deployed_ independentemente?
Sim! Veja a próxima secção sobre CI/CD.

## Como é o processo de CI/CD?
Por outras palavras, como faço para criar e fazer deploy de uma app single-spa?

Com o [setup recomendado](#is-there-a-recommended-setup), o processo geralmetne segue um flow como este:
1. Faça _bundle_ do código e _upload_ para um CDN.
1. Faça update do seu _import-map_ no ambiente de dev para apontar para o novo URL. Isto é, o seu _import-map_ continha `"styleguide": "cdn.com/styleguide/v1.js"` e agora deverá conter `"styleguide": "cdn.com/styleguide/v2.js"`

Algumas opções de como fazer _update_ ao seu _import-map_ includem:
* Fazer _server rendering_ do seu `index.html` com o _import-map_ _inlined_. Isto não quer dizer que os elementos da DOM precisem de ser todos _server rendered_, apenas o elemento `<script type="systemjs-importmap>`. Forneça uma API que ou atualiza a tabela da base de dados ou um ficheiro local no servidor. 
* Ponha o próprio _import-map_ num CND e use o [import-map-deployer](https://github.com/single-spa/import-map-deployer) ou semelhante para atualizar o _import-map_ durante o processo de CI. (Também pode fazer [preload](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content) to ficheiro _import-map_ para uma pequena melhoria de velocidade). Ver o [exemplo travis.yml](https://github.com/openmrs/openmrs-esm-root-config/blob/master/.travis.yml). Outras ferramentas de CI também funcionam.

## Criar uma App de React
Presentemente, Create React App (CRA) requere [ejetar](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#npm-run-eject) ou [usar uma ferramenta](https://github.com/timarney/react-app-rewired/blob/master/README.md) para modificar a configuração do _webpack_. Também pode considerar algumas das [alternativas populares ao CRA](https://github.com/facebook/create-react-app#popular-alternatives).

Quando usa o [setup recomendado](#is-there-a-recommended-setup), as seguintes coisas precisam ser alteradas (a partir do CRA v3.0.1):

1. Remover blocos de optimização do _webpack_, porque adicionam vários chunks de _webpack_ que não se carregam entre elas
1. Remover o _plugin html-webpack_
1. Mudar [`output.libraryTarget`](https://webpack.js.org/configuration/output/#outputlibrarytarget) para `System`, `UMD`, ou `AMD`.

O CRA não lhe permite alterar esses itens sem ejetar ou usar outra ferramenta.

## _Code splits_
Single-spa suporta _code splits_. Existem tantas formas de fazer _code split_ que não somos capazes de cobrir todas as formas, mas se estiver a usar o [setup recomendado](#is-there-a-recommended-setup) com _webpack_ deverá fazer pelo menos duas coisas:

1. Defina o [`__webpack_public_path__`](https://webpack.js.org/guides/public-path/#on-the-fly) dinamicamente para que o _webpack_ saiba onde buscar os seus _code splits_ (o _webpack_ assume que estes se encontram na raiz do servidor e isso nem sempre é verdade numa app de single-spa). Ambas as soluções abaixo devem ser o primeiro _import_ da sua aplicação de forma a funcionar.
    * Para SystemJS >= 6, use [systemjs-webpack-interop](https://github.com/joeldenning/systemjs-webpack-interop):
    ```js
    import { setPublicPath } from 'systemjs-webpack-interop';

    setPublicPath('name-of-module-in-import-map');
    ```

    * Para SystemJS 2-5: veja um exemplo do código [aqui](https://gitlab.com/TheMcMurder/single-spa-portal-example/blob/master/people/src/set-public-path.js#L3)

1. Defina tanto o [`output.jsonpFunction`](https://webpack.js.org/configuration/output/#outputjsonpfunction) ou o [`output.library`](https://webpack.js.org/configuration/output/#outputlibrary) para garantir que o _webpack_ de cada app não colide com o _webpack_ de outras apps. É preferido o `jsonpFunction`.

Para obter mais informações sobre a configuração do webpack e o single-spa, veja o  [setup recomendado](/docs/recommended-setup#build-tools-webpack--rollup)


## O single-spa requere considerações de segurança adicionais?
Não. O single-spa não adiciona, desvia ou tenta ignorar nenhuma medida de segurança JavaScript no browser. As necessidades de segurança das suas apps são as mesmas de se não estivesse a usar o single-spa.

Fora isso, as webapps podem usar os seguintes recursos os quais tem as suas próprias considerações de segurança com as quais você pode ter de se familiarizar:


- [ES6 module dynamic imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
  - Apps baseadas em _webpack_ usam a [implementação de imports dinâmicos do webpack](https://webpack.js.org/guides/code-splitting/#dynamic-imports)
- [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP#Threats)
  - import de módulos relaciona-se especificamente com [CSP `script-src`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src)
- [Subresource Integrity (SRI)](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity#How_Subresource_Integrity_helps)
  - Ver também [import-maps script “integrity” attribute](https://github.com/WICG/import-maps/issues/174)
- _Import-maps_ também são governados pelo CSP
  - Ver também ["Supplying out-of-band metadata for each module"](https://github.com/WICG/import-maps/blb/master/README.md#supplying-out-of-band-metadata-for-each-module)
