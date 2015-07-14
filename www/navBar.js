
function NavBar(domObj)
{
    this._domObj = domObj;
    this._jQObj = $("#navBar");
    this.populate = function()
    {
        var navBarSideBtn = document.createElement('div');
        navBarSideBtn.className = "navBarSideBtn";
        navBarSideBtn.onclick = onSideNavToggleSignal;
        this._domObj.appendChild(navBarSideBtn);
        
        var navBarTitle = document.createElement('img');
        navBarTitle.className = "navBarTitle";
        navBarTitle.id = "navBarTitle";
        navBarTitle.onclick = function()
        {
            if ( CATEGORIES.ALL === _uiState.currentCategory)
            {
                $("html, body").animate({ scrollTop: 0 }, "slow");
            }
            else
            {
                _uiState.currentCategory = CATEGORIES.ALL;
                _layout.distributeMessage('reload');
            }
        };
        navBarTitle.src = "http://arturomayorga.com/ext/img/hdr-home.png";
        this._domObj.appendChild(navBarTitle);
        
        var navBarPlayer = document.createElement('div');
        navBarPlayer.className = "navBarPlayer";
		
        var audio = document.createElement('audio');
        audio.id = "barAudio";
        var asrc = document.createElement('source');
        asrc.type = 'audio/mpeg'; asrc.src = 'a0210.mp3';
        audio.appendChild(asrc);
		
        var navBarRwBtn = document.createElement('div');
        navBarRwBtn.className = "navBarRwBtn";
        navBarRwBtn.onclick = function() {audio.play();};
        navBarPlayer.appendChild(navBarRwBtn);
        
        var navBarPlayBtn = document.createElement('div');
        navBarPlayBtn.className = "navBarPlayBtn";
        navBarPlayBtn.onclick = function(){};
        navBarPlayer.appendChild(navBarPlayBtn);
        
        var navBarFfBtn = document.createElement('div');
        navBarFfBtn.className = "navBarFfBtn";
        navBarFfBtn.onclick = function(){};
        navBarPlayer.appendChild(navBarFfBtn);
        
        navBarPlayer.appendChild(audio);
        
        this._domObj.appendChild(navBarPlayer);
    };
    
    this.stopAnimations = function()
    {
        this._jQObj.clearQueue().stop();
    };
    
    this.layoutUpdate = function()
    {
        
    };

    this.distributeMessage = function(){};
}