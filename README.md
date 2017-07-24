<h3 align="center">
	<img width="200" src="https://cdn.rawgit.com/sergioruizdavila/startups-themes/f14c6e27/www/assets/images/Steroidesign.png" alt="Steroidesign">
</h3>

<h1 align="center" style="border:0;">
	<b>Make your projects look as good 💎 as the big ones 💪🏻</b>
</h1>

<br>

<h3 align="center">
	🚀 Join to the <a href="http://eepurl.com/cWWRrD">Steroidesign Weekly</a> newsletter! 🚀 
	<br> We'll submit a new theme every week (we know it's crazy, but it's not impossible 😵).
</h3>
<h3 align="center">Show us your interest by signing up, so we'll know that there are people interested in this.</h3>

<br>

<p align="center">
	Made with ❤ & ☕ by 
		<a href="https://www.twitter.com/rosa7082" target="_blank">@rosa7082</a> 
		& 
		<a href="https://www.twitter.com/seruda" target="_blank">@seruda</a> 
		in 
		<a href="https://www.google.com/maps/place/Portland,OR" target="_blank">Portland, OR</a>
		.
</p>

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
	- [Airbnb](https://github.com/sergioruizdavila/startups-themes/blob/master/Airbnb.md) **(Done v.1.0.0)**
	- [Medium](#medium) (In Progress)
	- [Product Hunt](#product-hunt) (Coming soon)
	- [Asana](#asana) (Coming soon)
	- [Suggest us the next one](#suggest-us-the-next-one)
- [License](#license)

<br>

## Base methodology

For our own components, follow the BEM (Block, Element, Modifier) method for writing & organising CSS. BEM helps keep our CSS logical and predictable. The naming convention follows this pattern:

```css
.block {}
.block__element {}
.block__element--modifier {}
```

- ```.block``` represents the higher level of an abstraction or component.

- ```.block__element``` represents a descendent of .block that helps form .block as a whole.

- ```.block--modifier``` represents a different state or version of .block.

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
Status: **[See components (v1.0.0)](https://github.com/sergioruizdavila/startups-themes/blob/master/Airbnb.md)**

We used this theme in other own project: [http://www.waysily.com](http://www.waysily.com)

<h3 align="center">
	<img width="500" src="https://cdn.rawgit.com/sruda/steroidesign/967bcd2f/www/assets/images/waysily-example.png" alt="compare">
</h3>

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

We are not responsible for misinterpretation or inappropriate use of this content and information. In the same way, we will not be responsible for the damages caused directly or indirectly by the using of this material. In no way are we liable for the consequences of the improper or negligent use of this material.
