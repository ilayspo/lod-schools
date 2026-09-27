import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'בתי ספר בלוד | מדריך משפחתי',description:'מדריך פשוט להשוואת בתי ספר יסודיים בלוד על בסיס מידע ציבורי.',openGraph:{title:'מחפשים בית ספר בלוד',description:'בתי ספר, כתובות ומידע ציבורי במקום אחד',locale:'he_IL',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="he" dir="rtl"><body>{children}</body></html>}
