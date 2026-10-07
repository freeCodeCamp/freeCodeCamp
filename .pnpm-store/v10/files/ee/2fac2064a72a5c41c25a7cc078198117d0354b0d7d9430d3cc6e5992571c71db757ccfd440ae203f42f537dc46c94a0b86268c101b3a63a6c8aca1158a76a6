import { timeout } from '../../../../../../base/common/async.js';
import { BugIndicatingError } from '../../../../../../base/common/errors.js';
import { Disposable, MutableDisposable, DisposableStore } from '../../../../../../base/common/lifecycle.js';
import '../../../../../../base/common/observableInternal/index.js';
import { IConfigurationService } from '../../../../../../platform/configuration/common/configuration.js';
import { IStorageService } from '../../../../../../platform/storage/common/storage.js';
import { runOnChangeWithCancellationToken, runOnChange } from '../../../../../../base/common/observableInternal/utils/runOnChange.js';
import { observableValue } from '../../../../../../base/common/observableInternal/observables/observableValue.js';
import { derived } from '../../../../../../base/common/observableInternal/observables/derived.js';
import { autorun, autorunWithStore } from '../../../../../../base/common/observableInternal/reactions/autorun.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var UserKind;
(function (UserKind) {
    UserKind["FirstTime"] = "firstTime";
    UserKind["SecondTime"] = "secondTime";
    UserKind["Active"] = "active";
})(UserKind || (UserKind = {}));
let InlineEditsOnboardingExperience = class InlineEditsOnboardingExperience extends Disposable {
    constructor(_host, _model, _indicator, _collapsedView, _storageService, _configurationService) {
        super();
        this._host = _host;
        this._model = _model;
        this._indicator = _indicator;
        this._collapsedView = _collapsedView;
        this._storageService = _storageService;
        this._configurationService = _configurationService;
        this._disposables = this._register(new MutableDisposable());
        this._setupDone = observableValue({ name: 'setupDone' }, false);
        this._activeCompletionId = derived(reader => {
            const model = this._model.read(reader);
            if (!model) {
                return undefined;
            }
            if (!this._setupDone.read(reader)) {
                return undefined;
            }
            const indicator = this._indicator.read(reader);
            if (!indicator || !indicator.isVisible.read(reader)) {
                return undefined;
            }
            return model.inlineEdit.inlineCompletion.identity.id;
        });
        this._register(this._initializeDebugSetting());
        // Setup the onboarding experience for new users
        this._disposables.value = this.setupNewUserExperience();
        this._setupDone.set(true, undefined);
    }
    setupNewUserExperience() {
        if (this.getNewUserType() === UserKind.Active) {
            return undefined;
        }
        const disposableStore = new DisposableStore();
        let userHasHoveredOverIcon = false;
        let inlineEditHasBeenAccepted = false;
        let firstTimeUserAnimationCount = 0;
        let secondTimeUserAnimationCount = 0;
        // pulse animation for new users
        disposableStore.add(runOnChangeWithCancellationToken(this._activeCompletionId, async (id, _, __, token) => {
            if (id === undefined) {
                return;
            }
            let userType = this.getNewUserType();
            // User Kind Transition
            switch (userType) {
                case UserKind.FirstTime: {
                    if (firstTimeUserAnimationCount++ >= 5 || userHasHoveredOverIcon) {
                        userType = UserKind.SecondTime;
                        this.setNewUserType(userType);
                    }
                    break;
                }
                case UserKind.SecondTime: {
                    if (secondTimeUserAnimationCount++ >= 3 && inlineEditHasBeenAccepted) {
                        userType = UserKind.Active;
                        this.setNewUserType(userType);
                    }
                    break;
                }
            }
            // Animation
            switch (userType) {
                case UserKind.FirstTime: {
                    for (let i = 0; i < 3 && !token.isCancellationRequested; i++) {
                        await this._indicator.get()?.triggerAnimation();
                        await timeout(500);
                    }
                    break;
                }
                case UserKind.SecondTime: {
                    this._indicator.get()?.triggerAnimation();
                    break;
                }
            }
        }));
        disposableStore.add(autorun(reader => {
            if (this._collapsedView.isVisible.read(reader)) {
                if (this.getNewUserType() !== UserKind.Active) {
                    this._collapsedView.triggerAnimation();
                }
            }
        }));
        // Remember when the user has hovered over the icon
        disposableStore.add(autorunWithStore((reader, store) => {
            const indicator = this._indicator.read(reader);
            if (!indicator) {
                return;
            }
            store.add(runOnChange(indicator.isHoveredOverIcon, async (isHovered) => {
                if (isHovered) {
                    userHasHoveredOverIcon = true;
                }
            }));
        }));
        // Remember when the user has accepted an inline edit
        disposableStore.add(autorunWithStore((reader, store) => {
            const host = this._host.read(reader);
            if (!host) {
                return;
            }
            store.add(host.onDidAccept(() => {
                inlineEditHasBeenAccepted = true;
            }));
        }));
        return disposableStore;
    }
    getNewUserType() {
        return this._storageService.get('inlineEditsGutterIndicatorUserKind', -1 /* StorageScope.APPLICATION */, UserKind.FirstTime);
    }
    setNewUserType(value) {
        switch (value) {
            case UserKind.FirstTime:
                throw new BugIndicatingError('UserKind should not be set to first time');
            case UserKind.SecondTime:
                break;
            case UserKind.Active:
                this._disposables.clear();
                break;
        }
        this._storageService.store('inlineEditsGutterIndicatorUserKind', value, -1 /* StorageScope.APPLICATION */, 0 /* StorageTarget.USER */);
    }
    _initializeDebugSetting() {
        // Debug setting to reset the new user experience
        const hiddenDebugSetting = 'editor.inlineSuggest.edits.resetNewUserExperience';
        if (this._configurationService.getValue(hiddenDebugSetting)) {
            this._storageService.remove('inlineEditsGutterIndicatorUserKind', -1 /* StorageScope.APPLICATION */);
        }
        const disposable = this._configurationService.onDidChangeConfiguration(e => {
            if (e.affectsConfiguration(hiddenDebugSetting) && this._configurationService.getValue(hiddenDebugSetting)) {
                this._storageService.remove('inlineEditsGutterIndicatorUserKind', -1 /* StorageScope.APPLICATION */);
                this._disposables.value = this.setupNewUserExperience();
            }
        });
        return disposable;
    }
};
InlineEditsOnboardingExperience = __decorate([
    __param(4, IStorageService),
    __param(5, IConfigurationService)
], InlineEditsOnboardingExperience);

export { InlineEditsOnboardingExperience };
