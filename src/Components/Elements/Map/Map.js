import GoogleMapReact from 'google-map-react';
import { Location } from 'iconsax-react';
import React from 'react';
import styles from './Map.module.css';

const MapPin = () => (
  <div className={styles.text}>
    <Location variant='Bold' size='32' />
    Niebylec 171
  </div>
);

const Map = () => {
  const location = {
    center: {
      lat: 49.85560328028798,
      lng: 21.901875968601928,
    },
    zoom: 17,
  };

  return (
    <div className={styles.map}>
      <div className={styles['google-map']}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: '',
            language: 'pl',
          }}
          defaultCenter={location.center}
          center={location.center}
          defaultZoom={location.zoom}
        >
          <MapPin lat={location.center.lat} lng={location.center.lng} />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
