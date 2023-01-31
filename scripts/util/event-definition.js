'use strict';

//--------------------------------------------------------------------------------------------------
// Common place to define new events with panorama.
//
// Usage:   $.DefineEvent( eventName, NumArguments, [optional] ArgumentsDescription, [optional] Description )
//          $.DefinePanelEvent( eventName, NumArguments, [optional] ArgumentsDescription, [optional] Description )
//
// Example: $.DefineEvent( 'MyCustomEvent', 2, 'args1, args2', 'Event defined in javascript' )
//
// General documentation about events can be found on
//          https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Panorama/Events
//
//--------------------------------------------------------------------------------------------------

$.DefineEvent(
    'HideContentPanel',
    0,
    'no args',
    'Hide all the main menu content panels and show the default home dashboard',
);
$.DefineEvent('ShowContentPanel', 0, 'no args', 'Show a content panel');
$.DefineEvent('ReloadBackground', 0, '', 'Reloads the main menu background');
$.DefineEvent(
    'MainMenuTabShown',
    1,
    'tabid',
    'Alert main menu tabs when they are shown, in case there is a data update needed',
);
$.DefineEvent('MainMenuTabHidden', 1, 'tabid', 'Fired when a main menu tab is closed');

$.DefineEvent('SettingsNavigateToPanel', 2, 'category, settingPanel', 'Navigates to a setting by panel handle');
$.DefineEvent('SettingsSave', 0, 'Save the settings out to file (host_writeconfig)');

$.DefineEvent('RefreshLobbyList', 0, '', 'Send a refresh request for the lobby list');
$.DefineEvent('Lobby_SetMaxPlayers', 1, 'maxplayers', 'Sets the max players of your lobby');

$.DefineEvent('MapSelector_OnLoaded', 0);
$.DefineEvent('MapSelector_ShowConfirmCancelDownload', 1);
$.DefineEvent('HudLeaderboards_ForceClose', 0, '', 'Force close the leaderboards');
$.DefineEvent('ColorPickerSave', 1, 'color');
$.DefineEvent('ColorPickerCancel', 0);