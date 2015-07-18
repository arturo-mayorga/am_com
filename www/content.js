
function Content(domObj)
{
    this._domObj = domObj;
    this._domObj_0 = document.getElementById('content_0');
    this._children = [];
    this._columnCount = 0;
    this._columnDomObjs = [];
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

    this.updateSummaryColumns = function( newColumnCount, columnWidth )
    {
        var i; var j;
        var tempDom1;

        if ( this._columnCount !== newColumnCount )
        {
            // remove the post summaries from the obsolete columns
            // remove the obsolete columns
            for ( i in this._columnDomObjs )
            {
                tempDom1 = this._columnDomObjs[i];

                while (tempDom1.firstChild)
                {
                    tempDom1.removeChild(tempDom1.firstChild);
                }

                this._domObj_0.removeChild( tempDom1 );
            }

            // create the new columns and parent them
            this._columnDomObjs = [];
            for ( i = 0; i < newColumnCount; ++i )
            {
                tempDom1 = document.createElement('div');
                tempDom1.className = 'postColumn';
                this._columnDomObjs.push( tempDom1 );
                this._domObj_0.appendChild( tempDom1 );
            }

            // move the post sommaries to their new columns
            for ( i in this._children )
            {
                this._columnDomObjs[i%newColumnCount].appendChild(this._children[i]._domObj);
            }
        }

        for ( i = 0; i < newColumnCount; ++i )
        {
            tempDom1 = this._columnDomObjs[i];
            tempDom1.style.width = columnWidth+'px';
        }

        this._columnCount = newColumnCount;
    };
    
    this.layoutUpdate = function()
    {
        var leftSpace =  window.innerWidth -
        ((_uiState.getAdvVisibility())?ADV_SPACE_WIDTH:0) -
        ((_uiState.isSideNavVisible)?SIDE_NAV_WIDTH:0);
        leftSpace -= 20+SCROLL_BAR_WIDTH;

        var columns = Math.round(leftSpace/POST_SUMM_WIDTH_MIN);


        POST_SUMM_WIDTH = Math.floor(leftSpace/columns);

        if ( POST_SUMM_WIDTH > leftSpace )
        {
            POST_SUMM_WIDTH = leftSpace;
        }

        this.updateSummaryColumns( columns, POST_SUMM_WIDTH );
        
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

        for ( var i in this._children )
        {
            this._children[i].layoutUpdate();
        }
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
        return CONTENT_SERVICE_LOCATION+'?paged=' + _lastPageRequested + "&json=true&cat="+_uiState.currentCategory;
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
                  
        }).error(function(jq,textStatus, error){ console.debug("error " + textStatus + " errorTH "+error+' '+url); });
    }
    
    this.appendChild = function(child)
    {
        console.log( this._columnCount );
        this._children.push(child);
       // this._domObj_0.appendChild(child._domObj);
        this._columnDomObjs[(this._children.length-1)%this._columnCount].appendChild(child._domObj);
    };

    this.distributeMessage = function( msg )
    {
        if ( 'reload' === msg )
        {
            var i = 0;
            var tempDom1;
            
            for ( i in this._columnDomObjs )
            {
                tempDom1 = this._columnDomObjs[i];

                while (tempDom1.firstChild)
                {
                    tempDom1.removeChild(tempDom1.firstChild);
                }
            }

            this._loading = false;
            this._children = [];
            _lastPageRequested = 0;
            this.scrollCheckForContent();
        }
    };
}



