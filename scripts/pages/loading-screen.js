'use strict';

class LoadingScreen {
    static panels = {
        cp: $.GetContextPanel(),
        progressBar: $('#ProgressBar'),
    };

    static {
        $.RegisterForUnhandledEvent('UnloadLoadingScreenAndReinit', this.init.bind(this));
        $.RegisterForUnhandledEvent('PopulateLoadingScreen', this.updateLoadingScreenInfo.bind(this));
        $.RegisterForUnhandledEvent('ChaosLevelInitPostEntity', this.hideLoadingScreen.bind(this));
    }

    static init() {
        this.panels.progressBar.value = 0;
        this.panels.cp.AddClass('active');
    }

    static updateLoadingScreenInfoRepeater() {
        $.Schedule(0.125, this.updateLoadingScreenInfoRepeater.bind(this));
    }

    static updateLoadingScreenInfo(mapName) {
        $.Schedule(0.125, this.updateLoadingScreenInfoRepeater.bind(this));
    }

    static hideLoadingScreen() {
        this.panels.cp.RemoveClass('active');
    }
}
