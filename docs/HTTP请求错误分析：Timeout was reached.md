# HTTP请求错误分析：Timeout was reached

网络超时会显示下面结果

```json
{
  "message": "{\"code\":2300028,\"message\":\"Timeout was reached\"}",
  "name": "AxiosError",
  "stack": "    at AxiosError (oh_modules/.ohpm/@ohos+axios@2.2.3/oh_modules/@ohos/axios/src/main/ets/components/lib/core/AxiosError.js:22:1)\n    at anonymous (oh_modules/.ohpm/@ohos+axios@2.2.3/oh_modules/@ohos/axios/src/main/ets/components/lib/adapters/ohos/http.js:57:1)\n",
  "config": {
    "transitional": {
      "silentJSONParsing": true,
      "forcedJSONParsing": true,
      "clarifyTimeoutError": false
    },
    "adapter": [
      "ohos"
    ],
    "transformRequest": [
      null
    ],
    "transformResponse": [
      null
    ],
    "timeout": 600000,
    "xsrfCookieName": "XSRF-TOKEN",
    "xsrfHeaderName": "X-XSRF-TOKEN",
    "maxContentLength": -1,
    "maxBodyLength": -1,
    "env": {
      "Blob": null
    },
    "headers": {
      "Accept": "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    "baseURL": "https://xx.xxx.com",
    "method": "post",
    "url": "/user/xx/xxx/xxx",
    "data": "{\"xx\":\"\",\"xxx\":\"\"}"
  },
  "code": 2300028,
  "status": null
}
```
