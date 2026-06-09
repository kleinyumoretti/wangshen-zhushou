'use strict';

exports.main = async (event, context) => {
    // 用临时凭证换取真实手机号
    const res = await uniCloud.getPhoneNumber({
        provider: 'univerify',
        access_token: event.access_token,
        openid: event.openid
        // ⚠️ apiKey 和 apiSecret 在新版本中不需要填写了，系统会自动识别
    });

    console.log('换取手机号结果：', res);

    if (res.code === 0) {
        // 成功获取手机号
        return {
            code: 0,
            message: 'success',
            phoneNumber: res.phoneNumber  // 返回给前端
        };
    } else {
        // 失败
        return {
            code: res.code,
            message: res.message
        };
    }
};