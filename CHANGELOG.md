
# Changelog

## 4.0.11 (28/JUL/2022)
* Supports Typescript.
* Fixes the issue of bitrates not reported for VOD contents with multiple audio streams.

## 4.0.9 (29/APR/2021)
* Supports custom UI element(_castMediaElement_) along with cast-media-player.
* Disables auto collection of Average Framerate (afps) collection, as CAF _PlayerManager.getStats().decodedFrames_ stats is unreliable.

## 4.0.8 (27/JAN/2021)
* Supports Average Framerate (afps) collection.

## 4.0.6 (09/JAN/2021)
* Fixes the issue of buffering reported for SSAI ads even though ads are playing. 

## 4.0.5 (25/SEP/2020)
* Supports auto collection of Screen Resolution of the Display connected to Chromecast. (Core SDK 4.0.18 and above)
* Supports auto collection of Dropped Frames during playback. (Core SDK 4.0.18 and above)

## 4.0.2 (16/JUN/2020)
* Uses an upgraded version of SDK architecture (4.0.13 and above) that simplifies and accelerates Conviva integration using Analytics and VideoAnalytics classes.
