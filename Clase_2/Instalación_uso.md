# Instalación  
La instalación de Git es muy fácil de obtener. Desde la web oficial de [Git](https://git-scm.com/) puedes obtener las instrucciones para instalarlo en las diferentes
distribuciones de Linux, Windows y Mac.

## Configuración
Lo primero que deberías hacer cuando instalas Git es establecer tu nombre de usuario y dirección de correo electrónico. Esto es importante porque las confirmaciones 
de cambios (commits) en Git usan esta información, y es introducida de manera inmutable en los commits que envías:
```
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```
Para verificar la configuración realizada ejecutamos el siguiente comando 
```
$ git config --list
```

# Uso Básico de Git para crear un repositorio 

## 1. Crear un proyecto
Creamos un directorio donde colocar el código
```
$ mkdir curso-de-git
$ cd curso-de-git
```
Creamos un archivo index.html que muestre Ejercicio Clase #1.
```
$ touch index.html
```
Generamos la estructura básica
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="background-color: aqua; text-align: center;">
    
    <h1>Ejercicio Clase #1</h1>
</body>
</html>
```
## 2. Inicializar un repositorio 
Para crear un nuevo repositorio se usa la orden git init
```
$ git init 
```

## 3. Añadir la aplicación
Vamos a almacenar el archivo que hemos creado en el repositorio para poder trabajar, después explicaremos para qué sirve cada orden.
```
$ git status
$ git add .
$ git status
$ git commit -m "Creación del proyecto"
```

***Verificar el estado de los cambios***
`git status` muestra el estado de los cambios en el repositorio desde la última versión guardada. En particular, muestra los ficheros con cambios
en el directorio de trabajo que no se han añadido a la zona de intercambio temporal y los ficheros en la zona de intercambio temporal que no se han 
añadido al repositorio.
```
$ git status
```
***Añadir cambios***
Con la orden git add indicamos a git que prepare los cambios para que sean almacenados, para adicionar archivo en git tenemos diferentes comandos:
> git add .
> git add -A
> git add file 
> git add directory
> git add *
> git add *.extensión
    
***Confirmar los cambios***
Con la orden git commit confirmamos los cambios definitivamente, lo que hace que se guarden permanentemente en nuestro repositorio.
> $ git commit -m "mensaje" <br/>
> $ git commit --amend -m "mensaje" cambia el mensaje del último commit por el nuevo mensaje "mensaje".

## 4. Añadir un repositorio remoto
git remote add url crea un enlace a un repositorio remoto ubicado en la dirección url
Cuando se añade un repositorio remoto a un repositorio, Git seguirá también los cambios del repositorio remoto de manera que se pueden
descargar los cambios del repositorio remoto al local y se pueden subir los cambios del repositorio local al remoto.
```
$ git remote add origin url
```
**Ejemplo**
```
$ git remote add origin https://github.com/Garcia091/borrar.git
```

Para verificar -la url del repositorio remoto ejecutamos el siguiente comando 
```
$ git remote -v
```

## 5. Subir cambios a un repositorio remoto
```
$ git push origin nombreRama
```

## 6. Mostrar el historial de versiones de un repositorio
`git log` muestra el historial de commits de un repositorio ordenado cronológicamente. Para cada commit muestra su código hash, el autor, la fecha, la hora y el mensaje asociado.
Este comando es muy versátil y muestra la historia del repositorio en distintos formatos dependiendo de los parámetros que se le den. Los más comunes son:
**--oneline** muestra cada commit en una línea produciendo una
salida más compacta.
**--graph** muestra la historia en forma de grafo.

***Observando los cambios***
> Con la orden **git log** podemos ver todos los cambios que hemos hecho:
```
$ git log
commit fd4da946326fbe8b24e89282ad25a71721bf40f6
Author: Sergio Gómez <sergio@uco.es>
Date:   Sun Jun 16 12:51:01 2013 +0200
```

> También es posible ver versiones abreviadas o limitadas, dependiendo de los parámetros:
```
$ git log --oneline
fd4da94 Se añade un comentario al cambio del valor por defecto
3283e0d Se añade un parámetro por defecto 
efc252e Parametrización del programa
e19f2c1 Creación del proyecto 
```

***Mostrar los datos de un commit `git show`***

`$ git show` muestra el usuario, el día, la hora y el mensaje del último commit, así como las diferencias con el anterior.

`$ git show <commit>` muestra el usuario, el día, la hora y el mensaje del commit indicado, así como las diferencias con el anterior.

***Mostrar las diferencias entre versiones***
Para ver los cambios que se han realizado en el código usamos la orden git diff. La orden sin especificar nada más, mostrará los cambios que no han sido añadidos aún, es decir, todos los cambios que se han hecho antes de usar la orden git add. Después se puede indicar un parámetro y dará los cambios entre la versión indicada y el estado actual. 

`git diff ` muestra las diferencias entre el directorio de trabajo y la zona de intercambio temporal.<br/>
`$ git diff --cached` muestra las diferencias entre la zona de intercambio temporal y el último commit.<br/>
`$ git diff HEAD` muestra la diferencia entre el directorio de trabajo y el último commit.<br/>

***Recuperando versiones anteriores***
Cada cambio es etiquetado por un hash, para poder regresar a ese momento del estado del proyecto se usa la orden `git checkout`

`$ git checkout numeroCommit`

Suele utilizarse para eliminar los cambios en un fichero que no han sido guardados aún en la zona de intercambio temporal, mediante el comando `git checkout HEAD -- <file>`<br/>
Ejemplo:

`$ git checkout e19f2c1`

***Volver a la última versión de la rama master o main***

Usamos git checkout indicando el nombre de la rama:

```
$ git checkout master
```

***Eliminar cambios de la zona de intercambio temporal***
`$ git reset <fichero>` elimina los cambios del directorio de la zona de intercambio temporal, pero preserva los cambios en el directorio de trabajo. Para eliminar por completo los cambios de un fichero que han sido guardados en la zona de intercambio temporal hay que aplicar este comando y después `git checkout HEAD -- <fichero>`.


