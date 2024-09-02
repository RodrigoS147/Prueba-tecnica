## Índice

1. [Propuesta](#6)
2. [Resumen de prueba técnica](#9)
3. [Descripción](#14)
4. [Repositorio GitHub](#17)
5. [PARTE A](#24)
    
    6.1. [Código de salida](#25)
    
    6.2. [Archivo de salida descargable](#28)
    
    6.3. [Instrucciones para ejecutar el código](#31)
    
6. [PARTE B](#59)
    
    7.1. [Código de salida](#60)
    
    7.2. [Archivo de salida descargable](#63)
    
    7.3. [Instrucciones para ejecutar el código](#66)
    
7. [PARTE C](#94)
    
    8.1. [Pasos para ejecutar el proyecto en desarrollo](#96)
    
    8.2. [Pasos para crear el Build](#113)
    
    8.3. [Pasos para permitir la ejecución de scripts](#125)
    

### Propuesta:

[Ejercicio base + Frontend..pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4906b16-10eb-432d-a876-f1f4e13d62ab/7b4b1865-980a-4264-a546-6d9a5fa03c0a/Ejercicio_base__Frontend..pdf)

### Resumen de prueba técnica:

Tiempo total utilizado: 12 horas

Lenguajes de programación: HTML, CSS, JS

Frameworks: React, Express, Node.js

Bibliotecas: FontAwesome, Axios, Serve

Middleware/Servicios: Cors

### Descripción

Este proyecto consiste en analizar una serie de archivos JSON para identificar qué usuarios utilizan cuáles módulos, determinar el conjunto mínimo de usuarios que cubren todos los módulos y visualizar los resultados mediante una aplicación desarrollada en React.

# PARTE A

### Código de salida:

```json
{
  "content_module": {
    "authz.provider_4": [
      "u0.json",
      "u1.json",
      "u12.json",
      "u19.json",
      "u6.json",
      "u7.json"
    ],
    "authz.provider_3": [
      "u10.json",
      "u11.json",
      "u18.json",
      "u2.json",
      "u3.json",
      "u5.json"
    ],
    "authz.provider_2": [
      "u13.json",
      "u15.json",
      "u16.json",
      "u17.json",
      "u8.json",
      "u9.json"
    ],
    "authz.provider_1": [
      "u14.json",
      "u4.json"
    ]
  },
  "auth_module": {
    "authn.provider_3": [
      "u0.json",
      "u11.json",
      "u12.json",
      "u15.json",
      "u7.json"
    ],
    "authn.provider_2": [
      "u1.json",
      "u10.json",
      "u13.json",
      "u14.json",
      "u16.json",
      "u18.json",
      "u6.json",
      "u8.json"
    ],
    "authn.provider_1": [
      "u17.json",
      "u19.json",
      "u3.json",
      "u4.json"
    ],
    "authn.provider_4": [
      "u2.json",
      "u5.json",
      "u9.json"
    ]
  }
}
```

### Archivo de salida descargable:

[ParteA.json](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4906b16-10eb-432d-a876-f1f4e13d62ab/8f8ae314-b0d2-4874-8749-1ca23da88137/ParteA.json)

### Instrucciones para ejecutar el código:

1. Abre el proyecto en Visual Studio Code. Vamos a file y clickeamos la opción open folder seleccionando la carpeta en la que se encuentra la prueba.
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4906b16-10eb-432d-a876-f1f4e13d62ab/39506cec-87f0-4a53-acd5-81a4dd3e586e/image.png)
    
2. Abre la terminal 
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4906b16-10eb-432d-a876-f1f4e13d62ab/8eba8b5f-afc5-440b-a936-32766ac2b786/image.png)
    
3. Situate en la carpeta llamada backend con el siguiente comando: cd backend
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4906b16-10eb-432d-a876-f1f4e13d62ab/8d17f30b-8a56-430f-a34a-f29c881aec88/image.png)
    
4. Una vez situado en el directorio backend veremos esto
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4906b16-10eb-432d-a876-f1f4e13d62ab/1f214a7a-1053-4dee-be2f-be2b3594f35f/image.png)
    
5. Ejecutamos el siguiente comando para instalar las dependencias necesarias
    
    ```bash
    npm install express cors
    ```
    
6. Luego de instalar las dependencias procedemos a ejecutar el servidor. El nombre del archivo ejecutable es index.js y utilizamos el comando node delante para activarlo.
    
    ```bash
    node index.js
    ```
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4906b16-10eb-432d-a876-f1f4e13d62ab/804b0740-a860-4722-848d-bdf12311d2e1/image.png)
    
7. Nos va a avisar que el servidor esta activo en el http://[localhost](http://localhost):3001
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4906b16-10eb-432d-a876-f1f4e13d62ab/c90f05ee-fb51-4235-805c-6bd6b3ef6549/image.png)
    
8. Cuando estemos en el navegador en este [localhost](http://localhost) veremos un mensaje en el cual nos indica que ruta seleccionar si la parte A o B. 
    
    En este caso copiamos la ruta /parteA y la agregamos a la URL. Deberia quedar así: http://[localhost](http://localhost):3001/parteA
    

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4906b16-10eb-432d-a876-f1f4e13d62ab/f75ed6aa-a0bf-4350-bc35-5285df60b8ab/image.png)

1. Modificamos la url 
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4906b16-10eb-432d-a876-f1f4e13d62ab/c0063f2d-a53e-41f9-9c4f-a43ccadf28be/image.png)
    
2. Nos muestra la salida de la parte A
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4906b16-10eb-432d-a876-f1f4e13d62ab/ac617bb5-c557-412a-92cd-55e5ffdbc924/image.png)
    
3. Si activamos la opcion Pretty-print nos lo muestra de una forma más visual para leerlo
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4906b16-10eb-432d-a876-f1f4e13d62ab/b5e48c49-93e2-4e71-bc98-40574ca95be4/image.png)
    
    Siguiendo estos pasos deberias poder visualizar la salida de la Parte A.
    

# PARTE B

### Código de salida:

```json
[
  "User 0",
  "User 10",
  "User 9",
  "User 4"
]
```

### Archivo de salida descargable:

[ParteB.json](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4906b16-10eb-432d-a876-f1f4e13d62ab/28584cf8-d977-4468-915e-530d6eebef63/ParteB.json)

### Instrucciones para ejecutar el código:

1. Abre el proyecto en Visual Studio Code. Vamos a file y clickeamos la opción open folder seleccionando la carpeta en la que se encuentra la prueba.
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4906b16-10eb-432d-a876-f1f4e13d62ab/39506cec-87f0-4a53-acd5-81a4dd3e586e/image.png)
    
2. Abre la terminal 
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4906b16-10eb-432d-a876-f1f4e13d62ab/8eba8b5f-afc5-440b-a936-32766ac2b786/image.png)
    
3. Situate en la carpeta llamada backend con el siguiente comando: cd backend
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4906b16-10eb-432d-a876-f1f4e13d62ab/8d17f30b-8a56-430f-a34a-f29c881aec88/image.png)
    
4. Una vez situado en el directorio backend veremos esto
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4906b16-10eb-432d-a876-f1f4e13d62ab/1f214a7a-1053-4dee-be2f-be2b3594f35f/image.png)
    
5. (Omitir este paso en caso de tener instaladas las dependencias) Ejecutamos el siguiente comando para instalar las dependencias necesarias
    
    ```bash
    npm install express cors
    ```
    
6. Luego de instalar las dependencias procedemos a ejecutar el servidor. El nombre del archivo ejecutable es index.js y utilizamos el comando node delante para activarlo.
    
    ```bash
    node index.js
    ```
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4906b16-10eb-432d-a876-f1f4e13d62ab/804b0740-a860-4722-848d-bdf12311d2e1/image.png)
    
7. Nos va a avisar que el servidor esta activo en el http://[localhost](http://localhost):3001
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4906b16-10eb-432d-a876-f1f4e13d62ab/c90f05ee-fb51-4235-805c-6bd6b3ef6549/image.png)
    
8. Cuando estemos en el navegador en este [localhost](http://localhost) veremos un mensaje en el cual nos indica que ruta seleccionar si la parte A o B. 
    
    En este caso copiamos la ruta /parteB y la agregamos a la URL. Deberia quedar así: http://[localhost](http://localhost):3001/parteB
    

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4906b16-10eb-432d-a876-f1f4e13d62ab/f75ed6aa-a0bf-4350-bc35-5285df60b8ab/image.png)

1. Modificamos la url 
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4906b16-10eb-432d-a876-f1f4e13d62ab/74596b59-8aa8-44df-8d76-4d76c8ae11be/image.png)
    
