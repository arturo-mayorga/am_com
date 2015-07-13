
function Content(domObj)
{
    this._domObj = domObj;
    this._domObj_0 = document.getElementById('content_0');
    this._children = [];
    this.populate = function()
    {
         $("#sideNav").clearQueue().stop();
    };
    
    this.stopAnimations = function()
    {
        $("#mainContainer").clearQueue().stop();
        $("#centerContainer").clearQueue().stop();
        $("#content").clearQueue().stop();
    };
    
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
    };
    
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
    };

    var _lastPageRequested = 0;
    
    function getNextContentUrl()
    {
        _lastPageRequested += 1;
        
     //   return "../site/?paged=" + _lastPageRequested + "&json=true";
        return "../site/?paged=" + _lastPageRequested + "&json=true&cat="+_uiState.currentCategory;
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
                  
        }).error(function(jq,textStatus, error){_this._loading = false; console.debug("error " + textStatus + " errorTH "+error+' '+url);});
    }
    
    this.appendChild = function(child)
    {
        this._children.push(child);
        this._domObj_0.appendChild(child._domObj);
    };

    this.distributeMessage = function( msg )
    {
        if ( 'reload' === msg )
        {
            var i = 0;
            for ( i = 0; i < this._children.length; ++i )
            {
                this._domObj_0.removeChild(this._children[i]._domObj);
            }
            this._children = [];
            _lastPageRequested = 0;
            this.scrollCheckForContent();
        }
    };
}



