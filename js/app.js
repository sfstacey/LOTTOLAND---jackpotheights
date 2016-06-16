// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        jquery:'https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min',
        waypoints:'jquery.waypoints.min',
        ScrollMagic: 'ScrollMagic',
        debugScrollMagic:'plugins/debug.addindicators',
        TimelineLite:'plugins/timelinelite.min',
        TimelineMax:'plugins/timelinemax.min',
        TweenLite: 'plugins/tweenlite.min',
        TweenMax:'plugins/tweenmax.min',
        animationgsap:'plugins/animation.gsap',
        app: '../app',
        /*
        skrollr:'skrollr.min',
        skrollr_stylesheets:'skrollr.stylesheets',*/
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main']);