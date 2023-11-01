import{t as F,r as i,S as L,x as z,j as e,y as p}from"./index-43045997.js";import{O as B,Q as I,R as M,V as O,G as P,k as A,t as y,J as s}from"./Layout-f691ac80.js";import{G as j}from"./iconBase-023640d3.js";function J(t){return j({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"}},{tag:"path",attr:{d:"M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708z"}}]})(t)}function H(t){return j({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M7.5 5.5a.5.5 0 0 0-1 0v.634l-.549-.317a.5.5 0 1 0-.5.866L6 7l-.549.317a.5.5 0 1 0 .5.866l.549-.317V8.5a.5.5 0 1 0 1 0v-.634l.549.317a.5.5 0 1 0 .5-.866L8 7l.549-.317a.5.5 0 1 0-.5-.866l-.549.317V5.5zm-2 4.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"}},{tag:"path",attr:{d:"M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"}}]})(t)}const Q=({title:t,totalDoc:h,exportData:r,isDisabled:N,handleSelectFile:v,filename:x,handleRemoveSelectFile:b,handleUploadMultiple:w})=>{const a=F(),c=i.useRef(),[f,o]=i.useState(!1),{loading:k}=i.useContext(L),[d,l]=i.useState({name:"",status:!1}),C=()=>{a.pathname==="/products"&&(l({name:"csv",status:!0}),y.getAllProducts({page:1,limit:h,category:null,title:null,price:0}).then(n=>{o(!1),l({name:"",status:!1}),s({data:n.products,fileName:"products",exportType:s.types.csv})}).catch(n=>{l({name:"",status:!1}),o(!1)})),a.pathname==="/categories"&&s({data:r,fileName:"categories",exportType:s.types.csv}),a.pathname==="/attributes"&&s({data:r,fileName:"attributes",exportType:s.types.csv}),a.pathname==="/coupons"&&s({data:r,fileName:"coupons",exportType:s.types.csv}),a.pathname==="/customers"&&s({data:r,fileName:"customers",exportType:s.types.csv})},E=()=>{a.pathname==="/products"&&(l({name:"json",status:!0}),y.getAllProducts({page:1,limit:h,category:null,title:null,price:0}).then(n=>{o(!1),l({name:"json",status:!0}),s({data:n.products,fileName:"products",exportType:s.types.json})}).catch(n=>{o(!1),l({name:"json",status:!0})})),a.pathname==="/categories"&&s({data:r,fileName:"categories",exportType:s.types.json}),a.pathname==="/attributes"&&s({data:r,fileName:"attributes",exportType:s.types.json}),a.pathname==="/coupons"&&s({data:r,fileName:"coupons",exportType:s.types.json}),a.pathname==="/customers"&&s({data:r,fileName:"customers",exportType:s.types.json})};i.useEffect(()=>{const n=u=>{var g;(g=c==null?void 0:c.current)!=null&&g.contains(u.target)||o(!1)};document.addEventListener("mousedown",n)},[c]);const[S,T]=i.useState(!1),V=n=>{T(u=>!u)},{t:m}=z();return e.jsxs("div",{className:" lg:flex md:flex flex-grow-0",children:[e.jsxs("div",{className:"flex",children:[e.jsxs("div",{ref:c,className:"lg:flex-1 md:flex-1 mr-3 sm:flex-none",children:[(t==="Products"||t==="Attribute"||t==="Extra"||t==="Coupon"||t==="Customers"||t==="Categories")&&e.jsxs("button",{onClick:()=>{o(!f)},className:"border flex justify-center items-center border-gray-300 hover:border-green-400 hover:text-green-400  dark:text-gray-300 cursor-pointer h-10 w-20 rounded-md focus:outline-none",children:[e.jsx(B,{className:"mr-2"}),e.jsx("span",{className:"text-xs",children:m("Export")})]}),f&&e.jsxs("ul",{className:"origin-top-left absolute  w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-40",style:{},children:[e.jsx("li",{className:"justify-between font-serif font-medium py-2 pl-4 transition-colors duration-150 hover:bg-gray-100 text-gray-500 hover:text-green-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200",children:e.jsx("button",{type:"button",onClick:C,className:"focus:outline-none",children:e.jsxs("span",{className:"flex items-center text-sm",children:[e.jsx(H,{className:"w-4 h-4 mr-3","aria-hidden":"true"}),e.jsxs("span",{children:["Export to CSV",d.name==="csv"&&d.status&&"...."]})]})})}),e.jsx("li",{className:"justify-between font-serif font-medium py-2 pl-4 transition-colors duration-150 hover:bg-gray-100 text-gray-500 hover:text-green-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200",children:e.jsx("button",{type:"button",className:"focus:outline-none",onClick:E,children:e.jsxs("span",{className:"flex items-center text-sm",children:[e.jsx(J,{className:"w-4 h-4 mr-3","aria-hidden":"true"}),e.jsxs("span",{children:["Export to JSON",d.name==="json"&&d.status&&"...."]})]})})})]})]}),e.jsx("div",{className:"lg:flex-1 md:flex-1 mr-3  sm:flex-none",children:e.jsxs("button",{onClick:V,className:"border flex justify-center items-center h-10 w-20 hover:text-yellow-400  border-gray-300 dark:text-gray-300 cursor-pointer  py-2 hover:border-yellow-400 rounded-md focus:outline-none",children:[e.jsx(I,{className:"mr-2"}),e.jsx("span",{className:"text-xs",children:"Import"})]})})]}),S&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-full my-2 lg:my-0 md:my-0 flex",children:[e.jsx("div",{className:"h-10 border border-dashed border-green-500 rounded-md",children:e.jsxs("label",{className:"w-full rounded-lg h-10 flex justify-center items-center text-xs dark:text-gray-400 leading-none",children:[e.jsx(p.Input,{disabled:N,type:"file",accept:".csv,.xls,.json",onChange:v}),x||e.jsxs(e.Fragment,{children:[e.jsx(M,{className:"mx-2 text-green-500 text-lg dark:text-gray-400"})," ",m("SelectYourJSON")," ",t," ",m("File")]}),x&&e.jsx("span",{onClick:b,type:"button",className:"text-red-500 focus:outline-none mx-4 text-lg",children:e.jsx(O,{})})]})}),e.jsx("div",{className:"flex",children:k?e.jsxs(p.Button,{className:"ml-2 h-10",children:[e.jsx("img",{src:P,alt:"Loading",width:20,height:10})," ",e.jsx("span",{className:"font-serif ml-2 font-light",children:"Processing"})]}):e.jsxs(p.Button,{onClick:w,className:"w-full rounded-md h-10 ml-2  text-xs px-2",children:[e.jsx("span",{className:"",children:e.jsx(A,{})}),e.jsx("span",{className:" text-sx w-20",children:m("Import Now")})]})})]})})]})};export{Q as U};
