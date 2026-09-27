export type Stream = 'ממלכתי'|'ממלכתי דתי'|'ממלכתי חרדי'|'חרדי / מוכש״ר'|'ממלכתי ערבי';
export type Metric<T> = {value:T;year?:number;source?:string};
export type School = {id:string;name:string;stream:Stream;subtype?:string;gender?:string;address?:string;phone?:string;latitude?:number;longitude?:number;grades?:string;studentCount?:Metric<number>;averageClassSize?:Metric<number>;specialCharacteristics?:string[];languagePerformance?:Metric<'below'|'similar'|'above'>;climateMetrics?:{belonging?:Metric<number>;safety?:Metric<number>;relationships?:Metric<number>;leadership?:Metric<number>};dataYear?:number;travelEstimate?:{walk:[number,number];drive:[number,number];basis:string};sources:{label:string;url:string}[];notes?:string};
const city={label:'רשימת בתי הספר — עיריית לוד',url:'https://www.lod.muni.il/he/264/'};
const registration={label:'אזורי רישום — עיריית לוד',url:'https://www.lod.muni.il/he/263/'};
export const schools:School[]=[
{id:'maapilim',travelEstimate:{walk:[25,35],drive:[8,13],basis:'אומדן גס לפי מיקום הרחוב ב־OpenStreetMap ומקדם מסלול; אינו זמן ניווט או תנועה בזמן אמת'},name:'מעפילים',stream:'ממלכתי',address:'רחל אלתר 3, לוד',phone:'08-9229104',sources:[city]},
{id:'levi-eshkol',travelEstimate:{walk:[45,55],drive:[12,20],basis:'אומדן גס לפי מיקום הרחוב ב־OpenStreetMap ומקדם מסלול; אינו זמן ניווט או תנועה בזמן אמת'},name:'לוי אשכול',stream:'ממלכתי',address:'אלפעל 4, לוד',phone:'08-9224421',sources:[city]},
{id:'sapir',travelEstimate:{walk:[20,30],drive:[7,12],basis:'אומדן גס לפי מיקום הרחוב ב־OpenStreetMap ומקדם מסלול; אינו זמן ניווט או תנועה בזמן אמת'},name:'ספיר',stream:'ממלכתי',address:'חיים משה שפירא 13, לוד',phone:'08-9227951',sources:[city]},
{id:'harel',travelEstimate:{walk:[45,60],drive:[13,22],basis:'אומדן גס לפי מיקום הרחוב ב־OpenStreetMap ומקדם מסלול; אינו זמן ניווט או תנועה בזמן אמת'},name:'הראל',stream:'ממלכתי',address:'אריה בן אליעזר 31, לוד',phone:'08-9234446',grades:'ד׳–ח׳ (לפי רשימת העירייה)',sources:[city]},
{id:'ganei-aviv',travelEstimate:{walk:[35,45],drive:[10,17],basis:'אומדן גס לפי מיקום הרחוב ב־OpenStreetMap ומקדם מסלול; אינו זמן ניווט או תנועה בזמן אמת'},name:'גני אביב',stream:'ממלכתי',address:'אהרון לובלין 2, לוד',phone:'08-9205096',sources:[city]},
{id:'zvulun-hammer',travelEstimate:{walk:[35,45],drive:[10,17],basis:'אומדן גס לפי מיקום הרחוב ב־OpenStreetMap ומקדם מסלול; אינו זמן ניווט או תנועה בזמן אמת'},name:'זבולון המר',stream:'ממלכתי',address:'ארבע עונות 2, לוד',sources:[city]},
{id:'ganei-yaar',travelEstimate:{walk:[30,40],drive:[9,16],basis:'אומדן גס לפי מיקום הרחוב ב־OpenStreetMap ומקדם מסלול; אינו זמן ניווט או תנועה בזמן אמת'},name:'גני יער',stream:'ממלכתי',address:'האיילון 10, לוד',sources:[city]},
{id:'rambam',name:'רמב״ם',stream:'ממלכתי דתי',sources:[registration]},
{id:'noam-neria',name:'נועם נריה',stream:'ממלכתי דתי',sources:[registration]},
{id:'alrazi',name:'אלראזי',stream:'ממלכתי ערבי',address:'אקסודוס 6, לוד',sources:[city]},
{id:'almanar',name:'אלמנאר',stream:'ממלכתי ערבי',sources:[registration]},
{id:'alrashdiya',name:'אלראשדיה',stream:'ממלכתי ערבי',sources:[registration]},
{id:'alzahra',name:'אלזהרא',stream:'ממלכתי ערבי',sources:[registration]},
];
export function aerialDistanceKm(a:{lat:number;lng:number},b:{lat:number;lng:number}){const r=Math.PI/180,dlat=(b.lat-a.lat)*r,dlng=(b.lng-a.lng)*r,x=Math.sin(dlat/2)**2+Math.cos(a.lat*r)*Math.cos(b.lat*r)*Math.sin(dlng/2)**2;return 6371*2*Math.atan2(Math.sqrt(x),Math.sqrt(1-x))}
