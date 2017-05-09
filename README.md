* Electron version: 1.6.6
* Operating system: Windows 10

### Expected behavior

When I set properties for shopwOpenDialog `properties: ['openDirectory','promptToCreate']` I should be able to specify an non-existing dir to create or select existing one.

### Actual behavior

1. With `properties: ['openDirectory','promptToCreate']` for showOpenDialog I'am able to select existing directory but I can't specify a non-existing directory. When I type name of non-existing directory there is prompt with question If I would like to create one but when I hit 'yes' there is error shown which says "Provided name is invalid".

2. With `properties: ['promptToCreate']` I'am not able to select existing directory, only I can do is specify non-exsiting directory and create it, or select file or hit right click on existing directory and hit 'select' to return path.

Is it possible to join this two properties to work?

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/Sharim/electron-showOpenDialog.git electron-openDialog
# Go into the repository
cd electron-electron-openDialog
# Install dependencies
npm install
# Run the app
npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.
## License

[CC0 1.0 (Public Domain)](LICENSE.md)
"# electron-showOpenDialog" 
