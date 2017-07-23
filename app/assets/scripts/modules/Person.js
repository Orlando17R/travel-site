function Person(fullname, favcolor)
{
    this.name=fullname;
    this.favoritecolor=favcolor;
    this.greet= function() 
    {
        console.log("hola yo soy " +this.name+" y mi color es " +this.favoritecolor+ ".");
    }
}

module.exports = Person;