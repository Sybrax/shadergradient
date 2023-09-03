// import framerOnMessage from 'framer-sites-figma-plugin/lib/api'

figma.showUI(__html__, { width: 450, height: 630 })

// restore previous size
figma.clientStorage
  .getAsync('size')
  .then((size) => {
    if (size) figma.ui.resize(size.w, size.h)
  })
  .catch((err) => {})

figma.ui.onmessage = (msg) => {
  console.log('msg.type (figma.ui.onmessage)', msg.type)
  switch (msg.type) {
    case 'resize':
      figma.ui.resize(msg.size.w, msg.size.h)
      figma.clientStorage.setAsync('size', msg.size).catch((err) => {
        console.log('err (setAsync)', err)
      }) // save size

      break
    case 'UI_READY':
      postMessageSelection()
      postMessageUserInfo()
      break
    case 'SNAPSHOT':
      Promise.all(
        figma.currentPage.selection.map((selected) =>
          replaceToNewImage(selected, msg.bytes)
        )
      ).then(() => {
        console.log('complete')
      })
      break
    case 'SNAPSHOT_GIF':
      console.log('figma.currentUser - SNAPSHOT_GIF', figma.currentUser)

      Promise.all(
        figma.currentPage.selection.map((selected) =>
          replaceToNewImage(selected, msg.bytes)
        )
      ).then(() => {
        console.log('complete')
      })
      break
  }
}

figma.on('selectionchange', postMessageSelection)

async function invertPaint(paint, bytes) {
  if (paint.type === 'IMAGE') {
    const newPaint = JSON.parse(JSON.stringify(paint))
    newPaint.imageHash = figma.createImage(bytes).hash
    return newPaint
  } else {
    // overwrite other types of paint (eg. SOLID)
    const newPaint: ImagePaint = {
      type: 'IMAGE',
      scaleMode: 'FILL', // or FIT
      imageHash: figma.createImage(bytes).hash,
    }
    return newPaint
  }
}

async function replaceToNewImage(node, bytes) {
  const newFills = []
  for (const paint of node.fills) {
    newFills.push(await invertPaint(paint, bytes))
  }
  node.fills = newFills
}

function postMessageSelection() {
  console.log('postMessageSelection')
  const selection = figma.currentPage.selection
  console.log('selection', selection)
  figma.ui.postMessage({ type: 'SELECTION', selection })
}

function postMessageUserInfo() {
  const user = figma.currentUser
  figma.ui.postMessage({ type: 'USER_INFO', user })
}
