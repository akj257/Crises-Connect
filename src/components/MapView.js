// src/components/MapView.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapView = () => {
    const position = [51.505, -0.09]; // Default center position

    return (
        <MapContainer center={position} zoom={13} style={{ height: "500px", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Example Marker */}
            <Marker position={position}>
                <Popup>
                    A reported incident location.
                </Popup>
            </Marker> 
        </MapContainer>
    );
};

export default MapView;
