const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")
const restart = document.getElementById("rest")
const body = document.body;

abrir.addEventListener("click", () =>{
    nav.classList.add("visible");    
   
})

cerrar.addEventListener("click", () =>{
    nav.classList.remove("visible");  
 
})

function refresh(){
    location.reload();
}

function download(){
      this.filePath = "/project 3/cv/CV.pdf";
      document.location.href = this.filePath;
}
