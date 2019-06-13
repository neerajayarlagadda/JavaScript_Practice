
if(localStorage.getItem('loggedin') === 'yes'){

    document.getElementById('user').innerHTML = "Welcome "+ localStorage.getItem('uname');
    document.getElementById('logout').innerHTML = "Logout";   
         setTimeout(function(){ 
             removeStorage();
            }, 200000);
    
    function logout(){
        var ulog= confirm( "Do you want to logout?"); 
        if(ulog){
            removeStorage();
        }
    }
    function removeStorage(){
        localStorage.removeItem("loggedin");
        localStorage.removeItem("uname");
        window.location = "login.html";
    }
    displayDetails();
    function displayDetails(){
        document.getElementById("ulid").innerHTML ="";
        var fruits = getFruits();
        if(fruits){
            for(i=0;i<fruits.length;i++){
                createListElement(fruits[i]);
            }
       }
    }

    function searchTask() 
    {  
        var fruits = getFruits(); // gets the tasks from local storage
        var searchList = [];
        for(let i=0;i<fruits.length;i++){
            if( document.getElementById('search').value){ // if entered value is not empty search begins
                searchList = fruits.filter(fruits => { // filter method returns an array of tasks which includes the entered text
                    return (fruits.Title.includes(document.getElementById('search').value.toLowerCase()))||(fruits.Title.includes(document.getElementById('search').value.toUpperCase()));
                    });
            }
        }
            if(searchList){
                document.getElementById("ulid").innerHTML =""; 
            for(let i=0;i<searchList.length;i++){ // loop to display search results as list
                createListElement(searchList[i]); // to display tasks a list
            }
            }
        document.getElementById("search").value = ""; // clear the text in the search bar 

    }
    function createListElement(listItem){
        let li = document.createElement("li");
        let label = document.createElement("label");
        let t = document.createTextNode(listItem.Title); 
        label.appendChild(t);
        li.appendChild(label);
        label.className='list';
        let button = document.createElement("button"); // adds close button to the task 
        let txt = document.createTextNode("x");
        button.className = "close";
        button.appendChild(txt);
        li.appendChild(button); // appends close button to the li
        document.getElementById("ulid").appendChild(li); // display each task as list element
        fruitdesc();
        taskClose(); // checks for button close click   
    }


    function getFruits(){// gets the items from local storage
        var fruits = new Array;
        var fruitslist=localStorage.getItem('fruits');
        if(fruitslist !== null){
            fruits = JSON.parse(fruitslist); // converts string type to object (parsing)
        }
        return fruits; // returns the items as an array 
    }




        /*deletes the selected list element in the display and calls 
           the taskdelete function by passing the index of the task to delete*/
    function taskClose(){
            let close = document.getElementsByClassName("close");      
            for (let i = 0; i < close.length; i++) {
                close[i].onclick = function() {
                        deleteFlag = 1; 
                        let button = this.parentElement;
                        button.style.display = "none";  // clears the task from the display
                        taskdelete(i); //deletes   the task from local storage by passing the index of the task
                    }
            }
    }

    function taskdelete(listindex){ // deletes the task from local storage
            var fruits = getFruits();
            fruits.splice(listindex,1); // splice method deletes the element with specified index
            localStorage.setItem('fruits', JSON.stringify(fruits));
            displayDetails();
    
    }
    function fruitdesc(){
                    
                    let list = document.getElementsByClassName("list");      
                    for (let i = 0; i < list.length; i++) {
                        list[i].onclick = function() {      
                            description(i); 
                        }
                    }
    }

    function description(fruitindex){
               var fruits = getFruits();
               var w = window.open('', '_self','width=500,height=500,resizeable,scrollbars');
               w.document.write("<body style = background-color:#f9f9f9;");
               w.document.write('<br><br><button  onclick="backToHome()" > Back to Home </button><br><br><br>')
               w.document.write("<div align = 'center'>")
               w.document.write("<h3 style = text-align:center;background-color:#f9f9f9;>"+fruits[fruitindex].Title+"</h3>");
               w.document.write("<p style = text-align:center;background-color:#f9f9f9;>"+fruits[fruitindex].Description+"</p>"); 
               w.document.write('<img  width ="400 "height="400"; alt=IMAGE src='+fruits[fruitindex].Image+'>');
                w.document.write("</div>");
                w.document.write("</body");
                w.document.close();        
    }
    function addTaskFunction(){
        var w = window.open('todo.html', '','width=500,height=500,scrollbars=no,resizable=no');
        // w.location ="todo.html";
    }
    function clearFunction(){
        localStorage.removeItem('fruits');
        document.getElementById("ulid").innerHTML = "";
    }
    function backToHome(){
        window.location ="details.html"
    }
}
else{
    window.location = "login.html";
}