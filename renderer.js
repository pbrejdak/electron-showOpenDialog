// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const ipcRenderer = require("electron").ipcRenderer;
function promptToCreateOpenDirectory() {
    let path = ipcRenderer.sendSync('PromptToCreateOpenDirectory');
    document.getElementById('promptToCreateOpen').innerHTML = path;
}

function promptToCreate() {
    let path = ipcRenderer.sendSync('PromptToCreate');
    document.getElementById('promptToCreate').innerHTML = path;
}