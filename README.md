# eu-cookie-law

eucookielaw.js is a lightweight JavaScript library that allows your website to comply with the European cookie law.

<img src="media/screencast.webm" width="700" style="display:block;width:100%;max-width:700px" />

## Installation

1. Download the repository and add these files and folder to your project's directory: **eucookielaw.js**, **eucookielaw.min.js**, and **css/eucookielaw.css**.

2. Include the CSS in the head section of your HTML file:

```
<link rel="stylesheet" href="https://example.com/css/eucookielaw.css">
```

3. Include the minified JavaScript in the head section or before the closing body tag of your HTML file:

```
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.js"></script>
<script type="text/javascript" src="https://example.com/js/eucookielaw.min.js"></script>
```

**Note:** you do not have to include the jQuery library from Google if you already have jQuery added.

4. Finally, you can add the following code in your HTML to enable the Cookie Consent Notice:

```
<script>
    jQuery().euCookie();
</script>
```

## Customizations

```
jQuery().euCookie({
  defaultText:  "We use cookies to improve your experience on our website. By browsing this website, you agree to our use of cookies.",
  okButton:     "Ok",         // Accept button text

  displayMore:  true,         // display more information? (true or false)
  moreButton:   "More Info",  // More button text
  moreInfo:     "Cookies are small text files held on your computer. Some cookies are required to ensure that the site functions correctly, for this reason we may have already set some cookies. They also allow us to give you the best browsing experience possible and help us understand how you use our site.",

  location:     "bottom",     // top or bottom?
  makeSpace:    false,        // push content so cookie info bar does not appear over anything?
  spaceMargin:  "34px",       // By how much to push content
  speedIn:      500,          // slide in speed
  speedOut:     400,          // slide out speed
  delay:        1000,         // time to appear after page load
  float:        true,         // keep it sticky?

  style:        "dark",       // light or dark colour

  cookieExpiry: 90,           // won't appear again for 90 days
  cookieName:   "euCookie", // cookie's name to detect if user has accepted

  ok: function(){}            // function to activate when user clicks on ok
});
```