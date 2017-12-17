import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './app.jsx'

module.exports = (req, res, next) => {
  const html = renderToString(
    <App/>
  )

  res.render('index', { html: html })
}
