---
id: api
title: API de Apps
sidebar_label: API de Apps
---

single-spa exporta _named functions_ e variáveis em vez de um simples _export default_.
Isso significa que a importação deve acontecer numa de duas formas:

```js
import { registerApplication, start } from 'single-spa';
// ou
import * as singleSpa from 'single-spa';
```

## registerApplication

```js
singleSpa.registerApplication('appName', () => System.import('appName'), location => location.pathname.startsWith('appName'))
```

`registerApplication` é a API mais importante que a sua _root config_ irá usar. Use esta função para registar qualquer aplicação dentro do single-spa.

Note que se uma aplicação é registada de dentro de outra aplicação, nenhuma hierarquia será mantida entre aplicações.

> Está descrita em detalhe dentro da documentação de [Configuração](configuration#registering-applications)

<h3>argumentos</h3>

<dl className="args-list">
	<dt>appName: string</dt>
	<dd>O nome da app que o single-spa irá usar para registar e referenciar a aplicação, e que é rotulada nos _dev tools_.</dd>
	<dt>applicationOrLoadingFn: () => &lt;Function | Promise&gt;</dt>
	<dd>Deve ser uma _loading function_ que tanto retorna a aplicação montada ou uma promise.</dd>
	<dt>activityFn: (location) => boolean</dt>
	<dd>Deve ser uma função pura. A função é chamada com <code>window.location</code> como o seu único argumento !-- TODO: e único? -->e deve retornar um valor _truthy_ sempre que a aplicação esteja ativa.</dd>
	<dt>customProps?: Object = &#123;&#125;</dt>
	<dd>Será passado à aplicação aquando cada método de _lifecycle_.</dd>
</dl>

<h3>retorna</h3>

`undefined`

## start
```js
singleSpa.start();
```

Deve ser chamada pela configuração do single-spa. Antes de `start` ser chamada, as aplicações serão carregadas, mas nunca serão <em>bootstrapped</em>, <em>mounted</em> ou <em>unmounted</em>. A razão do `start` existir é para lhe dar controle sob a <em>performance</em> da sua aplicação SPA. Por exemplo, é possível que queira declarar aplicações registadas imediatamente (para descarregar o codigo das que estiverem ativas), mas não fazer _mount_ até que uma chamada AJAX inicial (talvez para buscar informação sobre o utilizador logado) tenha sido completada. Nesse caso, a melhor performance é atingida chamando `registerApplication` imediatamente, mas chamando `start` quando a chamada AJAX finalizar.

<h3>argumentos</h3>

nenhum

<h3>retorna</h3>

`undefined`

## triggerAppChange

```js
singleSpa.triggerAppChange();
```

Returna uma _Promise_ que irá fazer _resolve/reject_ quando todas as apps tiverem feito _mount_ ou _unmount_. Isto foi desenvolvido para testar o single-spa e provavelmente não é necessário em produção.

<h3>argumentos</h3>

nenhum

<h3>retorna</h3>

<dl className="args-list">
	<dt>Promise</dt>
	<dd>Retorna a <em>Promise</em> que ferá resolve/reject quando todas as apps tiverem feito <em>mount</em> ou <em>unmount</em>.</dd>
</dl>

## navigateToUrl

```js
// Três formas de usar navigateToUrl
singleSpa.navigateToUrl("/new-url");
singleSpa.navigateToUrl(document.querySelector('a'));
document.querySelector('a').addEventListener(singleSpa.navigateToUrl);
```

```html
<!-- Uma quarta forma de usar navigateToUrl, esta dentro do seu HTML -->
<a href="/new-url" onclick="singleSpaNavigate()">O meu link</a>
```

Use esta função para navigar entre aplicações registadas facilmente sem ter de lidar com `event.preventDefault()`, `pushState`, `triggerAppChange()`, etc.

<h3>argumentos</h3>

<dl className="args-list">
	<dt>navigationObj: string | context | DOMEvent</dt>
	<dd>
		navigationObj deve ser um dos seguintes tipos:
		<ul>
			<li>uma <em>string</em> url.</li>
			<li>um contexto / thisArg que tenha uma propriedade <code>href</code> útil para chamar <code>singleSpaNavigate.call(anchorElement)</code> com uma referência ao elemento <em>anchor</em> ou outro contexto.</li>
			<li>um objeto de DOMEvent para um evento <em>click</em> num <em>DOMElement</em> que tenha um atributo <code>href</code> ideal para o caso de uso <code>&lt;a onclick="singleSpaNavigate">&lt;/a></code></li>
		</ul>
	</dd>
</dl>

<h3>retorna</h3>

`undefined`

## getMountedApps

```js
const mountedAppNames = singleSpa.getMountedApps();
console.log(mountedAppNames); // ['app1', 'app2', 'navbar']
```

<h3>argumentos</h3>

nenhum

<h3>retorna</h3>

<dl className="args-list">
	<dt>appNames: string[]</dt>
	<dd>Cada <em>string</em> é o nome da aplicação no estado <code>MOUNTED</code>.</dd>
</dl>

## getAppNames

```js
const appNames = singleSpa.getAppNames();
console.log(appNames); // ['app1', 'app2', 'app3', 'navbar']
```

<h3>argumentos</h3>

nenhum

<h3>retorna</h3>

<dl className="args-list">
	<dt>appNames: string[]</dt>
	<dd>Cada <em>string</em> é o nome da aplicação independentemente do seu estado.</dd>
</dl>

## getAppStatus

```js
const status = singleSpa.getAppStatus('app1');
console.log(status); // um de vários estados (ver lista abaixo). ex. MOUNTED
```

<h3>argumentos</h3>

<dl className="args-list">
	<dt>appName: string</dt>
	<dd>Nome da aplicação registada.</dd>
</dl>

<h3>retorna</h3>

<dl className="args-list">
	<dt>appStatus: &lt;string | null&gt;</dt>
	<dd>
		Será uma das seguintes constantes <em>string</em>, ou <code>null</code> se a app não existir.
		<dl className="dl-inline">
			<div>
				<dt>NOT_LOADED</dt>
				<dd>app foi registada com o single-spa mas ainda não carregou.</dd>
			</div>
			<div>
				<dt>LOADING_SOURCE_CODE</dt>
				<dd>o código da app está a ser buscado.</dd>
			</div>
			<div>
				<dt>NOT_BOOTSTRAPPED</dt>
				<dd>app foi carregada mas ainda não foi <em>bootstrapped</em>.</dd>
			</div>
			<div>
				<dt>BOOTSTRAPPING</dt>
				<dd>a função do ciclo <code>bootstrap</code> foi chamada mas ainda não acabou.</dd>
			</div>
			<div>
				<dt>NOT_MOUNTED</dt>
				<dd>a app foi carregada e <em>bootstrapped</em> mas ainda não foi montada.</dd>
			</div>
			<div>
				<dt>MOUNTING</dt>
				<dd>a app está a ser montada mas ainda não terminou.</dd>
			</div>
			<div>
				<dt>MOUNTED</dt>
				<dd>a app encontra-se ativa e montada na DOM.</dd>
			</div>
			<div>
				<dt>UNMOUNTING</dt>
				<dd>a app esta a ser desmontada mas ainda não terminou.</dd>
			</div>
			<div>
				<dt>UNLOADING</dt>
				<dd>a app está a ser descarregada mas ainda não terminou.</dd>
			</div>
			<div>
				<dt>SKIP_BECAUSE_BROKEN</dt>
				<dd>a app emitiou um erro aquando o carregamento, <em>bootstrap</em>, <em>mount</em>, ou <em>unmount</em> e foi isolada porque não se comporta corretamente e foi ignorada. Outras apps As outras apps continuarão normalmente.</dd>
			</div>
			<div>
				<dt>LOAD_ERROR</dt>
				<dd>
					A <em>loading function</em> da app retornou uma promessa que foi rejeitada. Isso geralmente ocorre devido a um erro de rede ao tentar carregar o <em>bundle</em> de Javascript da app. O single-spa tentará novamente o carregamento da app depois do utilizador sair e voltar para o URL atual.
				</dd>
			</div>
		</dl>
	</dd>
</dl>

**Notas sobre o estado LOAD_ERROR**

Note que se estiver a usar o SystemJS para carregar os _bundles_, precisa adicionar o seguinte código para que o SystemJS tente novamente o pedido de rede quando a _loading function_ chama `System.import()` numa app no estado `LOAD_ERROR`.
```js
singleSpa.addErrorHandler(err => {
	if (singleSpa.getAppStatus(err.appOrParcelName) === singleSpa.LOAD_ERROR) {
		System.delete(System.resolve(err.appOrParcelName));
	}
})
```

## unloadApplication

```js
// Descarregue a app agora mesmo, sem esperar que ela faça unmount naturalmente.
singleSpa.unloadApplication('app1');

// Descarregue a app apenas quando esta fizer unmount naturalmente devido a uma mudança de route
singleSpa.unloadApplication('app1', {waitForUnmount: true});
```
O propósito de fazer <em>unload</em> a uma app registada é para colocá-la de volta a um estado NOT_LOADED, o que significa que será novamente <em>bootstrapped</em> da próxima vez que precisar fazer <em>mount</em>. O principal caso de uso para tal é o de permitir o <em>hot-reloading</em> de apps inteiras, mas `unloadApplication` pode ser útil sempre que queira fazer <em>bootstrap</em> de novo da sua app.

O single-spa executa as seguintes etapas quando `unloadApplication` é chamado.

1. Chamar o ciclo [_unload_](api.md#unload) na app registada que está a ser descarregada.
2. Define o estado da app como NOT_LOADED
3. Dispara um <em>reroute</em>, durante o qual o single-spa potencialmente monta a app que acabou de ser descarregada.

Como uma app registada pode ser montada quando `unloadApplication` é chamado, você pode especificar se deseja descarregar imediatamente ou se prefere esperar até que a app não seja mais montada. Isso é feito com a opção `waitForUnmount`.

<h3>argumentos</h3>

<dl className="args-list">
	<dt>appName: string</dt>
	<dd>Registered nome da app.</dd>
	<dt>options?: &#123;waitForUnmount: boolean = false}</dt>
	<dd>As opções devem ser um objeto que tem uma propriedade <code>waitForUnmount</code> Quando <em>waitForUnmount</em> for <em>false</em>, o single-spa descarrega imediatamente a app registada especificada mesmo que esta esteja presentemente montada. Se for <em>true</em>, single-spa irá descarregar a app registada assim que for seguro fazê-lo (quando o estado da app não for <em>MOUNTED</em>.</dd>
</dl>

<h3>retorna</h3>

<dl className="args-list">
	<dt>Promise</dt>
	<dt>Promise</dt>
	<dd>Esta <em>Promise</em> irá retornar <em>resolved</em> quando a app registada tiver sido removida com sucesso.</dd>
</dl>

## checkActivityFunctions

```js
const appsThatShouldBeActive = singleSpa.checkActivityFunctions();
console.log(appsThatShouldBeActive); // ['app1']

const appsForACertainRoute = singleSpa.checkActivityFunctions({pathname: '/app2'});
console.log(appsForACertainRoute); // ['app2']
```

Irá chamara a _activity function_ de todas as apps com o `mockWindowLocation` e retornar a lista de todas as apps que deveríam estar montadas nessa _location_.

<h3>argumentos</h3>

<dl className="args-list">
	<dt>mockWindowLocation: string</dt>
	<dd>Uma <em>string</em>  que representa a <em>window.location</em> que será usada ao invocar a <em>activity function</em> de cada app para testar se esta retorna <em>true</em>.</dd>
</dl>

<h3>retorna</h3>

<dl className="args-list">
	<dt>appNames: string[]</dt>
	<dd>Cada <em>string</em> é o nome de uma app registada que corresponde ao <em>mockWindowLocation</em> fornecido.</dd>
</dl>

## addErrorHandler

```js
singleSpa.addErrorHandler(err => {
	console.log(err);
	console.log(err.appOrParcelName);
	console.log(singleSpa.getAppStatus(err.appOrParcelName));
});
```

Acrescenta um <em>handler</em> que será chamado cada vez que uma app retorne um erro numa funçao de _lifecycle_ ou _activity function_. Quando não existirem <em>handlers</em> para errors, single-spa irá retornar um erro para a <em>window</em>.

<dl className="args-list">
	<dt>errorHandler: Function(error: Error)</dt>
	<dd>Deve ser uma função. Será chamada com um <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error"><em>Error object</em></a> que contém uma propriedade <code>message</code> e <code>appOrParcelName</code></dd>
</dl>

<h3>retorna</h3>

`undefined`

## removeErrorHandler

```js
singleSpa.addErrorHandler(handleErr)
singleSpa.removeErrorHandler(handleErr)

function handleErr(err) {
	console.log(err)
}
```

Remove a função para o <em>handler</em> de erro definido.

<h3>argumentos</h3>

<dl className="args-list">
	<dt>errorHandler: Function</dt>
	<dd>Referência à função do <em>handler</em>.</dd>
</dl>

<h3>retorna</h3>

<dl className="args-list">
	<dt>boolean</dt>
	<dd><code>true</code> se o <em>handler</em> de erro foi removido, e <code>false</code> se não foi.</dd>
</dl>

## mountRootParcel

```js
// Mount síncrono
const parcel = singleSpa.mountRootParcel(parcelConfig, {prop1: 'value1', domElement: document.getElementById('a-div')});
parcel.mountPromise.then(() => {
	console.log('finished mounting the parcel!')
})

// Mount asíncrono. Esteja à vontade para usar code-split do webpack ou o dynamic loading do SystemJS
const parcel2 = singleSpa.mountRootParcel(() => import('./some-parcel.js'), {prop1: 'value1', domElement: document.getElementById('a-div')});
```

Irá cirar e montar um [single-spa parcel](parcels-overview.md).

> Note: parcels não fazem unmount automáticamente. O unmount deverá ser acionado manualmente.

<h3>argumentos</h3>

<dl className="args-list">
	<dt>parcelConfig: Objeto ou <em>Loading Function</em></dt>
	<dd>[parcelConfig](parcels-api.md#parcel-configuration)</dd>
	<dt>parcelProps: Objeto com uma propriedade <em>domElement</em></dt>
	<dd>[parcelProps](parcels-api.md#parcel-props)</dd>
</dl>

<h3>retorna</h3>

<dl className="args-list">
	<dt>Um objeto <em>Parcel</em></dt>
	<dd>Ver <a href="/docs/parcels-api.html">Parcels API</a> para mais detalhes.</dd>
</dl>

## ensureJQuerySupport

```js
singleSpa.ensureJQuerySupport(jQuery);
```

jQuery usa [delegação de eventos](https://learn.jquery.com/events/event-delegation/)
então o single-spa deve fazer um <em>monkey-patch</em> a cada versão do jQuery na página.<!-- TODO: de forma a dar suprte corretamente... (suponho navegação/routing ) -->single-spa irá tentar fazer isto automáticamente observando `window.jQuery` ou `window.$`. Use este método explícito se várias versões estão incluídas na sua página ou se o <em>jQuery</em> estiver associado a uma variável global diferente.

<h3>argumentos</h3>

<dl className="args-list">
	<dt>jQuery?: JQueryFn = window.jQuery</dt>
	<dd>Uma referência à variável global à qual o jQuery está associado.</dd>
</dl>

<h3>retorna</h3>

`undefined`

## setBootstrapMaxTime

```js
// Depois de três segundos, mostrar uma alerta na consola enquando continua à espera
singleSpa.setBootstrapMaxTime(3000);

// Depois de três segundos, alterar o estado da app para SKIP_BECAUSE_BROKEN
singleSpa.setBootstrapMaxTime(3000, true);

// Não dar alerta na consola para lifecycles lentos até pelo menos 10 segundos terem passado
singleSpa.setBootstrapMaxTime(3000, true, 10000);

```

Define a configuração global para <em>timeouts</em> de <em>bootstrap</em>

<h3>argumentos</h3>

<dl className="args-list">
	<dt>millis: número</dt>
	<dd>Número de milisegundos a esperar para o <em>bootstrap</em> acabare antes de fazer <em>timeout</em>.</dd>
	<dt>dieOnTimeout: boolean = false</dt>
	<dd>
		<p>Se <em>false</em>, apps registadas que estão a causar atrasos irão apenas emitir alertas para a consola até chegar a <code>millis</code></p>
		<p>Se <em>true</em>, apps registadas que estão a causar atrasos serão isoladas num estado SKIP_BECAUSE_BROKEN onde não terão mais oportunidade de quebrar o que seja.</p>
		<p>Cada app registada pode fazer <em>override</em> deste comportamente de forma individual.</p>
	</dd>
	<dt>warningMillis: número = 1000</dt>
	<dd>Número de milisegundos a esperar entre alertas na consola até que o <em>timeout</em> ocorra.</dd>
</dl>

<h3>retorna</h3>

`undefined`

## setMountMaxTime

```js
// Depois de três segundos, mostrar uma alerta na consola enquando continua à espera
singleSpa.setMountMaxTime(3000);

// Depois de três segundos, alterar o estado da app para SKIP_BECAUSE_BROKEN
singleSpa.setMountMaxTime(3000, true);

// Não dar alerta na consola para lifecycles lentos até pelo menos 10 segundos terem passado
singleSpa.setMountMaxTime(3000, true, 10000);
```

Define a configuração global para <em>timeouts</em> de <em>mount</em>

<h3>argumentos</h3>

<dl className="args-list">
	<dt>millis: número</dt>
	<dd>Número de milisegundos a esperar para o <em>mount</em> acabare antes de fazer <em>timeout</em>.</dd>
	<dt>dieOnTimeout: boolean = false</dt>
	<dd>
		<p>Se <em>false</em>, apps registadas que estão a causar atrasos irão apenas emitir alertas para a consola até chegar a <code>millis</code></p>
		<p>Se <em>true</em>, apps registadas que estão a causar atrasos serão isoladas num estado SKIP_BECAUSE_BROKEN onde não terão mais oportunidade de quebrar o que seja.</p>
		<p>Cada app registada pode fazer <em>override</em> deste comportamente de forma individual.</p>
	</dd>
	<dt>warningMillis: número = 1000</dt>
	<dd>Número de milisegundos a esperar entre alertas na consola até que o <em>timeout</em> ocorra.</dd>
</dl>

<h3>retorna</h3>

`undefined`

## setUnmountMaxTime

```js
// Depois de três segundos, mostrar uma alerta na consola enquando continua à espera
singleSpa.setUnmountMaxTime(3000);

// Depois de três segundos, alterar o estado da app para SKIP_BECAUSE_BROKEN
singleSpa.setUnmountMaxTime(3000, true);

// Não dar alerta na consola para lifecycles lentos até pelo menos 10 segundos terem passado
singleSpa.setUnmountMaxTime(3000, true, 10000);
```

Define a configuração global para <em>timeouts</em> de <em>unmount</em>

<h3>argumentos</h3>

<dl className="args-list">
	<dt>millis: número</dt>
	<dd>Número de milisegundos a esperar para o <em>unmount</em> acabare antes de fazer <em>timeout</em>.</dd>
	<dt>dieOnTimeout: boolean = false</dt>
	<dd>
		<p>Se <em>false</em>, apps registadas que estão a causar atrasos irão apenas emitir alertas para a consola até chegar a <code>millis</code></p>
		<p>Se <em>true</em>, apps registadas que estão a causar atrasos serão isoladas num estado SKIP_BECAUSE_BROKEN onde não terão mais oportunidade de quebrar o que seja.</p>
		<p>Cada app registada pode fazer <em>override</em> deste comportamente de forma individual.</p>
	</dd>
	<dt>warningMillis: número = 1000</dt>
	<dd>Número de milisegundos a esperar entre alertas na consola até que o <em>timeout</em> ocorra.</dd>
</dl>

<h3>retorna</h3>

`undefined`

---

## setUnloadMaxTime

```js
// Depois de três segundos, mostrar uma alerta na consola enquando continua à espera
singleSpa.setUnloadMaxTime(3000);

// Depois de três segundos, alterar o estado da app para SKIP_BECAUSE_BROKEN
singleSpa.setUnloadMaxTime(3000, true);

// Não dar alerta na consola para lifecycles lentos até pelo menos 10 segundos terem passado
singleSpa.setUnloadMaxTime(3000, true, 10000);
```

Define a configuração global para <em>timeouts</em> de <em>unload</em>

<h3>argumentos</h3>

<dl className="args-list">
	<dt>millis: número</dt>
	<dd>Número de milisegundos a esperar para o <em>unload</em> acabare antes de fazer <em>timeout</em>.</dd>
	<dt>dieOnTimeout: boolean = false</dt>
	<dd>
		<p>Se <em>false</em>, apps registadas que estão a causar atrasos irão apenas emitir alertas para a consola até chegar a <code>millis</code></p>
		<p>Se <em>true</em>, apps registadas que estão a causar atrasos serão isoladas num estado SKIP_BECAUSE_BROKEN onde não terão mais oportunidade de quebrar o que seja.</p>
		<p>Cada app registada pode fazer <em>override</em> deste comportamente de forma individual.</p>
	</dd>
	<dt>warningMillis: número = 1000</dt>
	<dd>Número de milisegundos a esperar entre alertas na consola até que o <em>timeout</em> ocorra.</dd>
</dl>

<h3>retorna</h3>

`undefined`

# Events

Todos os seguintes são [_custom events_](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent) disparados pelo single-spa na _window_. A propriedade do evento `detail` contem o evento DOM nativo que disparou o _reroute_, tal como um [PopStateEvent](https://developer.mozilla.org/en-US/docs/Web/API/PopStateEvent) ou [HashChangeEvent](https://developer.mozilla.org/en-US/docs/Web/API/HashChangeEvent). Estes eventos podem ser geridos usando [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener), tal como:

<!-- TODO: are these events augmented like the addErrorHandler Error is? -->

```js
window.addEventListener('single-spa:before-routing-event', evt => {
  const originalEvent = evt.detail;
  console.log('single-spa event', originalEvent);
})
```

## before routing event

```js
window.addEventListener('single-spa:before-routing-event', () => {
	console.log('single-spa is about to mount/unmount applications!');
});
```

Um evento `single-spa:before-routing-event` é disparado antes de cada evento de _routing_ ocorrer, que é antes de cada _hashchange_, _popstate_, ou _triggerAppChange_, mesmo que nenhuma alteração a apps registadas seja necessária.

## routing event

```js
window.addEventListener('single-spa:routing-event', () => {
	console.log('single-spa finished mounting/unmounting applications!');
});
```

Um evento `single-spa:routing-event` é disparado cada vez que um evento de _routing_ ocorra, que é depois de cada _hashchange_, _popstate_, ou _triggerAppChange_, mesmo que nenhuma alteração a apps registadas tenha sido necessára; e depois de o single-spa verificar que as apps passaram com sucesso por _loaded_, _bootstrapped_, _mounted_ e _unmounted_.

## app-change event

```js
window.addEventListener('single-spa:app-change', () => {
	console.log('A routing event occurred where at least one application was mounted/unmounted');
});
```

Um evento `single-spa:app-change` é disparado cada vez que uma ou mais apps forem _loaded_, _bootstrapped_, _mounted_, _unmounted_, ou _unloaded_. É semelhante ao `single-spa:routing-event` exceto que não será disparado a não ser que uma ou mais apps tenham efetivamente passado por _loaded_, _bootstrapped_, _mounted_ ou _unmounted_. Um _hashchange_, _popstate_, ou _triggerAppChange_ que não resulte numa destas alterações não irá fazer com que o evento seja disparado.

## no-app-change event

```js
window.addEventListener('single-spa:no-app-change', () => {
	console.log('A routing event occurred where zero applications were mounted/unmounted');
});
```

Quuando nenhuma aplicação tenha feito _loaded_, _bootstrapped_, _mounted_, _unmounted_ ou _unloaded_, o single-spa dispara o evento `single-spa:no-app-change`. Isto é o inverso do evento `single-spa:app-change`. Apenas um será disparado para cada evento de _routing_.

## before-first-mount

```js
window.addEventListener('single-spa:before-first-mount', () => {
	console.log('single-spa is about to mount the very first application for the first time');
});
```

Antes que a primeira de qualquer app seja montada, o single-spa dispara o evento `single-spa:before-first-mount`; portanto será apenas disparado uma vez. Mais especificamente, é acionado após a app já estar _loaded_ mas antes de a montar.

> **Caso de uso sugerido:** remover um indicador de loading que o user vê antes da primeira app ser montada.

## first-mount

```js
window.addEventListener('single-spa:first-mount', () => {
	console.log('single-spa just mounted the very first application');
});
```

Depois da primeira de qualquer uma das apps ser montada, o single spa dispara o evento `single-spa:first-mount`; portanto será apenas disparado uma vez.

> **Caso de uso sugerido:** registar o tempo que demorou até o utilizador ver qualquer uma das outras apps montada.
