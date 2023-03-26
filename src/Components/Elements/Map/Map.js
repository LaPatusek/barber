import GoogleMapReact from 'google-map-react';
import React from 'react';
import styles from './Map.module.css';

const MapPin = ({ text }) => <div>{text}</div>;

const Map = () => {
  const location = {
    center: {
      lat: 37.42216,
      lng: -122.08427,
    },
    address: 'Niebylec 123',
    zoom: 11,
  };

  return (
    <div className={styles.map}>
      <div className={styles['google-map']}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={location.center}
          defaultZoom={location.zoom}
        >
          <MapPin lat={59.955413} lng={30.337844} text={location.address} />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
