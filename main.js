const {app, BrowserWindow} = require('electron');

logo = `
best electron app ever

Copyright (C) 2019 AlwaysLivid
Read the LICENSE.md file for more information.
`;

let win;

function createWindow () {
  win = new BrowserWindow({height: 1000, width: 800})
  win.setMenuBarVisibility(false)
  win.loadURL('file://' + __dirname + '/index.html')
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
    if (win === null) {
      createWindow()
  }
})

console.log(logo)