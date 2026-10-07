/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

class ModuleProfile {
	constructor() {
		this.startTime = Date.now();

		this.factoryStartTime = 0;
		this.factoryEndTime = 0;
		this.factory = 0;
		this.factoryParallelismFactor = 0;

		this.restoringStartTime = 0;
		this.restoringEndTime = 0;
		this.restoring = 0;
		this.restoringParallelismFactor = 0;

		this.integrationStartTime = 0;
		this.integrationEndTime = 0;
		this.integration = 0;
		this.integrationParallelismFactor = 0;

		this.buildingStartTime = 0;
		this.buildingEndTime = 0;
		this.building = 0;
		this.buildingParallelismFactor = 0;

		this.storingStartTime = 0;
		this.storingEndTime = 0;
		this.storing = 0;
		this.storingParallelismFactor = 0;

		/** @type {{ start: number, end: number }[] | undefined } */
		this.additionalFactoryTimes = undefined;
		this.additionalFactories = 0;
		this.additionalFactoriesParallelismFactor = 0;

		/** @deprecated */
		this.additionalIntegration = 0;
	}

	markFactoryStart() {
		this.factoryStartTime = Date.now();
	}

	markFactoryEnd() {
		this.factoryEndTime = Date.now();
		this.factory = this.factoryEndTime - this.factoryStartTime;
	}

	markRestoringStart() {
		this.restoringStartTime = Date.now();
	}

	markRestoringEnd() {
		this.restoringEndTime = Date.now();
		this.restoring = this.restoringEndTime - this.restoringStartTime;
	}

	markIntegrationStart() {
		this.integrationStartTime = Date.now();
	}

	markIntegrationEnd() {
		this.integrationEndTime = Date.now();
		this.integration = this.integrationEndTime - this.integrationStartTime;
	}

	markBuildingStart() {
		this.buildingStartTime = Date.now();
	}

	markBuildingEnd() {
		this.buildingEndTime = Date.now();
		this.building = this.buildingEndTime - this.buildingStartTime;
	}

	markStoringStart() {
		this.storingStartTime = Date.now();
	}

	markStoringEnd() {
		this.storingEndTime = Date.now();
		this.storing = this.storingEndTime - this.storingStartTime;
	}

	// This depends on timing so we ignore it for coverage
	/* istanbul ignore next */
	/**
	 * Merge this profile into another one
	 * @param {ModuleProfile} realProfile the profile to merge into
	 * @returns {void}
	 */
	mergeInto(realProfile) {
		realProfile.additionalFactories = this.factory;
		(realProfile.additionalFactoryTimes =
			realProfile.additionalFactoryTimes || []).push({
			start: this.factoryStartTime,
			end: this.factoryEndTime
		});
	}
}

module.exports = ModuleProfile;
