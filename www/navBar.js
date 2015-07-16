
function NavBar(domObj)
{
    this._domObj = domObj;
    this._jQObj = $("#navBar");
    this._playlist = [
        'a0208.mp3',
        'a0209.mp3',
        'a0210.mp3'
    ];

    this._track = 0;

    this._isPlaying = false;

    this.populate = function()
    {
        var navBarSideBtn = document.createElement('div');
        navBarSideBtn.className = "navBarSideBtn";
        navBarSideBtn.onclick = onSideNavToggleSignal;
        this._domObj.appendChild(navBarSideBtn);
        
        var navBarTitle = document.createElement('img');
        navBarTitle.className = "navBarTitle";
        navBarTitle.id = "navBarTitle";
        navBarTitle.onclick = _uiState.getNaveHandler(CATEGORIES.ALL);
        navBarTitle.src = "http://arturomayorga.com/ext/img/hdr-home.png";
        this._domObj.appendChild(navBarTitle);
        
        var navBarPlayer = document.createElement('div');
        navBarPlayer.className = "navBarPlayer";
        this._navBarPlayer = navBarPlayer;
		
        var navBarRwBtn = document.createElement('div');
        navBarRwBtn.className = "navBarRwBtn";
        navBarRwBtn.onclick = function(e){e.stopPropagation(); this._playPrevTrack();}.bind(this);

        navBarPlayer.appendChild(navBarRwBtn);
        
        var navBarPlayBtn = document.createElement('div');
        navBarPlayBtn.className = "navBarPlayBtn";
        navBarPlayBtn.onclick = function(e){e.stopPropagation(); this._playTrack(this._track);}.bind(this);
        navBarPlayer.appendChild(navBarPlayBtn);
        this._playPauseDom = navBarPlayBtn;
        
        var navBarFfBtn = document.createElement('div');
        navBarFfBtn.className = "navBarFfBtn";
        navBarFfBtn.onclick = function(e){e.stopPropagation(); this._playNextTrack();}.bind(this);
        navBarPlayer.appendChild(navBarFfBtn);

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

    this._pauseTrack = function()
    {
        if ( undefined !== this._audioDom )
        {
            this._audioDom.pause();
        }

        this._playPauseDom.className = 'navBarPlayBtn';
        this._playPauseDom.onclick = function(e){e.stopPropagation(); this._playTrack(this._track);}.bind(this);
    };

    this._playNextTrack = function()
    {
        this._playTrack( ++this._track );
    };

    this._playPrevTrack = function()
    {
        this._track = this._track + this._playlist.length - 1;
        this._playTrack( this._track );
    };

    this._playTrack = function( track )
    {
        this._track = track = track % this._playlist.length;

        if ( undefined !== this._audioDom )
        {
            this._audioDom.pause();
            this._navBarPlayer.removeChild( this._audioDom );
            this._audioDom = undefined;
        }

        var audio = document.createElement('audio');
        audio.id = "barAudio";
        var asrc = document.createElement('source');
        asrc.type = 'audio/mpeg'; asrc.src = this._playlist[track];
        audio.appendChild(asrc);
        this._navBarPlayer.appendChild(audio);

        audio.play();

        this._playPauseDom.className = 'navBarPauseBtn';
        this._playPauseDom.onclick = function(e){e.stopPropagation(); this._pauseTrack();}.bind(this);

        this._audioDom = audio;
    };
}