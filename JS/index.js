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

// BOTON PARA INGRESAR A LA CALCULADORA //

function redireccionar() {
   // Aplica la animación de expansión al botón
   var boton = document.getElementById('botonEntrada');
   boton.style.animation = "expandir 0.5s forwards";

   // Espera a que la animación termine para redireccionar
   setTimeout(function() {
       window.location.href = 'file:///C:/Users/Punto%20Digital/Desktop/JeronimoQuintana/PRACTICA/CALCULADORA-JS/index.html'; // Cambia esto por la URL de tu calculadora
   }, 500); // Ajusta este tiempo al de la duración de tu animación
}
// Añade el evento de clic al botón para iniciar la redirección y animación
document.getElementById('botonEntrada').onclick = redireccionar;