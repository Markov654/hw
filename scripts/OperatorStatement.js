function greetings() {
    // DO NOT CHANGE
    // взимаме въведената от потребителя стойност за град:
    var userTown = document.getElementById("town").value;
     document.getElementById('mql').innerHTML = userTown
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // Task 1: Изпишете в конзолата съдържанието на променливата userTown
  console.log(userTown)

   if(userTown == "София"){
    console.log("Здравей")
   }
   if(userTown == "Париж"){
    console.log("Salut!")
   }
   if(userTown == "Лондон"){
    console.log("Hi!")
   }
  
    
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // Task 2:
    // ако потребителят е избрал 'София', то да се изпише в конзолата:
    // "Здравей!"
    // ако потребителят е избрал 'Париж', то да се изпише в конзолата:
    // "Salut!"
    // ако потребителят е избрал 'Лондон', то да се изпише в конзолата:
    // "Hi!"
    // --> YOUR CODE STARTS HERE <--
    
    
    
    // --> YOUR CODE ENDS HERE <--
  
    // DO NOT CHANGE
    // внимавайте, да не изтриете затварящата '}' фигурна скоба по-долу :)
  }
  
  
  greetings()