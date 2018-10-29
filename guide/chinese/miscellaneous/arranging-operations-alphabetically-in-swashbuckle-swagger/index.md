---
title: Arranging Operations Alphabetically in Swashbuckle Swagger
localeTitle: 在Swashbuckle Swagger中按字母顺序排列操作
---
[Swashbuckle](https://github.com/domaindrivendev/Swashbuckle)无缝地向WebAPI项目添加了[Swagger](http://swagger.io/) 。但是，页面上的操作不按字母顺序显示。

虽然操作不会按字母顺序显示，但Swashbuckle允许使用自定义过滤器并使用少量编码，顺序可以按字母顺序显示。

## 代码示例

下面的代码创建了一个[DocumentFilter](https://github.com/domaindrivendev/Swashbuckle#documentfilter) ，然后将其应用于[此处](https://github.com/domaindrivendev/Swashbuckle#modifying-generated-operations)概述的最终文档。
```
using Swashbuckle.Swagger; 
 using System; 
 using System.Collections.Generic; 
 using System.Linq; 
 using System.Web; 
 
 namespace YourNamespace.Swagger.Extensions 
 { 
    public class CustomDocumentFilter : IDocumentFilter 
    { 
        public void Apply(SwaggerDocument swaggerDoc, SchemaRegistry schemaRegistry, System.Web.Http.Description.IApiExplorer apiExplorer) 
        { 
            //make operations alphabetic 
            var paths = swaggerDoc.paths.OrderBy(e => e.Key).ToList(); 
            swaggerDoc.paths = paths.ToDictionary(e => e.Key, e => e.Value); 
 
            //controller comments do not get added to swagger docs. This is how to add them. 
            AddControllerDescriptions(swaggerDoc, apiExplorer); 
 
        } 
 
        private static void AddControllerDescriptions(SwaggerDocument swaggerDoc, System.Web.Http.Description.IApiExplorer apiExplorer) 
        { 
            var doc = new YourPortal.Areas.HelpPage.XmlDocumentationProvider(GetXmlCommentsPath()); 
 
            List<Tag> lst = new List<Tag>(); 
            var desc = apiExplorer.ApiDescriptions; 
            ILookup<HttpControllerDescriptor, ApiDescription> apiGroups = desc.ToLookup(api => api.ActionDescriptor.ControllerDescriptor); 
            foreach (var apiGroup in apiGroups) 
            { 
                string tagName = apiGroup.Key.ControllerName; 
                var tag = new Tag { name = tagName }; 
                var apiDoc = doc.GetDocumentation(apiGroup.Key); 
                if (!String.IsNullOrWhiteSpace(apiDoc)) 
                    tag.description = apiDoc; 
                lst.Add(tag); 
 
            } 
            if (lst.Count() > 0) 
                swaggerDoc.tags = lst.ToList(); 
        } 
        private static string GetXmlCommentsPath() 
        { 
            return System.Web.Hosting.HostingEnvironment.MapPath("~/App_Data/YourPortal.xml"); 
        } 
    } 
 } 
```

现在您可以像这样简单地将它添加到配置文件中
```
.EnableSwagger(c => 
    { 
        ... 
        c.DocumentFilter<YourNamespace.Swagger.Extensions.CustomDocumentFilter>(); 
        ... 
    } 
 ); 
```

## 参考文献：

*   [Swashbuckle](https://github.com/domaindrivendev/Swashbuckle)
*   [昂首阔步](http://swagger.io/)
*   [的DocumentFilter](https://github.com/domaindrivendev/Swashbuckle#documentfilter)
*   [上面代码的要点](https://gist.github.com/pallu/0f28e98fa89d2855a321)