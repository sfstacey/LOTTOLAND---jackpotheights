require(['jquery'], function(){
(function($){
  "use strict"

  $(document).ready(function(){

      var $imgpath = 'img/svg/';
      var $moneybutton = $('a.button');
      var $coinpilelink = $('.coinpile a');
      var $landmarks = {
      landmark:
      [
      {name:"Christ The Redeemer",
      cost:"£12,063",
      height:"38"},
      {name:"The London Eye",
      cost:"£42,857",
      height:"135"},
      {name:"The Eiffel Tower",
      cost:"£95,238",
      height:"300"},
      {name:"Empire State Building",
      cost:"£140,635",
      height:"443"},
      {name:"Burj Khalifa",
      cost:"£263,492",
      height:"830"},
      {name:"Table Mountain",
      cost:"£344,444",
      height:"1085"},
      {name:"Mount Everest",
      cost:"£2,809,524",
      height:"8850"},
      {name:"Commercial Aeroplane Flight",
      cost:"£3,483,492",
      height:"10,973"},
      {name:"Felix Baumgartner's Jump",
      cost:"£12,395,328",
      height:"39,045"},
      {name:"Space",
      cost:"£31,675,873",
      height:"99,779"},
      {name:"Euromillions Jackpot",
      cost:"£35,000,000",
      height:"110,250"}]
      }


      require(['ScrollMagic', 'debugScrollMagic', 'TweenMax', 'animationgsap'],function(ScrollMagic){
      var $animation_controller =  new ScrollMagic.Controller();
      loadAnimations(ScrollMagic, $animation_controller);
      });

      require(['waypoints'],function(){
      for(var i=0; i< $('body').find('section').length; i++){
        //get section id
        var $sectionID = $('section')[i].id;
        var $sectionIndex = $('section')[i].className.replace('section', '')
        //make a waypoint for each section
        makeWaypoint($sectionID, $sectionIndex, $landmarks);
        }
      });

      //tooltips

      $coinpilelink.on('click', function(){
        return false;
      })

      $coinpilelink.on('mouseover', function(){
     var $section_position = parseInt($(this).parent().index());
    $('.tooltip').find('p.landmark_name').html($landmarks.landmark[$section_position].name);
    $('.tooltip').find('p.landmark_cost').html($landmarks.landmark[$section_position].cost);
     $('.tooltip').fadeIn(100);

      }).mousemove(function(ev){
      var mousex = ev.pageX - 330;
      var mousey = ev.pageY - 20;
      $('.tooltip').css({top:mousey, left: mousex })
      });

      $coinpilelink.on('mouseleave', hideTooltip);

      function hideTooltip(e){
      $('.tooltip').fadeOut(200);
      }

      $moneybutton.on('click', startSite);

      function startSite(){
        console.log('click');
        $('.title_wrapper').fadeOut(300);
        return false;
      };

      preloadArtwork($imgpath);

      $(window).load(function() {
      $("html, body").animate({ scrollTop: $(document).height() }, 1000);
}     );

  });
})(jQuery);
});

function preloadArtwork($imgpath){
$('.pointer').load($imgpath+'pointer.svg');
$('section#rio .redeemer').load($imgpath+'rio_redeemer.svg');
$('section#rio .rio_trees').load($imgpath+'rio_trees.svg');
$('section#london .supports').load($imgpath+'london_supports.svg');
$('section#london .london_eye').load($imgpath+'london_eye.svg');
$('section#london .hotel').load($imgpath+'london_hotel.svg');
$('section#paris .eiffel').load($imgpath+'paris_eiffeltower.svg');
$('section#newyork .empire_state').load($imgpath+'newyork_empirestate.svg');
$('section#dubai .burj_khalifa').load($imgpath+'dubai_burjkhalifa.svg');
$('section#capetown .table_mountain').load($imgpath+'capetown_tablemountain.svg');
$('section#nepal .everest').load($imgpath+'nepal_everest.svg');
$('section#flight .plane').load($imgpath+'plane.svg');
$('.cloud_left').load($imgpath+'cloud_left.svg');
$('.cloud_right').load($imgpath+'cloud_right.svg');
$('.texture').load($imgpath+'texture.svg');

};

