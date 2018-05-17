/*
* eucookielaw.js
* © 2018 Finbarrs Oketunji
* www.finbarrs.co
*
* The EU Internet Handbook: http://ec.europa.eu/ipg/basics/legal/cookies/index_en.htm
*
* Version 1.0
*
*/

//the semi-colon before the function is an invokes a preventative measure against concatenated plugins and/or script not closed properly.
;(function ( $, window, document, undefined ) {

    // Create the defaults once
    var pluginName = "euCookie",
        defaults = {
            defaultText:  "We use cookies to improve your experience on our website. By browsing this website, you agree to our use of cookies.",
            okButton:     "Ok",         // Accept button text

            displayMore:  true,         // display more information?
            moreButton:   "More Info",  // More button text
            moreInfo:     "Cookies are small text files held on your computer. Some cookies are required to ensure that the site functions correctly, for this reason we may have already set some cookies. They also allow us to give you the best browsing experience possible and help us understand how you use our site.",
            moreURL:      "",           // link user to a URL on clicking more info

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

        };

    // The actual plugin constructor
    function Plugin( options ) {
        this.options = $.extend( {}, defaults, options );

        // Stop the script execution early if it is not going to be showed
        if(!document.cookie.indexOf(this.options.cookieName)){
          return false;
        }

        this._defaults = defaults;
        this._name = pluginName;

        this.create(); // create the HTML output
    }

    Plugin.prototype.create = function() {

      if(this.options.displayMore && this.options.moreURL == ""){
        var euCookieMore = '<div id="eu-cookie-more-info"><div id="eu-cookie-info-container"><a id="eu-cookie-more-text-close" href="#">X</a><div id="eu-cookie-more-text">' + this.options.moreInfo +'</div><div style="clear:both;"></div></div></div>';
        var moreButton = '<a class="eu-cookie-button" id="eu-cookie-button-more" href="#eu-cookie-more-info">' + this.options.moreButton + '</a>';
      } else if(this.options.moreURL) {
        var euCookieMore = '';
        var moreButton = '<a class="eu-cookie-button" id="eu-cookie-button-more" href="'+ this.options.moreURL +'">' + this.options.moreButton + '</a>';
      } else {
        var euCookieMore = '';
        var moreButton = '';
      }

      var euCookieMain = '<div id="eu-cookie-container-box"><div id="eu-cookie-container"><div id="eu-cookie-message">' + this.options.defaultText + '</div><div id="eu-cookie-action" style="float:right;"><a class="eu-cookie-button" id="eu-cookie-button-ok" href="#">' + this.options.okButton + '</a>' + moreButton + '</div><div style="clear:both;"></div></div></div>';

      /* ----- Absolute or Fixed? ----- */
      if(!this.options.float && this.options.location == "top"){
        var position = "absolute";
      } else {
        var position = "fixed";
      }

      /* ----- Top or Bottom? ----- */
      if(this.options.makeSpace && this.options.location == "top"){
        $("body").css("margin-top",this.options.spaceMargin);
      } else if(this.options.makeSpace) {
        $("body").css("margin-bottom",this.options.spaceMargin);
      }

      // Append the HTML to the webpage
      $("body").append('<div id="jquery-eu-cookie-script" class="' + this.options.style +' ' + this.options.location + ' ' + position + '">'+ euCookieMore + euCookieMain + '</div>');

      this.action(); // Interaction functions

    };

    Plugin.prototype.action = function() {

      var options = this.options;

      $("#eu-cookie-button-ok").click(function(e) {
        e.preventDefault();

        // set cookie to hide euCookie so the user does not see it again for a set period of time
        document.cookie = options.cookieName + "=accepted;path=/;max-age=" + 60 * 60 * 24 * options.cookieExpiry; // multiply to get days

        $("#jquery-eu-cookie-script").slideUp(options.speedOut);

        options.ok.call(options); // run custom function when use accepts the notification
      });

      if(!options.moreURL){
        $("#eu-cookie-button-more").click(function(e) {
          e.preventDefault();
          $("#jquery-eu-cookie-script #eu-cookie-more-info").slideToggle(options.speedIn);
        });
      }

      $("#eu-cookie-more-text-close").click(function(e) {
        e.preventDefault();
        $("#jquery-eu-cookie-script #eu-cookie-more-info").slideUp(options.speedOut);
      });

      // read cookie value
      function getCookie(name) {
        var re = new RegExp(name + "=([^;]+)");
        var value = re.exec(document.cookie);
        return (value != null) ? unescape(value[1]) : null;
      }

      // Only run if user has not accepted the notice before
      if(getCookie(options.cookieName) != "accepted"){ // double check
        $("#jquery-eu-cookie-script").delay(options.delay).slideDown(options.speedIn);
      }

    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
      new Plugin( options );
    };

})( jQuery, window, document );

