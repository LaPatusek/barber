import GoogleMapReact from 'google-map-react';
import { Location } from 'iconsax-react';
import React from 'react';
import styles from './Map.module.css';

interface MapPinProps {
  lat: number;
  lng: number;
}

const MapPin: React.FC<MapPinProps> = () => (
  <div className={styles.text}>
    <Location variant='Bold' size='32' color='#c2c2c2' />
    Niebylec 111
  </div>
);

const Map: React.FC = () => {
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
