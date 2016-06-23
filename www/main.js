document.title = 'Arturo Mayorga | Home';

var ANIM_LEN        = 0;
var NAV_BAR_HEIGHT  = 50;
var ADV_SPACE_WIDTH = 200;
var SIDE_NAV_WIDTH  = 280;
var POST_SUMM_WIDTH_MIN = 375+20+10; // w + padding + margin
var POST_SUMM_WIDTH_MAX = 475+20+10; // w + padding + margin
var POST_SUMM_WIDTH = POST_SUMM_WIDTH_MAX;
var SCROLL_BAR_WIDTH = 0;
var PAGE_NAME = '';
var CONTENT_SERVICE_LOCATION = './svc/svc.php';

var CATEGORIES = {
    ALL: 0,
    NEWS: 4,
    REVIEWS: 5,
    VIDEOS: 6
};

var MENU_ITEMS = [CATEGORIES.ALL,CATEGORIES.NEWS,CATEGORIES.REVIEWS,CATEGORIES.VIDEOS];

var CATEGORY_NAMES = {};
CATEGORY_NAMES[CATEGORIES.ALL] = 'Home';
CATEGORY_NAMES[CATEGORIES.NEWS] = 'News';
CATEGORY_NAMES[CATEGORIES.REVIEWS] = 'Reviews';
CATEGORY_NAMES[CATEGORIES.VIDEOS] = 'Videos';

var _uiState = {
    isSideNavVisible: false,
    isAdvSpaceVisible: true,
    currentCategory: CATEGORIES.ALL,
    
    getAdvVisibility: function()
    {
        var enableAds = false;


        return enableAds && (this.isAdvSpaceVisible &&
                             window.innerWidth >= POST_SUMM_WIDTH_MIN+ADV_SPACE_WIDTH+20+
                                                  (this.isSideNavVisible?SIDE_NAV_WIDTH:0));
    },

    getNaveHandler: function( category )
    {
        return function()
        {
            if ( category === this.currentCategory )
            {
                $("html, body").animate({scrollTop: 0}, "slow");
            }
            else {
                this.currentCategory = category;
                _layout.distributeMessage('reload');
                document.title = 'Arturo Mayorga | ' + CATEGORY_NAMES[category];
            }

            if ( this.isSideNavVisible )
            {
                onSideNavToggleSignal();
            }
        }.bind(this);
    }
};

function getQueryVariables()
{
    var map = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++)
    {
        var pair = vars[i].split("=");
        map[pair[0]] = pair[1];
    }
    return map;
}
var _uriMap = getQueryVariables();

function getPageName()
{
    var splitPath = window.location.pathname.split('/');
    return splitPath[splitPath.length-1];
}
PAGE_NAME = getPageName();

var _layout;

function getScrollbarWidth() {
    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    document.body.appendChild(outer);
    
    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";
    
    // add innerdiv
    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);
    
    var widthWithScroll = inner.offsetWidth;
    
    // remove divs
    outer.parentNode.removeChild(outer);
    
    return widthNoScroll - widthWithScroll;
}

function app_init()
{
    SCROLL_BAR_WIDTH = getScrollbarWidth();
    
    var navBar   = new NavBar   (document.getElementById('navBar'));
    var advSpace = new AdvSpace (document.getElementById('advSpace'));
    var sideNav  = new SideNav  (document.getElementById('sideNav'));
    var content  = new Content  (document.getElementById('content'));

    _layout = new LayoutProxy();
    
    _layout.addChild(navBar);
    _layout.addChild(advSpace);
    _layout.addChild(sideNav);
    _layout.addChild(content);
    
    _layout.populate();
    _layout.update();
    
    ANIM_LEN = 250;
    
    $(window).resize(function ()
    {
        waitForFinalEvent(function(){_layout.update();}, 250, "some unique string");
    });
    
    document.addEventListener('scroll', function(){content.scrollCheckForContent();});

    if ( undefined !== _uriMap.p )
    {
        $.getJSON( CONTENT_SERVICE_LOCATION+'?p='+_uriMap.p+'&json=true', {}, function( data )
        {
            console.log( JSON.stringify(data.post) )
            console.log( data.status );

            history.replaceState({}, '', PAGE_NAME+'?');

            if ( 'ok' === data.status )
            {

                var post = new Post(data.post);
                post.show();
            }
        });
    }
    else
    {
        history.replaceState({}, '', PAGE_NAME);
    }

    window.onpopstate=function(event)
    {
        if ( false === SUPRESS_NEXT_RELOAD && event.state )
        {
            location.reload();
        }

        SUPRESS_NEXT_RELOAD = false;
    }
}

var SUPRESS_NEXT_RELOAD = false;

function onSideNavToggleSignal()
{
    _uiState.isSideNavVisible = false == _uiState.isSideNavVisible;
    _layout.update();
}

// this block is used to delay handling of resize events
var waitForFinalEvent = (function () {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout (timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();


$(document).ready(app_init);

