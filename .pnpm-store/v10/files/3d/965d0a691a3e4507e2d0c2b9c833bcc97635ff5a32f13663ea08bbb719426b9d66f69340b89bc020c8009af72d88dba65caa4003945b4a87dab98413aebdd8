export type PermissionsCommand = Permissions.SetPermission;
export namespace Permissions {
  export type PermissionDescriptor = {
    name: string;
  };
}
export namespace Permissions {
  export const enum PermissionState {
    Granted = 'granted',
    Denied = 'denied',
    Prompt = 'prompt',
  }
}
export namespace Permissions {
  export type SetPermission = {
    method: 'permissions.setPermission';
    params: Permissions.SetPermissionParameters;
  };
}
export namespace Permissions {
  export type SetPermissionParameters = {
    descriptor: Permissions.PermissionDescriptor;
    state: Permissions.PermissionState;
    origin: string;
    embeddedOrigin?: string;
    userContext?: string;
  };
}
