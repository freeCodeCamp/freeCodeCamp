export namespace Bluetooth {
  export type BluetoothUuid = string;
}
export namespace Bluetooth {
  export type BluetoothManufacturerData = {
    key: number;
    data: string;
  };
}
export namespace Bluetooth {
  export type CharacteristicProperties = {
    broadcast?: boolean;
    read?: boolean;
    writeWithoutResponse?: boolean;
    write?: boolean;
    notify?: boolean;
    indicate?: boolean;
    authenticatedSignedWrites?: boolean;
    extendedProperties?: boolean;
  };
}
export namespace Bluetooth {
  export type RequestDevice = string;
}
export namespace Bluetooth {
  export type RequestDeviceInfo = {
    id: Bluetooth.RequestDevice;
    name: string | null;
  };
}
export namespace Bluetooth {
  export type RequestDevicePrompt = string;
}
export namespace Bluetooth {
  export type ScanRecord = {
    name?: string;
    uuids?: [...Bluetooth.BluetoothUuid[]];
    appearance?: number;
    manufacturerData?: [...Bluetooth.BluetoothManufacturerData[]];
  };
}
export type BluetoothCommand =
  | Bluetooth.HandleRequestDevicePrompt
  | Bluetooth.SimulateAdapter
  | Bluetooth.DisableSimulation
  | Bluetooth.SimulatePreconnectedPeripheral
  | Bluetooth.SimulateAdvertisement
  | Bluetooth.SimulateGattConnectionResponse
  | Bluetooth.SimulateGattDisconnection
  | Bluetooth.SimulateService
  | Bluetooth.SimulateCharacteristic
  | Bluetooth.SimulateCharacteristicResponse
  | Bluetooth.SimulateDescriptor
  | Bluetooth.SimulateDescriptorResponse;
export namespace Bluetooth {
  export type HandleRequestDevicePrompt = {
    method: 'bluetooth.handleRequestDevicePrompt';
    params: Bluetooth.HandleRequestDevicePromptParameters;
  };
}
export namespace Bluetooth {
  export type HandleRequestDevicePromptParameters = {
    context: string;
    prompt: Bluetooth.RequestDevicePrompt;
  } & (
    | Bluetooth.HandleRequestDevicePromptAcceptParameters
    | Bluetooth.HandleRequestDevicePromptCancelParameters
  );
}
export namespace Bluetooth {
  export type HandleRequestDevicePromptAcceptParameters = {
    accept: true;
    device: Bluetooth.RequestDevice;
  };
}
export namespace Bluetooth {
  export type HandleRequestDevicePromptCancelParameters = {
    accept: false;
  };
}
export namespace Bluetooth {
  export type SimulateAdapter = {
    method: 'bluetooth.simulateAdapter';
    params: Bluetooth.SimulateAdapterParameters;
  };
}
export namespace Bluetooth {
  export type SimulateAdapterParameters = {
    context: string;
    leSupported?: boolean;
    state: 'absent' | 'powered-off' | 'powered-on';
  };
}
export namespace Bluetooth {
  export type DisableSimulation = {
    method: 'bluetooth.disableSimulation';
    params: Bluetooth.DisableSimulationParameters;
  };
}
export namespace Bluetooth {
  export type DisableSimulationParameters = {
    context: string;
  };
}
export namespace Bluetooth {
  export type SimulatePreconnectedPeripheral = {
    method: 'bluetooth.simulatePreconnectedPeripheral';
    params: Bluetooth.SimulatePreconnectedPeripheralParameters;
  };
}
export namespace Bluetooth {
  export type SimulatePreconnectedPeripheralParameters = {
    context: string;
    address: string;
    name: string;
    manufacturerData: [...Bluetooth.BluetoothManufacturerData[]];
    knownServiceUuids: [...Bluetooth.BluetoothUuid[]];
  };
}
export namespace Bluetooth {
  export type SimulateAdvertisement = {
    method: 'bluetooth.simulateAdvertisement';
    params: Bluetooth.SimulateAdvertisementParameters;
  };
}
export namespace Bluetooth {
  export type SimulateAdvertisementParameters = {
    context: string;
    scanEntry: Bluetooth.SimulateAdvertisementScanEntryParameters;
  };
}
export namespace Bluetooth {
  export type SimulateAdvertisementScanEntryParameters = {
    deviceAddress: string;
    rssi: number;
    scanRecord: Bluetooth.ScanRecord;
  };
}
export namespace Bluetooth {
  export type SimulateGattConnectionResponse = {
    method: 'bluetooth.simulateGattConnectionResponse';
    params: Bluetooth.SimulateGattConnectionResponseParameters;
  };
}
export namespace Bluetooth {
  export type SimulateGattConnectionResponseParameters = {
    context: string;
    address: string;
    code: number;
  };
}
export namespace Bluetooth {
  export type SimulateGattDisconnection = {
    method: 'bluetooth.simulateGattDisconnection';
    params: Bluetooth.SimulateGattDisconnectionParameters;
  };
}
export namespace Bluetooth {
  export type SimulateGattDisconnectionParameters = {
    context: string;
    address: string;
  };
}
export namespace Bluetooth {
  export type SimulateService = {
    method: 'bluetooth.simulateService';
    params: Bluetooth.SimulateServiceParameters;
  };
}
export namespace Bluetooth {
  export type SimulateServiceParameters = {
    context: string;
    address: string;
    uuid: Bluetooth.BluetoothUuid;
    type: 'add' | 'remove';
  };
}
export namespace Bluetooth {
  export type SimulateCharacteristic = {
    method: 'bluetooth.simulateCharacteristic';
    params: Bluetooth.SimulateCharacteristicParameters;
  };
}
export namespace Bluetooth {
  export type SimulateCharacteristicParameters = {
    context: string;
    address: string;
    serviceUuid: Bluetooth.BluetoothUuid;
    characteristicUuid: Bluetooth.BluetoothUuid;
    characteristicProperties?: Bluetooth.CharacteristicProperties;
    type: 'add' | 'remove';
  };
}
export namespace Bluetooth {
  export type SimulateCharacteristicResponse = {
    method: 'bluetooth.simulateCharacteristicResponse';
    params: Bluetooth.SimulateCharacteristicResponseParameters;
  };
}
export namespace Bluetooth {
  export type SimulateCharacteristicResponseParameters = {
    context: string;
    address: string;
    serviceUuid: Bluetooth.BluetoothUuid;
    characteristicUuid: Bluetooth.BluetoothUuid;
    type:
      | 'read'
      | 'write'
      | 'subscribe-to-notifications'
      | 'unsubscribe-from-notifications';
    code: number;
    data?: [...number[]];
  };
}
export namespace Bluetooth {
  export type SimulateDescriptor = {
    method: 'bluetooth.simulateDescriptor';
    params: Bluetooth.SimulateDescriptorParameters;
  };
}
export namespace Bluetooth {
  export type SimulateDescriptorParameters = {
    context: string;
    address: string;
    serviceUuid: Bluetooth.BluetoothUuid;
    characteristicUuid: Bluetooth.BluetoothUuid;
    descriptorUuid: Bluetooth.BluetoothUuid;
    type: 'add' | 'remove';
  };
}
export namespace Bluetooth {
  export type SimulateDescriptorResponse = {
    method: 'bluetooth.simulateDescriptorResponse';
    params: Bluetooth.SimulateDescriptorResponseParameters;
  };
}
export namespace Bluetooth {
  export type SimulateDescriptorResponseParameters = {
    context: string;
    address: string;
    serviceUuid: Bluetooth.BluetoothUuid;
    characteristicUuid: Bluetooth.BluetoothUuid;
    descriptorUuid: Bluetooth.BluetoothUuid;
    type: 'read' | 'write';
    code: number;
    data?: [...number[]];
  };
}
export type BluetoothEvent =
  | Bluetooth.RequestDevicePromptUpdated
  | Bluetooth.GattConnectionAttempted;
