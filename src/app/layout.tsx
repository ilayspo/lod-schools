import type {Metadata} from 'next';
import './globals.css';
import 'leaflet/dist/leaflet.css';
export const metadata:Metadata={title:'סקירת בתי ספר יסודיים בלוד והסביבה',description:'בתי ספר יסודיים בלוד, רמלה ובאר יעקב: סוג חינוך, מספר תלמידים, כיתות ומידע ציבורי במקום אחד.',openGraph:{title:'סקירת בתי ספר יסודיים בלוד והסביבה',description:'לוד, רמלה ובאר יעקב — בתי ספר ונתונים ציבוריים במקום אחד',locale:'he_IL',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="he" dir="rtl"><body>{children}</body></html>}
