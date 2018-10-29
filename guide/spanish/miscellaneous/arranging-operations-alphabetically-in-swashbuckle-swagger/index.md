---
title: Arranging Operations Alphabetically in Swashbuckle Swagger
localeTitle: Organizar operaciones alfabéticamente en Swashbuckle Swagger
---
[Swashbuckle](https://github.com/domaindrivendev/Swashbuckle) agrega sin problemas un [Swagger](http://swagger.io/) a los proyectos WebAPI. Sin embargo, las operaciones en la página no aparecen en orden alfabético.

Aunque las operaciones no aparecerán en orden alfabético, Swashbuckle permite filtros personalizados y con un poco de codificación, el orden se puede mostrar en orden alfabético.

## Ejemplo de código

El siguiente código crea un [DocumentFilter](https://github.com/domaindrivendev/Swashbuckle#documentfilter) que luego se aplica al documento final como se describe [aquí](https://github.com/domaindrivendev/Swashbuckle#modifying-generated-operations) .
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

Ahora simplemente puede agregarlo al archivo de configuración como este
```
.EnableSwagger(c => 
    { 
        ... 
        c.DocumentFilter<YourNamespace.Swagger.Extensions.CustomDocumentFilter>(); 
        ... 
    } 
 ); 
```

## Referencias:

*   [Swashbuckle](https://github.com/domaindrivendev/Swashbuckle)
*   [Pavonearse](http://swagger.io/)
*   [DocumentFilter](https://github.com/domaindrivendev/Swashbuckle#documentfilter)
*   [Gist para el código de arriba](https://gist.github.com/pallu/0f28e98fa89d2855a321)