/**
 * Copyright 2024 Google LLC.
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { type Bluetooth, type EmptyResult } from '../../../protocol/protocol.js';
import type { CdpTarget } from '../cdp/CdpTarget.js';
import type { BrowsingContextStorage } from '../context/BrowsingContextStorage.js';
import type { EventManager } from '../session/EventManager.js';
export declare class BluetoothProcessor {
    #private;
    constructor(eventManager: EventManager, browsingContextStorage: BrowsingContextStorage);
    simulateAdapter(params: Bluetooth.SimulateAdapterParameters): Promise<EmptyResult>;
    disableSimulation(params: Bluetooth.DisableSimulationParameters): Promise<EmptyResult>;
    simulatePreconnectedPeripheral(params: Bluetooth.SimulatePreconnectedPeripheralParameters): Promise<EmptyResult>;
    simulateAdvertisement(params: Bluetooth.SimulateAdvertisementParameters): Promise<EmptyResult>;
    simulateCharacteristic(params: Bluetooth.SimulateCharacteristicParameters): Promise<EmptyResult>;
    simulateCharacteristicResponse(params: Bluetooth.SimulateCharacteristicResponseParameters): Promise<EmptyResult>;
    simulateDescriptor(params: Bluetooth.SimulateDescriptorParameters): Promise<EmptyResult>;
    simulateDescriptorResponse(params: Bluetooth.SimulateDescriptorResponseParameters): Promise<EmptyResult>;
    simulateGattConnectionResponse(params: Bluetooth.SimulateGattConnectionResponseParameters): Promise<EmptyResult>;
    simulateGattDisconnection(params: Bluetooth.SimulateGattDisconnectionParameters): Promise<EmptyResult>;
    simulateService(params: Bluetooth.SimulateServiceParameters): Promise<EmptyResult>;
    onCdpTargetCreated(cdpTarget: CdpTarget): void;
    handleRequestDevicePrompt(params: Bluetooth.HandleRequestDevicePromptParameters): Promise<EmptyResult>;
}
