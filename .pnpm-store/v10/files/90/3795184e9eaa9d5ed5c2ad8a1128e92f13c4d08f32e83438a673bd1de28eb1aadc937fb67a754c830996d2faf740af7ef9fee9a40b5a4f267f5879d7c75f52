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
import { InvalidArgumentException, } from '../../../protocol/protocol.js';
/** Represents a base Bluetooth GATT item. */
class BluetoothGattItem {
    id;
    uuid;
    constructor(id, uuid) {
        this.id = id;
        this.uuid = uuid;
    }
}
/** Represents a Bluetooth descriptor. */
class BluetoothDescriptor extends BluetoothGattItem {
    characteristic;
    constructor(id, uuid, characteristic) {
        super(id, uuid);
        this.characteristic = characteristic;
    }
}
/** Represents a Bluetooth characteristic. */
class BluetoothCharacteristic extends BluetoothGattItem {
    descriptors = new Map();
    service;
    constructor(id, uuid, service) {
        super(id, uuid);
        this.service = service;
    }
}
/** Represents a Bluetooth service. */
class BluetoothService extends BluetoothGattItem {
    characteristics = new Map();
    device;
    constructor(id, uuid, device) {
        super(id, uuid);
        this.device = device;
    }
}
/** Represents a Bluetooth device. */
class BluetoothDevice {
    address;
    services = new Map();
    constructor(address) {
        this.address = address;
    }
}
export class BluetoothProcessor {
    #eventManager;
    #browsingContextStorage;
    #bluetoothDevices = new Map();
    // A map from a characteristic id from CDP to its BluetoothCharacteristic object.
    #bluetoothCharacteristics = new Map();
    // A map from a descriptor id from CDP to its BluetoothDescriptor object.
    #bluetoothDescriptors = new Map();
    constructor(eventManager, browsingContextStorage) {
        this.#eventManager = eventManager;
        this.#browsingContextStorage = browsingContextStorage;
    }
    #getDevice(address) {
        const device = this.#bluetoothDevices.get(address);
        if (!device) {
            throw new InvalidArgumentException(`Bluetooth device with address ${address} does not exist`);
        }
        return device;
    }
    #getService(device, serviceUuid) {
        const service = device.services.get(serviceUuid);
        if (!service) {
            throw new InvalidArgumentException(`Service with UUID ${serviceUuid} on device ${device.address} does not exist`);
        }
        return service;
    }
    #getCharacteristic(service, characteristicUuid) {
        const characteristic = service.characteristics.get(characteristicUuid);
        if (!characteristic) {
            throw new InvalidArgumentException(`Characteristic with UUID ${characteristicUuid} does not exist for service ${service.uuid} on device ${service.device.address}`);
        }
        return characteristic;
    }
    #getDescriptor(characteristic, descriptorUuid) {
        const descriptor = characteristic.descriptors.get(descriptorUuid);
        if (!descriptor) {
            throw new InvalidArgumentException(`Descriptor with UUID ${descriptorUuid} does not exist for characteristic ${characteristic.uuid} on service ${characteristic.service.uuid} on device ${characteristic.service.device.address}`);
        }
        return descriptor;
    }
    async simulateAdapter(params) {
        if (params.state === undefined) {
            // The bluetooth.simulateAdapter Command
            // Step 4.2. If params["state"] does not exist, return error with error code invalid argument.
            // https://webbluetoothcg.github.io/web-bluetooth/#bluetooth-simulateAdapter-command
            throw new InvalidArgumentException(`Parameter "state" is required for creating a Bluetooth adapter`);
        }
        const context = this.#browsingContextStorage.getContext(params.context);
        // Bluetooth spec requires overriding the existing adapter (step 6). From the CDP
        // perspective, we need to disable the emulation first.
        // https://webbluetoothcg.github.io/web-bluetooth/#bluetooth-simulateAdapter-command
        await context.cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.disable');
        this.#bluetoothDevices.clear();
        this.#bluetoothCharacteristics.clear();
        this.#bluetoothDescriptors.clear();
        await context.cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.enable', {
            state: params.state,
            leSupported: params.leSupported ?? true,
        });
        return {};
    }
    async disableSimulation(params) {
        const context = this.#browsingContextStorage.getContext(params.context);
        await context.cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.disable');
        this.#bluetoothDevices.clear();
        this.#bluetoothCharacteristics.clear();
        this.#bluetoothDescriptors.clear();
        return {};
    }
    async simulatePreconnectedPeripheral(params) {
        if (this.#bluetoothDevices.has(params.address)) {
            throw new InvalidArgumentException(`Bluetooth device with address ${params.address} already exists`);
        }
        const context = this.#browsingContextStorage.getContext(params.context);
        await context.cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.simulatePreconnectedPeripheral', {
            address: params.address,
            name: params.name,
            knownServiceUuids: params.knownServiceUuids,
            manufacturerData: params.manufacturerData,
        });
        this.#bluetoothDevices.set(params.address, new BluetoothDevice(params.address));
        return {};
    }
    async simulateAdvertisement(params) {
        const context = this.#browsingContextStorage.getContext(params.context);
        await context.cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.simulateAdvertisement', {
            entry: params.scanEntry,
        });
        return {};
    }
    async simulateCharacteristic(params) {
        const device = this.#getDevice(params.address);
        const service = this.#getService(device, params.serviceUuid);
        const context = this.#browsingContextStorage.getContext(params.context);
        switch (params.type) {
            case 'add': {
                if (params.characteristicProperties === undefined) {
                    throw new InvalidArgumentException(`Parameter "characteristicProperties" is required for adding a Bluetooth characteristic`);
                }
                if (service.characteristics.has(params.characteristicUuid)) {
                    throw new InvalidArgumentException(`Characteristic with UUID ${params.characteristicUuid} already exists`);
                }
                const response = await context.cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.addCharacteristic', {
                    serviceId: service.id,
                    characteristicUuid: params.characteristicUuid,
                    properties: params.characteristicProperties,
                });
                const characteristic = new BluetoothCharacteristic(response.characteristicId, params.characteristicUuid, service);
                service.characteristics.set(params.characteristicUuid, characteristic);
                this.#bluetoothCharacteristics.set(characteristic.id, characteristic);
                return {};
            }
            case 'remove': {
                if (params.characteristicProperties !== undefined) {
                    throw new InvalidArgumentException(`Parameter "characteristicProperties" should not be provided for removing a Bluetooth characteristic`);
                }
                const characteristic = this.#getCharacteristic(service, params.characteristicUuid);
                await context.cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.removeCharacteristic', {
                    characteristicId: characteristic.id,
                });
                service.characteristics.delete(params.characteristicUuid);
                this.#bluetoothCharacteristics.delete(characteristic.id);
                return {};
            }
            default:
                throw new InvalidArgumentException(`Parameter "type" of ${params.type} is not supported`);
        }
    }
    async simulateCharacteristicResponse(params) {
        const context = this.#browsingContextStorage.getContext(params.context);
        const device = this.#getDevice(params.address);
        const service = this.#getService(device, params.serviceUuid);
        const characteristic = this.#getCharacteristic(service, params.characteristicUuid);
        await context.cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.simulateCharacteristicOperationResponse', {
            characteristicId: characteristic.id,
            type: params.type,
            code: params.code,
            ...(params.data && {
                data: btoa(String.fromCharCode(...params.data)),
            }),
        });
        return {};
    }
    async simulateDescriptor(params) {
        const device = this.#getDevice(params.address);
        const service = this.#getService(device, params.serviceUuid);
        const characteristic = this.#getCharacteristic(service, params.characteristicUuid);
        const context = this.#browsingContextStorage.getContext(params.context);
        switch (params.type) {
            case 'add': {
                if (characteristic.descriptors.has(params.descriptorUuid)) {
                    throw new InvalidArgumentException(`Descriptor with UUID ${params.descriptorUuid} already exists`);
                }
                const response = await context.cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.addDescriptor', {
                    characteristicId: characteristic.id,
                    descriptorUuid: params.descriptorUuid,
                });
                const descriptor = new BluetoothDescriptor(response.descriptorId, params.descriptorUuid, characteristic);
                characteristic.descriptors.set(params.descriptorUuid, descriptor);
                this.#bluetoothDescriptors.set(descriptor.id, descriptor);
                return {};
            }
            case 'remove': {
                const descriptor = this.#getDescriptor(characteristic, params.descriptorUuid);
                await context.cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.removeDescriptor', {
                    descriptorId: descriptor.id,
                });
                characteristic.descriptors.delete(params.descriptorUuid);
                this.#bluetoothDescriptors.delete(descriptor.id);
                return {};
            }
            default:
                throw new InvalidArgumentException(`Parameter "type" of ${params.type} is not supported`);
        }
    }
    async simulateDescriptorResponse(params) {
        const context = this.#browsingContextStorage.getContext(params.context);
        const device = this.#getDevice(params.address);
        const service = this.#getService(device, params.serviceUuid);
        const characteristic = this.#getCharacteristic(service, params.characteristicUuid);
        const descriptor = this.#getDescriptor(characteristic, params.descriptorUuid);
        await context.cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.simulateDescriptorOperationResponse', {
            descriptorId: descriptor.id,
            type: params.type,
            code: params.code,
            ...(params.data && {
                data: btoa(String.fromCharCode(...params.data)),
            }),
        });
        return {};
    }
    async simulateGattConnectionResponse(params) {
        const context = this.#browsingContextStorage.getContext(params.context);
        await context.cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.simulateGATTOperationResponse', {
            address: params.address,
            type: 'connection',
            code: params.code,
        });
        return {};
    }
    async simulateGattDisconnection(params) {
        const context = this.#browsingContextStorage.getContext(params.context);
        await context.cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.simulateGATTDisconnection', {
            address: params.address,
        });
        return {};
    }
    async simulateService(params) {
        const device = this.#getDevice(params.address);
        const context = this.#browsingContextStorage.getContext(params.context);
        switch (params.type) {
            case 'add': {
                if (device.services.has(params.uuid)) {
                    throw new InvalidArgumentException(`Service with UUID ${params.uuid} already exists`);
                }
                const response = await context.cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.addService', {
                    address: params.address,
                    serviceUuid: params.uuid,
                });
                device.services.set(params.uuid, new BluetoothService(response.serviceId, params.uuid, device));
                return {};
            }
            case 'remove': {
                const service = this.#getService(device, params.uuid);
                await context.cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.removeService', {
                    serviceId: service.id,
                });
                device.services.delete(params.uuid);
                return {};
            }
            default:
                throw new InvalidArgumentException(`Parameter "type" of ${params.type} is not supported`);
        }
    }
    onCdpTargetCreated(cdpTarget) {
        cdpTarget.cdpClient.on('DeviceAccess.deviceRequestPrompted', (event) => {
            this.#eventManager.registerEvent({
                type: 'event',
                method: 'bluetooth.requestDevicePromptUpdated',
                params: {
                    context: cdpTarget.id,
                    prompt: event.id,
                    devices: event.devices,
                },
            }, cdpTarget.id);
        });
        cdpTarget.browserCdpClient.on('BluetoothEmulation.gattOperationReceived', async (event) => {
            switch (event.type) {
                case 'connection':
                    this.#eventManager.registerEvent({
                        type: 'event',
                        method: 'bluetooth.gattConnectionAttempted',
                        params: {
                            context: cdpTarget.id,
                            address: event.address,
                        },
                    }, cdpTarget.id);
                    return;
                case 'discovery':
                    // Chromium Web Bluetooth simulation generates this GATT discovery event when
                    // a page attempts to get services for a given Bluetooth device for the first time.
                    // This 'get services' operation is put on hold until a GATT discovery response
                    // is sent to the simulation.
                    // Note: Web Bluetooth automation (see https://webbluetoothcg.github.io/web-bluetooth/#automated-testing)
                    // does not support simulating a GATT discovery response. This is because simulated services, characteristics,
                    // or descriptors are immediately visible to the simulation, meaning it doesn't have a distinct
                    // DISCOVERY state. Therefore, this code simulates a successful GATT discovery
                    // response upon receiving this event.
                    await cdpTarget.browserCdpClient.sendCommand('BluetoothEmulation.simulateGATTOperationResponse', {
                        address: event.address,
                        type: 'discovery',
                        code: 0x0,
                    });
            }
        });
        cdpTarget.browserCdpClient.on('BluetoothEmulation.characteristicOperationReceived', (event) => {
            if (!this.#bluetoothCharacteristics.has(event.characteristicId)) {
                return;
            }
            let type;
            if (event.type === 'write') {
                // write-default-deprecated comes from
                // https://webbluetoothcg.github.io/web-bluetooth/#dom-bluetoothremotegattcharacteristic-writevalue,
                // which is deprecated so not supported.
                if (event.writeType === 'write-default-deprecated') {
                    return;
                }
                type = event.writeType;
            }
            else {
                type = event.type;
            }
            const characteristic = this.#bluetoothCharacteristics.get(event.characteristicId);
            this.#eventManager.registerEvent({
                type: 'event',
                method: 'bluetooth.characteristicEventGenerated',
                params: {
                    context: cdpTarget.id,
                    address: characteristic.service.device.address,
                    serviceUuid: characteristic.service.uuid,
                    characteristicUuid: characteristic.uuid,
                    type,
                    ...(event.data && {
                        data: Array.from(atob(event.data), (c) => c.charCodeAt(0)),
                    }),
                },
            }, cdpTarget.id);
        });
        cdpTarget.browserCdpClient.on('BluetoothEmulation.descriptorOperationReceived', (event) => {
            if (!this.#bluetoothDescriptors.has(event.descriptorId)) {
                return;
            }
            const descriptor = this.#bluetoothDescriptors.get(event.descriptorId);
            this.#eventManager.registerEvent({
                type: 'event',
                method: 'bluetooth.descriptorEventGenerated',
                params: {
                    context: cdpTarget.id,
                    address: descriptor.characteristic.service.device.address,
                    serviceUuid: descriptor.characteristic.service.uuid,
                    characteristicUuid: descriptor.characteristic.uuid,
                    descriptorUuid: descriptor.uuid,
                    type: event.type,
                    ...(event.data && {
                        data: Array.from(atob(event.data), (c) => c.charCodeAt(0)),
                    }),
                },
            }, cdpTarget.id);
        });
    }
    async handleRequestDevicePrompt(params) {
        const context = this.#browsingContextStorage.getContext(params.context);
        if (params.accept) {
            await context.cdpTarget.cdpClient.sendCommand('DeviceAccess.selectPrompt', {
                id: params.prompt,
                deviceId: params.device,
            });
        }
        else {
            await context.cdpTarget.cdpClient.sendCommand('DeviceAccess.cancelPrompt', {
                id: params.prompt,
            });
        }
        return {};
    }
}
//# sourceMappingURL=BluetoothProcessor.js.map