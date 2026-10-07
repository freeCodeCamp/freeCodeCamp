import { NetworkSource } from './sources/network-source'
import { defineNetwork } from './define-network'

describe('enable()', () => {
  it('throws if called on already enabled network', () => {
    class SyncNetworkSource extends NetworkSource {
      enable = () => {}
    }
    const network = defineNetwork({
      sources: [new SyncNetworkSource()],
    })

    expect(network.enable()).toBeUndefined()
    expect(() => network.enable()).toThrow(
      'Failed to call "enable" on the network: already enabled',
    )

    network.disable()
    expect(network.enable()).toBeUndefined()
  })

  it('returns a sync enable if all the sources are sync', () => {
    class SyncNetworkSource extends NetworkSource {
      enable = () => {}
    }
    const network = defineNetwork({
      sources: [new SyncNetworkSource()],
    })

    expect(network.enable()).toBeUndefined()
  })

  it('returns an async enable if any of the sources are async', () => {
    class SyncNetworkSource extends NetworkSource {
      enable = () => {}
    }
    class AsyncNetworkSource extends NetworkSource {
      enable = async () => {}
    }

    const network = defineNetwork({
      sources: [new SyncNetworkSource(), new AsyncNetworkSource()],
    })

    expect(network.enable()).toBeInstanceOf(Promise)
  })

  it('returns an async enable if all the sources are async', () => {
    class AsyncNetworkSource extends NetworkSource {
      enable = async () => {}
    }

    const network = defineNetwork({
      sources: [new AsyncNetworkSource()],
    })

    expect(network.enable()).toBeInstanceOf(Promise)
  })
})

describe('disable()', () => {
  it('throws if called on already enabled network', () => {
    class SyncNetworkSource extends NetworkSource {
      enable = () => {}
    }
    const network = defineNetwork({
      sources: [new SyncNetworkSource()],
    })

    network.enable()
    expect(network.disable()).toBeUndefined()
    expect(() => network.disable()).toThrow(
      'Failed to call "disable" on the network: already disabled',
    )

    network.enable()
    expect(network.disable()).toBeUndefined()
  })

  it('returns a sync disable if all the sources are sync', () => {
    class SyncNetworkSource extends NetworkSource {
      enable = () => {}
      disable = () => {}
    }
    const network = defineNetwork({
      sources: [new SyncNetworkSource()],
    })

    network.enable()
    expect(network.disable()).toBeUndefined()
  })

  it('returns an async disable if any of the sources are async', async () => {
    class SyncNetworkSource extends NetworkSource {
      enable = () => {}
      disable = () => {}
    }
    class AsyncNetworkSource extends NetworkSource {
      enable = async () => {}
      disable = async () => {}
    }

    const network = defineNetwork({
      sources: [new SyncNetworkSource(), new AsyncNetworkSource()],
    })

    await network.enable()
    expect(network.disable()).toBeInstanceOf(Promise)
  })

  it('returns an async disable if all the sources are async', async () => {
    class AsyncNetworkSource extends NetworkSource {
      enable = async () => {}
      disable = async () => {}
    }

    const network = defineNetwork({
      sources: [new AsyncNetworkSource()],
    })

    await network.enable()
    expect(network.disable()).toBeInstanceOf(Promise)
  })
})
