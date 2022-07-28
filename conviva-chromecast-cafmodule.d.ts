export type valueof<T> = T[keyof T];

export namespace Impl {
    function CAFProxy(castPlayer?: cast.framework.PlayerManager, systemFactory?: systemFactory, videoAnalytics?: VideoAnalytics, Conviva?: Conviva): void;
}

export namespace ProxyMonitor {
    function initConvivaDropIn(castPlayer?: cast.framework.PlayerManager, systemFactory?: systemFactory, videoAnalytics?: VideoAnalytics, Conviva?: Conviva): ProxyMonitor;
    function release(): void;
}