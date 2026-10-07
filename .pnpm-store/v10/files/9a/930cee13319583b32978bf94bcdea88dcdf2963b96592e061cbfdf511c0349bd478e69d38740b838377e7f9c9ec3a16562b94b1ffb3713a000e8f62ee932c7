export type PermissionsCommand = Permissions.SetPermission;
export declare namespace Permissions {
  type PermissionDescriptor = {
    name: string;
  };
}
export declare namespace Permissions {
  const enum PermissionState {
    Granted = 'granted',
    Denied = 'denied',
    Prompt = 'prompt',
  }
}
export declare namespace Permissions {
  type SetPermission = {
    method: 'permissions.setPermission';
    params: Permissions.SetPermissionParameters;
  };
}
export declare namespace Permissions {
  type SetPermissionParameters = {
    descriptor: Permissions.PermissionDescriptor;
    state: Permissions.PermissionState;
    origin: string;
    embeddedOrigin?: string;
    userContext?: string;
  };
}
