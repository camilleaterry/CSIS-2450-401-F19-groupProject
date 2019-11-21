var enterButton = document.getElementById("enterButton");
enterButton.addEventListener("click",addListAfterClick);

var input = document.getElementById("item");
var quantity = document.getElementById("quantity");

var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

var ItemId = 0;
var itemArray = [];
var itemincart = {"name":"", "id": ""};
itemfordel =[];

function inputLength(){

    return input.value.length;

} 

function listLength(){

    return item.length;

}

function createListElement() {

    var li = document.createElement("li"); // creates an element "li"
    
    li.setAttribute('id', ItemId);
    //li.setAttribute('class', 'itemlist');
    itemArray.push(li);
    console.log(itemArray);
    ItemId++;
    


    li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text

    ul.appendChild(li); //adds li to ul

    input.value = ""; //Reset text input field

    //START STRIKETHROUGH

    // because it's in the function, it only adds it for new items
    function crossOut() {

        li.classList.toggle("done");
        

    }

    li.addEventListener("click",crossOut);

    //END STRIKETHROUGH

    // START ADD DELETE BUTTON

    var dBtn = document.createElement("button");

    dBtn.appendChild(document.createTextNode("X"));

    li.appendChild(dBtn);

    dBtn.addEventListener("click", deleteListItem);

    // END ADD DELETE BUTTON

    //ADD CLASS DELETE (DISPLAY: NONE)

    function deleteListItem(){
    
    li.classList.add("delete")
    // This creates a key value pair
        // for item in cart.  prob don't need to //add the extra lines but leaving it for //now. 
    itemincart.name = li.innerText;
    itemincart.id = li.id;
    
        deleteItem(itemincart.name, itemincart.id);
        
        //itemfordel.push(itemincart);
      //  for (i in itemfordel){
        //    console.log(itemfordel[i]);
        //}
    }
    
}

    //END ADD CLASS DELETE

///////////////////////////////////////////////////////////////////

function addListAfterClick(){
    console.log("method called")
   if (inputLength() > 0) {
       createListElement();   }else{
       alert("Field cannot be empty");
   }}

function addListAfterKeypress() {

    if (inputLength() > 0 && event.which ===13) { //this now looks to see if you hit "enter"/"return"
    
        //the 13 is the enter key's keycode, this could also be display by event.keyCode === 13

        createListElement();
   }
}


input.addEventListener("keypress", addListAfterKeypress);



///////////////////////////////////////////////
// ajax functions

function addItem(){
var file = "create_item.php";
let str = "name=" + name;
str += "&id=" + id;
ajax(str, file);
}   
    

function deleteItem(name,id){
var file = "delete_item.php";

let str = "name=" + name;
str += "&id=" + id;
    console.log(str);
    ajax(str, file);
}
    
function ajax(str, file){
    console.log(file);
         var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        //change this line to get back info from php file
     //document.getElementById("demo").innerHTML = //this.responseText;
    }
  };
  xhttp.open("POST", file, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(str); 
    
}