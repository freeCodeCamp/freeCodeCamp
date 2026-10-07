import { isWeb, isMacintosh } from '../../../base/common/platform.js';

function hasNativeContextMenu(configurationService, titleBarStyle) {
    if (isWeb) {
        return false;
    }
    const nativeTitle = hasNativeTitlebar(configurationService, titleBarStyle);
    const windowConfigurations = configurationService.getValue('window');
    if (windowConfigurations?.menuStyle === "native" /* MenuStyleConfiguration.NATIVE */) {
        // Do not support native menu with custom title bar
        if (!isMacintosh && !nativeTitle) {
            return false;
        }
        return true;
    }
    if (windowConfigurations?.menuStyle === "custom" /* MenuStyleConfiguration.CUSTOM */) {
        return false;
    }
    return nativeTitle; // Default to inherit from title bar style
}
function hasNativeTitlebar(configurationService, titleBarStyle) {
    if (!titleBarStyle) {
        titleBarStyle = getTitleBarStyle(configurationService);
    }
    return titleBarStyle === "native" /* TitlebarStyle.NATIVE */;
}
function getTitleBarStyle(configurationService) {
    if (isWeb) {
        return "custom" /* TitlebarStyle.CUSTOM */;
    }
    const configuration = configurationService.getValue('window');
    if (configuration) {
        const useNativeTabs = isMacintosh && configuration.nativeTabs === true;
        if (useNativeTabs) {
            return "native" /* TitlebarStyle.NATIVE */; // native tabs on sierra do not work with custom title style
        }
        const useSimpleFullScreen = isMacintosh && configuration.nativeFullScreen === false;
        if (useSimpleFullScreen) {
            return "native" /* TitlebarStyle.NATIVE */; // simple fullscreen does not work well with custom title style (https://github.com/microsoft/vscode/issues/63291)
        }
        const style = configuration.titleBarStyle;
        if (style === "native" /* TitlebarStyle.NATIVE */ || style === "custom" /* TitlebarStyle.CUSTOM */) {
            return style;
        }
    }
    return "custom" /* TitlebarStyle.CUSTOM */; // default to custom on all OS
}
function getWindowControlsStyle(configurationService) {
    if (isWeb || isMacintosh || getTitleBarStyle(configurationService) === "native" /* TitlebarStyle.NATIVE */) {
        return "native" /* WindowControlsStyle.NATIVE */; // only supported on Windows/Linux desktop with custom titlebar
    }
    const configuration = configurationService.getValue('window');
    const style = configuration?.controlsStyle;
    if (style === "custom" /* WindowControlsStyle.CUSTOM */ || style === "hidden" /* WindowControlsStyle.HIDDEN */) {
        return style;
    }
    return "native" /* WindowControlsStyle.NATIVE */; // default to native on all OS
}

export { getTitleBarStyle, getWindowControlsStyle, hasNativeContextMenu, hasNativeTitlebar };
