
// document.querySelector("#btn").addEventListener("click", function(event){
   // event.preventDefault();
    
 //   let  x = document.querySelectorAll("body")[0].innerText;


 //   console.log(x);
//
     //   let y = document.querySelector("#search").value;
     //   console.log(y);
   //     let arr = x.split(" ");
    //   console.log(arr)
      //        
      //      );


    //        alert(searchNew);
        


 // });
 $(document).ready(function(){
  
    console.log($('body'));
        
  $('#btn').bind('click', function(ev) {
    ev.preventDefault();
      // pull in the new value
      var searchNew = $("#text-search").val();

      // disable highlighting if empty
      if ( searchNew ) {
       
          // highlight the new term
          $('body')[0].classList.toggle("mark");

          
      }
    
  });

});


    









