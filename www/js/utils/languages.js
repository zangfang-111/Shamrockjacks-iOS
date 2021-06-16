
/** Auto-generated languages.js */
var AVAILABLE_LANGUAGES = new Array('ca','cs','de','el','en','es','fr','it','nl','pt_BR','ru','tr','zh');

/**
 * Find navigator preferred language
 */
var language = "en";
if(navigator.language) {
    var tmp_language = navigator.language.replace("-", "_");

    try {
        if(AVAILABLE_LANGUAGES.indexOf(tmp_language) >= 0) {
            language = tmp_language
        } else {
            language = tmp_language.split("_")[0];
        }
    } catch(e) {
        language = "en";
    }
}