# Generate a Component

## We have two ways to create a new component:
 
* Create all documents manually and manually add a entry on the `app module`
* Use the cli to add all files and add a entry on the `app module`


On this example we will create a component named `build-card` on a folder called `components` inside our app folder.

The `components` folder is where we will save all out components.

In the future we will have a `services` folder as well where we will save all our services.

### Manual Method :

1. Create a folder named `components` inside of your `app` folder
2. Create a folder named `build-card` inside of your `components` folder
3. Inside `build-card` we need to create 3 files 
    * build-card-component.ts - view model file
    * build-card-component.html - view file
    *  build-card-component.scss - style sheet file
4. On the `app.module.ts`, inside the app folder :
    * Import the Compoment : 
         `import { BuildCardComponent } from './components/build-card/build-card.component';`
    * Add the component to the module declarations.

At this point your app.module.ts file should look like :

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuildCardComponent } from './components/build-card/build-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BuildCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

And your file stucture inside the `app` folder should look like:

```
- app
--- components
----- build-card
------- build-card.component.html
------- build-card.component.scss
------- build-card.component.ts
--- app.component.html
--- app.component.scss
--- app.component.ts
--- app.module.ts
```

Them add this code to your `build-card.component.ts` file

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pks-build-card',
  templateUrl: './build-card.component.html',
  styleUrls: ['./build-card.component.scss']
})
export class BuildCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```


### Angular CLI Method :

Run the command  : 
```bash
ng generate component components/build-card
```

For a shorter version, you can replace `generate` by `g` and `component` by `c`

The result will be :

```bash
ng g c components/build-card
```
After you run this command you will have all the component files created inside the components/build-card directory, and your `app.module.ts` will have a reference to it.

# Anatomy of a Ng Component

We should always have the html code and the styles on separated files.

This files must be referenced inside the decorator `Component` before the class.

Exemple of a decorator :
```ts
@Component({
  selector: 'pks-build-card',
  templateUrl: './build-card.component.html',
  styleUrls: ['./build-card.component.scss']
})
```

* `selector` - name of the html tag ex: `<pks-build-card>teste</pks-build-card>`
* `templateUrl` - relative location of the html template file
* `styleUrl` - relative location of the style sheet file

It's possible to have more properties like Animations or Host Properties.

More Info about Component Decorators on this [Link](https://angular.io/api/core/Component). 