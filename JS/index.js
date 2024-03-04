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

