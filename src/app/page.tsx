import Explorer from '@/components/explorer';
import {schools,aerialDistanceKm} from '@/data/schools';
export default function Home(){const lat=Number(process.env.HOME_LAT),lng=Number(process.env.HOME_LNG);const home=process.env.HOME_LAT&&process.env.HOME_LNG&&Number.isFinite(lat)&&Number.isFinite(lng)?{lat,lng}:null;return <Explorer schools={schools.map(s=>({...s,distanceKm:home&&s.latitude!=null&&s.longitude!=null?aerialDistanceKm(home,{lat:s.latitude,lng:s.longitude}):null}))}/>}
