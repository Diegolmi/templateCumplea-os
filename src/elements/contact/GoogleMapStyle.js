import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class GoogleMapStyle extends Component {
  static defaultProps = {
    center: {
      lat: -26.75802005399662,
      lng: -65.24028164350437
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="google-map-style-1">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 12345 }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={-26.75802005399662}
            lng={-65.24028164350437}
            text="Tinku Eventos"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMapStyle;