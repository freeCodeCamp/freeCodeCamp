---
id: 6af4aeb7797b2df1a68aecbd
title: Step 25
challengeType: 20
dashedName: step-25
---

# --description--

Now that you've seen the header in the console, remove the object creations and the method calls you added for testing.

# --hints--

You should not have `tory = User('Tory')` in your code.

```js
({
    test: () => {
        assert(!runPython(`_Node(_code).has_stmt("tory = User(\\"Tory\\")")`));
    }
})
```

You should not have `ramy = User('Ramy')` in your code.

```js
({
    test: () => {
        assert(!runPython(`_Node(_code).has_stmt("ramy = User(\\"Ramy\\")")`));
    }
})
```

You should not have `tory.send_email(ramy, 'Hello', 'Hi Ramy, just saying hello!')` in your code.

```js
({
    test: () => {
        assert(!runPython(`_Node(_code).has_call("tory.send_email(ramy, \\"Hello\\", \\"Hi Ramy, just saying hello!\\")")`));
    }
})
```

You should not have `ramy.inbox.emails[0].display_full_email()` in your code.

```js
({
    test: () => {
        assert(!runPython(`_Node(_code).has_call("ramy.inbox.emails[0].display_full_email()")`));
    }
})
```

# --seed--

## --seed-contents--

```py
class Email:
    def __init__(self, sender, receiver, subject, body):
        self.sender = sender
        self.receiver = receiver
        self.subject = subject
        self.body = body
        self.read = False

    def mark_as_read(self):
        self.read = True

    def display_full_email(self):
        self.mark_as_read()
        print(f"\n{' Email ':-^29}")

class User:
    def __init__(self, name):
        self.name = name
        self.inbox = Inbox()

    def send_email(self, receiver, subject, body):
        email = Email(sender=self, receiver=receiver, subject=subject, body=body)
        receiver.inbox.receive_email(email)

class Inbox:
    def __init__(self):
        self.emails = []

    def receive_email(self, email):
        self.emails.append(email)

--fcc-editable-region--
tory = User('Tory')
ramy = User('Ramy')

tory.send_email(ramy, 'Hello', 'Hi Ramy, just saying hello!')

ramy.inbox.emails[0].display_full_email()
--fcc-editable-region--
```
