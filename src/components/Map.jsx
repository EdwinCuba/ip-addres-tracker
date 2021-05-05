import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import '../assets/styles/components/Map.scss';
import 'leaflet/dist/leaflet.css';


const MapView = ({ lat, lng }) => {
  const [position, setPosition] = useState([lat, lng]);

  useEffect(() => {
    setPosition([lat, lng]);
  }, [lat, lng])


  const Hook = () => {
    const view = useMap();
    view.setView(position);
    return null
  }

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
      <Hook />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
      </Marker>
    </MapContainer>
  );
}

export default MapView;