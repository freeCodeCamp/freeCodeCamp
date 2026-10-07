import Snippets from '../Snippets'

let args
let snippets

describe('Snippets', () => {
  beforeEach(() => {
    args = { id: 'GTM-abc123', dataLayerName: 'dataLayer', events: {} }
    snippets = Snippets.tags(args)
  })
  
  it('should use the `id` for the iframe', () => {
    expect(snippets.iframe).toContain(`id=${args.id}`, 1)
  })
  
  it('should use the `gtm_auth` and `gtm_preview` for the iframe', () => {
    Object.assign(args, {
      auth: '6sBOnZx1hqPcO01xPOytLK',
      preview: 'env-2'
    })
    snippets = Snippets.tags(args)
    expect(snippets.iframe).toContain(`gtm_auth=${args.auth}`, 1)
    expect(snippets.iframe).toContain(`gtm_preview=${args.preview}`, 1)
  })

  it('should use the `dataLayer` for the script', () => {
    args = { dataLayer: { name: 'test' } }
    const dataLayerName = 'dataLayer'
    snippets = Snippets.dataLayer(args, dataLayerName)
    console.log(snippets)
    expect(snippets).toContain('{"name":"test"}')
  })

  it('no id provided should log a warn', () => {
      console.warn = jest.fn()
      const noIdArgs = { dataLayerName: 'dataLayer', events: {} }
      Snippets.tags(noIdArgs)
      expect(console.warn).toBeCalled()
  })
})