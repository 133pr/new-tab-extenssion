chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'setCookie') {
        chrome.cookies.set({
            url: request.url,
            name: request.name,
            value: request.value,
            domain: request.domain,
            path: '/',
            secure: true,
            httpOnly: true,
            sameSite: 'None'
        }, (cookie) => {
            sendResponse(cookie);
        });
        return true; // Indicates that the response is asynchronous
    }
});
