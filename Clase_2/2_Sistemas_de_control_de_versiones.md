# Sistemas de control de versiones

Se llama control de versiones a los diversos cambios que se realizan sobre unproducto. Una versión, revisión o edición de un producto, es el estado en el que se encuentra dicho producto en un momento dato de su desarrollo o modificación. Aunque un sistema de control de versiones puede realizarse de forma manual, es muy aconsejable disponer de herramientas que faciliten
esta gestión dando lugar a los llamados sistemas de control de versiones o SVC (del inglés
System Version Control).

***Terminología*** 
> Repositorio ("repository") <br>
El repositorio es el lugar en el que se almacenan los datos actualizados e históricos de cambios.

> Revisión ("revision")<br>
Una revisión es una versión determinada de la información que se gestiona. Hay sistemas que identifican las revisiones con un contador (Ej. subversion). Hay otros sistemas que identifican las revisiones mediante un código de detección de modificaciones.

> Etiqueta ("tag")<br>
Los tags permiten identificar de forma fácil revisiones importantes en el proyecto. Por ejemplo se suelen usar tags para identificar el contenido de las versiones publicadas del proyecto.

> Rama ("branch")<br>
Un conjunto de archivos puede ser ramificado o bifurcado en un punto en el tiempo de manera que, a partir de ese momento, dos copias de esos archivos se pueden desarrollar a velocidades diferentes o en formas diferentes de forma independiente el uno del otro.

> Cambio ("change")<br>
Un cambio (o diff, o delta) representa una modificación específica de un documento bajo el control de versiones. La granularidad de la modificación que es considerada como un cambio varía entre los sistemas de control de versiones.

> Desplegar ("checkout")<br>
Es crear una copia de trabajo local desde el repositorio. Un usuario puede especificar una revisión en concreto u obtener la última. El término 'checkout' también se puede utilizar como un sustantivo para describir la copia de trabajo.

> Confirmar ("commit")<br>
Confirmar es escribir o mezclar los cambios realizados en la copia de trabajo del repositorio. Los términos 'commit' y 'checkin' también se pueden utilizar como sustantivos para describir la nueva revisión que se crea como resultado de confirmar.

> Conflicto ("conflict")<br>
Un conflicto se produce cuando diferentes partes realizan cambios en el mismo documento, y el sistema es incapaz de conciliar los cambios. Un usuario debe resolver el conflicto mediante la integración de los cambios, o mediante la selección de un cambio en favor del otro.

> Cabeza ("head")<br>
También a veces se llama tip (punta) y se refiere a la última confirmación, ya sea en el tronco ('trunk') o en una rama ('branch'). El tronco y cada rama tienen su propia cabeza, aunque HEAD se utiliza a veces libremente para referirse al tronco.

> Tronco ("trunk")<br>
La única línea de desarrollo que no es una rama (a veces también llamada línea base, línea principal o máster).

***Fusionar, integrar, mezclar ("merge")*** 

Una fusión o integración es una operación en la quese aplican dos tipos de cambios en un archivo o conjunto de archivos. Algunos escenarios de ejemplo son los siguientes:<br>
- Un usuario, trabajando en un conjunto de archivos, actualiza o sincroniza su copia de trabajo con los cambios realizados y confirmados, por otros usuarios, en el repositorio.
- Un usuario intenta confirmar archivos que han sido actualizado por otros usuarios desde el último despliegue ('checkout'), y el software de control de versiones integra automáticamente los archivos (por lo general, después de
preguntarle al usuario si se debe proceder con la integración automática, y en algunos casos sólo se hace si la fusión puede ser clara y razonablemente resuelta).
- Un conjunto de archivos se bifurca, un problema que existía antes de la ramificación se trabaja en una nueva rama, y la solución se combina luego en la otra rama.
- Se crea una rama, el código de los archivos es independiente editado, y la rama actualizada se incorpora más tarde en un único tronco unificado.

## Clasificación de control de versiones:
1. ***Locales:*** <br>
Los cambios son guardados localmente y no se comparten con nadie.
![image](https://user-images.githubusercontent.com/30872921/132261493-be59ee1b-060e-4c0e-b4fb-050ddd210b89.png) <br>
Uno de los métodos más utilizados por la gente a la hora de realizar algún tipo de control de versión de sus cambios, consistía en copiar en un directorio de su equipo local el archivo que iba a ser modificado indicando la fecha de modificación, para que en caso de error se supiese cuál era la última versión guardada.
   
2. ***Centralizados:***<br>
Existe un repositorio centralizado de todo el código, del cual es responsable un único usuario. Se facilitan las tareas administrativas a cambio de reducir   flexibilidad, pues todas las decisiones fuertes (como crear una nueva rama) necesitan la aprobación del responsable.<br>
![image](https://user-images.githubusercontent.com/30872921/132262098-67596b57-cfd5-43ec-95d2-c8a483d39b91.png)<br>

En estos sistemas nos encontramos un único servidor que contiene todos los archivos versionados, y los usuarios que forman parte del proyecto se los pueden descargar desde ese servidor centralizado.<br>
Este sistema tiene un problema muy claro, y es que al utilizar un único servidor centralizado, en caso de problema en ese servidor toda la información se podría perder.

3. ***Distribuidos:*** <br>
Cada usuario tiene su propio repositorio. Los distintos repositorios pueden intercambiar y mezclar revisiones entre ellos. Es frecuente el uso de un repositorio, que está normalmente disponible, que sirve de punto de sincronización de los distintos repositorios locales. <br>
![image](https://user-images.githubusercontent.com/30872921/132262712-ec1c41db-094b-437d-90ee-dce1540b1ea1.png)
<br>

Ventajas de sistemas distribuidos

- No es necesario estar conectado para guardar cambios.
- Posibilidad de continuar trabajando si el repositorio remoto no está accesible.
- El repositorio central está más libre de ramas de pruebas
- Se necesitan menos recursos para el repositorio remoto.
- Más flexibles al permitir gestionar cada repositorio personal como se quiera.

