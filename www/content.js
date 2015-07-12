
function Content(domObj)
{
    this._domObj = domObj;
    this._domObj_0 = document.getElementById('content_0');
    this._children = [];
    this.populate = function()
    {
         $("#sideNav").clearQueue().stop();
    }
    
    this.stopAnimations = function()
    {
        $("#mainContainer").clearQueue().stop();
        $("#centerContainer").clearQueue().stop();
        $("#content").clearQueue().stop();
    }
    
    this.layoutUpdate = function()
    {
        var leftSpace =  window.innerWidth -
        ((_uiState.getAdvVisibility())?ADV_SPACE_WIDTH:0) -
        ((_uiState.isSideNavVisible)?SIDE_NAV_WIDTH:0);
        leftSpace -= 20+SCROLL_BAR_WIDTH;
        
        if (leftSpace > POST_SUMM_WIDTH)
        {
            leftSpace %= POST_SUMM_WIDTH;
        }
        else
        {
            leftSpace = 0;
        }
        
        domObj.style.paddingRight = domObj.style.paddingLeft = leftSpace/2 + "px";
        
        this.scrollCheckForContent();
    }
    
    this.scrollCheckForContent = function()
    {
        if ( this._loading ) 
        {
            return;
        }

        var $win = $(window);

        if ( $(document).height() - ($win.height() + $win.scrollTop()) <= 1000 ) 
        {
            this._loading = true;
            appendContent(this, getNextContentUrl() );
        }
    }
    
    var _totalPageCount = 6;
    var _lastPageRequested = 0;
    
    function getNextContentUrl()
    {
        if ( _lastPageRequested >= _totalPageCount )
        {
            return "";
        }
        
        _lastPageRequested += 1;
        
        return "../site/?paged=" + _lastPageRequested + "&json=true";
    }
    
    function appendContent(_this, url)
    {
        if (url == "")
        {
            return;
        }
        
        $.getJSON( url, {}, function( data )
        {
            var i = 0;
            for (i = 0; i < data.posts.length; i++)
            {
                _this.appendChild( new PostSummary(data.posts[i]) );
            }

            _this._loading = false;
            _this.scrollCheckForContent();
                  
        }).error(function(jq,textStatus, error){condole.debug("error " + textStatus + " errorTH "+error);});
    }
    
    this.appendChild = function(child)
    {
        this._children.push(child);
        this._domObj_0.appendChild(child._domObj);
    }
}


