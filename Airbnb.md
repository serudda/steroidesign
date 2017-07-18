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


Para poder sobreescribir los estilos por defecto que proporciona Boostrap, es necesario usar la clase: **```.ma-btn```**, recomendamos no usar las clases que provee Boostrap ya que tendrias conflictos de estilos, y tendrias que trabajar extra tratando de sobreescribirlos.

Los botones cuentan con modificadores de tipo y de tamaño:

- **Tamaño:** ```--small, --default, --large, --block```
- **Tipo:** ```--primary, --primary-without-bg, --secondary, --secondary-without-bg, --minimal```

<br>

### Primary Buttons

El modificador de un boton primary es **```--primary```** el cual determina los botones con el color primario del proyecto. Junto a este modificador se pueden usar modificadores de tamaño:

<h3 align="center">
	<img src="https://cdn.rawgit.com/sergioruizdavila/startups-themes/d13915fd/www/assets/images/primary_buttons.png" alt="buttons list">
</h3>

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

El modificador de un boton secundario es **```--secondary```** el cual determina los botones con el color secundario del proyecto. Junto a este modificador se pueden usar modificadores de tamaño:

<h3 align="center">
	<img src="https://cdn.rawgit.com/sergioruizdavila/startups-themes/fdb645e5/www/assets/images/secondary_buttons.png" alt="buttons list">
</h3>

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

El modificador de un boton primario sin fondo es **```--primary-without-bg```** el cual determina los botones con el color primario sin fondo. Junto a este modificador se pueden usar modificadores de tamaño:

<h3 align="center">
	<img src="https://cdn.rawgit.com/sergioruizdavila/startups-themes/fdb645e5/www/assets/images/primary_buttons_w_o_bg.png" alt="buttons list">
</h3>

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

El modificador de un boton secundario sin fondo es **```--secondary-without-bg```** el cual determina los botones con el color secundario sin fondo. Junto a este modificador se pueden usar modificadores de tamaño:

<h3 align="center">
	<img src="https://cdn.rawgit.com/sergioruizdavila/startups-themes/fdb645e5/www/assets/images/secondary_buttons_w_o_bg.png" alt="buttons list">
</h3>

```html
<button class="ma-btn ma-btn--small ma-btn--secondary-without-bg">Start Now</button>
<button class="ma-btn ma-btn--default ma-btn--secondary-without-bg">Start Now</button>
<button class="ma-btn ma-btn--large ma-btn--secondary-without-bg">Log in</button>
<button class="ma-btn ma-btn--small ma-btn--secondary-without-bg ma-btn--block">Small Secondary Without Bg Button</button>
```

<br>

---

<br>

### Block Buttons

Los botones de bloque, son los que adaptan su width dinamicamente, es decir llegan de extremo a extremo dentro del contenedor en el que se encuentren, en otras palabras no tienen un width fijo, el width se adapta a su contenedor padre.

Para usar este tipo de botones, simplemente hay que agregar el modificador de tamaño: **```--block```**, esto le agregara un width de 100% y le permitira adaptar su width.

<h3 align="center">
	<img src="https://cdn.rawgit.com/sergioruizdavila/startups-themes/ae955d2a/www/assets/images/block_buttons.png" alt="block button">
</h3>

```html
<button class="ma-btn ma-btn--default ma-btn--primary ma-btn--block">
	Default Primary Button
</button>
```

<br>

---

<br>

### Special Buttons

Además hay tipos especiales de botones que cuentan con un diseño especial y diferente a los botones tradicionales. Entre los cuales tenemos: botones sociales (**```ma-btn--facebook```**, **```ma-btn--google```**) y botones helpful (**```ma-btn--helpful```**).

**Social Buttons**

Los botones sociales estan compuestos por el texto y un icono alusivo a la red social.

Además, los botones sociales tambien cuentan con modificadores de tamaño: **```--small```**, **```--default```** y **```--large```**

<h3 align="center">
	<img src="https://cdn.rawgit.com/sergioruizdavila/startups-themes/ae955d2a/www/assets/images/social_buttons.png" alt="social buttons list">
</h3>

