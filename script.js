// 1.Class movie
/*class Movie
{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating
        
        if(rating==undefined||null){
            this.rating="PG"
        }else{
            this.rating=rating
        }
    }
    

    getPG(arr){
        console.log(arr)
        let pgResult=[]
        for(var i=0;i<arr.length;i++){
            if(arr[i].rating=="PG"){
                pgResult.push(arr[i])
            }
        }
        console.log(pgResult)
        
    }

}
let film1=new Movie("Casino Royale","Eon Productions","PG­13")
let film2=new Movie("Avengers : Endgame","Marvel Productions")

const array=[film1,film2]
film1.getPG(array)*/


//2. Class Circle
/*class Circle
{
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }

    getRadius(){
        console.log(`Radius of Circle is: ${this.radius}`)
    }

    getColor(){
        console.log(`Color of Cicle is: ${this.color}`)
    }

    getArea(){
        const pi = 3.14;
        console.log(`Area of Circle is: ${pi*(this.radius*this.radius)}`)
    }

    getCircumference(){
        const pi = 3.14;
        console.log(`Circumference of circle is: ${2*pi*this.radius}`)
    }

}

let circle = new Circle(2.0,"black");

circle.getRadius();
circle.getColor();
circle.getArea();
circle.getCircumference();*/

//3. Write a “person” class to hold all the details.
/*class info
{
    constructor(name,age,DOB,email,location,education){
        this.name=name,
        this.age=age,
        this.DOB=DOB,
        this.email=email,
        this.location=location,
        this.education=education
    }
}
let user=new info ("Ranga",24,"08/12/1999","srn12666@gmail.com","Chennai","BE CSE")
console.log(user)

console.log(`Hi I am ${user.name}, my age is ${user.age}, I am a  ${user.education} graduate and I love watching Animes.`)*/

// 4. Write a class to calculate uber price
/*class 
{
    constructor(km){
        this.km=km,
        this.price=km*2
        // console.log(this.km,this.price)
    }
    getPrice(){
        console.log(`Ride cost is ${this.price}`)
    }
}
let ride=new Uber(10)
ride.getPrice()*/