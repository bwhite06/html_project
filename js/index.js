
// document.querySelector("#btn").addEventListener("click", function(event){
   // event.preventDefault();
    
 //   let  x = document.querySelectorAll("body")[0].innerText;


 //   console.log(x);
//
     //   let y = document.querySelector("#search").value;
     //   console.log(y);
   //     let arr = x.split(" ");
    //   console.log(arr)
      //      let searchNew = arr.filter(el  => el.toLowerCase().indexOf(y.toLowerCase())!== -1
        
      //      );


    //        alert(searchNew);
        


 // });
  
 $(function() {
    $('#text-search').bind('keyup change', function(ev) {
        // pull in the new value
        var searchNew = $(this).val();
 
        // disable highlighting if empty
        if ( searchNew ) {
            // highlight the new term
            $('body').highlight( searchNew );
        }
    });
});

    









