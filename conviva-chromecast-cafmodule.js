/*! (C) 2021 Conviva, Inc. All rights reserved. Confidential and proprietary. */

!function(t,i){var s;"function"===typeof define&&define.amd?define(i):("object"===typeof exports||"object"===typeof module&&module.exports)&&(module.exports=i()),"undefined"!==typeof t&&t&&("undefined"!==typeof t.Conviva&&t.Conviva?t.Conviva.ProxyMonitor||t.ConvivaModuleLoading||(s=i(),t.ConvivaModuleLoading=!0,t.Conviva.ProxyMonitor=s.ProxyMonitor,t.Conviva.Impl.CAFProxy=s.Impl.CAFProxy,delete t.ConvivaModuleLoading):t.ConvivaModule||t.ConvivaModuleLoading||(t.ConvivaModuleLoading=!0,t.ConvivaModule=i(),delete t.ConvivaModuleLoading))}(this,function(){var e={};return function(){"use strict";!function(){function t(t,i,s,c){var h=this;h.t=[],h.i=0,h.s=0,h.n=!1,this.e=new c.Impl.Html5Timer,this.o=-1,this.a=-1,this.c=-1,this.h=0,this.r=0,this.f=c.Constants.PlayerState.BUFFERING,this.u=!1,this.d=0,this.N=-1,this.l="",this.y=function(){h.v&&(h.v.addEventListener(cast.framework.events.EventType.LOAD_START,h.onLoadstart),h.v.addEventListener(cast.framework.events.EventType.LOADED_METADATA,h.onLoadedMetadata),h.v.addEventListener(cast.framework.events.EventType.MEDIA_FINISHED,h.onMediaFinished),h.v.addEventListener(cast.framework.events.EventType.PAUSE,h.onPause),h.v.addEventListener(cast.framework.events.EventType.SEEKING,h.onSeeking),h.v.addEventListener(cast.framework.events.EventType.SEEKED,h.onSeekComplete),h.v.addEventListener(cast.framework.events.EventType.ERROR,h.onError),h.v.addEventListener(cast.framework.events.EventType.BITRATE_CHANGED,h.onBitrateChange))},this.p=function(){h.v&&(h.v.removeEventListener(cast.framework.events.EventType.LOAD_START,h.onLoadstart),h.v.removeEventListener(cast.framework.events.EventType.LOADED_METADATA,h.onLoadedMetadata),h.v.removeEventListener(cast.framework.events.EventType.MEDIA_FINISHED,h.onMediaFinished),h.v.removeEventListener(cast.framework.events.EventType.PAUSE,h.onPause),h.v.removeEventListener(cast.framework.events.EventType.SEEKING,h.onSeeking),h.v.removeEventListener(cast.framework.events.EventType.SEEKED,h.onSeekComplete),h.v.removeEventListener(cast.framework.events.EventType.ERROR,h.onError),h.v.removeEventListener(cast.framework.events.EventType.BITRATE_CHANGED,h.onBitrateChange))},this.onLoadstart=function(){h.C("CAFProxy.onLoadstart"),h.A(c.Constants.PlayerState.BUFFERING)},this.onLoadedMetadata=function(){h.C("CAFProxy.onLoadedMetadata"),h.m()},this.onBitrateChange=function(t){h.d=Math.round(t.totalBitrate/1e3),h.x.reportPlaybackMetric(c.Constants.Playback.BITRATE,h.d,"CONVIVA")},this.onPause=function(){h.C("CAFProxy.onPause"),h.A(c.Constants.PlayerState.PAUSED)},this.onMediaFinished=function(){h.C("CAFProxy.onMediaFinished"),h.v&&h.A(c.Constants.PlayerState.STOPPED)},this.onSeeking=function(){h.isSeekStarted||(h.isSeekStarted=!0,h.C("CAFProxy.onSeeking"),h.x.reportPlaybackMetric(c.Constants.Playback.SEEK_STARTED,"CONVIVA"))},this.onSeekComplete=function(){h.C("CAFProxy.onSeekComplete"),h.x.reportPlaybackMetric(c.Constants.Playback.SEEK_ENDED,"CONVIVA"),h.isSeekStarted=!1},this.onError=function(t){var i;h.C("CAFProxy.onError"),h.v&&("undefined"!==typeof(t=t.error)?!t||t.type!==cast.framework.messages.ErrorType.LOAD_CANCELLED&&t.type!==cast.framework.messages.ErrorType.INVALID_REQUEST?(i=h.F(t?t.type:"UNKNOWN"),h.x.reportPlaybackError(i,c.Constants.ErrorSeverity.FATAL)):(i=h.F("UNKNOWN"),h.x.reportPlaybackError(i,c.Constants.ErrorSeverity.WARNING)):(i=h.F("UNKNOWN"),h.x.reportPlaybackError(i,c.Constants.ErrorSeverity.FATAL)))},this.F=function(t){var i;switch(t){case cast.framework.messages.ErrorType.LOAD_FAILED:i=cast.framework.messages.ErrorType.LOAD_FAILED;break;case cast.framework.messages.ErrorType.INVALID_PLAYER_STATE:i=cast.framework.messages.ErrorType.INVALID_PLAYER_STATE;break;case cast.framework.messages.ErrorType.ERROR:i=cast.framework.messages.ErrorType.ERROR;break;default:i="MEDIA_ERR_UNKNOWN"}return h.C("MediaError: type "+t+" "+i),i},this.A=function(t){h.f=t,h.x.reportPlaybackMetric(c.Constants.Playback.PLAYER_STATE,t,"CONVIVA"),h.P(),h.V=!0},this.m=function(){var t,i,s,n;h.v&&(t=(s=h.v.getStats()).width,i=s.height,s=s.droppedFrames,(!isNaN(t)&&t>0&&t!==h.o||!isNaN(i)&&i>0&&i!==h.a)&&(h.o=t,h.a=i,h.x.reportPlaybackMetric(c.Constants.Playback.RESOLUTION,t,i,"CONVIVA")),!isNaN(s)&&s>=0&&s!==h.c&&(h.c=s,h.x.reportPlaybackMetric(c.Constants.Playback.DROPPED_FRAMES_TOTAL,s,"CONVIVA")),s={},"function"===typeof h.v.getDurationSec&&h.v.getDurationSec()>0&&((n=h.v.getDurationSec())!==h.N&&(h.N=n,s[c.Constants.DURATION]=n)),"function"===typeof h.v.getMediaInformation&&h.v.getMediaInformation()&&h.v.getMediaInformation().contentId&&((n=h.v.getMediaInformation().contentId)!==h.l&&(h.l=n,s[c.Constants.STREAM_URL]=n)),"{}"!==JSON.stringify(s)&&h.x.setContentInfo(s))},this.I=function(){var t;h.x&&((t={})[c.Constants.DeviceMetadata.TYPE]=c.Constants.DeviceType.SETTOP,t[c.Constants.DeviceMetadata.CATEGORY]=c.Constants.DeviceCategory.CHROMECAST,c.Analytics.setDeviceMetadata(t))},this.O=function(){this.M=0,this.b=0,this.w=0,this.k=this.e.createTimer(this.R,250,"CAFProxy._poll()")},this.R=function(){var t,i;h.v&&(h.r%4===0&&(t=h.v.getStats().decodedFrames,i=Math.floor(t-h.h),h.h=t,isNaN(i)),h.r++),h.x.reportPlaybackMetric(c.Constants.Playback.PLAY_HEAD_TIME,1e3*h.U.currentTime,"CONVIVA"),h.m(),h._(),h.g()},this._=function(){h.M=h.b,h.b=h.U.currentTime;var t,i=Date.now();h.j>0&&i>h.j&&(t=(t=(t=h.b-h.M)<0?0:t)/(i-h.j)*1e3,h.t.push(t)),h.j=i,h.t.length>Math.max(4,4)&&h.t.shift()},this.g=function(){var t=h.t.length;if(t>=Math.min(4,4)){for(var i=0,s=h.t.slice(),n=0;n<s.length;n++)i+=s[n];i/=t;var e=1,o=.25,a=h.v.getPlaybackRate();if(!isNaN(a)&&a!==1/0&&a>0&&(e=e*a,o=o*a),h.f!==c.Constants.PlayerState.PLAYING&&t>=4&&Math.abs(i-e)<o)return h.C("Adjusting Conviva player state to: PLAYING"),void h.A(c.Constants.PlayerState.PLAYING);(h.f===c.Constants.PlayerState.PLAYING||h.f!==c.Constants.PlayerState.PLAYING&&"BUFFERING"===h.v.getPlayerState())&&t>=4&&0===i&&(h.C("Adjusting Conviva player state to: BUFFERING"),h.A(c.Constants.PlayerState.BUFFERING))}},this.K=function(){this.k&&(this.k(),this.k=null)},this.P=function(){h.t=[],h.M=-1,h.j=0},this.W=function(){h.s=0,h.i=0},this.C=function(t){this.D.log(t,c.SystemSettings.LogLevel.DEBUG)},function(t,i,s,n){if(!t)throw new Error("cafProxy: videoElement argument cannot be null.");if(this.v=t,document.getElementsByTagName("cast-media-player")&&document.getElementsByTagName("cast-media-player").length>0)this.U=document.getElementsByTagName("cast-media-player")[0].getMediaElement();else if(document.getElementsByTagName("video")&&document.getElementsByTagName("video").length>0){var e=document.getElementsByTagName("video");this.U=e[0];for(var o=0;o<e.length&&e.length>1;o++)if(e[o].getAttribute("class")&&-1!==e[o].getAttribute("class").indexOf("castMediaElement")){this.U=e[o];break}}this.x=s,this.D=i.buildLogger(),this.D.setModuleName("cafProxy"),this.C("cafProxy._constr()"),this.y(),this.P(),this.W(),this.O(),this.I(),this.A(this.f),this.m(),(i={})[n.Constants.MODULE_NAME]="Chromecast CAF Receiver",i[n.Constants.MODULE_VERSION]="4.0.9",this.x.setContentInfo(i),(i={})[n.Constants.FRAMEWORK_NAME]="Cast Receiver v3","undefined"!==typeof cast.framework&&(i[n.Constants.FRAMEWORK_VERSION]=cast.framework.VERSION),this.x.setPlayerInfo(i)}.apply(this,arguments),this.cleanup=function(){this.C("cafProxy.cleanup()"),this.K(),this.p(),this.v=null}}e.ProxyMonitor={G:null,release:function(){this.G&&this.G.cleanup()},initConvivaDropIn:function(t,i,s,n){if(t)return this.G=new e.Impl.CAFProxy(t,i,s,n),this.G;throw new Error("No player proxy initialized")}};"undefined"!==typeof e&&(e.Impl=e.Impl||{},e.Impl.CAFProxy=t)}()}(),e});