function loadAnimations(ScrollMagic, $animation_controller){

//skyparallax
var cloudlayer2 = new ScrollMagic.Scene({triggerElement:'.foreground_clouds', offset:650, duration:4500}).setTween(TweenMax.to(".foreground_clouds",1, {'bottom':'10%'})).addTo($animation_controller);
var cloudlayer1 = new ScrollMagic.Scene({triggerElement:'.background_clouds', offset:650, duration:8000}).setTween(TweenMax.to(".background_clouds",1, {'bottom':'-20%'})).addTo($animation_controller);

//skycolours
var space_sky = new ScrollMagic.Scene({triggerElement:'#space', duration:960}).setTween(TweenMax.to("body",1, {'background-color':'rgb(7,2,49)'})).addTo($animation_controller);

var felix_sky = new ScrollMagic.Scene({triggerElement:'#felix', duration:960}).setTween(TweenMax.to("body",1, {'background-color':'rgb(13,30,83)'})).addTo($animation_controller);

var flight_sky = new ScrollMagic.Scene({triggerElement:'#flight', duration:960}).setTween(TweenMax.to("body",1, {'background-color':'rgb(41,72,128)'})).addTo($animation_controller);

var nepal_sky = new ScrollMagic.Scene({triggerElement:'#nepal', duration:1960}).setTween(TweenMax.to("body",1, {'background-color':'rgb(40,98,158)'})).addTo($animation_controller);

var normal_sky = new ScrollMagic.Scene({triggerElement:'#dubai', duration:4100}).setTween(TweenMax.to("body",1, {'background-color':'rgb(12,156,238)'})).addTo($animation_controller);

var rio_sky = new ScrollMagic.Scene({triggerElement:'#rio', duration:960}).setTween(TweenMax.to("body",1, {'background-color':'rgb(180,217,237)'})).addTo($animation_controller);

//plane flight
var airplane = new ScrollMagic.Scene({triggerElement:'#flight', duration:1300}).setTween(TweenMax.to(".flightpath",1, {'left': '150%'})).addTo($animation_controller);


//londoneye
var london_eye_spin = new ScrollMagic.Scene({triggerElement:'#london', offset:-500,  duration:1850}).setTween(TweenMax.to(".london_eye",1, {rotation:100})).addTo($animation_controller);

//coinpiles
var flight_coinpile = new ScrollMagic.Scene({triggerElement:'#flight', offset:410, duration:3000}).setTween(TweenMax.to(".coinpile.flight",1,{'display':'none', 'height':'0'})).addTo($animation_controller);
var nepal_coinpile = new ScrollMagic.Scene({triggerElement:'#nepal', offset:410, duration:3000}).setTween(TweenMax.to(".coinpile.nepal",1,{'display':'none', 'height':'0'})).addTo($animation_controller);
var capetown_coinpile = new ScrollMagic.Scene({triggerElement:'#capetown', offset:410, duration:3000}).setTween(TweenMax.to(".coinpile.capetown",1,{'display':'none', 'height':'0'})).addTo($animation_controller)
var dubai_coinpile = new ScrollMagic.Scene({triggerElement:'#dubai', offset:410, duration:3000}).setTween(TweenMax.to(".coinpile.dubai",1,{'display':'none', 'height':'0'})).addTo($animation_controller)
var newyork_link = new ScrollMagic.Scene({triggerElement:'#newyork', offset:660}).setTween(TweenMax.to(".coinpile.newyork a",1,{'display':'none'})).addTo($animation_controller);
var newyork_coinpile = new ScrollMagic.Scene({triggerElement:'#newyork', offset:110, duration:2000}).setTween(TweenMax.to(".coinpile.newyork",1,{'display':'none', 'height':'0'})).addTo($animation_controller);
var paris_link = new ScrollMagic.Scene({triggerElement:'#paris', offset:660}).setTween(TweenMax.to(".coinpile.paris a",1,{'display':'none'})).addTo($animation_controller);
var paris_coinpile = new ScrollMagic.Scene({triggerElement:'#paris', offset:660, duration:2000}).setTween(TweenMax.to(".coinpile.paris",1,{'display':'none', 'height':'0'})).addTo($animation_controller);
var london_link = new ScrollMagic.Scene({triggerElement:'#london', offset:700}).setTween(TweenMax.to(".coinpile.london a",1,{'display':'none'})).addTo($animation_controller);
var london_coinpile = new ScrollMagic.Scene({triggerElement:'#london', offset:700, duration:800}).setTween(TweenMax.to(".coinpile.london",1,{'display':'none', 'height':'0'})).addTo($animation_controller);
};

function makeWaypoint($sectionID, $sectionIndex, $landmarks){
  var waypoint = new Waypoint({
    element:document.getElementById($sectionID),
    handler:function(){
      $('.height_indicator .height p').html($landmarks.landmark[$sectionIndex].height);
    },
    offset:500
  });
};
