---
title: What is an API
localeTitle: 什么是API
---
## 什么是API？

API代表应用程序编程接口。 API隐藏了开发人员的复杂性，将系统扩展到合作伙伴，组织代码以及使组件可重用。不要担心AP，只关注I.API是一个接口。您始终使用接口。计算机操作系统是一个接口。电梯中的按钮是一个界面。汽车中的油门踏板是一个接口。

界面位于复杂系统的顶部并简化了某些任务，中间人可以使您无需了解引擎盖下发生的所有细节。 Web API也是同样的事情。它位于Twitter或YouTube等Web服务之上，可以为您简化某些任务。它将您的操作转换为另一端的计算机系统的技术细节。

如果您使用面向对象的语言（如Java或C ++）进行编程，则API与类的概念非常相似。当我们在一个对象上调用一个方法（比如`.toString()` ）时，我们并不关心对象是如何产生结果的，我们所关心的只是我们最后得到的字符串。对API的调用以相同的方式工作。例如，当我们调用Facebook API来检索用户的个人资料图片时，我们不关心如何从服务器检索信息。我们只是向API发出请求，让它处理所有复杂的检索逻辑，并在最后得到我们的照片。

## 为什么API有用？

访问API通常意味着可以访问大量有组织的数据。该数据的网守给予开发人员许可（以_API密钥_的形式）来查询服务器以获取信息。如果请求成功，服务器将响应一条可能如下所示的消息：

```javascript
{ 
  "coord": { 
    "lon":139, 
    "lat":35 
  }, 
  "wind": { 
    "speed":7.31, 
    "deg":187.002 
  }, 
  "rain": { 
    "3h":0 
  }, 
  "clouds": { 
    "all":92 
  } 
 } 
```

资料来源： [Open Weather API](https://openweathermap.org/current)

在上面的示例中，开发人员以特定的纬度和经度请求当前天气，并且服务器使用_JSON对象_响应该位置的风，雨和云。您每天使用的服务都有大量的请求和响应周期。

**以下是适合初学者的十大API**

1.  Dropbox：https：//www.dropbox.com/developers
2.  Google地图：https：//developers.google.com/maps/web/
3.  Twitter：https：//dev.twitter.com/docs
4.  YouTube：https：//developers.google.com/youtube/v3/getting-started
5.  Soundcloud：http：//developers.soundcloud.com/docs/api/guide#playing
6.  条纹：https：//stripe.com/docs/tutorials/checkout
7.  Instagram：http：//instagram.com/developer/
8.  Twilio：https：//www.twilio.com/docs
9.  Yelp：http：//www.yelp.com/developers/getting\_started
10.  Facebook：https：//developers.facebook.com/docs/facebook-login/login-flow-for-web

#### 更多信息：

*   [非程序员的API](https://schoolofdata.org/2013/11/18/web-apis-for-non-programmers/)
*   [维基百科](https://en.wikipedia.org/wiki/Application_programming_interface)
*   [介质](https://medium.com/girl-geeks/top-10-apis-for-beginners-4d3c43be9386)