---
title: Make Useful APIs in Angularjs
localeTitle: 在Angularjs中制作有用的APIs
---
但是，在此之前还有两件事要做，对你有用。假设您要显示与该页面请求的用户名相关的所有_内容_ ：您必须先

1.  在`/server/api/thing/thing.model.js`中的_物品_架构中有“用户名”或“所有者”字段
    
2.  在`/server/api/thing/index.js`编写自定义路由以捕获特定用户名的请求。您的前端请求可能类似于：
    
    $ http.get（'/ api / things /'+ username）.success（...）
    

所以你将在`index.js`添加一行，如：
```
router.get('/:user', controller.indexUser); 
```

然后在`thing.controller.js`你会写像这样的_exports.indexUser_功能：
```
exports.indexUser = function(req, res) { 
    Thing.find({owner:req.params.user}, function (err, things) { 
        if(err) return res.send(500, err); 
        res.json(200, things); 
    }); 
 }; 
```

警告！！！只有用户名在用户之间绝对唯一时，此方法才有效。 angular-fullstack生成器附带的默认身份验证系统没有唯一的用户名，因此您最好使用该_用户。_ ID\_场来确定唯一的用户在你的数据库现在，除非你想改变你自己实现唯一的用户名`/api/user/user.model.js` ， `/api/user/user.controller.js` ，和你`/app/client/account/signup/signup.controller.js` 。值得庆幸的是，在阅读本指南后，您应该知道如何做到这一切！