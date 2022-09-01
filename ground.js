class Ground{
    constructor(x,y,w,h){
        var groundOption ={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h,groundOption);
        World.add(world,this.body);
        this.w = w
        this.h = h
    }
   display(){
    var pos = this.body.position;
    fill("red")
    rect(pos.x,pos.y,this.w,this.h);
   }
}