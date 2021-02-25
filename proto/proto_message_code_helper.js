
// Please set this file into the root of protobuffer compiled javascript directory

const message_list = {
    ["proto.ArmyAntMessage.System.SocketHeadExtend"]: 1,

    ["proto.ArmyAntMessage.System.CS_GetServerStatueRequest"]: 11001,
    ["proto.ArmyAntMessage.System.SC_GetServerStatueResponse"]: 12001,

    ["proto.ArmyAntMessage.SubApps.CS_EchoLoginRequest"]: 10011001,
    ["proto.ArmyAntMessage.SubApps.SC_EchoLoginResponse"]: 10011002,
    ["proto.ArmyAntMessage.SubApps.CS_EchoLogoutRequest"]: 10011011,
    ["proto.ArmyAntMessage.SubApps.SC_EchoLogoutResponse"]: 10011012,
    ["proto.ArmyAntMessage.SubApps.CS_EchoSendRequest"]: 10011021,
    ["proto.ArmyAntMessage.SubApps.SC_EchoSendResponse"]: 10011022,
    ["proto.ArmyAntMessage.SubApps.CS_EchoBroadcastRequest"]: 10011031,
    ["proto.ArmyAntMessage.SubApps.SC_EchoBroadcastResponse"]: 10011032,
    ["proto.ArmyAntMessage.SubApps.SC_EchoReceiveNotice"]: 10010001,
    ["proto.ArmyAntMessage.SubApps.SC_EchoError"]: 10010002,

    ["proto.ArmyAntMessage.SubApps.CS_HuolongLoginRequest"]: 10101001,
    ["proto.ArmyAntMessage.SubApps.SC_HuolongLoginResponse"]: 10101002,
    ["proto.ArmyAntMessage.SubApps.CS_HuolongLogoutRequest"]: 10101011,
    ["proto.ArmyAntMessage.SubApps.SC_HuolongLogoutResponse"]: 10101012,
    ["proto.ArmyAntMessage.SubApps.CS_HuolongChangeUserInfoRequest"]: 10101021,
    ["proto.ArmyAntMessage.SubApps.SC_HuolongChangeUserInfoResponse"]: 10101022,
    ["proto.ArmyAntMessage.SubApps.CS_HuolongCreateTableRequest"]: 10101101,
    ["proto.ArmyAntMessage.SubApps.SC_HuolongCreateTableResponse"]: 10101102,
    ["proto.ArmyAntMessage.SubApps.CS_HuolongEnterTableRequest"]: 10101111,
    ["proto.ArmyAntMessage.SubApps.SC_HuolongEnterTableResponse"]: 10101112,
    ["proto.ArmyAntMessage.SubApps.SC_HuolongNoticeRoomInfo"]: 10100001,
    ["proto.ArmyAntMessage.SubApps.SC_HuolongNoticeGameStart"]: 10100002,
}

const protoMessageCodeHelper = {
    toMsgCode: (message) => {
        if (!message) {
            return -4;
        }
        let displayName = ""
        if (typeof message == "string") {
            displayName = message
        } else if (typeof message == "object") {	// 是消息体
            let property = Object.getPrototypeOf(message);
            displayName = property.displayName;
            if (!displayName && property.constructor) {
                displayName = property.constructor.displayName;
            }
        } else if (typeof message.prototype == 'undefined' || !message.prototype) {
            return -3;
        } else {	// 是消息原型
            displayName = message.prototype.displayName;
            if (!displayName && message.prototype.constructor) {
                displayName = message.prototype.constructor.displayName;
            }
        }
        if (!displayName) {
            return -2;
        }
        if (message_list.hasOwnProperty(displayName)) {
            return message_list[displayName];
        }
        return -1;
    },
    toDisplayName: (code) => {
        if (code <= 0) {
            return null;
        }
        for (let i in message_list) {
            if (message_list[i] == code) {
                return i;
            }
        }
        return "";
    }
}

export default protoMessageCodeHelper
