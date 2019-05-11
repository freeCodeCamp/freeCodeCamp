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
An _activity_ is a component that has a user interface and represents a single screen in an Android app. An app can have multiple activities, each of which can be an entry point to the application itself for the user or the system (an app's activity that wants to open another activity that belongs to the same application or to a different one). One  activity can call another activity with the help of an [Intent](https://developer.android.com/reference/android/content/Intent).

An activity facilitates the following key interactions between system and app:
- Keeping track of what the user currently cares about (what is on screen) to ensure that the system keeps running the process that is hosting the activity.
- Knowing that previously used processes contain things the user may return to (stopped activities), and thus more highly prioritize keeping those processes around.
- Helping the app handle having its process killed so the user can return to activities with their previous state restored.
- Providing a way for apps to implement user flows between each other, and for the system to coordinate these flows. (The most classic example here being share.)

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

> Note that this method may never be called, in low memory situations where the system does not have enough memory to keep your activity's process running after its onPause() method is called.

* onDestroy():

> The final call you receive before your activity is destroyed. This can happen either because the activity is finishing (someone called finish() on it), or because the system is temporarily destroying this instance of the activity to save space. You can distinguish between these two scenarios with the isFinishing() method.

This call is often used when the user hits the back button, or closes the instance of the app.

Interestingly, when app display changes orientation (e.g., from landscape to portrait or the other way around), `onDestroy()` and `onCreate()` are called. This means that the Activity is recreated. This comes in handy in applications with different defined rules for landscape and portrait modes, or with different views defined for tablets and phones in these modes.

This method also cleanup the resources such as threads so that application runs smooth.

#### Sample code to understand Activity Lifecycle

You can print in log console using Log.d() method.

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

### [Fragments](https://developer.android.com/guide/components/fragments)
A fragment is also known as a sub-activity because it must be part of an activity. An android application supports multiple fragments in a single activity. Fragments represent multiple screen inside one activity. You can combine multiple fragments in a single activity to build a multi-pane UI and reuse a fragment in multiple activities. Fragments have their own life cycle and is dependent on the life cycle of the activity it is part of.

#### [Fragment Lifecycle](https://developer.android.com/guide/components/fragments#Lifecycle)
![Fragment Lifecycle](https://developer.android.com/images/activity_fragment_lifecycle.png)
 #### Fragment callbacks and their uses
``` java
@Override
public void onAttach(Activity activity) {
   super.onAttach(activity);
   // add your code here which executes when fragment instance is associated
}

@Override
public void onCreate(Bundle savedInstanceState) {
   super.onCreate(savedInstanceState);
   // add your code here which executes when fragment's instance initializes
}

@Override
public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
   View v = inflater.inflate(R.layout.fragment_test, container, false);
   // add your code here to draw the UI for the first time means in this method we can get the reference of the views which are created         // in our xml file
 return v;
}

@Override
public void onViewCreated(View view, Bundle savedInstanceState) {
   super.onViewCreated(view, savedInstanceState);
   // add your code here which executes after the execution of onCreateView() method.
}

@Override
public void onActivityCreated(Bundle savedInstanceState) {
   super.onActivityCreated(savedInstanceState);
   // add your code here which executes when the host activity is created.
}

@Override
public void onDestroyView() {
   super.onDestroyView();
   // add your code here which executes when the view's and other related resources created in onCreateView() method are removed
}

@Override
public void onDetach() {
   super.onDetach();
   // add your code here which executes when fragment has been disassociated from its hosting activity
}
```

### [Services](https://developer.android.com/guide/components/services)
A _service_ is a component without a user interface that performs long-running operations in the background.
The services have seperate lifecycle than the activity or component that initiates it. This unique autonomy of seperate lifecycle allows the service to run in thee background even if the activity that initiated it is stopped.
There are three kinds of services:

- _Foreground_ services: they are strictly related to the user's interaction (for example music playback), so it's harder for the system to kill them.
- _Background_ services: they are not directly related to the user's activities, so they can be killed if more RAM is needed.
- _Bound_ services: offers a client-server interface that allows components to interact with the service, send requests, receive results, and even do so across processes with interprocess communication (IPC).
- _Intent_ services: An IntentService is meant to handle individual autonomous calls. Unlike a service, which can concurrently handle multiple calls, an IntentService is more like a work queue processor – work is queued up and an IntentService processes each job one at a time on a single worker thread. Typically, an IntentService is not bound to an Activity or a Fragment.

#### [Services Lifecycle](https://developer.android.com/guide/components/services#Lifecycle)
![Services Lifecycle](https://developer.android.com/images/service_lifecycle.png)

### [Broadcast receivers](https://developer.android.com/guide/components/broadcasts)
A _Broadcast receiver_ is another component without user interface (except an optional status bar notification) that provides a gateway for the system to deliver events from/to the app, even when the latter hasn't been previously launched. For example, the Android system sends broadcasts when various system events occur, such as when the system boots up or the device starts charging.
These receivers respond to broadcast messages from the system of other application. These messages are known as events or intents.

### [Content providers](https://developer.android.com/guide/topics/providers/content-providers)
A _Content provider_ is a component used to manage a set of app data to share with other applications. Each item saved in the content provider is identified by a URI scheme. These provide access to central repository of data by applications.This data can be stored by the accessing application or by other applications. _content provider_ can help an application manage access to data stored by itself, stored by other apps, and provide a way to share data with other apps. 

For detailed information about the topic, see the official [Android fundamentals](https://developer.android.com/guide/components/fundamentals) documentation.

### Advanced Android Development  
To learn advanced Android programming concepts, see Google's [Advanced Android Development](https://developers.google.com/training/courses/android-advanced) course.
