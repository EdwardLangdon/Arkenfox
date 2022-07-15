//My Overrides for Arkenfox

// Keeps my Browsing History from being deleted on exit
user_pref("privacy.clearOnShutdown.history", false);   // [DEFAULT: true]

//Enable Caching on Disk
user_pref("browser.cache.disk.enable", true); // [DEFAULT: True]
// Arkenfox uses Cache on Memory (RAM) which takes up a lot of memory and makes firefox laggy. You can use this feature if you have a
// PC with about 16GB of RAM.

// Startup page
user_pref("browser.startup.page", 1);
user_pref("browser.startup.homepage", "about:home");
user_pref("browser.newtabpage.enabled", true); // Sets Startup page to about:home instead of a Blank page

//Disables RFP and letterboxing
user_pref("privacy.resistFingerprinting", false);
user_pref("privacy.resistFingerprinting.letterboxing", false);

//Disables website reading battery staus of your Device
user_pref("dom.battery.enabled", true);

//Forces media decoding using Hardware
user_pref("media.hardware-video-decoding.force-enabled", true);

//System Alerts
user_pref("alerts.useSystemBackend", true); //Uses native System notifications instead of default one.

//Enable Keyword Searching
user_pref("keyword.enabled", true);

//Disables Prompt for saving Passwords on sites.
user_pref("signon.rememberSignons", false);

//Disables Pocket Extension
user_pref("extensions.pocket.enabled", false);

//Enables launching of Windows Store from links
user_pref("network.protocol-handler.external.ms-windows-store", true);

//Uses Default OCSP - Using the above functiion often gives error while loading webpages - Will be fixed when brought into upstream
user_pref("security.OCSP.require",false); // [DEFAULT : FALSE]

//Disables WebRTC
user_pref("media.peerconnection.enabled", false); //[DEFAULT : TRUE]

//Enables UserChrome.css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("svg.context-properties.content.enabled", true);
user_pref("layout.css.color-mix.enabled", true);

//Edgefox CSS - Preferences
user_pref("uc.tweak.force-tab-colour", true);
user_pref("uc.tweak.remove-tab-separators", true);
user_pref("uc.tweak.show-tab-close-button-on-hover", true);
user_pref("security.insecure_connection_text.enabled", true);	
user_pref("security.insecure_connection_text.pbmode.enabled", true);