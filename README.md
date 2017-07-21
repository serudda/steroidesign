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
	<br> We'll submit a new theme every week (we know it's crazy, but it's not impossible 😵).
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

The themes were created based on **BEM methodology**, to structure much better the HTML elements and CSS styles, based on blocks, elements, and modifiers. We'll leave a small explanation here, but if you want to go further, we leave the reference to the official website: [https://en.bem.info/](https://en.bem.info/)

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

Really you don´t need an **'installation'**, you just could clone the project, take the 'theme' folder and you are able to start. The only tools that you need to use these themes are:

- **Sass**
- **Boostrap v3.3.7** *(to keep row and column structure, but you can feel free to use another library for that, the only issue is that you could see the components examples in index HTML a little bit wrong, because we use bootstrap to arrange each component inside row and column grids).*

<br>

#### If you want to run the demo page, you should follow this steps:

**1:** Install NodeJS v6 or latest (Not sure if there is any problem with previous versions, but this is the one we use).

**2:** On terminal (inside root directory) run the following commands:

1. Clone the project.

```
git clone https://github.com/sergioruizdavila/startups-themes.git projectname
```

2. Install gulp, bower and express components: 
```shell
npm install
```

3. Install basic components such as boostrap, jquery, animate.css:
```shell
bower install
```
4. Launch a local server in order to see styles guideline:
```shell
gulp start
```

**3:** Open your favorite browser, and browse to:

**http://localhost:8080/**

There you can see whole styles guidelinein in a demo page.

<br>


### How to use?

It's very simple, you have to copy the **theme** folder into your own project, inside you will find all styles organized by **components**, and a folder named **core** which contains all global styles and variables (e.g. main palette, helper classes, font family, etc.).

<h3 align="center">
	<img src="https://cdn.rawgit.com/sergioruizdavila/startups-themes/56d23613/www/assets/images/structure_files.png" alt="structure files">
</h3>

**The file structure is:**

- ***components:*** A folder containing all styles of each component (buttons, links, forms, paragraphs, inputs, etc.)

- ***core:*** Here are all the base styles of your project, here you find a file named **_global.scss** which contains all the global variables, helper classes, and base classes to reset the styles of some global elements such as the body, H tags, labels, etc.

- ***app.scss:*** This is the parent file which contains a reference to all other styles: 

<h3 align="center">
	<img src="https://cdn.rawgit.com/sergioruizdavila/startups-themes/d6b7a6e5/www/assets/images/app_file.png" alt="app file">
</h3>

- **app.min.css:** It's the final result after running a small task in Gulp, compile it, concatenates and minifies every style in a single file. This is the file you should add in the **< head >** html section.

```html
<! your vendors >
<link rel="stylesheet" href="/build/css/vendor.min.css">

<! theme styles >
<link rel="stylesheet" href="/theme/app.css">
```
- **app.css**: If you don't use Sass or another preprocessor, don't worry you can take this file and include it into your own project, and you could use any of the components freely.

<br>

You can also see examples of all components on **index.html**. You will see all the components organized by groups, you can simply take the component you need, and take it to your own project.

Any questions please write us: [@rosa7082](https://www.twitter.com/rosa7082) & [@seruda](https://www.twitter.com/seruda)

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

We started working on the themes that we believe would be the most beautiful and complete. But if you want us to start in a more great one, just let us know: [@rosa7082](https://www.twitter.com/rosa7082) & [@seruda](https://www.twitter.com/seruda), or by email: [Rosita](mailto:rosa.alvarez.maza@gmail.com) & [Sergio](mailto:sergioruizdavila@gmail.com). You can write us if you'd like to talk to us.

<br>

## License

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

**Important:** Themes are not a copy, we write styles and structure from scratch, based on our own file structure and our own way of organizing styles (based n the [BEM methodology](https://en.bem.info/)), what we want with this is to create a 'skeleton' that can be used, edited, modified and replaced in any project.

The user will be responsible for any improper, ilicit or abnormal use made of the content, information or functionalities.

We are not liable for any damages caused by any alteration made with this material provided by us.

We are not responsible for misinterpretation or inappropriate use of this content and information. In the same way, we will not be responsible for the damages caused directly or indirectly by the using of this material. In no way are we liable for the consequences of the improper or negligent use of this material.
