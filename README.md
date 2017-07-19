<h3 align="center">
	<img width="200" src="https://cdn.rawgit.com/sergioruizdavila/startups-themes/f14c6e27/www/assets/images/Steroidesign.png" alt="Steroidesign">
</h3>

<h1 align="center" style="border:0;">
	<b>Make your projects look as good 💎 as the big ones 💪🏻</b>
</h1>

<br>

<h3 align="center">
	<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FR7CTJ3ZHK4FQ">Donate for another ☕
	</a>
</h3>	

<h3 align="center">
	🚀 Join to the <a href="#">Steroidesign Weekly</a> newsletter! 🚀 
	<br> We'll submit a new theme every week (we know it's crazy, but it's possible 😵).
</h3>

<br>

<h4 align="center">
	Made with ❤ & ☕ by 
		<a href="https://www.twitter.com/rosa7082" target="_blank">@rosa7082</a> 
		& 
		<a href="https://www.twitter.com/seruda" target="_blank">@seruda</a> 
		in 
		<a href="https://www.google.com/maps/place/Portland,OR" target="_blank">Portland, OR</a>
		.
</h4>

<br>

## Problem

Whenever we start a new project, we spend a lot of time looking for inspiration on hundreds of websites, we take a little of each, and so we build our beloved Frankenstein 🤖. Our most important references are the most well-known Startups (Airbnb, Medium, Product Hunt, etc) as they have invested a lot of time in analyzing the best practices of design, validation of ideas, calls to action, hook, etc. And over time have been creating standards and trends.

<br>

## Solution

Since many are looking for these sites, we decided to create a skeleton of HTML styles and components based on these big companies, themes that are 100% editable and adaptable to your own palette color or styles, adding your own magic 🔮!. So that your product remains authentic and unique.

**With this, we do not seek to copy the big companies, but to obtain inspiration and have its base for our own projects.**

The themes include the basic elements in a website: buttons, labels, links, typography, form elements, box components, search bar, navbars, etc, etc, etc.

Contributions are more than welcome.

<br>

## Contents

- [Base Methodology](#base-methodology)
- [Installation and use](#installation-and-use)
- [Themes](#themes)
	- [Airbnb](https://github.com/sergioruizdavila/startups-themes/blob/master/Airbnb.md)
	- [Medium](#medium) (In Progress)
	- [Product Hunt](#product-hunt) (Coming soon)
	- [Asana](#asana) (Coming soon)
	- [Suggest us the next one](#suggest-us-the-next-one)
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


## Installation and use

<h3 align="center">
	<img src="https://raw.githubusercontent.com/sergioruizdavila/startups-themes/develop/www/assets/images/compare%20themes.png" alt="compare">
</h3>

<br>

### Install

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

<br>


### How to use?

Es muy sencillo, despues de seguir los pasos de instalación, lo unico que tienes que hacer es copiar la carpeta **'theme'** en tu proyecto, dentro encontraras todos los estilos organizados por **componentes**, y un directorio **'core'** que contiene todos los estilos y variables globales (e.g. main pallete, helper classes, font family, etc.).

<h3 align="center">
	<img src="https://cdn.rawgit.com/sergioruizdavila/startups-themes/56d23613/www/assets/images/structure_files.png" alt="structure files">
</h3>


***La estructura de archivos esta compuesta por:***

- ***components:*** Un directorio que contienen todos los estilos de cada componente (buttons, links, forms, paragraphs, inputs, etc.)

- ***core:*** Es aqui donde iran todos los estilos base de tu proyecto, aqui encontraras un archivo llamado **_globals.scss** el cual contiene todas las variables globales, helper classes, y clases base que resetean los estilos de algunos componentes como el body, los H tags, etc.

- ***app.scss:*** Este es el archivo padre el cual lo unico que tiene es una referencias a todos los demas estilos:

<h3 align="center">
	<img src="https://cdn.rawgit.com/sergioruizdavila/startups-themes/d6b7a6e5/www/assets/images/app_file.png" alt="app file">
</h3>

- ***app.css:*** Es el resultado final despues de correr una pequeña tarea en Gulp, donde toma el archivo app.scss, este llama a cada uno de los componentes y estilos del proyecto, y los concatena y minifica en un solo archivo, es este el archivo que linkearias en tu html.

```html
<! your vendors >
<link rel="stylesheet" href="/build/css/vendor.min.css">

<! theme styles >
<link rel="stylesheet" href="/theme/app.css">
```

**Nota:** Ya que algunas clases usan por debajo Boostrap, es necesario incluir los siguientes vendor para evitar conflictos:

**animate.css v.3.5.1**

**boostrap (css) v.3.3.7**


Además podran ver ejemplos de todos los componentes que incluye cada tema en el file: **index.html**. Ahi veran todos los componentes organizados por grupos, pueden simplemente tomar el componente que necesiten, y llevarlo a su proyecto, y deberia funcionar perfectamente.

Cualquier duda por favor escribirnos a [@rosa7082](https://www.twitter.com/rosa7082) y [@seruda](https://www.twitter.com/seruda)

**Enjoy it!**

<br>

## Themes

### Airbnb
Status: **[v1.0.0](https://github.com/sergioruizdavila/startups-themes/blob/master/Airbnb.md)**

### Medium
Status: ***In Progress***

### Product Hunt 
Status: ***Coming soon***

### Asana 
Status: ***Coming soon***

<br>

## Suggest us the next one

Hemos empezado a trabajar en los temas que creemos serian los más bonitos y completos. Pero si deseas que empecemos en otro más genial, simplemente haznolo saber: [@rosa7082](https://www.twitter.com/rosa7082) y [@seruda](https://www.twitter.com/seruda), o a nuestros emails: [Rosita](mailto:rosa.alvarez.maza@gmail.com) y [Sergio](mailto:sergioruizdavila@gmail.com) Puedes escribirnos cuando desees hablar con nosotros.

<br>

## License

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

**Nota importante:** Los temas no son una copia, escribimos los estilos y estructura desde cero, basados en nuestra propia estructura de archivos y nuestra propia forma de organizar los estilos (usando como base la metodologia [BEM](http://getbem.com/introduction/)), lo que queremos con esto es poder crear un 'esqueleto' que sirva para ser usado, editado, modificado y reemplazado en cualquier proyecto.
