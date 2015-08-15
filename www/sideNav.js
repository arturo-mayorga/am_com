
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


        for ( var i in MENU_ITEMS )
        {
            var menuDom = document.createElement('div');
            menuDom.className = "menuItem";
            menuDom.innerHTML = CATEGORY_NAMES[MENU_ITEMS[i]];
            menuDom.onclick = _uiState.getNaveHandler(MENU_ITEMS[i]);
            this._domObj.appendChild(menuDom);
        }

        var amPiano = document.createElement('div');
        //amPiano.src = 'assets/img/am_piano.png';
        amPiano.className = 'amPianoImg';
        this._domObj.appendChild(amPiano);
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