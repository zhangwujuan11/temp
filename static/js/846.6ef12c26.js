"use strict";(self["webpackChunkfront_vue"]=self["webpackChunkfront_vue"]||[]).push([[846],{7370:function(t,e,l){l.r(e),l.d(e,{default:function(){return i}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"bridge"},[e("Titlel",{scopedSlots:t._u([{key:"nametext",fn:function(){return[e("span",[t._v("项目物资统计表")])]},proxy:!0},{key:"contont",fn:function(){return[e("div",[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:"","header-cell-style":{background:"linear-gradient(180deg,rgba(10, 74, 216, 0.70) 30%,rgba(5, 49, 146, 0.30))",color:"#00CFFF !important",border:"none"}}},[e("el-table-column",{attrs:{width:"50",type:"index",label:"序号"}}),e("el-table-column",{attrs:{width:"180",prop:"type",label:"物资类别"}}),e("el-table-column",{attrs:{prop:"unit",label:"计量单位"}}),e("el-table-column",{attrs:{label:"年初库存"}},[e("el-table-column",{attrs:{prop:"yearCount",label:"数量"}}),e("el-table-column",{attrs:{prop:"yearMoney",label:"金额(元)"}})],1),e("el-table-column",{attrs:{label:"收入"}},[e("el-table-column",{attrs:{label:"本月收入"}},[e("el-table-column",{attrs:{prop:"incomeMonthCount",label:"数量"}}),e("el-table-column",{attrs:{prop:"incomeMonthMoney",label:"金额(元)"}})],1),e("el-table-column",{attrs:{label:"本年累计"}},[e("el-table-column",{attrs:{prop:"incomeYearCount",label:"数量"}}),e("el-table-column",{attrs:{prop:"incomeYearMoney",label:"金额(元)"}})],1),e("el-table-column",{attrs:{label:"项目自购"}},[e("el-table-column",{attrs:{prop:"incomeProCount",label:"数量"}})],1),e("el-table-column",{attrs:{label:"公司统购"}},[e("el-table-column",{attrs:{prop:"incomeJiaCount",label:"数量"}})],1),e("el-table-column",{attrs:{label:"甲供"}},[e("el-table-column",{attrs:{prop:"incomeCompCount",label:"数量"}})],1),e("el-table-column",{attrs:{label:"预点入库"}},[e("el-table-column",{attrs:{prop:"incomePreCount",label:"数量"}}),e("el-table-column",{attrs:{prop:"incomePreMoney",label:"金额(元)"}})],1)],1),e("el-table-column",{attrs:{label:"消耗"}},[e("el-table-column",{attrs:{label:"本月出库统计"}},[e("el-table-column",{attrs:{prop:"costMonthCount",label:"数量"}}),e("el-table-column",{attrs:{prop:"costMonthMoney",label:"金额(元)"}})],1),e("el-table-column",{attrs:{label:"本年累计"}},[e("el-table-column",{attrs:{prop:"costYearCount",label:"数量"}}),e("el-table-column",{attrs:{prop:"costYearMoney",label:"金额(元)"}})],1)],1),e("el-table-column",{attrs:{label:"拨出"}},[e("el-table-column",{attrs:{label:"本月调拨出库\t"}},[e("el-table-column",{attrs:{prop:"outMonthCount",label:"数量"}}),e("el-table-column",{attrs:{prop:"outMonthMoney",label:"金额(元)"}})],1),e("el-table-column",{attrs:{label:"本年累计"}},[e("el-table-column",{attrs:{prop:"outYearCount",label:"数量"}}),e("el-table-column",{attrs:{prop:"outYearMoney",label:"金额(元)"}})],1),e("el-table-column",{attrs:{label:"内部调拨"}},[e("el-table-column",{attrs:{prop:"outInsideCount",label:"数量"}}),e("el-table-column",{attrs:{prop:"outInsideMoney",label:"金额(元)"}})],1)],1),e("el-table-column",{attrs:{label:"期末库存"}},[e("el-table-column",{attrs:{prop:"endCount",label:"数量"}}),e("el-table-column",{attrs:{prop:"endMoney",label:"金额(元)"}})],1)],1),e("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-sizes":t.pageSizes,"page-size":t.PageSize,layout:"prev, pager, next, jumper",total:t.totalCount},on:{"current-change":t.handleCurrentChange}})],1)]},proxy:!0}])})],1)},o=[],n=l(549),r=l(9694),u=l(298),b=(l(4720),{inject:["reload"],components:{Titlel:n["default"],Uplodezip:r.Z},filters:{pay(t){return t/100}},data(){return{parentid:"",serdata:"",tableData:[],currentPage:1,totalCount:1,pageSizes:[1,2,3,4],PageSize:20,wokerdilog:!1,wokerdilogtwo:!1,loading:!0}},mounted(){(0,u.CL)({limit:20,offset:1}).then((t=>{this.tableData=t.data.items,this.totalCount=t.data.total,this.loading=!1})).catch((()=>{this.$message.error("请求错误")}))},methods:{handleCurrentChange(t){this.loading=!0;(0,u.CL)({limit:20,offset:20*(t-1)}).then((t=>{this.tableData=t.data.items,this.totalCount=t.data.total,this.loading=!1})).catch((()=>{this.$message.error("请求错误")}));this.currentPage=t}}}),s=b,c=l(3736),p=(0,c.Z)(s,a,o,!1,null,"73e122f2",null),i=p.exports}}]);
//# sourceMappingURL=846.6ef12c26.js.map