```html
<!-- Default Facebook button -->
<button class="ma-btn ma-btn--default ma-btn--facebook">
    <div class="ma-btn__content">
        <div class="ma-btn__content__icon-container">
            <i class="fa fa-facebook" aria-hidden="true"></i>
        </div>
        <div class="space-left-2">
            <span>Log in with Facebook</span>
        </div>
    </div>
</button>

<! Default Google button >
<button class="ma-btn ma-btn--default ma-btn--google">
    <div class="ma-btn__content">
        <div class="ma-btn__content__icon-container">
            <!-- Google icon SVG -->
            <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" style="display: block; height: 18px; width: 18px;"><g fill="none" fill-rule="evenodd"><path d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z" fill="#EA4335"></path><path d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z" fill="#4285F4"></path><path d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z" fill="#FBBC05"></path><path d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z" fill="#34A853"></path><path d="M0 0h18v18H0V0z"></path></g></svg>
        </div>
        <div class="space-left-2">
            <span>Log in with Google</span>
        </div>
    </div>
</button>
```

<br>

**Helpful Buttons**

Los botones helpful son botones que usa Airbnb para calificar los reviews y comentarios dados por sus usuarios en su plataforma. Esta compuesto por un label, y un contador.

Además, los botones helpful tambien cuentan con modificadores de tipo: **```--minimal```**, **```--primary```** y **```--secondary```**

Hasta el momento solo incluimos el modificador de tamaño: **```--small```**, más adelante trabajaremos un poco más en detalle en este tipo de componentes, y agregaremos más modificadores.

<h3 align="center">
	<img src="https://cdn.rawgit.com/sergioruizdavila/startups-themes/ae955d2a/www/assets/images/helpful_buttons.png" alt="helpful buttons list">
</h3>

```html
<!-- Minimal Helpful button -->
<button class="ma-btn ma-btn--helpful ma-btn--helpful--small ma-btn--helpful--minimal">
    <span>
        <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
        <div class="ma-btn--helpful__text">Helpful</div>
        <div class="ma-btn--helpful__count">3</div>
    </span>
</button>

<!-- Primary Helpful button -->
<button class="ma-btn ma-btn--helpful ma-btn--helpful--small ma-btn--helpful--primary">
    <span>
        <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
        <div class="ma-btn--helpful__text">Helpful</div>
        <div class="ma-btn--helpful__count">24</div>
    </span>
</button>

<!-- Secondary Helpful button -->
<button class="ma-btn ma-btn--helpful ma-btn--helpful--small ma-btn--helpful--secondary">
    <span>
        <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
        <div class="ma-btn--helpful__text">Helpful</div>
        <div class="ma-btn--helpful__count">590</div>
    </span>
</button>
```

<br>

**Button Disabled**

Los botones cuentan con un modificador que nos permite cambiar los estilos a los botones deshabilitados facilmente. Este no requiere una clase modificador, simplemente al decir que el button esta disabled, este tomara los estilos que hemos proporcionado por defecto a los buttons disabled.

<h3 align="center">
	<img src="https://cdn.rawgit.com/sergioruizdavila/startups-themes/ae955d2a/www/assets/images/button_disabled.png" alt="button disabled">
</h3>

```html
<button class="ma-btn ma-btn--default ma-btn--secondary" disabled>
    Disabled Button
</button>
```

<br>

---

<br>


## Inputs 

Para poder sobreescribir los estilos por defecto que proporciona Boostrap, es necesario usar la clase: ```.ma-input```, recomendamos no usar las clases que provee Boostrap ya que tendrias conflictos de estilos, y tendrias que trabajar extra tratando de sobreescribirlos.

El uso es muy similar al de los buttons, la unica diferencia es que no poseen modificadores de tipo, solo de tamaño:

- **Tamaño:** ```--small, --default, --large, --block```

<h3 align="center">
	<img src="https://cdn.rawgit.com/sergioruizdavila/startups-themes/2c9823e7/www/assets/images/inputs%20type.png" alt="inputs list">
</h3>

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

<h3 align="center">
	<img src="https://cdn.rawgit.com/sergioruizdavila/startups-themes/2c9823e7/www/assets/images/invalid_input.png" alt="inputs list">
</h3>

```html
<input class="ma-input ma-input--default ma-input--invalid">
<p class="ma-p ma-p--small ma-p--alert font-weight-normal">
	Value required.
</p>
```

