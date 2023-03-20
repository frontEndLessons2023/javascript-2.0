//FETCH
fetch("http://getpost.itgid.info/index2.php?auth=37A38D7d5b44Dd6D856478D8&action=1")
.then(data => data.text())
.then(data => {
    console.log(data);
});

// Example POST method implementation:
    // Default options are marked with *
    fetch("http://getpost.itgid.info/index2.php", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        //"Content-Type": "application/json",
         'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: "auth=37A38D7d5b44Dd6D856478D8&action=1", // body data type must match "Content-Type" header
    })
    .then(response => response.text())
    .then(response => {
        console.log(response)
    })













