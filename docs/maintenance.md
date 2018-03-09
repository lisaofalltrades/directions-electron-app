# Developer Notes

## Getting Started
- Installation of [Node.js & NPM](https://nodejs.org/en/)
- Knowledge of
    - HTML, CSS, JavaScript
    - [Node](https://blog.risingstack.com/node-hero-tutorial-getting-started-with-node-js/)
    - [Electron](https://electron.atom.io/docs/)

## Getting Started Dev
``` bash
git clone https://github.com/lisaofalltrades/directions-electron-app.git
cd directions-electron-app
npm install

# if you'/nve installed it globally with npm, then run:
electron .
# if you'/nve install it locally, then run:
./node_modules/.bin/electron .
```

## Adding a slide
1. Add a section with the following attributes:
``` html
<section class="display content">
    <div class="directions">
        <h1 class="title">Step Name/Slide Title </h1>
</section>
```
**The above steps are vital for toggling between steps & populating navigation links.** <br>

3. Confirm you've made the following changes:
    - Rename the section title.
    - Double check that the instructions are current
    - Check the path of the video, action button, and help button (if there are any)
    - Make sure the comments before and after the section correlates to the step title. For ex: If the section is for Supples, the comments should say "BEGIN Supplies". This makes it easier to see where each step starts and ends. Also, makes it easier to jump between steps.
    - The navigation will number itself based on the order in which the slides are in.

### Example
``` html
<!-- BEGIN < Step Name > -->
<section class="display content">
    <div class="directions">
        <h1 class="title">Step Name </h1>
        <ol>
            <li>1. First</li>
            <li>2. Next</li>
            <li>3. Lastly</li>
        </ol>
    </div>

    <container class="vid-container">
        <video controls="controls" width="896" height="504" name="" src="path/to/video"></video>
    </container>

    <div class="btn-container">
        <button class="action-btn"><a class="url-link" href="">Name of Button</a></button>

        <button class="help-btn"><a class="url-link" href="">Help</a></button>
    </div>
</section>
<!-- END < Step Name > -->
```
### Styling
- To emphasize text, use class="blue-font"
``` html
<li>Click the button labeled <span class="blue-font">Click Me</span>.</li>
```
- To style a body link, use class="body-link".
``` html
<a class="body-link url-link" href="http://example.com">Example Link</a>
```
- To open a link in an external browser, use class="url-link". If you don't the browser will open in the electron app window.
``` html
<button class="help-btn"><a class="url-link" href="https://google.com">Help</a></button>
```

### DevTools
DevTools are available during development. To use, go to main.js and uncomment the openDevTools comment.

**Make sure you comment this line out before packaging the app or else DevTools will be available in production.**
```bash
// Open the DevTools.
mainWindow.webContents.openDevTools()
```

### Packaging
Once changes are made to the code, you'll need to package the app. This will create a desktop app, replacing any previous versions on your desktop.

```bash
electron-packager . '<app name>' --out ~/Desktop/<AppName> --overwrite --icon ./assets/icons/icon
```

### Troubleshooting

#### -bash: electron: command not found
If you are receiving the error message above, try installing electron globally.
```bash
npm install -g electron
```

#### jquery cannot be found
If you are receiving a message error stating jQuery cannot be found, try installing jquery locally.
```bash
npm install jquery
```

### Resources/References
- [Awesome Electron (Sample Electron Apps)](https://github.com/sindresorhus/awesome-electron#apps)
- [Giphy Capture (free desktop recording)](https://giphy.com/apps/giphycapture)
- [Convert MP4 to MOV](https://convertio.co/mp4-mov/)
