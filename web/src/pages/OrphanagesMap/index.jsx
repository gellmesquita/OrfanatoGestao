import React, { useEffect, useState } from "react";
import { Marker, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet'
import { Link } from "react-router-dom";
import { FiArrowRight, FiPlus } from "react-icons/fi";
import api from '../../services/API'
import mapMarkerImg from "../../assets/images/map-marker.svg";
import Map from '../../components/Map';

import './styles.css';

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})


const OrphanagesMap=()=> {
  const [orfanatos, setorfanatos] = useState([])
  useEffect(() => {
    api.post('ListarOrfanato').then((resp)=>{
      setorfanatos(resp.data)
      console.log(resp.data)
    })
  }, []);

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Angola</strong>
          <span>Luanda</span>
        </footer>
      </aside>

      <Map center={[-8.813343, 13.275631]}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          orfanatos.map((orf) => {
            return(
              <Marker icon={happyMapIcon} position={[orf.latitude, orf.longitude]} key={orf.id}>
                <Popup
                  closeButton={false}
                  minWidth={240}
                  maxWidth={240}
                  className="map-popup"
                >
                  {orf.name}
                  <Link to={`/orphanages/${orf.id}`}>
                    <FiArrowRight size={20} color="#fff" />
                  </Link>
                </Popup>
              </Marker>
            )
          })
        }
      
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
