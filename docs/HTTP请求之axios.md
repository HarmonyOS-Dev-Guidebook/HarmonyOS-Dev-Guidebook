# HTTP请求之axios

[OpenHarmony三方库中心仓: axios](https://ohpm.openharmony.cn/#/cn/detail/@ohos%2Faxios)

## 安装使用

下载安装

```bash
# 安装
ohpm install @ohos/axios

# 卸载
ohpm uninstall @ohos/axios
```

安装好之后， 在 `./src/main/module.json5` 文件下面添加网络权限`ohos.permission.INTERNET`即可使用

```json5
{
  "module": {
    "requestPermissions": [
      {
        "name": "ohos.permission.INTERNET"
      }
    ],
  }
}
```

基础使用方案请查看官方文档 [OpenHarmony三方库中心仓: axios](https://ohpm.openharmony.cn/#/cn/detail/@ohos%2Faxios)

## 封装

封装就要看你的业务需求了，这里给出一个我自己服务对应的封装

##  特定请求头

每一个请求必须要有的请求头

1. Authorization 用户token，用来验证用户身份，内容为 "Bearer $token"

## 特定请求参数

每一个请求必须要有的请求参数（URL查询查收）

1. platform 平台，这里是 21，代表鸿蒙
2. version 版本号，鸿蒙APP打包的版本，这里是 1.0.0

## 响应说明

1. HTTP状态码为200时，表示请求成功，此时响应体中的status为0，表示业务成功，否则表示业务失败
2. HTTP状态码为401时，表示用户未登录，需要重新登录
3. 其他HTTP状态码，表示服务器内部错误，需要联系管理员
4. 200状态码下，响应的数据格式如下

- data为具体的业务数据
- message为业务提示信息，根据不同业务场景，提示信息不同
- status为业务状态，0表示成功，其他表示失败

```typescript
interface OwlResult<T> {
    status: number,
    message: string,
    data: T
}
```

## 代码展示

```typescript
import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from '@ohos/axios';
import Kv from '../dao/Kv';
import Keys from '../keys/Keys';


const baseURL = 'https://xx.xxx.com'

let accessToken = '';

export interface OwlResult<T> {
  status: number,
  message: string,
  data: T
}

interface BaseParamsType {
  platform: number,
  version: number
}

let baseParams: BaseParamsType = {
  platform: 21,
  version: 362
}

function createService() {

  let dbAccessToken = Kv.kv?.getSync(Keys.USER_TOKEN, '')
  if (dbAccessToken) {
    accessToken = dbAccessToken.toString()
  }
  return axios.create({
    baseURL,
    timeout: 10 * 60 * 1000
  })
}

const service = createService()

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (accessToken) {
      config.headers['Authorization'] = 'Bearer ' + accessToken
    }
    if (!config.params) {
      config.params = {}
    }
    // 合并请求参数
    config.params['platform'] = baseParams.platform
    config.params['version'] = baseParams.version
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error.response)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    console.log(`http请求响应数据: ${JSON.stringify(response)}`)
    return response.data
  },
  (error: AxiosError) => {
    console.log(`http请求错误：${JSON.stringify(error)}`);
    return Promise.reject(error.response)
  }
)

interface OwlRequestConfigType {
  /**
   * 请求URL, 不要有查询参数，查询参数请使用 queryParams 传递
   */
  url: string,

  /**
   * 请求方法 get post put delete
   */
  method: string,

  /**
   * 查询参数
   */
  params?: object
  /**
   * 请求体数据
   */
  data?: object,
}

interface OwlRequestType {
  get: <T>(config: OwlRequestConfigType) => Promise<OwlResult<T>>
  post: <T>(config: OwlRequestConfigType) => Promise<OwlResult<T>>
  put: <T>(config: OwlRequestConfigType) => Promise<OwlResult<T>>
  delete: <T>(config: OwlRequestConfigType) => Promise<OwlResult<T>>
}

// 请求类型配置
const axiosConfig: OwlRequestType = {
  get: <T>(config: OwlRequestConfigType): Promise<OwlResult<T>> => {
    return service.get(config.url, { params: config.params })
  },

  post: <T>(config: OwlRequestConfigType): Promise<OwlResult<T>> => {
    return service.post(config.url, config.data, {
      headers: {
        'Content-Type': 'application/json'
      },
      params: config?.params
    })
  },

  put: <T>(config: OwlRequestConfigType): Promise<OwlResult<T>> => {
    return service.put(config.url, config.data, {
      params: config?.params
    })
  },

  delete: <T>(config: OwlRequestConfigType): Promise<OwlResult<T>> => {
    return service.delete(config.url, { params: config.params })
  }
}

// 请求入口
const owlRequest = <T>(config: OwlRequestConfigType): Promise<OwlResult<T>> => {

  return Object(axiosConfig)[config.method](config)
}

export function setToken(token: string) {
  accessToken = token
}

export default owlRequest
```

## 使用

```typescript
owlRequest({
    url: '/login',
    params: loginDto,
    method: 'post'
}).then((res) => {
    if (res.status === 0) {
        console.log('登录成功')
    } else {
        console.log('登录失败')
    }
}).catch((error) => {
    console.log('登录失败')
})
```

