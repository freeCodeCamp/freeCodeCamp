---
title: Rest API Design
---


### History
REST stands for **Re**presentational **S**tate **T**ransfer protocol. Roy Fielding defined REST in his Phd dissertation in year 2000.
 
### What is it?
REST was developed to provide a uniform interface for

 - Identifying resources
 - Manipulation of resources
 - Self-descriptive messages
 - Using Hypermedia as the Engine of Application State (HATEOS)

REST is not an architecture, but a set of design criteria.
Resource-Oriented Architecture (ROA) is a RESTful
architecture that provides a common sense set of rules and a
step-by-step procedure for designing RESTful Web services
following these design criteria. Each resource has a name
(i.e. a URI) and a representation, and it may be linked to other
resources via hyperlinks.


### Best Practices

 - #### Basics

|   Method	|  http://api.co/v2/cars  	| http://api.co/v2/cars/1234   	|   	
|---	|---	|---	|
|   GET	|   List all the cars	|   Retrieve an individual car	|
|   POST	|  Create a new car  	|  Error   	|
|   PUT	|  Replace cars collections with new one  	|  Replace the car with id 1234 	|
|   DELETE |  Delete all cars	|  Delete car with id 1234	|

*Note while PUT operations either client or server can generate id's*

- #### Nouns are good, Verbs are bad

  - Use nouns to refer resources like `cars`, `fruits` etc.
  - Use verbs for action declarations `convertMilesToKms`, `getNutritionalValues`

- #### Singular or Plural?
    Use correct grammar for declaration

    **Avoid** `/person/145` 

    **Prefer** `/people/154` Assumed to return 154th person from list of people

- #### Use casing
  Use anyone of the below patterns and be **consistent!**  


  | Case Styles        | Example          | 
  | ------------- |-------------|
  | **UpperCamelCase**      | `http://api.fintech.cp/DailyTransactions/Today` | 
  | **lowerCamelCase**      | `http://api.fintech.cp/dailyTransactions/today`      |  
  | **snake_case**    | `http://api.fintech.cp/daily_transactions/today`      | 

- #### **Relationships and Resources**

  - Resources can have `one-to-one`, `one-to-many`, and `many-to-many` relationships etc. Mapping them correctly is crucial.
  - **One-to-One** Mapping
  
      For example, `Countries/1/capital` suggests a one-to-one relationship between a country and a capital city. This means a country can only have one capital. This type of relationship means that one row relates only to one row in another table (one country, one capital in two different tables). This type of relationship is not common and is often used to break up the amount of data in one row of a table.
      
  - **One-to-Many** Mapping

       For example, `Tickets/145/messages/4` suggests one-to-many relationship between `tickets` and `messages`. Meaning `1` ticket has `N` messages. Message isn't standalone resource. You can't have `/messages/4`.

  - **Many to Many** Mapping

      For example, `/usergroups/345/users/56` suggests select 345th user group and get user with id 56. However, one user might be in multiple `usergroups` i.e. `/usergroups/209/users/56` is also valid. In such case so for seperating the dependant resource `users` into a seperate endpoint like `/users/56` and provide resource linking in `/usergroups/209/users/56`

- #### **API Parameters**
 
   - **PATH** :  *required* to access the resource E.g. `/cars`, `/fruits`

   - **Query Parameters** : *optional* filter the list E.g. `/cars?type=SUV&year=2010`

   - **Body** : Resource specific logic. Advance search query. Sometimes it might have both Query and body.

   - **Header** : Should contain global or platform wide data. E.g. API key parameters, encrypted keys for auth, device type information e.g. mobile or desktop or endpoint, device data type e.g. xml or json. Use header to communicate these parameters

 - #### HTTP Status Codes

 Use correct status codes 
 
  | Codes        | Meaning           | 
  | ------------- |:-------------:|
  | 1xx | Request received and understood. | 
  | 2xx | Action requested by client was received, understood and requested. | 
  | 3xx | Client must take additional action to complete the request. Most of these status codes are used in URL Redirection. |
  | 4xx | Intended for situations where it seems the error was caused by the client. |
  | 5xx | The server failed to fulfil a request. |



  Little more on **2xx**!

  - **201 Resource Created.**
      POST `/cars`  should return HTTP 201 created with `location` header stating how to access the resource
      E.g. `location` : `api.com/cars/124` in header

  - **202 - Accepted**

      Use this if the task is huge to run. Tell the client, it has accepted the request and will/is process/processing
      No payload is returned 

  -   **204 - No content**

      Used when deleted `DELETE cars/124`
      Returns no content. But can also return `200 OK` if API intends to send the deleted resource for further processing.

  The dangerous **5xx** resources!

  - **500** Internal Server Error
  - **501** Not implemented. Server lacks the ability to fulfil the request
  - **504** Gateway Timeout. Server didn't receive timely response

  Less known **4xx** suggests that you are passing wrong parameter. Can also pass information that is wrong. E.g.

  `DELETE /cars/MH09234`

  returns `4xx` or message 
  `Expecting int car id /car/id got string car/MH09234 `


### **Further reading**
[How to Design Great APIs - Parse Developer Day 2013](https://www.youtube.com/watch?v=qCdpTji8nxo)

[The never-ending REST API design debate by Guillaume Laforge](https://www.youtube.com/watch?v=48azd2VqtP0)

[HTTP status codes](https://httpstatuses.com/)

[Documenting APIs: A guide for technical writers](https://idratherbewriting.com/learnapidoc/)


