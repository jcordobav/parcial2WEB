# parcial2WEB

## Ejecución:

Pasos para la ejecución de la aplicación:
1.	Ejecutar el back de la aplicación en el puerto 3000. El código se encuentra en el repositorio de GitHub: https://github.com/isis3710-uniandes/Parcial2_BE_S2 
2.	Ejecutar el front de la aplicación en el puerto 3001. El código se encuentra en el repositorio público de GitHub: https://github.com/jcordobav/parcial2WEB.git 
3.	Al ejecutar el front de la aplicación abrirá el navegador predeterminado por su computador.
4.	En el campo del correo electrónico se debe poner un correo electrónico valido, de lo contrario aparecerá el siguiente mensaje: “El formato de email no es el correcto”
5.	En el campo de la contraseña se debe poner una contraseña con más de 6 caracteres, de lo contrario aparecerá el siguiente mensaje: “La contraseña debe tener al menos 6 caracteres”
6.	Luego de ingresar los campos correctamente aparecerán los libros.
7.	Para ver el detalle de un libro solamente se debe presionar la tarjeta del libro.
8.	Si el rol del usuario es administrador se mostrara los campos con textos editables
9.	Si el rol del usuario es diferente a administrador se mostrara los campos con texto puros.

## Decisiones:

Se tomó la decisión de crear 4 componentes:
1.	Login: este es el componente que se muestra cuando se abre la página. En este componente se hacen las verificaciones del correo electrónico y de la contraseña.
2.	Galery: este es el componente en el que se muestran todos los libros. 
3.	Card: este es el componente que se encarga de mostrar los aspectos básicos del libro como el título, el ISBN y la imagen.
4.	CardDetail: este es el componente que se muestra a la parte derecha de la aplicación y es el encargado de verificar el rol del usuario y mostrar el detalle del libro, dependiendo del rol del usuario.

Para la internacionalización de la aplicación se tomó la decisión de traducir la página al español y al inglés. Esto debido a que la pagina será usada en Colombia y el idioma oficial es el español y el inglés es uno de los idiomas que más se hablan en el mundo.
