document.getElementById('botonEntrada').addEventListener('click', function() {
   document.querySelector('.calculadora').style.display = 'grid'; // Muestra la calculadora
   document.getElementById('contenedorBotonEntrada').style.display = 'none'; // Oculta el botón
});

const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
   boton.addEventListener("click",()=> {
      const botonApretado = boton.textContent;
      if(boton.id === "c")
      {
         pantalla.textContent = "0";
         return;
      }

      if(boton.id === "borrar")
      {
         if(pantalla.textContent.length === 1 || pantalla.textContent === "ERROR!!")
         {
            pantalla.textContent = "0";
            return;
         }else {
         pantalla.textContent = pantalla.textContent.slice(0, -1);
         return;
      }
      }

      if(boton.id === "igual")
      {
         try
         {
            pantalla.textContent = eval(pantalla.textContent);
         }
         catch
         {
            pantalla.textContent = "ERROR!!"
         }
         return;
      }
      if(pantalla.textContent === "0" || pantalla.textContent === "ERROR!!")
      {
         pantalla.textContent = botonApretado
      }
      else 
      {
         pantalla.textContent += botonApretado;
      }
      
   })
})
document.getElementById('botonEntrada').addEventListener('click', function() {
   document.querySelector('.calculadora').style.display = 'grid'; // Muestra la calculadora
   document.getElementById('contenedorBotonEntrada').style.display = 'none'; // Oculta el botón de entrada
   document.querySelector('.botonSalida').style.display = 'block'; // Muestra el botón de salida
});

document.querySelector('.button-salida').addEventListener('click', function() {
   document.querySelector('.calculadora').style.display = 'none'; // Oculta la calculadora
   document.getElementById('contenedorBotonEntrada').style.display = 'flex'; // Muestra el botón de entrada
   document.querySelector('.botonSalida').style.display = 'none'; // Oculta el botón de salida
});

document.getElementById('botonEntrada').addEventListener('click', function() {
   // Muestra la calculadora
   document.querySelector('.calculadora').style.display = 'grid';
   // Oculta el botón de entrada
   document.getElementById('contenedorBotonEntrada').style.display = 'none';
   // Muestra el botón de salida
   document.querySelector('.botonSalida').style.display = 'block';
   // Oculta los textos de h1 y h2
   document.querySelector('.contenedor-textos').style.display = 'none';
});

document.querySelector('.button-salida').addEventListener('click', function() {
   // Oculta la calculadora
   document.querySelector('.calculadora').style.display = 'none';
   // Muestra el botón de entrada
   document.getElementById('contenedorBotonEntrada').style.display = 'flex';
   // Oculta el botón de salida
   document.querySelector('.botonSalida').style.display = 'none';
   // Muestra los textos de h1 y h2
   document.querySelector('.contenedor-textos').style.display = 'block';
});

/* MODE  */

document.addEventListener('DOMContentLoaded', function() {
   const switchElement = document.getElementById('input');
   switchElement.addEventListener('change', function() {
       // Seleccionar todos los elementos que necesitan cambiar de estilo
       const botones = document.querySelectorAll('.btn'); // Selecciona todos los botones

       if (this.checked) {
           // Aplicar tema claro
           document.body.classList.add('body-light');
           document.getElementById('botonEntrada').classList.add('boton-circular-light');
           document.querySelector('.button-salida').classList.add('button-salida-light');
           document.querySelector('.efecto-typing').classList.add('efecto-typing-light');
           document.querySelector('.titulo-inicio').classList.add('titulo-inicio-light');
           document.querySelector('.calculadora').classList.add('calculadora-light');
           document.querySelector('.pantalla').classList.add('pantalla-light'); // Añadir estilo claro a la pantalla

           // Aplicar la clase btn-light a todos los botones
           botones.forEach(boton => {
               boton.classList.add('btn-light');
           });
       } else {
           // Revertir al tema oscuro
           document.body.classList.remove('body-light');
           document.getElementById('botonEntrada').classList.remove('boton-circular-light');
           document.querySelector('.button-salida').classList.remove('button-salida-light');
           document.querySelector('.efecto-typing').classList.remove('efecto-typing-light');
           document.querySelector('.titulo-inicio').classList.remove('titulo-inicio-light');
           document.querySelector('.calculadora').classList.remove('calculadora-light');
           document.querySelector('.pantalla').classList.remove('pantalla-light'); // Remover estilo claro de la pantalla

           // Remover la clase btn-light de todos los botones
           botones.forEach(boton => {
               boton.classList.remove('btn-light');
           });
       }
   });
});
