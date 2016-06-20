// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.

//change as required
var $tracking_code = 'UA-28776713-1';

window.GoogleAnalyticsObject = '__ga__';
window.__ga__ = function (){    for (var i=0; i<arguments.length; i++) {
        var arg = arguments[i];
        if (arg.constructor == Object && arg.hitCallback) {
            arg.hitCallback();
        }
    }
};
window.__ga__.q = [['create', $tracking_code, 'auto']];
window.__ga__.l = Date.now();

requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        ga: '//www.google-analytics.com/analytics',
        jquery:'//ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min',
        waypoints:'jquery.waypoints.min',
        ScrollMagic: 'ScrollMagic',
        //debugScrollMagic:'plugins/debug.addindicators',
        TimelineLite:'plugins/timelinelite.min',
        TimelineMax:'plugins/timelinemax.min',
        TweenLite: 'plugins/tweenlite.min',
        TweenMax:'plugins/tweenmax.min',
        animationgsap:'plugins/animation.gsap',
        app: '../app',
    },
    shim: {
        "ga": {
            exports: "__ga__"
        }
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main']);
