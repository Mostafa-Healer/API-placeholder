let aside = document.getElementById("aside");
let content = document.getElementById("content");


function getposts(userId){
    let request = new XMLHttpRequest();
    request.open("GET","https://jsonplaceholder.typicode.com/Posts?userId="+userId);
    request.responseType = "json";
    request.send();

    request.onload = function(){
        if (request.status >= 200 && request.status < 300){
            let response = request.response ;
            for(post of response){
                content.innerHTML += `
                <div class="post" >
                    <p>${post.title}</p>
                            <hr>
                    <p>${post.body}</p>
                </div>
                `
            }
        }else{
            alert("Error");
        }
    }
}



function getuser(){
    let request = new XMLHttpRequest();
    request.open("GET","https://jsonplaceholder.typicode.com/users");
    request.responseType = "json";
    request.send();

    request.onload = function(){
        if (request.status >= 200 && request.status < 300){
            let users = request.response ;
            for(u of users){
                aside.innerHTML += `
                <div class="User_info" onclick="clicked(${u.id})" >
                    <p>${u.name}</p>
                    <p>${u.email}</p>
                </div>
                `
            }
        }else{
            alert("Error");
        }
    }
}

getposts(1);
getuser();

function clicked(id){
    //  To Delete Old Posts
    content.innerHTML = "" ;
    getposts(id);
    // alert(id)
}