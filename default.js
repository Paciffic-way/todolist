

document.getElementById("akceptuje").addEventListener("click", dzialaj);
  var i=0;

  function dzialaj(){
    let y = document.getElementById('inputt').value;
    var para = document.createElement("li");
    var node = document.createTextNode(y);
    para.setAttribute("id", "stworzony"+i);
    para.appendChild(node);
    document.getElementById("neww").appendChild(para);

    var div1 = document.createElement("div");
    var container = document.createElement("div");
    var zrobione = document.createTextNode("ZROBIONE");
    div1.appendChild(zrobione);


    div1.setAttribute("id", "dodaj");
    container.appendChild(div1);
    container.setAttribute("class", "flex-container");
    document.getElementById("stworzony"+i).appendChild(container);
      div1.addEventListener("click", dodawanie);
    i++;
    console.log(i);

    }



      function dodawanie(){

        var targetElement = event.target;
          console.log(targetElement);

       var z = document.getElementById("stworzony"+i);
        var zagniezdzony = document.getElementById("dodaj");
        var zagniezdzony2 = this.parentNode;
        var zagniezdzony3 = zagniezdzony2.parentNode;

        zagniezdzony3.parentNode.removeChild(zagniezdzony3);



      }





  /*let y = document.getElementById('inputt').value;
  document.getElementById("neww").children[0].innerHTML=y; */

  /*

    let list = document.getElementsByName("neww")[0];

    list.getElementsByName("neww")[0].innerHTML = "Milk";




     pierwszy.insertBefore(newDiv, my_div);
document.getElementById("neww").children[0].innerHTML=y;*/


/*
var div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.background = "red";
div.style.color = "white";
div.innerHTML = "Hello";

document.getElementById("main").appendChild(div);*/




/* document.getElementById("akceptuje").addEventListener("click", dzialaj);
  (function dzialaj(){

    var t, tt;
    var y = document.getElementById("neww").children[0].innerHTML=y;


        productList = document.getElementById('inputt').value;
        document.getElementById('neww').appendChild(ul);
        productList.forEach(renderProductList);
        function renderProductList(element, index, arr) {
            var li = document.createElement('li');
            li.setAttribute('class','item');

            neww.appendChild(li);

            t = document.createTextNode(element);

            li.innerHTML=li.innerHTML + element;
        }
    })();  */
