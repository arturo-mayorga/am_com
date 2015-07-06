
function AdvSpace(domObj)
{
    function show()
    {
        $( "#advSpace" ).animate({width: ADV_SPACE_WIDTH}, { duration: ANIM_LEN, queue: false});
        $( "#centerContainer" ).animate({marginRight: ADV_SPACE_WIDTH}, { duration: ANIM_LEN, queue: false});
    }
    
    function hide()
    {
        $( "#centerContainer" ).animate({marginRight: 0}, { duration: ANIM_LEN, queue: false});
        $( "#advSpace" ).animate({width: 0}, { duration: ANIM_LEN, queue: false});
    }
    
    this._domObj = domObj;
    this.populate = function()
    {
        
    }
    
    this.stopAnimations = function()
    {
        $("#advSpace").clearQueue().stop();
    }
    
    this.layoutUpdate = function()
    {
        (_uiState.getAdvVisibility())?
        show():hide();
    }
}