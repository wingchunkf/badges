(function showPoints() {

  fetch('https://api.myjson.com/bins/1ftize')
    .then(function (response) {
      return response.json();
    })

    .then(function (myJson) {
   
      let lis = document.querySelectorAll(".iconDiv");     
      let innerIcon = document.querySelectorAll('.fa-3x');     

      for (let i = 0; i < lis.length; i++) {
        
        let clickState = 0; 
        let points = myJson[i].points;

          lis[i].addEventListener("click", function () { 

            if (clickState == 0) {
              clickState = 1;
              innerIcon[i].style.visibility = "hidden";       
              lis[i].textContent = points;   
              lis[i].style.fontSize = "40px";
              lis[i].style.textAlign = "center";  
            
                } else {
                    clickState = 0;           
                    this.style.visibility = "hidden";
                    // I realize reloading the page is a hack, but I was unable
                    // to figure out how to bring the icons back when I clicked on the points 
                    window.location.reload();    
           }   
        });  
      }  
    });
})();