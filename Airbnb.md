## Airbnb

<table>
	<thead>
		<tr><th align="center">Updated</th></tr>
	</thead>
	<tbody>
		<tr><td align="center">July 17, 2017</td></tr>
	</tbody>
</table>

<br>

### Actual PUV on the landing page

<br>

<blockquote align="center">
	<h3>Book unique homes and experience a city like a local.</h3>
</blockquote>

<br>

### Actual Slogan on the landing page

<br>

<blockquote align="center">
<h3>N/A</h3>
</blockquote>

<br>

---

<br>

### Logo evolution

<h3 align="center">
	<img src="https://cdn.rawgit.com/sergioruizdavila/startups-themes/20e17736/www/assets/images/logo%20evolution.png" alt="logo evolution">
</h3>

<br>

---

### Color Palette

<h3 align="center">
	<img src="https://cdn.rawgit.com/sergioruizdavila/startups-themes/fb8381e7/www/assets/images/color%20palette.png" alt="logo evolution">
</h3>

<br>

---

<br>

### Font Family



**Official Font:** 

- **LL Circular + LL Brown** [https://lineto.com/The+Fonts/Font+Categories/Text+Fonts/Circular/](https://lineto.com/The+Fonts/Font+Categories/Text+Fonts/Circular/) <br>
	<sub><b>Note:</b> It's not free, its price is around <b>$930</b> (family package)</sub>

**Alternatives:**

- **Lato** [https://fonts.google.com/specimen/Lato](https://fonts.google.com/specimen/Lato)
- **Futura** [https://www.myfonts.com/fonts/linotype/futura/](https://www.myfonts.com/fonts/linotype/futura/)
- **Nunito** [https://fonts.google.com/specimen/Nunito](https://fonts.google.com/specimen/Nunito)
- **Campton** [http://www.myfonts.com/fonts/rene-bieder/campton/](http://www.myfonts.com/fonts/rene-bieder/campton/)
- **Cabin** [https://fonts.google.com/specimen/Cabin](https://fonts.google.com/specimen/Cabin)

<br>

---

<br>

## Some Components

## Buttons

La clase principal para los botones es: **```.ma-btn```**, el cual tiene modificadores de tipo y de tamaño:

- **Tamaño:** ```--small, --default, --large, --block```
- **Tipo:** ```--primary, --primary-without-bg, --secondary, --secondary-without-bg, --minimal```

<br>

### Primary Buttons

<h3 align="center">
	<img src="https://cdn.rawgit.com/sergioruizdavila/startups-themes/d13915fd/www/assets/images/primary_buttons.png" alt="logo evolution">
</h3>


### Use

El modificador de un boton primary es ```--primary``` el cual determina los botones con el color primario del proyecto. Junto a este modificador se pueden usar modificadores de tamaño:

```html
<button class="ma-btn ma-btn--small ma-btn--primary">Start Now</button>
<button class="ma-btn ma-btn--default ma-btn--primary">Start Now</button>
<button class="ma-btn ma-btn--large ma-btn--primary">Log in</button>
<button class="ma-btn ma-btn--small ma-btn--primary ma-btn--block">Small Primary Button</button>
```
<br>

---

<br>

### Secondary Buttons

<h3 align="center">
	<img src="https://cdn.rawgit.com/sergioruizdavila/startups-themes/fdb645e5/www/assets/images/secondary_buttons.png" alt="logo evolution">
</h3>


### Use

El modificador de un boton secundario es ```--secondary``` el cual determina los botones con el color secundario del proyecto. Junto a este modificador se pueden usar modificadores de tamaño:

```html
<button class="ma-btn ma-btn--small ma-btn--secondary">Start Now</button>
<button class="ma-btn ma-btn--default ma-btn--secondary">Start Now</button>
<button class="ma-btn ma-btn--large ma-btn--secondary">Log in</button>
<button class="ma-btn ma-btn--small ma-btn--secondary ma-btn--block">Small Secondary Button</button>
```
<br>

---

<br>

### Primary Without Background Buttons

<h3 align="center">
	<img src="https://cdn.rawgit.com/sergioruizdavila/startups-themes/fdb645e5/www/assets/images/primary_buttons_w_o_bg.png" alt="logo evolution">
</h3>


### Use

El modificador de un boton primario sin fondo es ```--primary-without-bg``` el cual determina los botones con el color primario sin fondo. Junto a este modificador se pueden usar modificadores de tamaño:

```html
<button class="ma-btn ma-btn--small ma-btn--primary-without-bg">Start Now</button>
<button class="ma-btn ma-btn--default ma-btn--primary-without-bg">Start Now</button>
<button class="ma-btn ma-btn--large ma-btn--primary-without-bg">Log in</button>
<button class="ma-btn ma-btn--small ma-btn--primary-without-bg ma-btn--block">Small Primary Without Bg Button</button>
```
<br>

---

<br>

### Secondary Without Background Buttons

<h3 align="center">
	<img src="https://cdn.rawgit.com/sergioruizdavila/startups-themes/fdb645e5/www/assets/images/secondary_buttons_w_o_bg.png" alt="logo evolution">
</h3>


### Use

El modificador de un boton secundario sin fondo es ```--secondary-without-bg``` el cual determina los botones con el color secundario sin fondo. Junto a este modificador se pueden usar modificadores de tamaño:

```html
<button class="ma-btn ma-btn--small ma-btn--secondary-without-bg">Start Now</button>
<button class="ma-btn ma-btn--default ma-btn--secondary-without-bg">Start Now</button>
<button class="ma-btn ma-btn--large ma-btn--secondary-without-bg">Log in</button>
<button class="ma-btn ma-btn--small ma-btn--secondary-without-bg ma-btn--block">Small Secondary Without Bg Button</button>
```
<br>

---

<br>


## Inputs 

Para poder sobreescribir los estilos por defecto que proporciona Boostrap, es necesario usar la clase: ```.ma-input```, recomendamos no usar las clases que provee Boostrap ya que tendrias conflictos de estilos, y tendrias que trabajar extra tratando de sobreescribirlos.

El uso es muy similar al de los buttons, la unica diferencia es que no poseen modificadores de tipo, solo de tamaño:

- **Tamaño:** ```--small, --default, --large, --block```

Imagen

```html
<!-- small input -->
<input type="text" class="ma-input ma-input--small">

<!-- default input -->
<input type="text" class="ma-input ma-input--default">

<!-- large input -->
<input type="text" class="ma-input ma-input--large">

<!-- input with help text -->
<input type="text" class="ma-input ma-input--default">
<p class="ma-p ma-p--small font-weight-normal space-top-1">
    The magical day you were dropped from the sky
    by a stork. We use this data for analysis and
    never share it with other users.
</p>
```


Ademas incluye dos modificadores muy utiles a la hora de agregar validaciones a cada campo, estos son: ```--invalid``` y el ```disabled```:

- ```--invalid```: Al agregar el modificador ```--invalid```, este alterara los colores del input para mostrarle al usuario que no paso la validación requerida por el componente:

Imagen

```html
<input class="ma-input ma-input--default ma-input--invalid">
<p class="ma-p ma-p--small ma-p--alert font-weight-normal">
	Value required.
</p>
```

- ```disabled```: Este no requiere una clase modificador, simplemente al decir que el input esta disabled, este tomara los estilos que hemos proporcionado por defecto a los inputs disabled.

Imagen

```html
<input class="ma-input ma-input--default" disabled>
```







## License

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

**Nota importante:** Los temas no son una copia, escribimos los estilos y estructura desde cero, basados en nuestra propia estructura de archivos y nuestra propia forma de organizar los estilos (usando como base la metodologia [BEM](http://getbem.com/introduction/)), lo que queremos con esto es poder crear un 'esqueleto' que sirva para ser usado, editado, modificado y reemplazado en cualquier proyecto.
