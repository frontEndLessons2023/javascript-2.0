//REQUEST GET
let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        myFunction(this.responseText);
    }
    
};
let a = 0;
function myFunction(data){
    a = data;
    console.log(data);
}

//TO SEND REQUEST
// true -> запрос отправляеться синхронно
// false -> запрос отправляется асинхронно
// через XMLHttpRequest не рекомендуеться отправлять запрос ассинхронно но такая возможность есть
//as well not all servers supports this kind of requests becouse of security settings
//can give an error: CORS 
xhttp.open("GET", "http://getpost.itgid.info/index2.php" +
"?auth=37A38D7d5b44Dd6D856478D8&action=1", true);//params
xhttp.send();
//Means that response from server taking more time then this js script running
console.log('step1')
console.log(a);

//REQUEST POST
let xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function(){
    if(this.readyState === 4 && this.status == 200){
        myFunction2(this.readyState);
    }
}
xhttp2.open("POST", "http://getpost.itgid.info/index2.php" +
"?auth=37A38D7d5b44Dd6D856478D8&action=1", true);//params

xhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp2.send('auth=37A38D7d5b44Dd6D856478D8&action=1')
function myFunction2(data){
    console.log('POST');
    a = data;
    console.log(data);
}





