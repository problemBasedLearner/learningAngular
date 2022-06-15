# ANGULAR

## [Setting Local Environment](https://angular.io/guide/setup-local)

**Install requisites**
* Node
* Npm

First of all we need to install angular in our device

```console
$ npm install -g @angular/cli
```

<br>


## [Creating the app from 0](https://angular.io/guide/setup-local)

Run this console command

```console
$ ng new 'name-of-the-app'
```

To run the app you can use several commands have to open terminal inside the repo and run 

```console
$ npm start (then visit localhost:4200)
$ ng serve (then visit localhost:4200)
$ ng serve -o (open direcly)
```

In case you want to stop serving the app you can just end the service by using command

```console
$ ^C
```

<br>


## [Basic General Concepts](https://angular.io/tutorial/toh-pt0)

**Double curly braces** are the interpolation binding sintax used same as backticks to **insert Angular code inside HTML**

```html
<h1>{{ Component property }}</h1>
```

<br>


## [Components](https://angular.io/tutorial/toh-pt1)

To **generate a new component**, open the repo in terminal and use the following command

```console
$ ng generate component 'name of component'
$ ng g c 'name of component'
```

<br>


To **generate a component manually**

1. Generate a file named <component-name>.component.ts
2. At the top of the file add import
3. Then add the component decorator (@component): 
4. Selector (css selector)
5. TemplateUrl (HTML template that the component uses)
6. StyleUrls (Styles for the components template)
7. Add class statement that includes the code for the component
8. Then go to ../app.modules.ts and do as explained in NgModule

```js
/* Import of components */
import { Component } from '@angular/core';

/* Class decorators, in this case, as we are using a built in decorator named Component, we have to import it*/
@Component({
  selector: 'app-component-overview',
  templateUrl: './component-overview.component.html',
  styleUrls: ['./component-overview.component.css']
})

/* Class: code and actions */
export class ComponentOverviewComponent {

}
```

<br>


## [Styling Components](https://angular.io/tutorial/toh-pt2#style-the-heroes)

It's important to note that the component's stylesheets linked in the component's constructor only affects the component and don't have any other inplication in other components.

### [Attribute, class, and style bindings](https://angular.io/guide/attribute-binding#class-binding)

<br>


## Modules

Modules generating command 

```console
$ ng generate module 'name of module'
```

Angular uses modules as a way to group components and pass them to the app module. 

Regarding the app document, inside the app folder, the structure goes as follows

  + App folder
    + Module 1 folder
      + Module.module.ts doc
      + Component 1 folder
        + Component.ts
        + Component.css
        + Component.html
        + Tests
      + Component 2 folder
    + Module 2 folder
    + Rest of documents

It's important to understand the Module's structure because it's crucial to share components inside the app

```js
// First we import all the angular modules we are using
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

// Then we import all the Components that are included in the module
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

// We use the NgModule decorator that we imported from Angular in the first step
@NgModule({
    // The full module component index
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // Everything that we want to use outside the module
    exports: [
        ListadoComponent,
    ],
    // In imports we place modules we are about to use, both from Angular and our own
    imports: [
        // Common module allows the use of ngFor and ngIf among other key functions
        CommonModule
    ],
    // In providers we list all the used services
    providers: [
      XXXService
    ],
    
})

export class HeroesModule {}
```


<br>


## [NgModule](https://angular.io/tutorial/toh-pt1)

Angular needs **metadata** to list all the apps and components used in the app, for that it uses the **@component decorators** and **NgModule**

<br>

```js
/* Import of all the MODULES used from Angular resources */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

/* Import of all COMPONENTS created inside the app*/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

/* Decorator */
@NgModule({
  /* Declarations: all the components of the app must be listed here after import */
  declarations: [
    AppComponent,
    HeroesComponent,
  ],
  /* Imports: all the modules must be listed here for Angular to know what resources to use  */
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

<br>


## [Forms Module](https://angular.io/guide/forms-overview)

<br>


## [*ngFor](https://angular.io/api/common/NgForOf#description)

With ***ngFor** directive we can iterate over a data set as in a for of bucle, and get the template rendered as many times as needed.

See for example this list

```js
import { Hero } from './hero';

