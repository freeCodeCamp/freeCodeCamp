---
title: Arranging Operations Alphabetically in Swashbuckle Swagger
localeTitle: Organizando Operações em Ordem Alfabética no Swaggerbuckle Swagger
---
[O Swashbuckle](https://github.com/domaindrivendev/Swashbuckle) adiciona um [Swagger](http://swagger.io/) aos projetos do WebAPI. No entanto, as operações na página não aparecem em ordem alfabética.

Embora as operações não apareçam em ordem alfabética, o Swashbuckle permite filtros personalizados e com um pouco de codificação, a ordem pode ser mostrada em ordem alfabética.

## Exemplo de código

O código abaixo cria um [DocumentFilter](https://github.com/domaindrivendev/Swashbuckle#documentfilter) que é então aplicado ao documento final, conforme descrito [aqui](https://github.com/domaindrivendev/Swashbuckle#modifying-generated-operations) .
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

Agora você pode simplesmente adicioná-lo ao arquivo de configuração como este
```
.EnableSwagger(c => 
    { 
        ... 
        c.DocumentFilter<YourNamespace.Swagger.Extensions.CustomDocumentFilter>(); 
        ... 
    } 
 ); 
```

## Referências:

*   [Swashbuckle](https://github.com/domaindrivendev/Swashbuckle)
*   [Swagger](http://swagger.io/)
*   [DocumentFilter](https://github.com/domaindrivendev/Swashbuckle#documentfilter)
*   [Gist para o código acima](https://gist.github.com/pallu/0f28e98fa89d2855a321)