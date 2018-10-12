---
title: Android core components
---
# Android core components
Core components are the essential elements which an app for Android consists of. Each of them has its own purpose and lifecycle but not all of them are independent. They are:

- Activities
- Fragments
- Services
- Broadcast receivers
- Content providers

## [Activities](https://developer.android.com/guide/components/activities/)
An _activity_ is a component that has a user interface and represents a single screen. An app can have multiple activities, each of those can be an entry point to the application itself for the user or the system (an app's activity that wants to open another activity that belongs to the same application or to a different one).

## [Fragments](https://developer.android.com/guide/components/fragments)
A Fragment represents a behavior or a portion of user interface in a FragmentActivity. You can combine multiple fragments in a single activity to build a multi-pane UI and reuse a fragment in multiple activities. You can think of a fragment as a modular section of an activity, which has its own lifecycle, receives its own input events, and which you can add or remove while the activity is running (sort of like a "sub activity" that you can reuse in different activities).

### Why use Fragments?
> The main reason is that fragments are more reusable than custom views.

> Sometimes you can't create a fully encapsulated UI component relying on views alone. This is because there are things you would want to put into your view but can't because only an Activity can handle them, thus forcing tight coupling between an Activity and a View.

> Here is one such example. Lets say you want to create a reusable UI component that, among many things, want to capture a photo and do something with it. Traditionally you would fire an intent that starts the camera and returns with the captured image.

> Notice that your custom UI component can't fully encapsulate this functionality because it will have to rely on hosting Activity's startActivityForResult because views don't accept activity results (they can indirectly fire an intent through context).

> Now if you wanted to reuse your custom UI component in different activities you would be repeating the code for Activity.startActivityForResult.

> Fragment on the other hand cleanly solve this problem.

> Similarly your fragment can contribute items to your options menu, something traditionally only an Activity could do. Again this could be important if the state of your custom view dictates what goes in the menu.

## [Services](https://developer.android.com/guide/components/services)
A _service_ is a component without user interface to perform long-running operations in the background.
There are two kinds of services:

- _foreground_ services: they are strictly related to user's interaction (for example music playback), so it's harder for the system to kill them.
- _background_ services: they are not directly related to user's activities, so they can be killed if more RAM is needed.

## [Broadcast receivers](https://developer.android.com/guide/components/broadcasts)
A _broadcast receiver_ is another component without user interface (except an optional status bar notification) that lets the system to deliver events from/to the app, even when the latter hasn't been previously launched.

## [Content providers](https://developer.android.com/guide/topics/providers/content-providers)
A _content provider_ is a component used to manage a set of app data to share with other applications. Each item saved in the content provider is identified by a URI scheme.

For detailed information about the topic, see the official [Android fundamentals](https://developer.android.com/guide/components/fundamentals) documentation 