- ```disabled```: Este no requiere una clase modificador, simplemente al decir que el input esta disabled, este tomara los estilos que hemos proporcionado por defecto a los inputs disabled.

<h3 align="center">
	<img src="https://cdn.rawgit.com/sergioruizdavila/startups-themes/2c9823e7/www/assets/images/input_disabled.png" alt="inputs list">
</h3>

```html
<input class="ma-input ma-input--default" disabled>
```

<br>

### Selects and Textarea

Es necesario que los componentes Select y Textarea usen la clase ```.ma-input``` para heredar las clases bases de un input (e.g. el efecto focus, el disabled, etc.).

**Select**

El select component usa como clase base: ```.ma-select```, pero los selects component son un poco más complejos en su estructura, ya que estan compuestos por ```.ma-select-container``` (quien es el que contendra el ```.ma-select``` y el ```.ma-select-arrow```).

Los selects component tambien tienen modificadores de tamaño iguales a los inputs text:

- **Tamaño:** ```--small, --default, --large, --block```

**Nota importante:** Es necesario que el ```.ma-select-container``` y el elemento ```.ma-select``` contengan el mismo modificador de tamaño, es decir, si ```.ma-select-container``` es ```--small```, el elemento hijo ```.ma-select``` tambien debe ser ```--small``` y usar dicha clase.

<h3 align="center">
	<img src="https://cdn.rawgit.com/sergioruizdavila/startups-themes/2c9823e7/www/assets/images/select%20components.png" alt="inputs list">
</h3>

```html
<!-- select container -->
<div class="ma-select-container ma-select-container--small">
	
	<!-- select component -->
	<select class="ma-input ma-select ma-select--small">
		<option value="" disabled selected>Gender</option>
		<option value="Male">Male</option>
		<option value="Female">Female</option>
		<option value="Other">Other</option>
	</select>
	
	<!-- arrow -->
	<span class="ma-select-arrow">
		<i data-feather="chevron-down" class="ma-select-arrow__icon"></i>
	</span>
	
</div>
```

<br>

Los select component tambien cuentan con los modificadores: ```--invalid``` y ```disabled```.

<br>

**Invalid Select**

<h3 align="center">
	<img src="https://cdn.rawgit.com/sergioruizdavila/startups-themes/2c9823e7/www/assets/images/invalid_select.png" alt="invalid select">
</h3>

```html
<div class="ma-select-container ma-select-container--default">
	<select class="ma-input ma-select ma-select--default ma-select--invalid">
        <option value="" disabled selected>Language</option>
        <option value="Bahasa Indonesia">Bahasa Indonesia</option>
        <option value="Español">Español</option>
        <option value="English">English</option>
        <option value="Italiano">Italiano</option>
        <option value="Other">Other</option>
    </select>
    <span class="ma-select-arrow">
        <i data-feather="chevron-down" class="ma-select-arrow__icon"></i>
    </span>
</div>
<p class="ma-p ma-p--small ma-p--alert font-weight-normal space-top-1">
	Language required.
</p>
```

<br>

**Select Disabled**

<h3 align="center">
	<img src="https://cdn.rawgit.com/sergioruizdavila/startups-themes/2c9823e7/www/assets/images/select_disabled.png" alt="inputs list">
</h3>

```html
<div class="ma-select-container ma-select-container--default">
	<select id="select5" class="ma-input ma-select ma-select--default" disabled>
		<option value="" disabled selected>Language</option>
		<option value="Bahasa Indonesia">Bahasa Indonesia</option>
		<option value="Español">Español</option>
		<option value="English">English</option>
		<option value="Italiano">Italiano</option>
		<option value="Other">Other</option>
   </select>
   <span class="ma-select-arrow">
   		<i data-feather="chevron-down" class="ma-select-arrow__icon"></i>
   </span>
</div>
```





## License

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

**Nota importante:** Los temas no son una copia, escribimos los estilos y estructura desde cero, basados en nuestra propia estructura de archivos y nuestra propia forma de organizar los estilos (usando como base la metodologia [BEM](http://getbem.com/introduction/)), lo que queremos con esto es poder crear un 'esqueleto' que sirva para ser usado, editado, modificado y reemplazado en cualquier proyecto.
