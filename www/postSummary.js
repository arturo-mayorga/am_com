function PostSummary(config)
{
    this._meta = config;
	
	this.showFullPost = function()
	{
	    var post = new Post(this._meta);
		post.show();
	};
	
    function createDomObj(_this, args)
    {
        var post = document.createElement('div');
        post.className = "postSummary";
        
        var title = document.createElement('div');
        title.className = "postSummaryTitle";
        title.innerHTML = args.title;
        post.appendChild(title);
        
        var thumbnail = findPostThumbnail(args);
        
        if (thumbnail !== undefined)
        {
            var img = document.createElement('img');
            img.className = "alignleft postThumbnail";
            img.src = thumbnail.url;
            img.style.width = thumbnail.width;
            img.style.height = thumbnail.height;
            post.appendChild(img);
            
            if (args.excerpt !== "")
            {
                var text = document.createElement('div');
                text.innerHTML = args.excerpt;
                text.className = "postSummaryContent";
                post.appendChild(text);
            }
        }
        else
        {
            if (args.content !== "")
            {
                var text = document.createElement('div');
                text.innerHTML = getExcerptFromContent(args.content);
                text.className = "postSummaryContent";
                post.appendChild(text);
            }
        }
		
		var footer = document.createElement('div');
		footer.className = "postSummaryFooter";
		
		var expander = document.createElement('div');
		expander.className = "postSummaryExpander";
		expander.onclick = function(){_this.showFullPost();};
		footer.appendChild(expander);
		
		post.appendChild(footer);
        
        post.style.width = (POST_SUMM_WIDTH-30)+"px";
        
        return post;
    }
	
	function getExcerptFromContent(content)
    {
        var shortCont = content.substring(0, 400);
        
        var lastPIndex = shortCont.lastIndexOf("<p>");
        if  (lastPIndex > 0 && shortCont.length > 200)
        {
            shortCont = shortCont.substring(0, shortCont.lastIndexOf("<p>"));
        }
        
        return shortCont;
    }
    
    function findPostThumbnail(post)
    {
        var ret = undefined;
        if (post.attachments !== undefined)
        {
            $.each(post.attachments, function(i, attachment)
            {
                if (ret == undefined &&
                    attachment.images !== undefined &&
                    attachment.images["small-product-thumbnail"] !== undefined &&
                    attachment.images["small-product-thumbnail"].url !== undefined)
                {
                    ret = attachment.images["small-product-thumbnail"];
                    if ( ret.width == undefined )
                    {
                        ret.width = 114;
                    }
                    if ( ret.height == undefined )
                    {
                        ret.height = 148;
                     }
                 }
            });
        }
        return ret;
    }

    this._domObj = createDomObj(this, this._meta );

    this.layoutUpdate = function()
    {
        this._domObj.style.width = (POST_SUMM_WIDTH-30)+"px";
    };
}

function Post(meta)
{
    this._title = meta.title;
	this._content = meta.content;
    var urlSplit = meta.url.split('/');
    this._url = urlSplit[urlSplit.length-1];
    this.show = function()
	{
        history.pushState({}, '', PAGE_NAME+this._url);

        this._returnTitle = document.title;
        var _this = this;

        document.title = 'Arturo Mayorga | ' + this._title;

	    var bg = document.createElement('div');
		bg.className = "postScreen";
		bg.onclick = function(e) 
		{ 
		    document.body.removeChild(bg);
            SUPRESS_NEXT_RELOAD = true;
            history.back();
            history.replaceState({}, '', PAGE_NAME+'?');
            document.title = _this._returnTitle;
		};
		
		var board = document.createElement('div');
		board.className = "postBoard";
		board.onclick = function(e, arg){e.stopPropagation()};
		
		var title = document.createElement('div');
		title.className = "postTitle";
		title.innerHTML = this._title;
		board.appendChild(title);
		
		var body = document.createElement('div');
		body.className = "postBody";
		body.innerHTML = this._content;
		board.appendChild(body);

        var backButton = document.createElement('div');
        backButton.className = 'icon-left-circled postBackButton';
        backButton.onclick = bg.onclick;
        board.appendChild(backButton);
		
		
		bg.appendChild(board);
		
		document.body.appendChild(bg);
	}
}