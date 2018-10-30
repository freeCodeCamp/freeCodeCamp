/*
** © 2014 by Philipp Dunkel <pip@pipobscure.com>
** Licensed under MIT License.
*/

void FSEvents::lockingStart() {
  if (lockStarted) return;
  lockStarted = true;
  pthread_mutex_init(&lockmutex, NULL);
}

void FSEvents::lock() {
  if (!lockStarted) return;
  pthread_mutex_lock(&lockmutex);
}

void FSEvents::unlock() {
  if (!lockStarted) return;
  pthread_mutex_unlock(&lockmutex);
}

void FSEvents::lockingStop() {
  if (!lockStarted) return;
  lockStarted = false;
  
  pthread_mutex_destroy(&lockmutex);
}
