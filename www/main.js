var ANIM_LEN        = 0;
var NAV_BAR_HEIGHT  = 50;
var ADV_SPACE_WIDTH = 200;
var SIDE_NAV_WIDTH  = 280;
var POST_SUMM_WIDTH = 275+20+10; // w + padding + margin
var SCROLL_BAR_WIDTH = 0;

var _uiState = {
    isSideNavVisible: false,
    isAdvSpaceVisible: true,
    
    getAdvVisibility: function()
    {
        return (this.isAdvSpaceVisible &&
                window.innerWidth >= POST_SUMM_WIDTH+ADV_SPACE_WIDTH+20+
                                     (this.isSideNavVisible?SIDE_NAV_WIDTH:0));
    }
};

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
}

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

