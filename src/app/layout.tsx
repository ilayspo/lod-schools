import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'סקירת בתי ספר יסודיים בלוד',description:'השוואת בתי ספר יסודיים בלוד: סוג חינוך, תלמידים, אקלים, הישגים ומרחק משוער.',openGraph:{title:'סקירת בתי ספר יסודיים בלוד',description:'בתי ספר, כתובות ומידע ציבורי במקום אחד',locale:'he_IL',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="he" dir="rtl"><body>{children}</body></html>}
