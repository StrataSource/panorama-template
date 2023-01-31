'use strict';

class MainMenu {
    static panels = {
        cp: $.GetContextPanel(),
    };

    static {
        // Engine Events
        $.RegisterForUnhandledEvent('ChaosHideMainMenu', this.onHideMainMenu.bind(this));
        $.RegisterForUnhandledEvent('ChaosShowPauseMenu', this.onShowPauseMenu.bind(this));
        $.RegisterForUnhandledEvent('ChaosHidePauseMenu', this.onHidePauseMenu.bind(this));
        $.RegisterEventHandler('Cancelled', $.GetContextPanel(), this.onEscapeKeyPressed.bind(this));

        // Custom Events
        $.DefineEvent('LoadMap', 1);
        $.DefineEvent('ResumeGame', 0);
        $.DefineEvent('QuitGame', 0);
        $.DefineEvent('LoadMainMenu', 0);

        $.RegisterForUnhandledEvent('LoadMap', this.playMap.bind(this));
        $.RegisterForUnhandledEvent('ResumeGame', this.resumeGame.bind(this));
        $.RegisterForUnhandledEvent('QuitGame', this.quitGame.bind(this));
        $.RegisterForUnhandledEvent('LoadMainMenu', this.loadMainMenu.bind(this));
    }

    /**
	 * Fired by C++ whenever main menu is switched from.
	 */
    static onHideMainMenu() {
        UiToolkitAPI.CloseAllVisiblePopups();
    }

    /**
	 * Fired by C++ whenever pause menu (i.e. main menu when in a map) is switched to.
	 */
    static onShowPauseMenu() {
        this.panels.cp.AddClass('IsPaused');
    }

    /**
	 * Fired by C++ whenever pause menu is switched from.
	 */
    static onHidePauseMenu() {
        this.panels.cp.RemoveClass('IsPaused');
    }

    static playMap(map) {
        GameInterfaceAPI.ConsoleCommand('map ' + map);
    }

    static resumeGame() {
        $.DispatchEvent('ChaosMainMenuResumeGame');
    }

    static quitGame() {
        GameInterfaceAPI.ConsoleCommand('quit');
    }

    static loadMainMenu() {
        GameInterfaceAPI.ConsoleCommand('disconnect');
    }

    /**
	 * Handles the escape key getting pressed
	 * @param {unknown} _eSource - C++ dev needs to explain what these params do. Pressing in main menu returns "MainMenuInput"
	 * @param {unknown} _nRepeats - Pressing in main menu returns "keyboard"
	 * @param {unknown} _focusPanel - Pressing in main menu returns undefined
	 */
    static onEscapeKeyPressed(_eSource, _nRepeats, _focusPanel) {
        // Resume game in pause menu mode
        if (GameInterfaceAPI.GetGameUIState() === GameUIState.PAUSEMENU) {
            $.DispatchEvent('ChaosMainMenuResumeGame');
        }
    }
}
