
function SideNav(domObj)
{
    function hide()
    {
        $( "#sideNav" ).animate({width: 0}, { duration: ANIM_LEN, queue: false});
        $( "#navBar" ).animate({left: 0}, { duration: ANIM_LEN, queue: false});
        $( "#centerContainer" ).animate({marginLeft: 0}, { duration: ANIM_LEN, queue: false});
    }
    
    function show()
    {
        $( "#sideNav" ).animate({width: SIDE_NAV_WIDTH}, { duration: ANIM_LEN, queue: false});
        $( "#navBar" ).animate({left: SIDE_NAV_WIDTH}, { duration: ANIM_LEN, queue: false});
        $( "#centerContainer" ).animate({marginLeft: SIDE_NAV_WIDTH}, { duration: ANIM_LEN, queue: false});
    }
    
    this._domObj = domObj;
    this.populate = function()
    {
         $("#sideNav").clearQueue().stop();

        var navBarSideBtn = document.createElement('div');
        navBarSideBtn.className = "menuItem";
        navBarSideBtn.innerHTML = 'Home';
        navBarSideBtn.onclick = _uiState.getNaveHandler(CATEGORIES.ALL);
        this._domObj.appendChild(navBarSideBtn);

        navBarSideBtn = document.createElement('div');
        navBarSideBtn.className = "menuItem";
        navBarSideBtn.innerHTML = 'Video';
        navBarSideBtn.onclick = _uiState.getNaveHandler(CATEGORIES.VIDEOS);
        this._domObj.appendChild(navBarSideBtn);

        navBarSideBtn = document.createElement('div');
        navBarSideBtn.className = "menuItem";
        navBarSideBtn.innerHTML = 'Reviews';
        navBarSideBtn.onclick = _uiState.getNaveHandler(CATEGORIES.REVIEWS);
        this._domObj.appendChild(navBarSideBtn);
    };
    
    this.stopAnimations = function()
    {
        
    };
    
    this.layoutUpdate = function()
    {
        (_uiState.isSideNavVisible)?
        show():hide();
    };

    this.distributeMessage = function(){};
}