var u=Object.defineProperty;var O=(o,a,s)=>a in o?u(o,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[a]=s;var e=(o,a,s)=>(O(o,typeof a!="symbol"?a+"":a,s),s);import{W as t}from"./index-64ce397b.js";const n={GetOptionsLogType:"ViewData/OptionLogType",GetOptionsLevelManage:"ViewData/OptionLevelManage",GetOptionsRole:"ViewData/OptionRole",GetOptionsStatus:"ViewData/OptionStatus",GetOptionsUsageStatus:"ViewData/OptionUsageStatus",GetOptionsLine:"ViewData/OptionLine",GetOptionsManagementCategory:"ViewData/OptionManagementCategory",GetOptionsMeasurementItem:"ViewData/OptionMeasurementItem",GetOptionsTypeFrequency:"ViewData/OptionTypeFrequency",GetOptionsMeasuringTool:"ViewData/OptionMeasuringTool",GetOptionsMeasuringToolMeasurementItem:"ViewData/OptionMeasuringToolMeasurementItem",GetOptionsMeasuringToolMeasurementItemByDay:"ViewData/OptionMeasuringToolMeasurementItemByDay",GetOptionsEvaluationStatus:"ViewData/OptionEvaluationStatus",GetOptionsTypeRequest:"ViewData/OptionTypeRequest",GetOptionsRequestStatus:"ViewData/OptionRequestStatus"};class g{constructor(){e(this,"GetOptionsLogType",()=>t.get(`${n.GetOptionsLogType}`));e(this,"GetOptionsLevelManage",()=>t.get(`${n.GetOptionsLevelManage}`));e(this,"GetOptionsRole",()=>t.get(`${n.GetOptionsRole}`));e(this,"GetOptionsStatus",()=>t.get(`${n.GetOptionsStatus}`));e(this,"GetOptionsUsageStatus",()=>t.get(`${n.GetOptionsUsageStatus}`));e(this,"GetOptionsLine",()=>t.get(`${n.GetOptionsLine}`));e(this,"GetOptionsManageCategory",()=>t.get(`${n.GetOptionsManagementCategory}`));e(this,"GetOptionsMeasurementItem",()=>t.get(`${n.GetOptionsMeasurementItem}`));e(this,"GetOptionsTypeFrequency",()=>t.get(`${n.GetOptionsTypeFrequency}`));e(this,"GetOptionsMeasuringTool",()=>t.get(`${n.GetOptionsMeasuringTool}`));e(this,"GetOptionsMeasuringToolMeasurementItem",a=>t.get(`${n.GetOptionsMeasuringToolMeasurementItem}/${a}`));e(this,"GetOptionsMeasuringToolMeasurementItemByDay",a=>t.get(`${n.GetOptionsMeasuringToolMeasurementItemByDay}/${a}`));e(this,"GetOptionsEvaluationStatus",()=>t.get(`${n.GetOptionsEvaluationStatus}`));e(this,"GetOptionsTypeRequest",()=>t.get(`${n.GetOptionsTypeRequest}`));e(this,"GetOptionsRequestStatus",()=>t.get(`${n.GetOptionsRequestStatus}`))}}const l=new g;class G{constructor(){e(this,"GetBase64",a=>new Promise((s,p)=>{const i=new FileReader;i.readAsDataURL(a),i.onload=()=>s(i.result),i.onerror=r=>p(r)}))}}const y=new G;export{l as A,y as B};