import type {SVGProps} from 'react';
type Props=SVGProps<SVGSVGElement>&{size?:number};
function Icon({children,size=20,...props}:Props&{children:React.ReactNode}){return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{children}</svg>}
export const ArrowRight=(p:Props)=><Icon {...p}><path d="M19 12H5m6-6-6 6 6 6"/></Icon>;
export const ChevronLeft=(p:Props)=><Icon {...p}><path d="m15 18-6-6 6-6"/></Icon>;
export const BookOpen=(p:Props)=><Icon {...p}><path d="M12 7c-2.5-2-6-2-9-1v13c3-1 6-1 9 1 3-2 6-2 9-1V6c-3-1-6-1-9 1Zm0 0v13"/></Icon>;
export const Clock3=(p:Props)=><Icon {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></Icon>;
export const GraduationCap=(p:Props)=><Icon {...p}><path d="m2 9 10-5 10 5-10 5L2 9Zm4 2v6c4 3 8 3 12 0v-6m4-2v8"/></Icon>;
export const Info=(p:Props)=><Icon {...p}><circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-8h.01"/></Icon>;
export const MapPin=(p:Props)=><Icon {...p}><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></Icon>;
export const Phone=(p:Props)=><Icon {...p}><path d="M5 3h4l2 5-2 2a17 17 0 0 0 5 5l2-2 5 2v4c0 1-1 2-2 2C10 21 3 14 3 5c0-1 1-2 2-2Z"/></Icon>;
export const Search=(p:Props)=><Icon {...p}><circle cx="10.5" cy="10.5" r="7"/><path d="m16 16 5 5"/></Icon>;
export const UsersRound=(p:Props)=><Icon {...p}><circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2H3Zm14-14a3 3 0 0 1 0 6m1 3a5 5 0 0 1 3 5"/></Icon>;
export const X=(p:Props)=><Icon {...p}><path d="M5 5 19 19M19 5 5 19"/></Icon>;
