'use client';
import {useEffect,useRef} from 'react';
import type {School} from '@/data/schools';
import {schoolCoordinateSource} from '@/data/schools';
import {SchoolBag} from './icons';

type Home = {lat:number;lng:number;label:string;source:{label:string;url:string}};
export default function SchoolMap({schools,home,onOpen}:{schools:School[];home:Home;onOpen:(id:string)=>void}){
  const canvas=useRef<HTMLDivElement>(null);
  const mapInstance=useRef<import('leaflet').Map|null>(null);
  useEffect(()=>{
    let cancelled=false;
    if(!schools.some(s=>s.latitude!=null&&s.longitude!=null))return;
    import('leaflet').then(L=>{
      if(cancelled||!canvas.current)return;
      const bounds=L.latLngBounds([31.88,34.80],[32.04,35.00]);
      const map=L.map(canvas.current,{zoomControl:true,scrollWheelZoom:false,maxBounds:bounds,maxBoundsViscosity:1,minZoom:11,maxZoom:17});
      mapInstance.current=map;
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
      const homeIcon=L.divIcon({className:'map-pin-wrap',html:'<span class="map-pin map-pin-home" aria-hidden="true">⌂</span>',iconSize:[36,36],iconAnchor:[18,18]});
      L.marker([home.lat,home.lng],{icon:homeIcon,title:`הבית · ${home.label}`,alt:`הבית · ${home.label}`,keyboard:true}).addTo(map).bindTooltip(`הבית · ${home.label}`,{direction:'top',offset:[0,-13],permanent:true,className:'school-map-label home-map-label'});
      const icon=L.divIcon({className:'map-pin-wrap',html:'<span class="map-pin map-pin-school" aria-hidden="true">✦</span>',iconSize:[34,34],iconAnchor:[17,17]});
      for(const school of schools){
        if(school.latitude==null||school.longitude==null)continue;
        L.marker([school.latitude,school.longitude],{icon,title:`${school.name} — לפתיחת פרטים`,alt:`${school.name} — לפתיחת פרטים`,keyboard:true})
          .addTo(map).bindTooltip(school.name,{direction:'top',offset:[0,-12],permanent:true,className:'school-map-label'})
          .on('click',()=>onOpen(school.id));
      }
      const mapped=schools.filter(s=>s.latitude!=null&&s.longitude!=null);
      map.fitBounds(mapped.length?L.latLngBounds([[home.lat,home.lng],...mapped.map(s=>[s.latitude!,s.longitude!] as [number,number])]):bounds,{padding:[45,45],maxZoom:mapped.length?14:12});
    });
    return()=>{cancelled=true;mapInstance.current?.remove();mapInstance.current=null};
  },[schools,home,onOpen]);
  const mappedCount=schools.filter(s=>s.latitude!=null&&s.longitude!=null).length;
  return <div className="map-view"><div className="map-intro"><h2>בתי הספר על המפה</h2><p>לחצו על סמן לפתיחת הפרטים. הבית בלוד מסומן בצהוב.</p></div>{mappedCount>0?<><div ref={canvas} className="lod-map" role="application" aria-label="מפה אינטראקטיבית של בתי ספר בלוד והסביבה"/><div className="map-legend"><span><i className="legend-dot home"/> הבית · לוד</span><span><i className="legend-dot school"/> בית ספר עם מיקום מאומת</span></div></>:<div className="empty map-empty">מיקומי בתי הספר בעיר הזאת עדיין לא אומתו. בחרו בית ספר מהרשימה כדי לראות את פרטיו.</div>}<div className="map-note">מיקום מאומת במפה עבור {mappedCount} מתוך {schools.length} בתי הספר המוצגים. בתי ספר ללא קואורדינטות מאומתות מופיעים ברשימה וניתן לפתוח את פרטיהם; לא הוצב עבורם סמן משוער. מקור המיקומים: <a href={schoolCoordinateSource.url} target="_blank" rel="noreferrer">{schoolCoordinateSource.label} ↗</a>. מיקום הבית: <a href={home.source.url} target="_blank" rel="noreferrer">OpenStreetMap ↗</a>.</div><h3 className="map-list-title">כל בתי הספר</h3><div className="map-school-list">{schools.map(s=><button type="button" key={s.id} onClick={()=>onOpen(s.id)}><span className="map-school-icon"><SchoolBag size={20}/></span><span><strong>{s.name}</strong><small>{s.city} · {s.stream} · {s.latitude==null?'מיקום במפה טרם אומת':'מופיע במפה'}</small></span><span className="map-open">לפרטים ←</span></button>)}</div></div>;
}
