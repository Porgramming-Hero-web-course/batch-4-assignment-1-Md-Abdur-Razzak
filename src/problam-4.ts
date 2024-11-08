type Circle = {
    shape:"circle",
    radius:number
}
type Rectangle = {
    shape:"rectangle",
    width:number,
    height:number
}

type Shape = Circle | Rectangle

const isCircle = (shape:Shape):shape is Circle=>{
    return shape.shape === "circle"
}
const isRectangle = (shape:Shape):shape is Rectangle=>{
    return shape.shape === "rectangle"
}

const calculateShapeArea = (shape:Shape):number | string =>{
    if(isCircle(shape)){
        const area = Math.PI*shape.radius*shape.radius
        return parseFloat(area.toFixed(2)); 
    }else if (isRectangle(shape)) {
        return shape.width*shape.height
    }
    else{
        return "Not match the Circle and Rectangle"
    }
}
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
const rectangleArea = calculateShapeArea({ shape: "rectangle", width: 4, height: 6 });
//console.log({rectangleArea,circleArea});