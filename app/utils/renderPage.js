const renderPage = (html, preloadedData = null) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
      <meta charset="UTF-8">
      <title>AWS Rekognition Playground</title>
    </head>
    <body>
    <div id='app'>${html}</div>
    <script>
      window.__PRELOADED_DATA__ = ${JSON.stringify(preloadedData).replace(/</g, '\\\u003c')}
    </script>
    <script type="text/javascript" src="../../public/bundle.js"></script>
    </body>
    </html>`
}

export default renderPage
