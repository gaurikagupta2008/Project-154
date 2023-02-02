AFRAME.registerComponent("game-play",{
    schema:{
        elementId:{type:"string",default:"#coin1"},
    },
    update:function(){
        this.isCollected(this.data.elementId)
    },
    isCollected:function(elementId){
        const element=document.querySelector(elementId)
        element.addEventListener("collect",(e)=>{
            if(elementId.includes("#coin")){
                console.log(elementId+"collected!")
            }
            else if(elementId.includes("#hurdle")){
                console.log(elementId+"collided!")
            }
        });
    }
});
