---
title: Arranging Operations Alphabetically in Swashbuckle Swagger
localeTitle: Организация операций по алфавиту в Swashbuckle Swagger
---
[Swashbuckle](https://github.com/domaindrivendev/Swashbuckle) легко добавляет проекты [Swagger](http://swagger.io/) в WebAPI. Однако операции на странице не отображаются в алфавитном порядке.

Хотя операции не будут отображаться в алфавитном порядке, Swashbuckle позволяет настраивать фильтры и с небольшим кодированием, порядок может отображаться в алфавитном порядке.

## Пример кода

В приведенном ниже коде создается [DocumentFilter,](https://github.com/domaindrivendev/Swashbuckle#documentfilter) который затем применяется к окончательному документу, как описано [здесь](https://github.com/domaindrivendev/Swashbuckle#modifying-generated-operations) .
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

Теперь вы можете просто добавить его в конфигурационный файл, как это
```
.EnableSwagger(c => 
    { 
        ... 
        c.DocumentFilter<YourNamespace.Swagger.Extensions.CustomDocumentFilter>(); 
        ... 
    } 
 ); 
```

## Рекомендации:

*   [Swashbuckle](https://github.com/domaindrivendev/Swashbuckle)
*   [развязность](http://swagger.io/)
*   [DocumentFilter](https://github.com/domaindrivendev/Swashbuckle#documentfilter)
*   [Gist для кода выше](https://gist.github.com/pallu/0f28e98fa89d2855a321)