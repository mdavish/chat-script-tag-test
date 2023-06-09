# Chat Script Tag Test

This repository uses Vite/Rollup to bundle a `ChatApp` component as a UMD
library. It can then be used in a script tag in a HTML file like so:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="dist/style.css" />
  </head>
  <body>
    <div id="my-component-root"></div>
    <script src="/dist/chat-script-tag-test.umd.cjs"></script>
    <!-- Make sure this path is correct -->
    <script>
      console.log(window.ChatApp);
      const props = {
        apiKey: "ba41c60c65d874c5340985ad4fcda69a",
        botId: "ski-warehouse-chat",
        title: "Ski Warehouse",
        stream: false,
      };
      window.ChatApp.mountChatApp(
        document.getElementById("my-component-root"),
        props
      );
    </script>
  </body>
</html>
```

To get this working, run the following commands:

```
npm run build
python3 -m http.server
```
