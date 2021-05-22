import { InertiaApp } from '@inertiajs/inertia-react'
import React from 'react'
import { render } from 'react-dom'
import '../css/app.css'

const el = document.getElementById('app')

render(
  <InertiaApp
    initialPage={JSON.parse(el.dataset.page)}
    resolveComponent={(name) => import(`./Pages/${name}`).then((module) => module.default)}
  />,
  el
)
