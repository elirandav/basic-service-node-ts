const nock = require('nock')

export function mockPost(url) {
    let mockResult = {
        bodySent: null,
        result: null
    }
	mockResult.result = nock('http://localhost:9090').post(url, function (body) {
        mockResult.bodySent = body
        return body
    }).reply(200, {result: true})
    return mockResult
}
