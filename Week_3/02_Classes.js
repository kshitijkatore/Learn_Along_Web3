class Rectangle{
    constructor(width,height,color){
        this.width = width;
        this.height = height;
        this.colour = color;
    }

    area(){
        const area = this.width * this.height;
        return area;
    }

    paint(){
        console.log("Painting with color", (this.color));
    }
}


const rect =new Rectangle(2,4,"Red");
const area = rect.area();
const paint = rect.paint();


// more important classes
// Date
const now = new Date(); // Current date and time
console.log(now.toISOString()); // Output the date in ISO format
console.log(now.getFullYear());

// Map
const map = new Map();
map.set('name', "Alice");
map.set('age', 20);
console.log(map.get('name'));


