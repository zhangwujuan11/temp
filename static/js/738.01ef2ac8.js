(self["webpackChunkfront_vue"]=self["webpackChunkfront_vue"]||[]).push([[738],{549:function(t,e,r){"use strict";r.d(e,{default:function(){return c}});var n=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"titlel"},[[e("div",{staticClass:"titletext"},[t._t("nametext",(function(){return[t._v("梁片列表")]}))],2)],[e("div",{staticClass:"contont"},[t._t("contont")],2)]],2)},a=[],o=r(4885),u=r.n(o),s=u(),i=r(3736),l=(0,i.Z)(s,n,a,!1,null,"a30c514c",null),c=l.exports},3738:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return y}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"bridge"},[e("Titlel",{scopedSlots:t._u([{key:"nametext",fn:function(){return[e("span",[t._v("考勤管理")])]},proxy:!0},{key:"contont",fn:function(){return[e("div",[e("div",{staticClass:"control"},[e("el-date-picker",{staticStyle:{width:"200px",margin:"0 15px"},attrs:{type:"date",placeholder:"选择日期",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:t.startmounthyear,callback:function(e){t.startmounthyear=e},expression:"startmounthyear"}}),e("el-date-picker",{staticStyle:{width:"200px",margin:"0 15px"},attrs:{type:"date",placeholder:"选择日期",format:"yyyy 年 MM 月 dd 日","value-format":"yyyy-MM-dd"},model:{value:t.endmounthyear,callback:function(e){t.endmounthyear=e},expression:"endmounthyear"}}),e("el-button",{attrs:{type:"success"},on:{click:t.serchdata}},[t._v("搜索")]),e("el-button",{attrs:{type:"success"},on:{click:t.exportxsl}},[t._v("导出")])],1),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:"","header-cell-style":{background:"linear-gradient(180deg,rgba(10, 74, 216, 0.70) 30%,rgba(5, 49, 146, 0.30))",color:"#00CFFF !important",border:"none"}},on:{"row-click":t.showrow}},[e("el-table-column",{attrs:{width:"300",prop:"type",label:"类型"}}),e("el-table-column",{attrs:{prop:"sums",label:"总人数"}}),e("el-table-column",{attrs:{prop:"scanNormal",label:"考勤正常人次"}}),e("el-table-column",{attrs:{prop:"scanAbnormal",label:"考勤异常人次"}})],1),e("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-sizes":t.pageSizes,"page-size":t.PageSize,layout:"prev, pager, next, jumper",total:t.totalCount},on:{"current-change":t.handleCurrentChange}})],1)]},proxy:!0}])}),e("Antiepidemicdilog",{attrs:{dilogodata:t.dilogodata,start:t.startmounthyear,end:t.endmounthyear}})],1)},a=[],o=r(549),u=function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{title:"详情",visible:t.$store.state.wokerdilog,width:"90%"},on:{"update:visible":function(e){return t.$set(t.$store.state,"wokerdilog",e)}}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tabledilog,stripe:"","header-cell-style":{border:"1px"}}},[e("el-table-column",{attrs:{prop:"name",label:"姓名"}}),e("el-table-column",{attrs:{width:"180",prop:"company",label:"单位"}}),e("el-table-column",{attrs:{width:"150",prop:"cardNo",label:"身份证号"}}),e("el-table-column",{attrs:{prop:"scanTime",label:"考勤日期"}}),e("el-table-column",{attrs:{prop:"gotimeStatus",label:"上班打卡状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("gotimeStatus")(e.row.gotimeStatus))+" ")]}}])}),e("el-table-column",{attrs:{prop:"offtimeStatus",label:"下班打卡状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("offtimeStatus")(e.row.offtimeStatus))+" ")]}}])}),e("el-table-column",{attrs:{width:"120",prop:"gotimeTime",label:"上班打卡时间"}}),e("el-table-column",{attrs:{width:"120",prop:"offtimeTime",label:"下班打卡时间"}})],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.$store.state.wokerdilog=!1}}},[t._v("关 闭")]),e("el-button",{attrs:{type:"success"},on:{click:t.exportmingx}},[t._v("导出明细")]),e("el-button",{attrs:{type:"primary"},on:{click:t.exporthuizong}},[t._v("导出汇总")])],1),e("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-sizes":t.pageSizes,"page-size":t.PageSize,layout:"prev, pager, next, jumper",total:t.totalCount},on:{"current-change":t.handleCurrentChange}})],1)},s=[],i=r(298),l={inject:["reload"],filters:{temperatureStatus(t){return"0"==t?"未检测":"1"==t?"体温正常":"-1"==t?"体温异常":void 0},nucleicStatus(t){return"0"==t?"未检测":"1"==t?"检测正常":"-1"==t?"检测异常":void 0},levelStatus(t){return"0"==t?"黄码":"1"==t?"绿码":"-1"==t?"红码":void 0},gotimeStatus(t){return"0"==t?"未打卡":"1"==t?"考勤正常":"-1"==t?"考勤异常":void 0},offtimeStatus(t){return"0"==t?"未打卡":"1"==t?"考勤正常":"-1"==t?"考勤异常":void 0}},props:["dilogodata","start","end"],data(){return{tabledilog:[],compay:"",currentPage:1,totalCount:1,pageSizes:[1,2,3,4],PageSize:10}},mounted(){},methods:{handleCurrentChange(t){(0,i.FC)({pageSize:10,pageNum:t,starTime:this.start,endTime:this.end,company:this.compay}).then((t=>{this.tabledilog=t.items,this.totalCount=t.total})).catch((()=>{this.$message.error("请求错误")})),this.currentPage=t},exportmingx(){window.open("http://47.98.212.33:8088/front/v1/face/detail/export?starTime="+this.start+"&endTime="+this.end+"&company="+this.compay)},exporthuizong(){window.open("http://47.98.212.33:8088/front/v1/face/months/export?starTime="+this.start+"&endTime="+this.end+"&company="+this.compay)}},watch:{dilogodata(t){this.compay=t.type,""!=t.type&&(0,i.FC)({pageSize:10,pageNum:1,starTime:this.start,endTime:this.end,company:t.type}).then((t=>{this.tabledilog=t.items,this.totalCount=t.total}))}}},c=l,d=r(3736),m=(0,d.Z)(c,u,s,!1,null,"56753d93",null),p=m.exports,h=(r(4720),{inject:["reload"],components:{Titlel:o["default"],Antiepidemicdilog:p},filters:{pay(t){return t/100}},data(){return{startmounthyear:"",endmounthyear:"",tableData:[],currentPage:1,totalCount:1,pageSizes:[1,2,3,4],PageSize:20,wokerdilog:!1,dilogodata:""}},mounted(){this.getLastMonthFirstDay(),this.getLastMonthLastDay(),this.$nextTick((()=>{(0,i.JH)({pageSize:20,pageNum:1,starTime:this.startmounthyear,endTime:this.endmounthyear,company:""}).then((t=>{this.tableData=t.items,this.totalCount=t.total})).catch((()=>{this.$message.error("请求错误")}))}))},methods:{handleCurrentChange(t){(0,i.JH)({pageSize:20,pageNum:t,starTime:this.startmounthyear,endTime:this.endmounthyear,company:""}).then((t=>{this.tableData=t.items,this.totalCount=t.total})).catch((()=>{this.$message.error("请求错误")})),this.currentPage=t},serchdata(){(0,i.JH)({pageSize:20,pageNum:1,starTime:this.startmounthyear,endTime:this.endmounthyear,company:""}).then((t=>{this.tableData=t.items,this.totalCount=t.total})).catch((()=>{this.$message.error("请求错误")}))},getLastMonthFirstDay(){let t=new Date;t.setDate(0);var e=t.getFullYear(),r=t.getMonth()+1;r=r<10?"0"+r:r,this.startmounthyear=[e,r,"01"].join("-")},getLastMonthLastDay(){let t=new Date;t.setDate(0);var e=t.getFullYear(),r=t.getMonth()+1,n=new Date(e,r,0).getDate();r=r<10?"0"+r:r,n=n<10?"0"+n:n,this.endmounthyear=[e,r,n].join("-")},exportxsl(){window.open("http://47.98.212.33:8088/front/v1/face/sum/export?starTime="+this.startmounthyear+"&endTime="+this.endmounthyear)},showrow(t){this.dilogodata=t,this.$store.state.wokerdilog=!0}}}),f=h,g=(0,d.Z)(f,n,a,!1,null,"06d0a29f",null),y=g.exports},4885:function(){},298:function(t,e,r){"use strict";r.d(e,{$j:function(){return X},$l:function(){return et},BG:function(){return S},C$:function(){return h},CA:function(){return D},CL:function(){return L},Dx:function(){return W},E:function(){return H},E7:function(){return i},FC:function(){return $},HF:function(){return x},I9:function(){return tt},IC:function(){return q},Ib:function(){return w},JH:function(){return P},Ji:function(){return _},Jk:function(){return s},Jz:function(){return C},KN:function(){return Y},Ll:function(){return I},Mu:function(){return ut},Oz:function(){return f},QP:function(){return B},R2:function(){return g},R7:function(){return l},TV:function(){return M},U_:function(){return T},Ub:function(){return G},Up:function(){return a},Ur:function(){return V},W1:function(){return dt},WP:function(){return lt},X3:function(){return Z},X7:function(){return A},Ym:function(){return at},Zo:function(){return m},Zw:function(){return u},_i:function(){return v},bv:function(){return y},fo:function(){return c},fw:function(){return st},gC:function(){return mt},i0:function(){return Q},j7:function(){return E},kG:function(){return F},mK:function(){return j},mj:function(){return R},nG:function(){return ct},o4:function(){return nt},ob:function(){return k},p4:function(){return b},q0:function(){return J},qe:function(){return N},rD:function(){return o},sD:function(){return K},tG:function(){return U},tu:function(){return O},u5:function(){return rt},vw:function(){return ot},x$:function(){return p},y1:function(){return d},yI:function(){return z},zp:function(){return it}});var n=r(4471);function a(t){return(0,n.Z)({url:"/v1/girders/actions/search",method:"get",params:t})}function o(){return(0,n.Z)({url:"/v1/girders/qrcode",method:"post",responseType:"blob"})}function u(t){return(0,n.Z)({url:"/v1/girders/"+t.girderId,method:"put",data:t})}function s(t){return(0,n.Z)({url:"/v1/girders/"+t.id+"/actions/approve",method:"put",data:t})}function i(t){return(0,n.Z)({url:"/v1/girders/"+t.id+"/actions/outStock",method:"put",data:t})}function l(t){return(0,n.Z)({url:"/v1/weather/weather/search",method:"get",params:t})}function c(t){return(0,n.Z)({url:"/v1/human/buildingUnits",method:"get",params:t})}function d(t){return(0,n.Z)({url:"/v1/human/buildingUnits/"+t.id,method:"get",params:t.data})}function m(t){return(0,n.Z)({url:"/v1/human/workers/"+t.deptId+"/serach",method:"get",params:t})}function p(t){return(0,n.Z)({url:"/v1/human/buildingUnits/"+t,method:"get"})}function h(t){return(0,n.Z)({url:"/v1/human/workers/"+t.workerId,method:"PUT",data:t})}function f(t){return(0,n.Z)({url:"v1/communal/files/import/actions/upload",method:"post",async:!1,cache:!1,processData:!1,contentType:!1,data:t})}function g(t){return(0,n.Z)({url:"/v1/human/workers/actions/import/"+t.deptId,method:"post",data:{objectKey:t.objectKey,objectUrl:t.objectUrl}})}function y(t){return(0,n.Z)({url:"/v1/human/workers/avatars/actions/import",method:"post",data:t})}function v(t){return(0,n.Z)({url:"v1/human/workers",method:"post",data:t})}function b(t){return(0,n.Z)({url:"v1/human/workers/"+t,method:"DELETE"})}function Z(t){return(0,n.Z)({url:"/v1/human/workers/salary/actions/search",method:"get",params:t})}function w(t){return(0,n.Z)({url:"/v1/human/workers/salary/",method:"post",data:t})}function k(t){return(0,n.Z)({url:"/v1/human/workers/salary/"+t.id,method:"put",data:t})}function x(t){return(0,n.Z)({url:"/v1/human/workers/salary/"+t,method:"DELETE"})}function C(t){return(0,n.Z)({url:"/v1/human/workers/salary/actions/import/"+t.id,method:"post",data:{objectKey:t.objectKey,objectUrl:t.objectUrl}})}function S(t){return(0,n.Z)({url:"/v1/human/proEmployees/actions/search",method:"get",params:t})}function T(t){return(0,n.Z)({url:"/v1/human/proEmployees/",method:"post",data:t})}function _(t){return(0,n.Z)({url:"/v1/human/proEmployees/"+t.employeeId,method:"put",data:t})}function D(t){return(0,n.Z)({url:"/v1/human/proEmployees/"+t,method:"DELETE"})}function z(t){return(0,n.Z)({url:"/v1/human/proEmployees/avatars/actions/import",method:"post",data:t})}function E(t){return(0,n.Z)({url:"/v1/human/proEmployees/actions/import",method:"post",data:t})}function N(t){return(0,n.Z)({url:"/v1/human/proEmployeesSalary/search",method:"get",params:t})}function j(t){return(0,n.Z)({url:"/v1/enquipment/enquip/search",method:"get",params:t})}function I(t){return(0,n.Z)({url:"/v1/assest/search",method:"get",params:t})}function M(t){return(0,n.Z)({url:"/front/v1/face/list",method:"get",params:t})}function P(t){return(0,n.Z)({url:"/front/v1/face/sum",method:"get",params:t})}function $(t){return(0,n.Z)({url:"/front/v1/face/detail",method:"get",params:t})}function L(t){return(0,n.Z)({url:"/v1/materialcount/search",method:"get",params:t})}function U(t){return(0,n.Z)({url:"/v1/cementlab/search",method:"get",params:t})}function F(t){return(0,n.Z)({url:"/v1/cementlab/getCementLabItemByKey?id="+t,method:"get"})}function J(t){return(0,n.Z)({url:"/v1/bridge/action/search",method:"get",params:t})}function K(t){return(0,n.Z)({url:"/v1/labs/steel/lab/dept/list?type=concert",method:"get"})}function q(t){return(0,n.Z)({url:"/v1/labs/concrete/samples",method:"get",params:t})}function H(){return(0,n.Z)({url:"accounts/v1/supervisor/departments",method:"get"})}function A(){return(0,n.Z)({url:"accounts/v1/builder/departments",method:"get"})}function G(t){return(0,n.Z)({url:"/v1/labs/concrete/samples/create",method:"post",data:t})}function R(t){return(0,n.Z)({url:"/v1/labs/concrete/samples/update/"+t.sampleNo,method:"post",data:t})}function W(t){return(0,n.Z)({url:"/v1/labs/concrete/samples/delete/"+t,method:"post"})}function Y(t){return(0,n.Z)({url:"/v1/labs/steel/lab/dept/list?type=steel",method:"get"})}function B(t){return(0,n.Z)({url:"/v1/labs/steel/samples",method:"get",params:t})}function O(t){return(0,n.Z)({url:"/v1/labs/steel/samples/create",method:"post",data:t})}function X(t){return(0,n.Z)({url:"/v1/labs/steel/samples/update/"+t.sampleNo,method:"post",data:t})}function Q(t){return(0,n.Z)({url:"/v1/labs/steel/samples/delete/"+t,method:"post"})}function V(t){return(0,n.Z)({url:"/v1/labs/steel/samples/"+t.sampleNo,method:"get",params:{deptId:t.depid}})}function tt(t){return(0,n.Z)({url:"/v1/labs/steel/details/"+t.sampleNo,method:"get",params:{deptId:t.depid}})}function et(t){return(0,n.Z)({url:"/v1/labs/steel/getNoRelationDetails/"+t.sampleNo,method:"get",params:{deptId:t.depid,keyWord:t.serch}})}function rt(t){return(0,n.Z)({url:"/v1/labs/steel/update/match/"+t.sampleNo,method:"post",data:t.array})}function nt(t){return(0,n.Z)({url:"/v1/labs/concrete/samples/"+t.sampleNo,method:"get",params:{deptId:t.depid}})}function at(t){return(0,n.Z)({url:"/v1/labs/concrete/details/"+t.sampleNo,method:"get",params:{deptId:t.depid}})}function ot(t){return(0,n.Z)({url:"/v1/labs/concrete/getNoRelationDetails/"+t.sampleNo,method:"get",params:{deptId:t.depid,keyWord:t.serch}})}function ut(t){return(0,n.Z)({url:"/v1/labs/concrete/update/match/"+t.sampleNo,method:"post",data:t.array})}function st(t){return(0,n.Z)({url:"/v1/tensile/actions/search",method:"get",params:t})}function it(t){return(0,n.Z)({url:"/v1/tensile/"+t,method:"get"})}function lt(t){return(0,n.Z)({url:"/v1/tensile/actions/"+t.id,method:"put",data:t})}function ct(t){return(0,n.Z)({url:"/v1/tensile",method:"POST",data:t})}function dt(t){return(0,n.Z)({url:"/v1/tensile/"+t,method:"DELETE"})}function mt(t){return(0,n.Z)({url:"/v1/tensile/actions/export",method:"get",params:t,responseType:"blob"})}}}]);
//# sourceMappingURL=738.01ef2ac8.js.map