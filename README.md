# Base para proyectos en TypeScript :writing_hand:

Este template esta dirigido a todos aquellos que inician en `TyepScript` un proyecto nuevo. Para usarlo, simplemente tienes hacer un `fork` o usar el botón `use this template`.

## Entorno

Asegurarse de tener instalado `git` . Esto se puede revisar muy facilmente a trevez del comando `git --version` . En caso de no estar instalado, se puede hacer a travez de los siguientes paso

- En linux, a travez del comando `sudo apt install git`.
- En Windows, a travez de la pagina oficial https://git-scm.com/

Procurar tener actualizado `node.js` a la versión `lts`. Si desea asegurarse, puede ejecutar el comando `npm doctor` que le indicara si cumple con los requisitos. Si el comando no se encuentra o `node.js` esta desactualizado, puede instalar `node.js --lts` mediante alguno de los siguientes pasos

- En windows, desde la [pagina oficial](https://nodejs.org/en/), descargando y ejecutando la versión `lts`.
- En Linux, a través de `nvm`.
    - Abrir una terminal y ejecutar alguno de los siguientes comando
      
        ```bash
        curl -o- [https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh](https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh) | bash
        ```
        
        ```bash
        wget -qO- [https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh](https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh) | bash
        ```
        
    - Cerrar la terminal y abrir otra para ejecutar el siguiente comando para verificar la correcta instalación`nvm --version` . Una vez observada la versión, ejecutar el siguiente comando para instalar Node.js
      
        ```bash
        nvm install --lts
        ```


## Instalación y ejecución

- 🛠Para instalar las dependencias ejecutar el siguiente comando `npm install`

- ⚒Para ejecutar el modo playground o repl, ejecutar el siguiente comando `npm run dev`

- 🔧Para traducir el código en `/src` a `JavaScript` , usar el comando `npm run build`

- 🔑Para ejecutar el código con `Node.js`, usar el comando `npm run start`

- 🧪Para ejecutar los test con jest, usar el comando `npm run test`

- 🧪Para ejecutar los test de covertura, usar el comando `npm run test:coverage`

## Características

- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
