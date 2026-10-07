/**
 * Copyright (c) 2019 The xterm.js authors. All rights reserved.
 * @license MIT
 *
 * This was heavily inspired from microsoft/vscode's dependency injection system (MIT).
 */
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IInstantiationService, IServiceIdentifier } from 'common/services/Services';
import { getServiceDependencies } from 'common/services/ServiceRegistry';

export class ServiceCollection {

  private _entries = new Map<IServiceIdentifier<any>, any>();

  constructor(...entries: [IServiceIdentifier<any>, any][]) {
    for (const [id, service] of entries) {
      this.set(id, service);
    }
  }

  public set<T>(id: IServiceIdentifier<T>, instance: T): T {
    const result = this._entries.get(id);
    this._entries.set(id, instance);
    return result;
  }

  public forEach(callback: (id: IServiceIdentifier<any>, instance: any) => any): void {
    for (const [key, value] of this._entries.entries()) {
      callback(key, value);
    }
  }

  public has(id: IServiceIdentifier<any>): boolean {
    return this._entries.has(id);
  }

  public get<T>(id: IServiceIdentifier<T>): T | undefined {
    return this._entries.get(id);
  }
}

export class InstantiationService implements IInstantiationService {
  public serviceBrand: undefined;

  private readonly _services: ServiceCollection = new ServiceCollection();

  constructor() {
    this._services.set(IInstantiationService, this);
  }

  public setService<T>(id: IServiceIdentifier<T>, instance: T): void {
    this._services.set(id, instance);
  }

  public getService<T>(id: IServiceIdentifier<T>): T | undefined {
    return this._services.get(id);
  }

  public createInstance<T>(ctor: any, ...args: any[]): T {
    const serviceDependencies = getServiceDependencies(ctor).sort((a, b) => a.index - b.index);

    const serviceArgs: any[] = [];
    for (const dependency of serviceDependencies) {
      const service = this._services.get(dependency.id);
      if (!service) {
        throw new Error(`[createInstance] ${ctor.name} depends on UNKNOWN service ${dependency.id._id}.`);
      }
      serviceArgs.push(service);
    }

    const firstServiceArgPos = serviceDependencies.length > 0 ? serviceDependencies[0].index : args.length;

    // check for argument mismatches, adjust static args if needed
    if (args.length !== firstServiceArgPos) {
      throw new Error(`[createInstance] First service dependency of ${ctor.name} at position ${firstServiceArgPos + 1} conflicts with ${args.length} static arguments`);
    }

    // now create the instance
    return new ctor(...[...args, ...serviceArgs]);
  }
}
