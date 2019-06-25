document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form")
    form.addEventListener("submit", function(e){
      e.preventDefault()
      const task = document.querySelector("#new-task-description").value
        const priority_list = document.querySelector("#priority")
        const li = document.createElement("li")
          li.innerHTML = task

          if (priority_list.value === "High"){
            li.style.color = "red"
          }
          if (priority_list.value === "Medium"){
            li.style.color = "yellow"
          }
          if (priority_list.value === "Low"){
            li.style.color = "green"
          }



      const ul = document.querySelector("#tasks")
        ul.appendChild(li)
      const button = document.createElement("button")
        button.innerHTML = "X"
      const idSelector = task.split(' ').join('_')
        button.id = idSelector
        li.appendChild(button)
        const done = document.querySelector(`#${idSelector}`)

        button.addEventListener("click", () => {
          li.remove();
        })

          done.addEventListener("click", function(e){
            e.target.parentElement.remove();
          });//delete click



  })//submit listen end
  function sortList() {
    var list, i, switching, b, shouldSwitch;
    list = document.querySelector("#tasks")
    switching = true
      while (switching) {
        switching = false;
        b = list.getElementsByTagName("li");
        for (i = 0; i < b.length - 1; i++){
            shouldSwitch = false;
          if (b[i].style.color > b[i + 1].style.color ){
            shouldSwitch = true;
            break;
          }//conditional
        }//for loop
        if (shouldSwitch) {
          b[i].parentNode.insertBefore(b[i + 1], b[i]);
          switching = true;
        }//second if
      }//while loop
  }//sort list

  function sayHello(){
    console.log("hello");
  }
//if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase() ){
  const sort = document.querySelector("#sort_button")
  sort.addEventListener("click", sortList)

});

  // your code here

  //var arr = [].slice.call(htmlCollection);
