
if(localStorage.getItem('loggedin') === 'yes'){
                document.getElementById('user').innerHTML = "Welcome "+ localStorage.getItem('uname');
                //settimeout function removes the session storage before time out and redirects to login page
                setTimeout(function(){ 
                        /*  window.sessionStorage.removeItem("loggedin");
                        window.sessionStorage.removeItem("uname");*/
                        localStorage.removeItem("loggedin");
                        localStorage.removeItem("uname");
                        window.location = "login.html";
                }, 120000);
                
                function removeStorage(){
                        localStorage.removeItem("loggedin");
                        localStorage.removeItem("uname");
                        window.location = "login.html";
                }
                function logout(){
                    var ulog= confirm( "Do you want to logout?"); 
                    if(ulog){
                        /* window.sessionStorage.removeItem("loggedin");
                        window.sessionStorage.removeItem("uname");*/
                        localStorage.removeItem("loggedin");
                        localStorage.removeItem("uname");
                        window.location = "login.html";
                    }
                }
                    
                    display(); // displays the existing tasks from local storage
            
                    //function searchTask() : searches for the task /word entered in the search bar
                    function searchTask() 
                    {  
                        //document.getElementById("searchlist").innerHTML =""; // clears search list
                        var tasks = getItems(); // gets the tasks from local storage
                        var searchList = [];
                        for(let i=0;i<tasks.length;i++){
                            if( document.getElementById('search').value){ // if entered value is not empty search begins
                            searchList = tasks.filter(tasks => { // filter method returns an array of tasks which includes the entered text
                                    return tasks.includes(document.getElementById('search').value);
                                });
                            }
                        }
                            if(searchList){
                                document.getElementById("ulid").innerHTML =""; 
                            for(let i=0;i<searchList.length;i++){ // loop to display search results as list
                                createListElement(searchList[i]); // to display tasks a list
                                    /* let li = document.createElement("li");
                                    let t = document.createTextNode(searchList[i]);
                                    li.appendChild(t);
                                    document.getElementById("searchlist").appendChild(li);*/
                            }
                            }
                        document.getElementById("search").value = ""; // clear the text in the search bar 

                    }
                    //function to add a Task to the list
                    function addTaskFunction() {  
                            document.getElementById("ulid").innerHTML =""; 
                            display();
                            if( document.getElementById('additem').value){
                            var newItem = document.getElementById("additem").value; // gets the entered text into newItem variable
                            var item = getItems(); // gets the tasks list from local storage
                            item.push(newItem); // adds the entered new task to the list
                            localStorage.setItem('todolist', JSON.stringify(item)); // stores in the local storage
                        // function call to create a list element 
                            createListElement(newItem); // to display tasks a list
                            document.getElementById("additem").value = ""; // clear the text field
                        }
                }
                    
                    function getItems(){// gets the tasks from local storage
                    var item = new Array;
                    var itemList = localStorage.getItem('todolist') ;
                    if(itemList !== null){
                        item = JSON.parse(itemList); // converts string type to object (parsing)
                    }
                    return item; // returns the tasks as an array 
                    }

                    function display(){ //displays all the elements in list
                        document.getElementById("ulid").innerHTML =""; 
                        var arrayTask = getItems();
                        if(arrayTask!== null){
                            for(let i=0;i<arrayTask.length;i++){
                                createListElement(arrayTask[i]);// function call to create a list element 
                            }
                        }
                    }

                    function createListElement(listItem){ // creates a list item and appends to the existing
                        let li = document.createElement("li");
                        let t = document.createTextNode(listItem); // creates a text node with task as text and append it to the li
                        li.appendChild(t);
                        //Add close button beside list element
                        let button = document.createElement("button"); // adds close button to the task 
                        let txt = document.createTextNode("x");
                        button.className = "close";
                        button.appendChild(txt);
                        li.appendChild(button); // appends close button to the li
                        document.getElementById("ulid").appendChild(li); // display each task as list element
                        taskClose(); // checks for button close click
                    }
                /*deletes the selected list element in the display and calls 
                    the taskdelete function by passing the index of the task to delete*/
                    function taskClose(){
                        let close = document.getElementsByClassName("close");      
                        for (let i = 0; i < close.length; i++) {
                            close[i].onclick = function() { 
                                    let button = this.parentElement;
                                    button.style.display = "none";  // clears the task from the display
                                    taskdelete(i); //deletes   the task from local storage by passing the index of the task
                                }
                        }
                    }

                    function taskdelete(listindex){ // deletes the task from local storage
                        getItems();
                        var item = getItems();
                        item.splice(listindex,1); // splice method deletes the element with specified index
                        localStorage.setItem('todolist', JSON.stringify(item));
                    }

                    function clearAll() { // clears all the existing items in the list
                        localStorage.removeItem('todolist'); // deletes from the local storage
                        document.getElementById("ulid").innerHTML = ""; 
                   }
} else{
      window.location = "login.html";
}