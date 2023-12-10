let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
  let item = document.createElement("li");
  item.innerText = input.value;



let deltebtn = document.createElement("button");
deltebtn.innerText = "delete";
deltebtn.classList.add("delete");


  item.appendChild(deltebtn);
  ul.appendChild(item);
 input.value = "";
})


ul.addEventListener("click",function(event){
 if(event.target.tagName == 'BUTTON'){
  let listItem = event.target.parentElement;
  listItem.remove();
 }
})
 


