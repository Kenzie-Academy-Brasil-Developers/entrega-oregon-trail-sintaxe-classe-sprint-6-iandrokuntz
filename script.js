class Traveler{
    constructor(name){

        this.name = name
        this.food = 1  // inicia com 1 de comida
        this.isHealth = true // saudavel is true --- doente is false

    }
    
    hunt(){

        this.food += 2
    }

    eat(){

        if(this.food > 0){
            
            this.food -= 1

        }else if(this.food === 0){

            this.isHealth = false
        }
    }
}

    // let ian = new Travaler("ian", 1, true)
    
    // ian.hunt()
    // ian.eat()

    // let kenzer = new Traveler("kenzer", 1, true)

    // kenzer.hunt()
    // kenzer.eat()


class Wagon{
    constructor(capacity){
        
        this.capacity = capacity // determina a quantidade máxima de passageiros que cabe na carroça
        this.passenger = [] // lista de passageiros
    }

    get availableSeatCount(){

        let sobrando = this.capacity - this.passenger.length

        if(sobrando <= 0){
            return 0

        }return sobrando
    }


    join(passenger){
        

        this.capacity = this.availableSeatCount

        if(this.capacity > 0){
            
            this.passenger.push(passenger)
            
        }
    }

    shouldQuarantine(){
        
        for(let i = 0; i < this.passenger.length; i++){

            if(this.passenger[i].isHealth === false){      
            return true

        }
    }return false
}
    get totalFood(){

        let totalComida = 0

        for(let i = 0; i < this.passenger.length; i++){

            totalComida = totalComida + this.passenger[i].food 

        }return totalComida
    }
}



// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
 
console.log(`${wagon.availableSeatCount} should be 2`);
 
wagon.join(henrietta);
console.log(`${wagon.availableSeatCount} should be 1`);
 
wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.availableSeatCount} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)
 
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood} should be 3`);