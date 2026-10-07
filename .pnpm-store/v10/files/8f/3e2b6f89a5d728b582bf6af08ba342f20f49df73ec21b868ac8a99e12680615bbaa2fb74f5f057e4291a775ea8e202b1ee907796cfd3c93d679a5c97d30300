import { createDecorator } from '../../instantiation/common/instantiation.js';

const IDataChannelService = createDecorator('dataChannelService');
class NullDataChannelService {
    getDataChannel(_channelId) {
        return {
            sendData: () => { },
        };
    }
}

export { IDataChannelService, NullDataChannelService };
