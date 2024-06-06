const addList = async () => {    
    await fetch("./assets/js/addList.json").then(response => {
        return response.json();
    }).then(jsondata => {
      
      var z = localStorage.getItem("tokenByUser")
      if(z){
        z=JSON.parse(z)
        jsondata = z.concat(jsondata)
      }
      //console.log(jsondata)
      
    
        var table = document.getElementById("table1");
        table.innerHTML =""
        for(var i = 0;i < jsondata.length;i++ ){
            // Create an empty <tr> element and add it to the 1st position of the table:
                var row = table.insertRow(i);
    
            // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);            
                
    
                cell2.innerHTML = jsondata[i].tokenName;
                cell1.innerHTML = "";
                
    
                /////////////////////////////////////
                var img = document.createElement('img');
                img.src = jsondata[i].tokenImage
                cell1.appendChild(img)
    
                /////////////////////////////////////
                
          //localStorage.setItem(jsondata[i].tokenName, jsondata[i])
    
                console.log(jsondata[i])
    
        }
    })
    addRowHandlers()
    }
    
    
    
    function addRowHandlers() {
        var table = document.getElementById("table1");
        var rows = table.getElementsByTagName("tr");
        //console.log(rows.length)
        for (i = 0; i < rows.length; i++) {
          var currentRow = table.rows[i];
          var createClickHandler = function(row) {
            return function() {
              var name = row.getElementsByTagName("td")[1];
              var image = row.getElementsByTagName("td")[0];
              var contractAddress = row.getElementsByTagName("td")[2];
              //console.log(name.innerHTML, image.innerHTML, contractAddress.innerHTML)
              //var id = cell//cell.innerHTML;
              //alert("id:" + id);
              updateUpperBtn(name.innerHTML, image.innerHTML)
            };
          };
          currentRow.onclick = createClickHandler(currentRow);
        }
      }
      
    

      function updateUpperBtn(name, image) {
        // myCls()
        var regex = /(?<=\")(.*?)(?=\")/ ;
        var url = regex.exec(image)
        //console.log(url[0])
    
        document.getElementById('message').innerHTML = name
        document.getElementById('myImage').src = url[0]
        displayUpperModal()
        // try{
        //   updateTokenBal()
        // }catch(e){
        //   console.log(e)
        // }
        //localStorage.setItem("uppperSwapSelection", name)

      }
      
     