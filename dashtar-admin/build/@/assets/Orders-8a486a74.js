import{r as j,S as B,x as H,j as e,y as s}from"./index-43045997.js";import{u as J,P as V,G as $,H as G,T as q,J as f}from"./Layout-f691ac80.js";import{u as z}from"./useFilter-2c162462.js";import{O as y}from"./OrderServices-e98aa151.js";import{N as K}from"./NotFound-6bfc3e39.js";import{O as Q}from"./OrderTable-b66d20c3.js";import{n as U}from"./AdminServices-15c19bb0.js";import"./iconBase-023640d3.js";import"./InputArea-7a470b17.js";import"./dayjs.min-b1734897.js";import"./xlsx-04f2268f.js";import"./dateFormate-e0413b46.js";import"./index-238c8168.js";import"./SelectStatus-42aa9025.js";import"./Status-0493b615.js";const ue=()=>{var g,m;const{time:v,setTime:T,currentPage:w,searchText:C,searchRef:N,status:O,setStatus:D,handleChangePage:S,handleSubmitForAll:P,resultsPerPage:u,startDate:A,setStartDate:k,endDate:E,setEndDate:I,lang:L}=j.useContext(B),{t}=H(),[i,d]=j.useState(!1),{data:l,loading:F,error:h}=J(()=>y.getAllOrders({customerName:C,status:O,page:w,limit:u,day:v,startDate:A,endDate:E})),{dataTable:_,serviceData:c,globalSetting:o}=z(l==null?void 0:l.orders),M=async()=>{var a,x,p;try{d(!0);const n=await y.getAllOrders({customerName:"",status:null,page:null,limit:null,day:null,startDate:null,endDate:null}),R=(a=n==null?void 0:n.orders)==null?void 0:a.map(r=>{var b;return{_id:r._id,invoice:r.invoice,subTotal:r.subTotal,shippingCost:r.shippingCost,discount:r==null?void 0:r.discount,total:r.total,paymentMethod:r.paymentMethod,status:r.status,user_info:(b=r==null?void 0:r.user_info)==null?void 0:b.name,createdAt:r.createdAt,updatedAt:r.updatedAt}});f({data:R,fileName:"orders",exportType:f.types.csv}),d(!1)}catch(n){d(!1),U(n?(p=(x=n==null?void 0:n.response)==null?void 0:x.data)==null?void 0:p.message:n.message)}};return e.jsxs(e.Fragment,{children:[e.jsx(V,{children:t("Orders")}),e.jsx(s.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:e.jsx(s.CardBody,{children:e.jsxs("form",{onSubmit:P,children:[e.jsxs("div",{className:"grid gap-4 lg:gap-6 xl:gap-6 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 py-2",children:[e.jsx("div",{children:e.jsx(s.Input,{ref:N,type:"search",name:"search",className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white",placeholder:"Search by Customer Name"})}),e.jsx("div",{children:e.jsxs(s.Select,{onChange:a=>D(a.target.value),className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white",children:[e.jsx("option",{value:"Status",defaultValue:!0,hidden:!0,children:t("Status")}),e.jsx("option",{value:"Delivered",children:t("PageOrderDelivered")}),e.jsx("option",{value:"Pending",children:t("PageOrderPending")}),e.jsx("option",{value:"Processing",children:t("PageOrderProcessing")}),e.jsx("option",{value:"Cancel",children:t("OrderCancel")})]})}),e.jsx("div",{children:e.jsxs(s.Select,{onChange:a=>T(a.target.value),className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white",children:[e.jsx("option",{value:"Order limits",defaultValue:!0,hidden:!0,children:t("Orderlimits")}),e.jsx("option",{value:"5",children:t("DaysOrders5")}),e.jsx("option",{value:"7",children:t("DaysOrders7")}),e.jsx("option",{value:"15",children:t("DaysOrders15")}),e.jsx("option",{value:"30",children:t("DaysOrders30")})]})})]}),e.jsxs("div",{className:"grid gap-4 lg:gap-6 xl:gap-6 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 py-2",children:[e.jsxs("div",{children:[e.jsx(s.Label,{children:"Start Date"}),e.jsx(s.Input,{type:"date",name:"startDate",className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white",onChange:a=>k(a.target.value)})]}),e.jsxs("div",{children:[e.jsx(s.Label,{children:"End Date"}),e.jsx(s.Input,{type:"date",name:"startDate",className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white",onChange:a=>I(a.target.value)})]}),e.jsxs("div",{children:[e.jsx(s.Label,{style:{visibility:"hidden"},children:t("Download")}),i?e.jsxs(s.Button,{disabled:!0,type:"button",className:"h-12 w-full",children:[e.jsx("img",{src:$,alt:"Loading",width:20,height:10})," ",e.jsx("span",{className:"font-serif ml-2 font-light",children:"Processing"})]}):e.jsxs("button",{onClick:M,disabled:((g=l==null?void 0:l.orders)==null?void 0:g.length)<=0||i,type:"button",className:`${(((m=l==null?void 0:l.orders)==null?void 0:m.length)<=0||i)&&"opacity-50 cursor-not-allowed bg-red-300"} flex items-center justify-center text-sm leading-5 h-12 w-full text-center transition-colors duration-150 font-medium focus:outline-none px-6 py-2 rounded-md text-white bg-green-500 border border-transparent active:bg-green-600 hover:bg-green-600 focus:ring focus:ring-purple-300`,children:["Download All Orders",e.jsx("span",{className:"ml-2 text-base",children:e.jsx(G,{})})]})]})]})]})})}),F?e.jsx(q,{row:12,col:7,width:160,height:20}):h?e.jsx("span",{className:"text-center mx-auto text-red-500",children:h}):(c==null?void 0:c.length)!==0?e.jsxs(s.TableContainer,{className:"mb-8 dark:bg-gray-900",children:[e.jsxs(s.Table,{children:[e.jsx(s.TableHeader,{children:e.jsxs("tr",{children:[e.jsx(s.TableCell,{children:t("InvoiceNo")}),e.jsx(s.TableCell,{children:t("TimeTbl")}),e.jsx(s.TableCell,{children:t("CustomerName")}),e.jsx(s.TableCell,{children:t("MethodTbl")}),e.jsx(s.TableCell,{children:t("AmountTbl")}),e.jsx(s.TableCell,{children:t("OderStatusTbl")}),e.jsx(s.TableCell,{children:t("ActionTbl")}),e.jsx(s.TableCell,{className:"text-right",children:t("InvoiceTbl")})]})}),e.jsx(Q,{lang:L,orders:_,globalSetting:o,currency:(o==null?void 0:o.default_currency)||"$"})]}),e.jsx(s.TableFooter,{children:e.jsx(s.Pagination,{totalResults:l==null?void 0:l.totalDoc,resultsPerPage:u,onChange:S,label:"Table navigation"})})]}):e.jsx(K,{title:"Sorry, There are no orders right now."})]})};export{ue as default};
