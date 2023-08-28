![Alt text](src/favicon.ico)

[Title](src/app/app.component.ts)

<p>using Angular Material</p>


----------
###### API aplikacji bazuje na stronie....Wymagane jest klucz dostępu do potalu.W wersji produkcyjnej potrzebna jest warstwa backendu udostępniająca klucz dostepu. 
#### development mode
##### Must create `env.ts` file and import it in `enviroment.ts`
##### `env.ts`
```typescript
export const  env = {
    API_KEY: "your_api_key",
}
```
----------
----------
### Angular Material
#### [Angular Material page](https://getbootstrap.com/)
```shell
ng add @angular/material
```
### Bootstrap
#### [Bootstrap page](https://getbootstrap.com/)
#### [how add bootstrap](https://efficientcoder.net/add-bootstrap-angular-14/)
```shell
npm install bootstrap
npm install jquery
```

`angular.json`

```json
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          ...
          "options": { 
                ...
            "styles": [
              "src/styles.scss",
              "node_modules/bootstrap/dist/css/bootstrap.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.js",
              "node_modules/bootstrap/dist/js/bootstrap.js"
            ]
          },
          ...
        }
      }
```
### ng-Bootstrap
#### [ng bootstrap page](https://ng-bootstrap.github.io/#/home)
```shell
npm install @ng-bootstrap/ng-bootstrap
```
### ngx-Bootstrap
#### [ngx bootstrap page](https://valor-software.com/ngx-bootstrap/#/)
```shell
npm install ngx-bootstrap
```
----------
# Compodoc documentation
#### [compodoc page](https://compodoc.app)

```shell
ng add @compodoc/compodoc
```
or
```shell
npm install --save-dev @compodoc/compodoc
```

**A:** `Readme.md show in editor VSCode`
<kbd>Ctl</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd>

**B:** `Color Palette in editor VSCode`
<kbd>Ctl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>

**B:** `Color Palette in editor VSCode`
<kbd>Ctl</kbd>+<kbd>Shift</kbd>+<kbd>O</kbd>

**B:** `Color Palette in editor VSCode`
<kbd>Ctl</kbd>+<kbd>Space</kbd>

----------
----------

# Add other Environment
###### In `environment` folder create file `environment.`*`your_env_name`*`.ts`.
###### Next add in `angular.json` :

```json
{
  "projects": {
    "proj_name": {
      ...
      "architect": {
        "build": {
          ...
          "configurations": {
            ...
            "your_env_name": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kb",
                  "maximumError": "1mb"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "2kb",
                  "maximumError": "4kb"
                }
              ],
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.your_env_name.ts"
                }
              ],
              "outputHashing": "all"
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "configurations": {
            ...
            "your_env_name": {
              "browserTarget": "sN:build:your_env_name"
            }
          },
          "defaultConfiguration": "development"
        },
        ...
      }
    }
  }
}
```

and

```console
ng serve -o --configuration=your_env_name
```

----------
----------
dsgsdghfdshgfdsh
> gdgdfhgdfhfdh
```javascript
dgdsgdsgdsg
```
$$
dgdsgdsdgdsgdsg
> fhdfhdhd
$$



~~gsgsdgdsgdsgdsg~~
| Column1    | Column2    | Column3    |
|---------------- | --------------- | --------------- |
| Item1.1    | Item2.1    | Item3.1    |
| Item1.2    | Item2.2    | Item3.2    |
| Item1.3   | Item2.3   | Item3.3   |
| Item1.4   | Item2.4   | Item3.4   |

- [x] yes i do
- [ ] text
- [ ] text
- [ ] text
- [ ] text
https://stackoverflow.com/questions/32703317/how-to-activate-markdown-user-snippets-in-visual-studio-code

#### create user snippets
File>Preferences>Configure User Snippets>$`your file name`$.json

#### create user markdown snippets
File>Preferences>Configure User Snippets>markdown.json

dsgdgdfg <sub>fdsafasf</sub>