export namespace Bluetooth {
  export type RequestDevicePromptUpdated = {
    method: 'bluetooth.requestDevicePromptUpdated';
    params: Bluetooth.RequestDevicePromptUpdatedParameters;
  };
}
export namespace Bluetooth {
  export type RequestDevicePromptUpdatedParameters = {
    context: string;
    prompt: Bluetooth.RequestDevicePrompt;
    devices: [...Bluetooth.RequestDeviceInfo[]];
  };
}
export namespace Bluetooth {
  export type GattConnectionAttempted = {
    method: 'bluetooth.gattConnectionAttempted';
    params: Bluetooth.GattConnectionAttemptedParameters;
  };
}
export namespace Bluetooth {
  export type GattConnectionAttemptedParameters = {
    context: string;
    address: string;
  };
}
export namespace Bluetooth {
  export type CharacteristicEventGenerated = {
    method: 'bluetooth.characteristicEventGenerated';
    params: Bluetooth.CharacteristicEventGeneratedParameters;
  };
}
export namespace Bluetooth {
  export type CharacteristicEventGeneratedParameters = {
    context: string;
    address: string;
    serviceUuid: Bluetooth.BluetoothUuid;
    characteristicUuid: Bluetooth.BluetoothUuid;
    type:
      | 'read'
      | 'write-with-response'
      | 'write-without-response'
      | 'subscribe-to-notifications'
      | 'unsubscribe-from-notifications';
    data?: [...number[]];
  };
}
export namespace Bluetooth {
  export type DescriptorEventGenerated = {
    method: 'bluetooth.descriptorEventGenerated';
    params: Bluetooth.DescriptorEventGeneratedParameters;
  };
}
export namespace Bluetooth {
  export type DescriptorEventGeneratedParameters = {
    context: string;
    address: string;
    serviceUuid: Bluetooth.BluetoothUuid;
    characteristicUuid: Bluetooth.BluetoothUuid;
    descriptorUuid: Bluetooth.BluetoothUuid;
    type: 'read' | 'write';
    data?: [...number[]];
  };
}
