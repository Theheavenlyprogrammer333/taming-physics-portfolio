document.addEventListener("DOMContentLoaded", function () {
  // Code for #p2
  const para2 = document.querySelector('#p2');
  para2.addEventListener("mouseover", function () {
      this.style.backgroundColor = "red"; // Change background color on hover
  });
  para2.addEventListener("mouseout", function () {
      this.style.backgroundColor = ""; // Reset to the default background color
  });

  const gravi1 = document.getElementById('gravi'); // Remove the '#' from the ID selector


  // Declare backgroundc outside the event listeners
 
  gravi1.addEventListener("mouseover", function () {
      backgroundc.style.backgroundColor = " #ffd819";
  });
  
  gravi1.addEventListener("mouseout", function () {
      // Reset the background color when the mouse leaves the element
      backgroundc.style.backgroundColor = "";
  });
});
 
  const backgroundc = document.body;
  const magnetic = document.getElementById('waves');

  magnetic.addEventListener("mouseover", function () {
      backgroundc.style.backgroundColor = "#ffba08";
  });

  magnetic.addEventListener("mouseout", function () {
      backgroundc.style.backgroundColor = "";
  });


 const rotational = document.getElementById('rotational')

 rotational.addEventListener("mouseover",function(){
  backgroundc.style.backgroundColor=" #88857d";
 })
 
 rotational.addEventListener("mouseout",function(){
  backgroundc.style.backgroundColor="";
 });

 const magnet=document.getElementById('magnet')
 magnet.addEventListener("mouseover",function(){
  backgroundc.style.backgroundColor="#343a40";
 })
 magnet.addEventListener("mouseout",function(){
  backgroundc.style.backgroundColor=""; 
 })
 const system = document.getElementById('system');
 system.addEventListener("mouseover",function(){
  backgroundc.style.backgroundColor="#219ebc";
 })
 
 system.addEventListener("mouseout",function(){
  backgroundc.style.backgroundColor="";
 })

 const kepler =document.getElementById('kepler')

 kepler.addEventListener("mouseover",function(){
  backgroundc.style.backgroundColor="#ff006e";
 })

 
 kepler.addEventListener("mouseout",function(){
  backgroundc.style.backgroundColor="";
 })
 


 