---
title: Arranging Operations Alphabetically in Swashbuckle Swagger
localeTitle: ترتيب العمليات حسب الترتيب الأبجدي في Swashbuckle اختيال
---
[Swashbuckle](https://github.com/domaindrivendev/Swashbuckle) يضيف بسلاسة [اختيال](http://swagger.io/) إلى مشاريع WebAPI. ومع ذلك ، لا تظهر العمليات على الصفحة بالترتيب الأبجدي.

على الرغم من أن العمليات لن تظهر بالترتيب الأبجدي ، إلا أن Swashbuckle تسمح بمرشحات مخصصة وبتكويد صغير ، يمكن إظهار الترتيب بترتيب أبجدي.

## مثال الكود

ينشئ التعليمة البرمجية أدناه [DocumentFilter](https://github.com/domaindrivendev/Swashbuckle#documentfilter) ثم يتم تطبيقه على المستند النهائي كما هو موضح [هنا](https://github.com/domaindrivendev/Swashbuckle#modifying-generated-operations) .

 `using Swashbuckle.Swagger; 
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
` 

الآن يمكنك ببساطة إضافته إلى ملف التكوين مثل هذا

 `.EnableSwagger(c => 
    { 
        ... 
        c.DocumentFilter<YourNamespace.Swagger.Extensions.CustomDocumentFilter>(); 
        ... 
    } 
 ); 
` 

## المراجع:

*   [Swashbuckle](https://github.com/domaindrivendev/Swashbuckle)
*   [اختيال](http://swagger.io/)
*   [DocumentFilter](https://github.com/domaindrivendev/Swashbuckle#documentfilter)
*   [جوهر للقالب أعلاه](https://gist.github.com/pallu/0f28e98fa89d2855a321)