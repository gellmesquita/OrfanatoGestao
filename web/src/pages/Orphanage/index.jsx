import React, {useEffect, useState} from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
import { Marker, TileLayer } from "react-leaflet";
import {useParams} from 'react-router-dom'
import L from 'leaflet';
import api from '../../services/API'
import mapMarkerImg from '../../assets/images/map-marker.svg';

import PrimaryButton from "../../components/PrimaryButton";
import Sidebar from "../../components/Sidebar";
import Map from "../../components/Map";

import './styles.css';

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60]
})

export default function Orphanage() {
  const [orfanatos, setorfanatos] = useState([])
  const params= useParams();
  useEffect(() => {
    api.get(`buscarOrfanato/${params.id}`).then(resp=>{
      console.log(resp.data)
      setorfanatos(resp.data)
    })
  }, [params.id]);
  
  return (
    <div id="page-orphanage">
      <Sidebar />

      <main>
        <div className="orphanage-details">
          <img src={`http://localhost:3333/images/${orfanatos.image}`} alt="Lar das meninas" />           
          <div className="orphanage-details-content">
            <h1>{orfanatos.name}</h1>
            <p> {orfanatos.about}.</p>

            <div className="map-container">
              <Map 
                interactive={false}
                center={[orfanatos.latitude,orfanatos.longitude]} 
                zoom={16} 
                style={{ width: '100%', height: 280 }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker interactive={false} icon={happyMapIcon} position={[orfanatos.latitude,orfanatos.longitude]} />
              </Map>

              <footer>
                <a href="">Ver rotas no Google Maps</a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orfanatos.instructions}</p>

            <div className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {orfanatos.hora_aberta}
              </div>
              {
                (orfanatos.open_on_weekends==="true")?(
                  <div className="open-on-weekends">
                    <FiInfo size={32} color="#39CC83" />
                    Atendemos <br />
                    fim de semana
                  </div>
                ):(
                    <div className="open-on-weekends dont-open">
                      <FiInfo size={32} color="#FF669D" />
                      Não Atendemos <br />
                      fim de semana
                    </div>
                )
              }
            </div>

            <PrimaryButton type="button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </PrimaryButton>
          </div>
        </div>
      </main>
    </div>
  );
}