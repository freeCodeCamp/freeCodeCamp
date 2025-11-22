/**
 * Barrel module for Challenge Components
 * Centralizes component imports to reduce import statements
 */

// Modal Components
export { default as CompletionModal } from './completion-modal';
export { default as HelpModal } from './help-modal';
export { default as ResetModal } from './reset-modal';
export { default as ShortcutsModal } from './shortcuts-modal';
export { default as VideoModal } from './video-modal';
export { default as ProjectPreviewModal } from './project-preview-modal';

// UI Components
export { default as ChallengeDescription } from './challenge-description';
export { default as ChallengeTitle } from './challenge-title';
export { default as Hotkeys } from './hotkeys';
export { default as Output } from './output';
export { default as Preview } from './preview';
export { default as SidePanel } from './side-panel';
export { default as ToolPanel } from './tool-panel';

// Export types if needed
export type { PreviewProps } from './preview';
