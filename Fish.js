AFRAME.registerComponent("fish", {
    init: function () {
      for (var i = 1; i <= 10; i++) {
        //id
        var id = `fish${i}`;
  
        //position variables     
        var posX =(Math.random() *100 + (-50));      
        var posY = (Math.random() * 5 + 5);
        var posZ = (Math.random() * 60 + -40);
        var position = { x: posX, y: posY, z: posZ };
        //calling the function
        this.createFish(id, position);
      }
    },
  
    createFish: function(id, position) { 
      const fishes=document.querySelector("#fishmodel");
      var fishEl = document.createElement("a-entity");
      fishEl.setAttribute("id",id);
      fishEl.setAttribute("position",position);
      fishEl.setAttribute("gltf-model","./assets/fish/scene.gltf");
      fishEl.setAttribute("animation-mixer",{});
      fishEl.setAttribute("animation",{
        property:"position",
        to:"100 10 -20",
        loop:"true",
        dur:2000
      });
      fishes.appendChild(fishEl);
    }
  });