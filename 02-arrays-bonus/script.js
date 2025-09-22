const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers (provate a trovare i metodi e poi provate ad implementare la soluzione con il ciclo for)
const reversedTeachers = teachers.reverse();
console.log(reversedTeachers)

const ReversedTeachers2 = []

for( let i = teachers.lenght -1; i<=0; i++){
    reversedTeachers2.push(teachers[i])
    console.log(reversedTeachers2)
}

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = teachers.filter((name)=> name.length >= 5)
console.log(longNames)

// 3. Rimuovi 'Ed' dall'array teachers (fatelo con un metodo e poi provate a farlo anche con il ciclo for)


for(let i = 0; i < teachers.length; i++){
    if(teachers[i] === "Ed"){
     console.log(teachers[i])
    }
}

const teachersEd = teachers.indexOf('Ed')
const newArray = teachers.splice(teachersEd, 1)
console.log(newArray)


