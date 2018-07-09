---
sidebar: auto
---

# Eventos

## Tabla de contenido

[[toc]]

## Curso de programación Julio 2018

Buenas tardes ingenieros, por motivo de las vacaciones, en el club de programación estamos pensando en darles un curso totalmente gratuito sobre algún tema de programación de su gusto.

Igual pueden sugerir un tema. El curso se llevará a finales de este mes o principios del próximo.

El lugar está por definir. Interesados favor de contestar la encuesta adjunta al post.

:nerd_face: :nerd_face: :nerd_face: :nerd_face:
<li><a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeybEJpZroXkWOTHlW5MoDYnso0LIxVdn9S6OdBucsNqTROxw/viewform?usp=fb_send_fb" rel="noopener noreferrer">Haz click para ir a la encuesta</a></li>

::: warning Nota
Solamente se inpartirá un curso. Si existe mucha demanda en algún otro, existirá la posiblidad de dar curso con diferente fecha. 
:::

### Ejemplos de los lenguajes sugeridos

#### Java

``` java
public class Hello {
  public static void main(String[] args) {
    System.out.println("Hola mundo");
  }
}
```

#### HTML
``` html
<HTML>
   <HEAD>
      <TITLE>Hola Mundo</TITLE>
   </HEAD>
   <BODY>
      <P>Hola Mundo</P>
   </BODY>
</HTML>
```
#### CSS
``` css
.hola-mundo {
   color: #fff;
}
```

#### MYSQL
``` sql
create table tutorials_tbl(
   tutorial_id INT NOT NULL AUTO_INCREMENT,
   tutorial_title VARCHAR(100) NOT NULL,
   tutorial_author VARCHAR(40) NOT NULL,
   submission_date DATE,
   PRIMARY KEY ( tutorial_id )
);
```

#### Laravel

``` php
<?php

   namespace App\Http\Controllers;

   use Illuminate\Http\Request;

   use App\Http\Requests;
   use App\Http\Controllers\Controller;

   class Hello extends Controller
   {
      /**
      * Display a listing of the resource.
      *
      * @return Response
      */
      public function index()
      {
         //
      }

      /**
      * Show the form for creating a new resource.
      *
      * @return Response
      */
      public function create()
      {
         //
      }

      /**
      * Store a newly created resource in storage.
      *
      * @param  Request  $request
      * @return Response
      */
      public function store(Request $request)
      {
         //
      }

      /**
      * Display the specified resource.
      *
      * @param  int  $id
      * @return Response
      */
      public function show($id)
      {
         //
      }

      /**
      * Show the form for editing the specified resource.
      *
      * @param  int  $id
      * @return Response
      */
      public function edit($id)
      {
         //
      }

      /**
      * Update the specified resource in storage.
      *
      * @param  Request  $request
      * @param  int  $id
      * @return Response
      */
      public function update(Request $request, $id)
      {
         //
      }

      /**
      * Remove the specified resource from storage.
      *
      * @param  int  $id
      * @return Response
      */
      public function destroy($id)
      {
         //
      }
}
```


#### VueJs
``` vue
<template>
   {{ msg }} <!--Hola Mundo! -->
</template>
<script>
   export default {
      data () {
         return {
            msg: 'Hola Mundo!'
         }
      }
   }
</script>
```