
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
    }
    
    this.stopAnimations = function()
    {
        
    }
    
    this.layoutUpdate = function()
    {
        (_uiState.isSideNavVisible)?
        show():hide();
    }
}