export const HEROES: Hero[] = [
  { id: 12, name: 'Dr. Nice' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr. IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
```

If we import this data base in our component like so

```js
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
/* Import of the database */
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent implements OnInit {

  /* Variable definition */
  heroes = HEROES;

  constructor() {  }

  ngOnInit(): void {
    
  }

}
```


Now we can print it by using ***ngFor** in the components HTML file like follows

```js
<ul class="heroes">

    <li *ngFor="let hero of heroes; let i = index">

      /* we use *ngFor and then iterate the array by defining its key and array name */
      /* In case we want to use the index we can access it as shown */
        <button type="button">
            <span class="badge">{{ hero.id }}{{ index }}</span>
            <span class="name">{{ hero.name }}</span>
        </button>

    </li> 
    
</ul>
```

<br>


## [*ngIf](https://angular.io/api/common/NgIf)

<br>


## [Event Bindings](https://angular.io/tutorial/toh-pt2#add-a-click-event-binding)

Angular has it's own way of dealing with event bindings, the sintax looks like the following code:

```html
<element (eventName)='function(paragram)'></element>
```

<br>


## Interfaces

+ [Definition example](./heroes/src/app/dbz/interfaces/dbz.interface.ts)
+ [Application example](./heroes/src/app/dbz/personajes/personajes.component.ts)

Interfaces are the Typescript mecanism to define type inside classes. For that the most usefull way to work with them is to generate its own interfaces/ directory and gather them there. 

**Important** remember to import the interfaces everywhere you need them to mantain type with a code similar to the next

```js
import { name } from "path to interface file";
```

<br>


## [@input](https://www.udemy.com/course/angular-fernando-herrera/learn/lecture/23639036#overview) 

+ [Official documentation](https://angular.io/guide/inputs-outputs)

With the input command we can send variables and info from a **parent component** to a son.
For that we have to follow few steps

First we have to make an @input in the son to bring an existing info in the parent ex:

```js
// This array is in parent.component.ts and uses the Personaje interface for typing
personajesArr: Personaje[] = [
    {
      nombre: 'Broli',
      poder: 123
    },

    {
      nombre: 'Brocoli',
      poder: 12394871212341234
    },
  ]

```
This is the code we use to import it in the son component
**Important!** We have to import Input from angular and the interface from its directory

```js
@Input() personajesArr: Personaje[] = [];
```

Last we have to associate the info in the parent component to it's sons

```html
<app-personajes [personajesArr]="personajesArr"></app-personajes>
```

<br>


## [@output](https://www.udemy.com/course/angular-fernando-herrera/learn/lecture/23650936#overview)

+ [Official documentation](https://angular.io/guide/inputs-outputs)
+ [EventEmiter documentation](https://angular.io/api/core/EventEmitter)
+ [Event Binding documentation](https://angular.io/guide/event-binding-concepts)

@Output is the decorator we use to send info from a child to a parent

For making it work we have to work with it like so, first work on the child.component.ts

First we make sure to create the event we want to output, for that we have to make a few **imports: EventEmiter & Output**. Then we can write a code that follows the next structure:

**@Output() eventName: EventEmitter<Type> = new Eventemitter();**

```js
@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
```

Next we must have a function that generates the output, and for that we can use this structure:

**this.eventName.emit(value);**

```js
agregar() {
  this.onNuevoPersonaje.emit(this.nuevo);
}
```

Now we switch to the parent component. We have to recieve the value, so we go to the parent.html file and listen to the event

```html
 <childComponentName 
            (onNuevoPersonaje)="functionX( $event )"
        ></childComponentName>
```
Like so we are listening to the event to trigger a function to wich we pass the $event paragram containing the info sent from the child, now we are only missing a function to process this info in the parent.component.ts

```js
functionX( arg: Type ) {
  /* Add your code here */
}
```

