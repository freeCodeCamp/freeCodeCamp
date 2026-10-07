import { localize } from '../../../nls.js';
import { createDecorator } from '../../instantiation/common/instantiation.js';

const IAccessibilitySignalService = createDecorator('accessibilitySignalService');
/**
 * Corresponds to the audio files in ./media.
*/
class Sound {
    static register(options) {
        const sound = new Sound(options.fileName);
        return sound;
    }
    static { this.error = Sound.register({ fileName: 'error.mp3' }); }
    static { this.warning = Sound.register({ fileName: 'warning.mp3' }); }
    static { this.success = Sound.register({ fileName: 'success.mp3' }); }
    static { this.foldedArea = Sound.register({ fileName: 'foldedAreas.mp3' }); }
    static { this.break = Sound.register({ fileName: 'break.mp3' }); }
    static { this.quickFixes = Sound.register({ fileName: 'quickFixes.mp3' }); }
    static { this.taskCompleted = Sound.register({ fileName: 'taskCompleted.mp3' }); }
    static { this.taskFailed = Sound.register({ fileName: 'taskFailed.mp3' }); }
    static { this.terminalBell = Sound.register({ fileName: 'terminalBell.mp3' }); }
    static { this.diffLineInserted = Sound.register({ fileName: 'diffLineInserted.mp3' }); }
    static { this.diffLineDeleted = Sound.register({ fileName: 'diffLineDeleted.mp3' }); }
    static { this.diffLineModified = Sound.register({ fileName: 'diffLineModified.mp3' }); }
    static { this.requestSent = Sound.register({ fileName: 'requestSent.mp3' }); }
    static { this.responseReceived1 = Sound.register({ fileName: 'responseReceived1.mp3' }); }
    static { this.responseReceived2 = Sound.register({ fileName: 'responseReceived2.mp3' }); }
    static { this.responseReceived3 = Sound.register({ fileName: 'responseReceived3.mp3' }); }
    static { this.responseReceived4 = Sound.register({ fileName: 'responseReceived4.mp3' }); }
    static { this.clear = Sound.register({ fileName: 'clear.mp3' }); }
    static { this.save = Sound.register({ fileName: 'save.mp3' }); }
    static { this.format = Sound.register({ fileName: 'format.mp3' }); }
    static { this.voiceRecordingStarted = Sound.register({ fileName: 'voiceRecordingStarted.mp3' }); }
    static { this.voiceRecordingStopped = Sound.register({ fileName: 'voiceRecordingStopped.mp3' }); }
    static { this.progress = Sound.register({ fileName: 'progress.mp3' }); }
    static { this.chatEditModifiedFile = Sound.register({ fileName: 'chatEditModifiedFile.mp3' }); }
    static { this.editsKept = Sound.register({ fileName: 'editsKept.mp3' }); }
    static { this.editsUndone = Sound.register({ fileName: 'editsUndone.mp3' }); }
    static { this.nextEditSuggestion = Sound.register({ fileName: 'nextEditSuggestion.mp3' }); }
    static { this.terminalCommandSucceeded = Sound.register({ fileName: 'terminalCommandSucceeded.mp3' }); }
    static { this.chatUserActionRequired = Sound.register({ fileName: 'chatUserActionRequired.mp3' }); }
    static { this.codeActionTriggered = Sound.register({ fileName: 'codeActionTriggered.mp3' }); }
    static { this.codeActionApplied = Sound.register({ fileName: 'codeActionApplied.mp3' }); }
    constructor(fileName) {
        this.fileName = fileName;
    }
}
class SoundSource {
    constructor(randomOneOf) {
        this.randomOneOf = randomOneOf;
    }
}
class AccessibilitySignal {
    constructor(sound, name, legacySoundSettingsKey, settingsKey, legacyAnnouncementSettingsKey, announcementMessage, managesOwnEnablement = false) {
        this.sound = sound;
        this.name = name;
        this.legacySoundSettingsKey = legacySoundSettingsKey;
        this.settingsKey = settingsKey;
        this.legacyAnnouncementSettingsKey = legacyAnnouncementSettingsKey;
        this.announcementMessage = announcementMessage;
        this.managesOwnEnablement = managesOwnEnablement;
    }
    static { this._signals = new Set(); }
    static register(options) {
        const soundSource = new SoundSource('randomOneOf' in options.sound ? options.sound.randomOneOf : [options.sound]);
        const signal = new AccessibilitySignal(soundSource, options.name, options.legacySoundSettingsKey, options.settingsKey, options.legacyAnnouncementSettingsKey, options.announcementMessage, options.managesOwnEnablement);
        AccessibilitySignal._signals.add(signal);
        return signal;
    }
    static { this.errorAtPosition = AccessibilitySignal.register({
        name: localize(1576, 'Error at Position'),
        sound: Sound.error,
        announcementMessage: localize(1577, 'Error'),
        settingsKey: 'accessibility.signals.positionHasError',
        delaySettingsKey: 'accessibility.signalOptions.delays.errorAtPosition'
    }); }
    static { this.warningAtPosition = AccessibilitySignal.register({
        name: localize(1578, 'Warning at Position'),
        sound: Sound.warning,
        announcementMessage: localize(1579, 'Warning'),
        settingsKey: 'accessibility.signals.positionHasWarning',
        delaySettingsKey: 'accessibility.signalOptions.delays.warningAtPosition'
    }); }
    static { this.errorOnLine = AccessibilitySignal.register({
        name: localize(1580, 'Error on Line'),
        sound: Sound.error,
        legacySoundSettingsKey: 'audioCues.lineHasError',
        legacyAnnouncementSettingsKey: 'accessibility.alert.error',
        announcementMessage: localize(1581, 'Error on Line'),
        settingsKey: 'accessibility.signals.lineHasError',
    }); }
    static { this.warningOnLine = AccessibilitySignal.register({
        name: localize(1582, 'Warning on Line'),
        sound: Sound.warning,
        legacySoundSettingsKey: 'audioCues.lineHasWarning',
        legacyAnnouncementSettingsKey: 'accessibility.alert.warning',
        announcementMessage: localize(1583, 'Warning on Line'),
        settingsKey: 'accessibility.signals.lineHasWarning',
    }); }
    static { this.foldedArea = AccessibilitySignal.register({
        name: localize(1584, 'Folded Area on Line'),
        sound: Sound.foldedArea,
        legacySoundSettingsKey: 'audioCues.lineHasFoldedArea',
        legacyAnnouncementSettingsKey: 'accessibility.alert.foldedArea',
        announcementMessage: localize(1585, 'Folded'),
        settingsKey: 'accessibility.signals.lineHasFoldedArea',
    }); }
    static { this.break = AccessibilitySignal.register({
        name: localize(1586, 'Breakpoint on Line'),
        sound: Sound.break,
        legacySoundSettingsKey: 'audioCues.lineHasBreakpoint',
        legacyAnnouncementSettingsKey: 'accessibility.alert.breakpoint',
        announcementMessage: localize(1587, 'Breakpoint'),
        settingsKey: 'accessibility.signals.lineHasBreakpoint',
    }); }
    static { this.inlineSuggestion = AccessibilitySignal.register({
        name: localize(1588, 'Inline Suggestion on Line'),
        sound: Sound.quickFixes,
        legacySoundSettingsKey: 'audioCues.lineHasInlineSuggestion',
        settingsKey: 'accessibility.signals.lineHasInlineSuggestion',
    }); }
    static { this.nextEditSuggestion = AccessibilitySignal.register({
        name: localize(1589, 'Next Edit Suggestion on Line'),
        sound: Sound.nextEditSuggestion,
        legacySoundSettingsKey: 'audioCues.nextEditSuggestion',
        settingsKey: 'accessibility.signals.nextEditSuggestion',
        announcementMessage: localize(1590, 'Next Edit Suggestion'),
    }); }
    static { this.terminalQuickFix = AccessibilitySignal.register({
        name: localize(1591, 'Terminal Quick Fix'),
        sound: Sound.quickFixes,
        legacySoundSettingsKey: 'audioCues.terminalQuickFix',
        legacyAnnouncementSettingsKey: 'accessibility.alert.terminalQuickFix',
        announcementMessage: localize(1592, 'Quick Fix'),
        settingsKey: 'accessibility.signals.terminalQuickFix',
    }); }
    static { this.onDebugBreak = AccessibilitySignal.register({
        name: localize(1593, 'Debugger Stopped on Breakpoint'),
        sound: Sound.break,
        legacySoundSettingsKey: 'audioCues.onDebugBreak',
        legacyAnnouncementSettingsKey: 'accessibility.alert.onDebugBreak',
        announcementMessage: localize(1594, 'Breakpoint'),
        settingsKey: 'accessibility.signals.onDebugBreak',
    }); }
    static { this.noInlayHints = AccessibilitySignal.register({
        name: localize(1595, 'No Inlay Hints on Line'),
        sound: Sound.error,
        legacySoundSettingsKey: 'audioCues.noInlayHints',
        legacyAnnouncementSettingsKey: 'accessibility.alert.noInlayHints',
        announcementMessage: localize(1596, 'No Inlay Hints'),
        settingsKey: 'accessibility.signals.noInlayHints',
    }); }
    static { this.taskCompleted = AccessibilitySignal.register({
        name: localize(1597, 'Task Completed'),
        sound: Sound.taskCompleted,
        legacySoundSettingsKey: 'audioCues.taskCompleted',
        legacyAnnouncementSettingsKey: 'accessibility.alert.taskCompleted',
        announcementMessage: localize(1598, 'Task Completed'),
        settingsKey: 'accessibility.signals.taskCompleted',
    }); }
    static { this.taskFailed = AccessibilitySignal.register({
        name: localize(1599, 'Task Failed'),
        sound: Sound.taskFailed,
        legacySoundSettingsKey: 'audioCues.taskFailed',
        legacyAnnouncementSettingsKey: 'accessibility.alert.taskFailed',
        announcementMessage: localize(1600, 'Task Failed'),
        settingsKey: 'accessibility.signals.taskFailed',
    }); }
    static { this.terminalCommandFailed = AccessibilitySignal.register({
        name: localize(1601, 'Terminal Command Failed'),
        sound: Sound.error,
        legacySoundSettingsKey: 'audioCues.terminalCommandFailed',
        legacyAnnouncementSettingsKey: 'accessibility.alert.terminalCommandFailed',
        announcementMessage: localize(1602, 'Command Failed'),
        settingsKey: 'accessibility.signals.terminalCommandFailed',
    }); }
    static { this.terminalCommandSucceeded = AccessibilitySignal.register({
        name: localize(1603, 'Terminal Command Succeeded'),
        sound: Sound.terminalCommandSucceeded,
        announcementMessage: localize(1604, 'Command Succeeded'),
        settingsKey: 'accessibility.signals.terminalCommandSucceeded',
    }); }
    static { this.terminalBell = AccessibilitySignal.register({
        name: localize(1605, 'Terminal Bell'),
        sound: Sound.terminalBell,
        legacySoundSettingsKey: 'audioCues.terminalBell',
        legacyAnnouncementSettingsKey: 'accessibility.alert.terminalBell',
        announcementMessage: localize(1606, 'Terminal Bell'),
        settingsKey: 'accessibility.signals.terminalBell',
    }); }
    static { this.notebookCellCompleted = AccessibilitySignal.register({
        name: localize(1607, 'Notebook Cell Completed'),
        sound: Sound.taskCompleted,
        legacySoundSettingsKey: 'audioCues.notebookCellCompleted',
        legacyAnnouncementSettingsKey: 'accessibility.alert.notebookCellCompleted',
        announcementMessage: localize(1608, 'Notebook Cell Completed'),
        settingsKey: 'accessibility.signals.notebookCellCompleted',
    }); }
    static { this.notebookCellFailed = AccessibilitySignal.register({
        name: localize(1609, 'Notebook Cell Failed'),
        sound: Sound.taskFailed,
        legacySoundSettingsKey: 'audioCues.notebookCellFailed',
        legacyAnnouncementSettingsKey: 'accessibility.alert.notebookCellFailed',
        announcementMessage: localize(1610, 'Notebook Cell Failed'),
        settingsKey: 'accessibility.signals.notebookCellFailed',
    }); }
    static { this.diffLineInserted = AccessibilitySignal.register({
        name: localize(1611, 'Diff Line Inserted'),
        sound: Sound.diffLineInserted,
        legacySoundSettingsKey: 'audioCues.diffLineInserted',
        settingsKey: 'accessibility.signals.diffLineInserted',
    }); }
    static { this.diffLineDeleted = AccessibilitySignal.register({
        name: localize(1612, 'Diff Line Deleted'),
        sound: Sound.diffLineDeleted,
        legacySoundSettingsKey: 'audioCues.diffLineDeleted',
        settingsKey: 'accessibility.signals.diffLineDeleted',
    }); }
    static { this.diffLineModified = AccessibilitySignal.register({
        name: localize(1613, 'Diff Line Modified'),
        sound: Sound.diffLineModified,
        legacySoundSettingsKey: 'audioCues.diffLineModified',
        settingsKey: 'accessibility.signals.diffLineModified',
    }); }
    static { this.chatEditModifiedFile = AccessibilitySignal.register({
        name: localize(1614, 'Chat Edit Modified File'),
        sound: Sound.chatEditModifiedFile,
        announcementMessage: localize(1615, 'File Modified from Chat Edits'),
        settingsKey: 'accessibility.signals.chatEditModifiedFile',
    }); }
    static { this.chatRequestSent = AccessibilitySignal.register({
        name: localize(1616, 'Chat Request Sent'),
        sound: Sound.requestSent,
        legacySoundSettingsKey: 'audioCues.chatRequestSent',
        legacyAnnouncementSettingsKey: 'accessibility.alert.chatRequestSent',
        announcementMessage: localize(1617, 'Chat Request Sent'),
        settingsKey: 'accessibility.signals.chatRequestSent',
    }); }
    static { this.chatResponseReceived = AccessibilitySignal.register({
        name: localize(1618, 'Chat Response Received'),
        legacySoundSettingsKey: 'audioCues.chatResponseReceived',
        sound: {
            randomOneOf: [
                Sound.responseReceived1,
                Sound.responseReceived2,
                Sound.responseReceived3,
                Sound.responseReceived4
            ]
        },
        settingsKey: 'accessibility.signals.chatResponseReceived'
    }); }
    static { this.codeActionTriggered = AccessibilitySignal.register({
        name: localize(1619, 'Code Action Request Triggered'),
        sound: Sound.codeActionTriggered,
        legacySoundSettingsKey: 'audioCues.codeActionRequestTriggered',
        legacyAnnouncementSettingsKey: 'accessibility.alert.codeActionRequestTriggered',
        announcementMessage: localize(1620, 'Code Action Request Triggered'),
        settingsKey: 'accessibility.signals.codeActionTriggered',
    }); }
    static { this.codeActionApplied = AccessibilitySignal.register({
        name: localize(1621, 'Code Action Applied'),
        legacySoundSettingsKey: 'audioCues.codeActionApplied',
        sound: Sound.codeActionApplied,
        settingsKey: 'accessibility.signals.codeActionApplied'
    }); }
    static { this.progress = AccessibilitySignal.register({
        name: localize(1622, 'Progress'),
        sound: Sound.progress,
        legacySoundSettingsKey: 'audioCues.chatResponsePending',
        legacyAnnouncementSettingsKey: 'accessibility.alert.progress',
        announcementMessage: localize(1623, 'Progress'),
        settingsKey: 'accessibility.signals.progress'
    }); }
    static { this.clear = AccessibilitySignal.register({
        name: localize(1624, 'Clear'),
        sound: Sound.clear,
        legacySoundSettingsKey: 'audioCues.clear',
        legacyAnnouncementSettingsKey: 'accessibility.alert.clear',
        announcementMessage: localize(1625, 'Clear'),
        settingsKey: 'accessibility.signals.clear'
    }); }
    static { this.save = AccessibilitySignal.register({
        name: localize(1626, 'Save'),
        sound: Sound.save,
        legacySoundSettingsKey: 'audioCues.save',
        legacyAnnouncementSettingsKey: 'accessibility.alert.save',
        announcementMessage: localize(1627, 'Save'),
        settingsKey: 'accessibility.signals.save'
    }); }
    static { this.format = AccessibilitySignal.register({
        name: localize(1628, 'Format'),
        sound: Sound.format,
        legacySoundSettingsKey: 'audioCues.format',
        legacyAnnouncementSettingsKey: 'accessibility.alert.format',
        announcementMessage: localize(1629, 'Format'),
        settingsKey: 'accessibility.signals.format'
    }); }
    static { this.voiceRecordingStarted = AccessibilitySignal.register({
        name: localize(1630, 'Voice Recording Started'),
        sound: Sound.voiceRecordingStarted,
        legacySoundSettingsKey: 'audioCues.voiceRecordingStarted',
        settingsKey: 'accessibility.signals.voiceRecordingStarted'
    }); }
    static { this.voiceRecordingStopped = AccessibilitySignal.register({
        name: localize(1631, 'Voice Recording Stopped'),
        sound: Sound.voiceRecordingStopped,
        legacySoundSettingsKey: 'audioCues.voiceRecordingStopped',
        settingsKey: 'accessibility.signals.voiceRecordingStopped'
    }); }
    static { this.editsKept = AccessibilitySignal.register({
        name: localize(1632, 'Edits Kept'),
        sound: Sound.editsKept,
        announcementMessage: localize(1633, 'Edits Kept'),
        settingsKey: 'accessibility.signals.editsKept',
    }); }
    static { this.editsUndone = AccessibilitySignal.register({
        name: localize(1634, 'Undo Edits'),
        sound: Sound.editsUndone,
        announcementMessage: localize(1635, 'Edits Undone'),
        settingsKey: 'accessibility.signals.editsUndone',
    }); }
    static { this.chatUserActionRequired = AccessibilitySignal.register({
        name: localize(1636, 'Chat User Action Required'),
        sound: Sound.chatUserActionRequired,
        announcementMessage: localize(1637, 'Chat User Action Required'),
        settingsKey: 'accessibility.signals.chatUserActionRequired',
        managesOwnEnablement: true
    }); }
}

export { AccessibilitySignal, IAccessibilitySignalService, Sound, SoundSource };