2. Nos muestra la salida de la parte B
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4906b16-10eb-432d-a876-f1f4e13d62ab/c412d8ea-8fc0-409e-8527-15cde4a01875/image.png)
    
3. Si activamos la opcion Pretty-print nos lo muestra de una forma más visual para leerlo
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4906b16-10eb-432d-a876-f1f4e13d62ab/0bc07f36-5090-4346-b68c-3f9c471abc1f/image.png)
    
    Siguiendo estos pasos deberias poder visualizar la salida de la Parte B.
    

# PARTE C

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4906b16-10eb-432d-a876-f1f4e13d62ab/13bdd392-a707-4995-807e-b749c8d6c7e1/image.png)

### Pasos para ejecutar el proyecto en desarrollo

Para ejecutar el proyecto primero vamos a instalar las dependencias del frontend

1. Descargar node.js desde la siguiente URL: https://nodejs.org/en
2. Abre el proyecto en Visual Studio Code. Vamos a file y clickeamos la opción open folder seleccionando la carpeta en la que se encuentra la prueba.
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4906b16-10eb-432d-a876-f1f4e13d62ab/39506cec-87f0-4a53-acd5-81a4dd3e586e/image.png)
    
3. Abre la terminal 
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4906b16-10eb-432d-a876-f1f4e13d62ab/8eba8b5f-afc5-440b-a936-32766ac2b786/image.png)
    
