
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

        var bar = document.createElement('div');
        bar.className = 'sideBtnBarSpacer';
        navBarSideBtn.appendChild( bar );

        for ( var i = 0; i < 3; ++i )
        {
            bar = document.createElement('div');
            bar.className = 'sideBtnBar';
            navBarSideBtn.appendChild( bar );
        }
        
        var navBarTitle = document.createElement('div');
        navBarTitle.className = "navBarTitle";
        navBarTitle.id = "navBarTitle";
        navBarTitle.onclick = _uiState.getNaveHandler(CATEGORIES.ALL);
        navBarTitle.innerHTML = 'Arturo Mayorga';
        //navBarTitle.src = "http://arturomayorga.com/ext/img/hdr-home.png";
        this._domObj.appendChild(navBarTitle);
        
        var navBarPlayer = document.createElement('div');
        navBarPlayer.className = "navBarPlayer";
        this._navBarPlayer = navBarPlayer;
		
        var navBarRwBtn = document.createElement('div');
        navBarRwBtn.className = "navBarRwBtn flaticon-previous7";
        navBarRwBtn.onclick = function(e){e.stopPropagation(); this._playPrevTrack();}.bind(this);

        navBarPlayer.appendChild(navBarRwBtn);
        
        var navBarPlayBtn = document.createElement('div');
        navBarPlayBtn.className = "navBarPlayBtn flaticon-play36";
        navBarPlayBtn.onclick = function(e){e.stopPropagation(); this._playTrack(this._track);}.bind(this);
        navBarPlayer.appendChild(navBarPlayBtn);
        this._playPauseDom = navBarPlayBtn;
        
        var navBarFfBtn = document.createElement('div');
        navBarFfBtn.className = "navBarFfBtn flaticon-next9";
        navBarFfBtn.onclick = function(e){e.stopPropagation(); this._playNextTrack();}.bind(this);
        navBarPlayer.appendChild(navBarFfBtn);

        this._domObj.appendChild(navBarPlayer);

        var trackInfo = document.createElement('div');
        trackInfo.className = 'trackInfo';

        this._domObj.appendChild(trackInfo);
        this._trackInfoDiv = trackInfo;
        this.setTrackName( 'Current Track: ' + this._playlist[this._track]);
    };

    this.setTrackName = function( trackName )
    {
        this._trackInfoDiv.innerHTML = trackName;
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

        this._playPauseDom.className = 'navBarPlayBtn flaticon-play36';
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

        this._playPauseDom.className = 'navBarPauseBtn flaticon-pause8';
        this._playPauseDom.onclick = function(e){e.stopPropagation(); this._pauseTrack();}.bind(this);

        this._audioDom = audio;
    };
}