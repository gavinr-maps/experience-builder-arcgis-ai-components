import { React, type AllWidgetProps } from 'jimu-core'
import type { IMConfig } from '../config'
import "@arcgis/map-components/components/arcgis-map"
import "@arcgis/ai-components/components/arcgis-assistant"
import "@arcgis/ai-components/components/arcgis-assistant-data-exploration-agent"

const Widget = (props: AllWidgetProps<IMConfig>) => {
  return (
    <div className="widget-demo jimu-widget m-2">
      <div style={{ 'height': '200px', width: '100%' }}>
        <arcgis-map id="main-map" item-id="c13bffcad4a244a99062e915e9bc1dc3"></arcgis-map>
      </div>
      <div style={{ 'height': '500px', width: '100%' }}>

        <arcgis-assistant
          reference-element="#main-map"
          heading="My Assistant"
          description="Explore and navigate this map using natural language">
          {/* <arcgis-assistant-navigation-agent></arcgis-assistant-navigation-agent> */}
          <arcgis-assistant-data-exploration-agent></arcgis-assistant-data-exploration-agent>
        </arcgis-assistant>
      </div>
    </div>
  )
}

export default Widget