4. Situate en la carpeta llamada frontend con el siguiente comando: cd frontend
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4906b16-10eb-432d-a876-f1f4e13d62ab/c0251066-f285-4631-af75-bccd5bf6bfa3/image.png)
    
5. Una vez situado en el directorio backend veremos esto
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4906b16-10eb-432d-a876-f1f4e13d62ab/9d147d13-4aab-4cbf-8f10-73bfe56a7c61/image.png)
    
6. Vamos a instalar Axios y fontawesome utilizando el siguiente comando
    
    ```bash
    npm install axios @fortawesome/fontawesome-free
    ```
    
7. Inicia la aplicación para asegurarte de que todo esté funcionando correctamente:
    
    ```bash
    npm start
    ```
    
    Esto abrirá la aplicación en modo de desarrollo en tu navegador en el http://localhost:3000
    

### Pasos para crear el Build

1. Con todo el código revisado nos situamos en el directorio frontend y ejecutamos el siguiente comando 
    
    ```bash
    npm run build
    ```
    
    Esto nos crea una carpeta dentro del directorio frontend llamada build donde podemos ejecutar los archivos de forma optimizada.
    
2. Vamos a usar un servidor local estático, en este caso usaremos serve. Para instalarlo usamos el siguiente comando en la terminal.
    
    ```bash
    npm install -g serve
    ```
    
3.  Para ejecutar el build nos posicionamos en la carpeta build con este comando: cd build
    
    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/a4906b16-10eb-432d-a876-f1f4e13d62ab/fdb50e93-ac7f-4796-984d-37052dd89dee/image.png)
    
4. Luego utilizamos este comando para abrir el servidor
    
    ```bash
    serve -s .
    ```
    

Importante: Si no tenes habilitada la ejecucion de scripts en tu computadora, te dejo los pasos a seguir para poder ejecutarlo.

### Pasos para permitir la ejecución de scripts:

1. Abrir PowerShell como Administrador
2. Ejecuta el siguiente comando para permitir la ejecución de scripts en tu sesión actual de PowerShell:
    
    ```powershell
    Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
    ```
    
    Este comando permite la ejecución de scripts solo durante la sesión actual de PowerShell. Una vez que cierres la ventana de PowerShell, volverá a la configuración predeterminada.
    
3. Ejecutar serve:
    
    ```bash
    serve -s build -l 5000
    ```
    
    Esto ejecuta el build en el puerto 5000 ([http://localhost:5000](http://localhost:5000/))
