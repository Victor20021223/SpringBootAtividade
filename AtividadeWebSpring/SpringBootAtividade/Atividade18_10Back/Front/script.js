function postClients(){
    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "http://localhost:8080/clients", true);
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.setRequestHeader("Content-Type", "application/json");

    let client = {
        "name" : document.getElementById("name").value,
        "lastname" : document.getElementById("lastname").value,
        "document" : document.getElementById("document").value
    };

    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && xhttp.status == "200"){
            console.log(xhttp.responseText);
            alert("Sucess!!");
        }
    }
    xhttp.send(JSON.stringify(client));
}

function getClients(){
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:8080/clients", true);
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.setRequestHeader("Content-Type", "application/json");

    xhttp.onload = function(){
        if(xhttp.readyState == 4 && xhttp.status == "200"){
            var list = JSON.parse(xhttp.responseText);
            var table = document.getElementById("client");

            for(var i=0; i < list.length; i++){
                var client = list[i];
                var row = document.createElement("tr");

                var nameCell = document.createElement("td");
                nameCell.textContent = client.name;

                var lastnameCell = document.createElement("td");
                lastnameCell.textContent = client.lastname;

                var documentCell = document.createElement("td");
                documentCell.textContent = client.document;

                row.appendChild(nameCell);
                row.appendChild(lastnameCell);
                row.appendChild(documentCell);

                table.appendChild(row);
            }
        }
    }
    xhttp.send();
}