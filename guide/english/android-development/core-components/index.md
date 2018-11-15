---
title: Android Core Components
---
## Android core components
Core components are the essential elements contained in an Android app. Each of them has its own purpose and lifecycle, but not all of them are independent. The Android Core Components are:

- Activities
- Services
- Broadcast receivers
- Content providers

### [Activities](https://developer.android.com/guide/components/activities/)
An _activity_ is a component that has a user interface and represents a single screen in an Android app. An app can have multiple activities, each of which can be an entry point to the application itself for the user or the system (an app's activity that wants to open another activity that belongs to the same application or to a different one).

#### [Activity Lifecycle](https://developer.android.com/guide/components/activities/activity-lifecycle)
![Activity Lifecycle](https://developer.android.com/images/activity_lifecycle.png)

* onCreate():

> Called when the activity is first created. This is where you should do all of your normal static set up: create views, bind data to lists, etc. This method also provides you with a Bundle containing the activity's previously frozen state, if there was one. Always followed by onStart().

* onRestart():

> Called after your activity has been stopped, prior to it being started again. Always followed by onStart().

* onStart():

> Called when the activity is becoming visible to the user. Followed by onResume() if the activity comes to the foreground, or onStop() if it becomes hidden.

* onResume():

> Called when the activity will start interacting with the user. At this point your activity is at the top of the activity stack, with user input going to it. Always followed by onPause().

* onPause():

> Called as part of the activity lifecycle when an activity is going into the background, but has not (yet) been killed. The counterpart to onResume(). Take for example, an Android app with two activities A and B, in which activity A is currently in the foreground and is the only activity on the app activity stack. When activity B is launched in front of activity A, this callback will be invoked on A. B will not be created until A's onPause() returns, so be sure to not do anything lengthy here.

* onStop():

> Called when an activity is no longer visible to the user. You will next receive either onRestart(), onDestroy(), or nothing, depending on subsequent user activity.

>Note that this method may never be called, in low memory situations where the system does not have enough memory to keep your activity's process running after its onPause() method is called.

* onDestroy():

> The final call you receive before your activity is destroyed. This can happen either because the activity is finishing (someone called finish() on it), or because the system is temporarily destroying this instance of the activity to save space. You can distinguish between these two scenarios with the isFinishing() method. This call is often used when the user hits the back button, or closes the instance of the app.

#### Sample code to understand Activity Lifecycle
``` java
import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
public class MainActivity extends Activity {
    String tag = "LifeCycleEvents";
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
       super.onCreate(savedInstanceState);
       setContentView(R.layout.main);
       Log.d(tag, "In the onCreate() event");
    }
    public void onStart()
    {
       super.onStart();
       Log.d(tag, "In the onStart() event");
    }
    public void onRestart()
    {
       super.onRestart();
       Log.d(tag, "In the onRestart() event");
    }
    public void onResume()
    {
       super.onResume();
       Log.d(tag, "In the onResume() event");
    }
    public void onPause()
    {
       super.onPause();
       Log.d(tag, "In the onPause() event");
    }
    public void onStop()
    {
       super.onStop();
       Log.d(tag, "In the onStop() event");
    }
    public void onDestroy()
    {
       super.onDestroy();
       Log.d(tag, "In the onDestroy() event");
    }
}
```


### [Services](https://developer.android.com/guide/components/services)
A _service_ is a component without a user interface, and is used to perform long-running operations in the background.
There are three kinds of services:

- _foreground_ services: they are strictly related to user's interaction (for example music playback), so it's harder for the system to kill them.
- _background_ services: they are not directly related to user's activities, so they can be killed if more RAM is needed.
- _bound_ services: they are  offers a client-server interface that allows components to interact with the service, send requests, receive results, and even do so across processes with interprocess communication (IPC).

### [Broadcast receivers](https://developer.android.com/guide/components/broadcasts)
A _broadcast receiver_ is another component without user interface (except an optional status bar notification) that provides a gateway for the system to deliver events from/to the app, even when the latter hasn't been previously launched.

### [Content providers](https://developer.android.com/guide/topics/providers/content-providers)
A _content provider_ is a component used to manage a set of app data to share with other applications. Each item saved in the content provider is identified by a URI scheme.

For detailed information about the topic, see the official [Android fundamentals](https://developer.android.com/guide/components/fundamentals) documentation.

### Advanced Android Development  
To learn advanced Android programming concepts, see Google's [Advanced Android Development](https://developers.google.com/training/courses/android-advanced) course.

