
function NavBar(domObj)
{
    this._domObj = domObj;
    this._jQObj = $("#navBar");
    this._playlist = [
        {
            url:'assets/audio/a0201.mp3',
            dlApple:'https://geo.itunes.apple.com/us/album/find-me-again/id514977457?i=514977467&mt=1&app=music',
            dlGoogle:'https://play.google.com/store/music/album?id=Bu2utalm4htqzca25ao3mbu7exi&tid=song-Tjm34yz5l57g5kilcg6v37ixaze',
            dlCdBaby:'http://www.cdbaby.com/cd/arturomayorga2'
        },
        {
            url:'assets/audio/a0202.mp3',
            dlApple:'https://geo.itunes.apple.com/us/album/find-me-again/id514977457?i=514977467&mt=1&app=music',
            dlGoogle:'https://play.google.com/store/music/album?id=Bu2utalm4htqzca25ao3mbu7exi&tid=song-Tjm34yz5l57g5kilcg6v37ixaze',
            dlCdBaby:'http://www.cdbaby.com/cd/arturomayorga2'
        },
        {url:'assets/audio/a0203.mp3',
            dlApple:'https://geo.itunes.apple.com/us/album/find-me-again/id514977457?i=514977467&mt=1&app=music',
            dlGoogle:'https://play.google.com/store/music/album?id=Bu2utalm4htqzca25ao3mbu7exi&tid=song-Tjm34yz5l57g5kilcg6v37ixaze',
            dlCdBaby:'http://www.cdbaby.com/cd/arturomayorga2'},
        {url:'assets/audio/a0204.mp3',
            dlApple:'https://geo.itunes.apple.com/us/album/find-me-again/id514977457?i=514977467&mt=1&app=music',
            dlGoogle:'https://play.google.com/store/music/album?id=Bu2utalm4htqzca25ao3mbu7exi&tid=song-Tjm34yz5l57g5kilcg6v37ixaze',
            dlCdBaby:'http://www.cdbaby.com/cd/arturomayorga2'},
        {url:'assets/audio/a0205.mp3',
            dlApple:'https://geo.itunes.apple.com/us/album/find-me-again/id514977457?i=514977467&mt=1&app=music',
            dlGoogle:'https://play.google.com/store/music/album?id=Bu2utalm4htqzca25ao3mbu7exi&tid=song-Tjm34yz5l57g5kilcg6v37ixaze',
            dlCdBaby:'http://www.cdbaby.com/cd/arturomayorga2'},
        {url:'assets/audio/a0206.mp3',
            dlApple:'https://geo.itunes.apple.com/us/album/find-me-again/id514977457?i=514977467&mt=1&app=music',
            dlGoogle:'https://play.google.com/store/music/album?id=Bu2utalm4htqzca25ao3mbu7exi&tid=song-Tjm34yz5l57g5kilcg6v37ixaze',
            dlCdBaby:'http://www.cdbaby.com/cd/arturomayorga2'},
        {url:'assets/audio/a0207.mp3',
            dlApple:'https://geo.itunes.apple.com/us/album/find-me-again/id514977457?i=514977467&mt=1&app=music',
            dlGoogle:'https://play.google.com/store/music/album?id=Bu2utalm4htqzca25ao3mbu7exi&tid=song-Tjm34yz5l57g5kilcg6v37ixaze',
            dlCdBaby:'http://www.cdbaby.com/cd/arturomayorga2'},
        {url:'assets/audio/a0208.mp3',
            dlApple:'https://geo.itunes.apple.com/us/album/find-me-again/id514977457?i=514977467&mt=1&app=music',
            dlGoogle:'https://play.google.com/store/music/album?id=Bu2utalm4htqzca25ao3mbu7exi&tid=song-Tjm34yz5l57g5kilcg6v37ixaze',
            dlCdBaby:'http://www.cdbaby.com/cd/arturomayorga2'},
        {url:'assets/audio/a0209.mp3',
            dlApple:'https://geo.itunes.apple.com/us/album/find-me-again/id514977457?i=514977467&mt=1&app=music',
            dlGoogle:'https://play.google.com/store/music/album?id=Bu2utalm4htqzca25ao3mbu7exi&tid=song-Tjm34yz5l57g5kilcg6v37ixaze',
            dlCdBaby:'http://www.cdbaby.com/cd/arturomayorga2'},
        {url:'assets/audio/a0210.mp3',
            dlApple:'https://geo.itunes.apple.com/us/album/find-me-again/id514977457?i=514977467&mt=1&app=music',
            dlGoogle:'https://play.google.com/store/music/album?id=Bu2utalm4htqzca25ao3mbu7exi&tid=song-Tjm34yz5l57g5kilcg6v37ixaze',
            dlCdBaby:'http://www.cdbaby.com/cd/arturomayorga2'},
        {url:'assets/audio/a0211.mp3',
            dlApple:'https://geo.itunes.apple.com/us/album/find-me-again/id514977457?i=514977467&mt=1&app=music',
            dlGoogle:'https://play.google.com/store/music/album?id=Bu2utalm4htqzca25ao3mbu7exi&tid=song-Tjm34yz5l57g5kilcg6v37ixaze',
            dlCdBaby:'http://www.cdbaby.com/cd/arturomayorga2'
        },
        {url:'assets/audio/a0101.mp3',
            dlApple:'https://geo.itunes.apple.com/us/album/cascades/id319906357?mt=1&app=music',
            dlGoogle:'https://play.google.com/store/music/album/Arturo_Mayorga_Cascades?id=Bteaxct3csydms6brj4zn5kp2gi',
            dlCdBaby:'http://www.cdbaby.com/cd/arturomayorga'},
        {url:'assets/audio/a0102.mp3',
            dlApple:'https://geo.itunes.apple.com/us/album/cascades/id319906357?mt=1&app=music',
            dlGoogle:'https://play.google.com/store/music/album/Arturo_Mayorga_Cascades?id=Bteaxct3csydms6brj4zn5kp2gi',
            dlCdBaby:'http://www.cdbaby.com/cd/arturomayorga'},
        {url:'assets/audio/a0103.mp3',
            dlApple:'https://geo.itunes.apple.com/us/album/cascades/id319906357?mt=1&app=music',
            dlGoogle:'https://play.google.com/store/music/album/Arturo_Mayorga_Cascades?id=Bteaxct3csydms6brj4zn5kp2gi',
            dlCdBaby:'http://www.cdbaby.com/cd/arturomayorga'},
        {url:'assets/audio/a0104.mp3',
            dlApple:'https://geo.itunes.apple.com/us/album/cascades/id319906357?mt=1&app=music',
            dlGoogle:'https://play.google.com/store/music/album/Arturo_Mayorga_Cascades?id=Bteaxct3csydms6brj4zn5kp2gi',
            dlCdBaby:'http://www.cdbaby.com/cd/arturomayorga'},
        {url:'assets/audio/a0105.mp3',
            dlApple:'https://geo.itunes.apple.com/us/album/cascades/id319906357?mt=1&app=music',
            dlGoogle:'https://play.google.com/store/music/album/Arturo_Mayorga_Cascades?id=Bteaxct3csydms6brj4zn5kp2gi',
            dlCdBaby:'http://www.cdbaby.com/cd/arturomayorga'},
        {url:'assets/audio/a0107.mp3',
            dlApple:'https://geo.itunes.apple.com/us/album/cascades/id319906357?mt=1&app=music',
            dlGoogle:'https://play.google.com/store/music/album/Arturo_Mayorga_Cascades?id=Bteaxct3csydms6brj4zn5kp2gi',
            dlCdBaby:'http://www.cdbaby.com/cd/arturomayorga'},
        {url:'assets/audio/a0108.mp3',
            dlApple:'https://geo.itunes.apple.com/us/album/cascades/id319906357?mt=1&app=music',
            dlGoogle:'https://play.google.com/store/music/album/Arturo_Mayorga_Cascades?id=Bteaxct3csydms6brj4zn5kp2gi',
            dlCdBaby:'http://www.cdbaby.com/cd/arturomayorga'},
        {url:'assets/audio/a0109.mp3',
            dlApple:'https://geo.itunes.apple.com/us/album/cascades/id319906357?mt=1&app=music',
            dlGoogle:'https://play.google.com/store/music/album/Arturo_Mayorga_Cascades?id=Bteaxct3csydms6brj4zn5kp2gi',
            dlCdBaby:'http://www.cdbaby.com/cd/arturomayorga'},
        {url:'assets/audio/a0110.mp3',
            dlApple:'https://geo.itunes.apple.com/us/album/cascades/id319906357?mt=1&app=music',
            dlGoogle:'https://play.google.com/store/music/album/Arturo_Mayorga_Cascades?id=Bteaxct3csydms6brj4zn5kp2gi',
            dlCdBaby:'http://www.cdbaby.com/cd/arturomayorga'}
    ];

    this._dlDiv;

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

        var downLoad = document.createElement('div');
        downLoad.className = 'navBarDlBtn icon-download';
        downLoad.onclick = function(e){e.stopPropagation(); this._onDownloadTrack();}.bind(this);
        navBarPlayer.appendChild(downLoad);
        this._dlDiv = downLoad;
        downLoad.style.opacity = 0;
		
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
    };
    
    this.stopAnimations = function()
    {
        this._jQObj.clearQueue().stop();
    };
    
    this.layoutUpdate = function()
    {
        
    };

    this._onDownloadTrack = function()
    {
       // alert (this._playlist[this._track].dlApple);

        //window.open(this._playlist[this._track].dlApple, 'am_comnewtab');
        //window.focus();
        //
        var CLIENT_DEVICE = {
            APPLE: 0,
            ANDROID: 1,
            OTHER: 2
        };

        function getClientDevice()
        {
            var ret = CLIENT_DEVICE.OTHER;

            //alert (navigator.userAgent);

            if ( navigator.userAgent.toLowerCase().indexOf("android") > -1 )
            {
                ret = CLIENT_DEVICE.ANDROID;
            }
            else if ((navigator.userAgent.toLowerCase().indexOf("ipad") > -1) ||
                     (navigator.userAgent.toLowerCase().indexOf("iphone") > -1) ||
                     (navigator.userAgent.toLowerCase().indexOf("ipod") > -1) )
            {
                ret = CLIENT_DEVICE.APPLE;
            }


            return ret;
        }
        var clientDevice = getClientDevice();
        var deviceDlUrl = ['dlApple', 'dlGoogle', 'dlCdBaby'];
        devicedlUrl = deviceDlUrl[clientDevice];

        var a = window.document.createElement("a");
        a.target = '_blank';
       // a.href = this._playlist[this._track].dlApple;
        a.href = this._playlist[this._track][devicedlUrl];

        // Dispatch fake click
        var e = window.document.createEvent("MouseEvents");
        e.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        a.dispatchEvent(e);

        if ( clientDevice === CLIENT_DEVICE.ANDROID ||
             clientDevice === CLIENT_DEVICE.APPLE )
        {
            this._pauseTrack();
        }
    };

    this.showDlBtn = function()
    {
      //  this._dlDiv.style.opacity = 1;
        $( this._dlDiv ).animate({opacity: 1}, { duration: ANIM_LEN, queue: false});
    };

    this.hideDlBtn = function()
    {
        //this._dlDiv.style.opacity = 0;
        $( this._dlDiv ).animate({opacity: 0}, { duration: ANIM_LEN, queue: false});
    }

    this.distributeMessage = function(){};

    this._pauseTrack = function()
    {
        if ( undefined !== this._audioDom )
        {
            this._audioDom.pause();
        }

        this._playPauseDom.className = 'navBarPlayBtn flaticon-play36';
        this._playPauseDom.onclick = function(e){e.stopPropagation(); this._playTrack(this._track);}.bind(this);
        this.hideDlBtn();
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
        asrc.type = 'audio/mpeg'; asrc.src = this._playlist[track].url;
        audio.appendChild(asrc);
        this._navBarPlayer.appendChild(audio);

        audio.play();

        this._playPauseDom.className = 'navBarPauseBtn flaticon-pause8';
        this._playPauseDom.onclick = function(e){e.stopPropagation(); this._pauseTrack();}.bind(this);

        this._audioDom = audio;
        this.showDlBtn();
    };
}