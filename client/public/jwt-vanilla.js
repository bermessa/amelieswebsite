// make the request to the login endpoint
function getToken() {
  var loginUrl = "https://project-3-playground2-pathayes.c9users.io/login"
  var xhr = new XMLHttpRequest();
  var userElement = document.getElementById('username');
  var passwordElement = document.getElementById('password');
  var tokenElement = document.getElementById('token');
  var user = userElement.value;
  var password = passwordElement.value;

  xhr.open('POST', loginUrl, true);
  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  xhr.addEventListener('load', function() {
    var responseObject = JSON.parse(this.response);
    console.log(responseObject);
    if (responseObject.token) {
      tokenElement.innerHTML = "token received";
      sessionStorage.setItem('token', responseObject.token);
    } else {
      tokenElement.innerHTML = "No token received";
    }
  });

  var sendObject = JSON.stringify({name: user, password: password});

  console.log('going to send', sendObject);

  xhr.send(sendObject);
}

// make the request to the secret API endpoint
function getSecret() {

  var url = "https://project-3-playground2-pathayes.c9users.io/authed"
  var xhr = new XMLHttpRequest();
  const token = sessionStorage.getItem('token');
  var tokenElement = document.getElementById('token');
  var resultElement = document.getElementById('result');
  xhr.open('GET', url, true);
  xhr.setRequestHeader("Authorization", "jwt " + token);
  xhr.addEventListener('load', function() {
    var responseObject = JSON.parse(this.response);
    console.log(responseObject);
    resultElement.innerHTML = this.responseText;
  });

  xhr.send(null);
}