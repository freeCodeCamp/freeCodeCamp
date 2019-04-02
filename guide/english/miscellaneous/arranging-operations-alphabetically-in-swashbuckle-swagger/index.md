---
title: Arranging Operations Alphabetically in Swashbuckle Swagger
---
<a href='https://github.com/domaindrivendev/Swashbuckle' target='_blank' rel='nofollow'>Swashbuckle</a> seamlessly adds a <a href='http://swagger.io/' target='_blank' rel='nofollow'>Swagger</a> to WebAPI projects. However, the operations on the page do not appear in alphabetical order.

Although the operations will not appear in alphabetical order, Swashbuckle allows custom filters and with a little coding, the order can be shown in alphabetical order.

## Code Example

The code below creates a <a href='https://github.com/domaindrivendev/Swashbuckle#documentfilter' target='_blank' rel='nofollow'>DocumentFilter</a> which is then applied to the final document as outlined <a href='https://github.com/domaindrivendev/Swashbuckle#modifying-generated-operations' target='_blank' rel='nofollow'>here</a>.

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

Now you can simply add it to the config file like this

    .EnableSwagger(c =>
        {
            ...
            c.DocumentFilter<YourNamespace.Swagger.Extensions.CustomDocumentFilter>();
            ...
        }
    );

## References:

*   <a href='https://github.com/domaindrivendev/Swashbuckle' target='_blank' rel='nofollow'>Swashbuckle</a>
*   <a href='http://swagger.io/' target='_blank' rel='nofollow'>Swagger</a>
*   <a href='https://github.com/domaindrivendev/Swashbuckle#documentfilter' target='_blank' rel='nofollow'>DocumentFilter</a>
*   <a href='https://gist.github.com/pallu/0f28e98fa89d2855a321' target='_blank' rel='nofollow'>Gist for code above</a>