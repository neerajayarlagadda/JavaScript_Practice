if(localStorage.getItem('loggedin') === 'yes'){

    document.getElementById('user').innerHTML = "Welcome "+ localStorage.getItem('uname');
    document.getElementById('logout').innerHTML = "Logout";   
         setTimeout(function(){ 
              localStorage.removeItem("loggedin");
              localStorage.removeItem("uname");
              window.location = "login.html";
            }, 60000);
    
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
    displayDetails();
    function displayDetails(){
        var fruits = new Array;
        var fruitslist=localStorage.getItem('fruits');
        fruits =JSON.parse(fruitslist);
        for(i=0;i<fruits.length;i++){
            let li = document.createElement("li");
            let t = document.createTextNode(fruits[i].Title); 
            li.appendChild(t);
            li.className='list'
            document.getElementById("ulid").appendChild(li); 
            fruitdesc();
        }
        function fruitdesc(){
               let list = document.getElementsByClassName("list");      
               for (let i = 0; i < list.length; i++) {
                   list[i].onclick = function() {      
                    description(i); //deletes   the task from local storage by passing the index of the task
                     
                    }
               }
           }

    }
    function description(fruitindex){
               var fruitslist=localStorage.getItem('fruits');
               fruits =JSON.parse(fruitslist);
               var w = window.open('', '','width=400,height=400,resizeable,scrollbars');
               w.document.write("<div class= header>")
               w.document.write("<h3 style = text-align:center;background-color:#f9f9f9;>"+fruits[fruitindex].Title+"</h3>");
               w.document.write("<p style = text-align:center;background-color:#f9f9f9;>"+fruits[fruitindex].Description+"</p>"); 
                w.document.write('<img width=100%; background-color:#f9f9f9; alt=IMAGE src='+fruits[fruitindex].Image+'>');
                w.document.write("</div>");
                w.document.close();

                /* var iframe = document.createElement('iframe');
                iframe.setAttribute('style',"border:none;text-align:center;background-color:#f9f9f9;");
                iframe.setAttribute('src',fruits[fruitindex].Image);
                iframe.setAttribute('height',"300px");
                iframe.setAttribute('width',"100%");     
                document.body.appendChild(iframe); */
                
               /*var w = window.open('', '','width=400,height=400,resizeable,scrollbars');
                w.document.write("<h3>"+fruits[fruitindex].Title+"</h3>");
                w.document.write("<p>"+fruits[fruitindex].Description+"</p>"); 
                var iframe = w.document.createElement('iframe');
                iframe.setAttribute('style',"border:none;align:center;background-color:#f9f9f9;");
                iframe.setAttribute('src',fruits[fruitindex].Image);
                iframe.setAttribute('height',"300px");
                iframe.setAttribute('width',"100%");     
                w.document.body.appendChild(iframe); 
                w.document.write("</div>"); 
               w.document.close();*/
              
              
    }
   
}
else{
    window.location = "login.html";
}