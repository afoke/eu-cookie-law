# eu-cookie-law

eucookielaw.js is a lightweight JavaScript library that allows your website to comply with the European cookie law.

<img src="media/screencast.gif" width="600" style="display:block;width:100%;max-width:600px" />

## Installation

1. Download the repository and add these files and folder to the project's directory: **eucookielaw.js**, **eucookielaw.min.js**, and **css/eucookielaw.css**.

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

<script>
    jQuery().euCookie();
</script>