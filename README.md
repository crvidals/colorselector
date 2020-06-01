# Aplicación colorselector

Esta aplicación está diseñada para consumir los datos de una api y mostrarlos
en una grid. Su función principal es la de mostrar los colores y poder copiar 
con un click el color al portapapeles.

Se aplica el paginador de angular material y además, se establece mostrar 8 registros
por página. Aunque es parametrizable por variable y también desde la misma página. 
Las etiquetas de texto del paginador están en español.

Se genera un pipe customizado para leer las variables y mostrar los resultados
según se requiera en el paginador.

Se agrega una redireccionamiento en caso de ingresar a una url que no corresponda.
Ejemplo: https://colorselector.herokuapp.com/colores redirecciona al index.

# Listado de dependencias y frameworks utilizados
-   Angular                             9.1.6
-   jquery                              3.4.1
-   Bootstrap                           4.4.1
-   node                                13.12.0
-   npm                                 6.14.4
-   Angular CLI                         9.1.5
-   Angular Material                    6.14.4
-   sweetalert2                         9.14.0

# Instalación
Todo el desarrollo de este proyecto fue realizado en Ubuntu 18.04.4 LTS.

```sh
# Instalar Angular Material
-   ng add @angular/material
```

# URLs
-   https://github.com/crvidals?tab=repositories
-   https://colorselector.herokuapp.com/
