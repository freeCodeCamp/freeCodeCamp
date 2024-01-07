# Getting Started

Step 1 : Install freeCodeCamp properly on your system.

Step 2 : Install the curriculum server and the current package.

Step 3 : The prepare script will take care of the rest.

```sh
cd ../curriculum-server
npm i
cd ../web
npm i
pnpm run dev
```

Now the server should be running on port 3000 and the client on port 8000.

For now there's not much to see.

http://localhost:8000/learn/special-path

is the main entry point and

http://localhost:3000/responsive-web-design

is the curriculum data that is currently being used.

## Things of Note

Incremental static regeneration is working quite nicely. You can modify the curriculum data (in /curriculum-server/data/curriculum.json), refresh/reload your browser and the changes will be reflected.

The trailing ids are a bit buggy, but you can replace them with a new page's mongo id and it will refresh.

Also, mangled paths _mostly_ work. For example:

http://localhost:8000/learn/responsive-web-design/applied-an-element/587d774e367417b2b2512a9f

redirects you to

http://localhost:8000/learn/responsive-web-design/applied-accessibility/jump-straight-to-the-content-using-the-main-element/587d774e367417b2b2512a9f

but not all paths behave as desired.
