import React, { Component } from 'react'
import { Panel } from '@sencha/ext-modern'
import { renderWhenReady } from '@sencha/ext-react'
import { ExtReact } from '@sencha/ext-react'

class App1 extends Component {
  render() {
    return (
      <ExtReact>
        <Panel title="app1 title">app1</Panel>
      </ExtReact>
    )
 }
}

export default renderWhenReady(App1)
