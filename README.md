<h1 align="center">
	<img width="200" src="https://cdn.rawgit.com/sergioruizdavila/startups-themes/f14c6e27/www/assets/images/Steroidesign.png" alt="Steroidesign">
</h1>

<h3 align="center">
	<b>Has que tus proyectos se vean tan bien 💎 como los grandes 💪🏻</b>
</h3>

<br>

<h1 align="center">
	<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FR7CTJ3ZHK4FQ">Donate for another ☕
	</a>
</h1>	

<br>

<br>

<h4 align="center">
	Hecho con ❤ y ☕ por 
		<a href="https://www.twitter.com/rosa7082" target="_blank">@rosa7082</a> 
		y 
		<a href="https://www.twitter.com/seruda" target="_blank">@seruda</a> 
		en 
		<a href="https://www.google.com/maps/place/Portland,OR" target="_blank">Portland, OR</a>
		.
</h4>

<br>

## Problem

Siempre que empezamos un proyecto, buscamos en miles de sitios para buscar inspiración, entre esa busqueda nos sumergimos en los sitios de las grandes Startups como: Airbnb, Medium, Asana, etc. Primero por que son sitios hermosos, y segundo, ya que han invertido mucho tiempo en analizar las mejores practicas de diseño, validacion de ideas, llamados a la acción, enganche, etc. y con el tiempo han ido creando estandares y tendencias, es bueno seguir su mismo camino.

<br>

## Solución

Asi que hemos decidido recopilar un esqueleto de estilos y componentes html, basados en estas grandes compañias, temas que son 100% editables, y adaptables a tu propia paleta de colores o estilos, agregandole tu propia magia! para que tu producto siga siendo autentico y unico.

**Con esto no buscamos copiar a las grandes compañias, sino obtener inspiración y usar esta de base para tus propios proyectos.**

Los temas incluyen los elementos basicos y más usados en un sitio web: botones, labels, links, typograph, form elements, box componentes, searchbar, navbars, etc, etc, etc.

Contributions are more than welcome.

<br>

## Contents

- [Base Methodology](#methodology)
- [Instalación y uso](#install)
- [Themes](#themes)
	- [Airbnb](#airbnb)
	- [Medium](#medium) (In Progress)
	- [Product Hunt](#product-hunt) (Coming soon)
	- [Asana](#asana-hunt) (Coming soon)
	- [Sugierenos el proximo](#next-theme)
- [License](#license)

<br>

## Base methodology

Los temas los escribimos bajo la **metodologia BEM**, para estructurar mucho mejor los elemento de un html, basados en bloque, elemento y modificadores. Dejamos una pequeña explicación aqui, y si desean profundizar más, dejamos la referencia a la pagina oficial: [https://en.bem.info/](https://en.bem.info/)

On smaller brochure sites, how you organize your styles isn’t usually a big concern. You get in there, write some CSS, or maybe even some SASS. You compile it all into a single stylesheet with SASS’s production settings, and then you aggregate it to get all the stylesheets from modules into a nice tidy package.

However, when it comes to larger, more complex projects, how you organize your code is the key to efficiency in at least these three ways: it affects how long it takes you to write code, how much of that code you’ll have to write and how much loading your browser will have to do. This becomes especially important when you’re working with teams of themers, and when high performance is essential.

**BEM** stands for **Block Element Modifier**. The main idea behind it is to speed up the development process, and ease the teamwork of developers by arranging CSS classes into independent modules. If you ever saw a class name like ```.header__form--search```, that is BEM in action. Yes, classes can be named very long, but they are all readable and understandable.

Note that the best practice is to use BEM only with classes, and not IDs because classes allow you to repeat names if necessary and create more consistent coding structure. Also, if you want to break your website into organized modules, it should consist of the same structure: block, element, and modifier. Where each block can have multiple elements, and both block and elements can have multiple modifiers. However, let’s first start with the basic BEM structure and explain it with examples.

### Block

A block represents an object in your website. Think of it as bigger structural chunks of your code. Most common blocks on every website today are header, content, sidebar, footer, and search. Blocks in BEM are always a starting point of chaining your CSS classes on to. Take a look at a few block examples:

a content
a menu
a search form

```css
.content {/* Styles */}
.menu {/* Styles */}
.search {/* Styles */}
```

### Element

An element is a component within the block that performs a particular function. It should only make sense in the context of its block:

a content article
a menu item
a search input field

```css
.content__article {/* Styles */}
.menu__item {/* Styles */}
.search__input {/* Styles */}
```

### Modifier

A modifier is how we represent the variations of a block. If you’ve ever used Bootstrap, then the best example would be the button sizes. Button sizes are just size variations of the button itself, which makes it the modifier:

a content featured article
a menu link
a search field with or without icon

```css
.content__article--featured {/* Styles */}
.menu__item--link {/* Styles */}
.search__input--icon {/* Styles */}
```

### Naming Conventions

The primary purpose of BEM methodology is to make names of CSS selectors as informative and transparent as possible. Original BEM style is defined in this way:

Block name is usually a single word like ```.header```, but if you have longer block definition then it is divided with a single hyphen ```-```:

```css
.btn-container {/* Styles */}
```
Element name starts with double underscore ```__```:

```css
.btn-container__btn {/* Styles */}
```
Modifier name starts with double hyphen ```--```:

```css
.btn-container__btn--small {/* Styles */}
```
<br>

### more references:

- [http://getbem.com/introduction/](http://getbem.com/introduction/)
- [https://www.toptal.com/css/introduction-to-bem-methodology](https://www.toptal.com/css/introduction-to-bem-methodology)

<br>

---

<br>


## Instalación y uso

<h1 align="center">
	<img src="https://raw.githubusercontent.com/sergioruizdavila/startups-themes/develop/www/assets/images/compare%20themes.png" alt="compare">
</h1>

<br>

**1:** Install NodeJS v6 or latest (No estoy seguro si haya algun problema con versiones anteriores, pero este es el que usamos).

**2:** On terminal (inside root directory) run the following commands:

1. It'll install gulp, bower and express components
```shell
npm install
```

2. It'll install basic components such as boostrap, jquery, animate.css
```shell
bower install
```
3. It'll launch a local server in order to see styles guideline
```shell
gulp start
```

**3:** Open your favorite browser, and browse to:

**http://localhost:8080/**

There you can see whole styles guideline.

**Enjoy it!**

<br>

## Themes


## License

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

**Nota importante:** Los temas no son una copia, escribimos los estilos y estructura desde cero, basados en nuestra propia estructura de archivos y nuestra propia forma de organizar los estilos (usando como base la metodologia [BEM](http://getbem.com/introduction/)), lo que queremos con esto es poder crear un 'esqueleto' que sirva para ser usado, editado, modificado y reemplazado en cualquier proyecto.
