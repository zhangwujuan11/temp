"use strict";(self["webpackChunkfront_vue"]=self["webpackChunkfront_vue"]||[]).push([[565],{86:function(t,e,a){a.r(e),a.d(e,{default:function(){return b}});var l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"bridge"},[e("Titlel",{scopedSlots:t._u([{key:"nametext",fn:function(){return[e("span",[t._v("分包商设备台账")])]},proxy:!0},{key:"contont",fn:function(){return[e("div",[e("div",{staticClass:"control"},[e("div",{staticClass:"elserch"},[e("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入搜索内容"},model:{value:t.serdata,callback:function(e){t.serdata=e},expression:"serdata"}},[e("el-button",{attrs:{slot:"append"},on:{click:t.serchdata},slot:"append"},[t._v("搜索")])],1)],1)]),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:"","header-cell-style":{background:"linear-gradient(180deg,rgba(10, 74, 216, 0.70) 30%,rgba(5, 49, 146, 0.30))",color:"#00CFFF !important",border:"none"}}},[e("el-table-column",{attrs:{type:"index",label:"序号"}}),e("el-table-column",{attrs:{prop:"equNum",label:"管理编号"}}),e("el-table-column",{attrs:{prop:"name",label:"设备名称"}}),e("el-table-column",{attrs:{prop:"spec",label:"规格"}}),e("el-table-column",{attrs:{prop:"equModel",label:"型号"}}),e("el-table-column",{attrs:{prop:"power",label:"功率(kw)"}}),e("el-table-column",{attrs:{prop:"band",label:"生产厂家"}}),e("el-table-column",{attrs:{prop:"factoryDate",label:"出场日期"}}),e("el-table-column",{attrs:{prop:"value",label:"原值(元)"}}),e("el-table-column",{attrs:{prop:"proName",label:"项目名称"}}),e("el-table-column",{attrs:{prop:"subContractor",label:"分包商名称"}}),e("el-table-column",{attrs:{prop:"entryDate",label:"进场日期"}}),e("el-table-column",{attrs:{prop:"outDate",label:"退场日期"}}),e("el-table-column",{attrs:{prop:"operator",label:"操作人"}}),e("el-table-column",{attrs:{prop:"operateNum",label:"操作证编号"}}),e("el-table-column",{attrs:{prop:"source",label:"状况"}}),e("el-table-column",{attrs:{prop:"condition",label:"来源"}}),e("el-table-column",{attrs:{prop:"operateCheck",label:"进场验收情况"}}),e("el-table-column",{attrs:{prop:"checkStatus",label:"操作人员交底情况"}})],1),e("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-sizes":t.pageSizes,"page-size":t.PageSize,layout:"prev, pager, next, jumper",total:t.totalCount},on:{"current-change":t.handleCurrentChange}})],1)]},proxy:!0}])})],1)},r=[],o=a(549),n=a(9694),s=a(298),p=(a(4720),{inject:["reload"],components:{Titlel:o["default"],Uplodezip:n.Z},filters:{pay(t){return t/100}},data(){return{parentid:"",serdata:"",tableData:[],currentPage:1,totalCount:1,pageSizes:[1,2,3,4],PageSize:20,wokerdilog:!1,wokerdilogtwo:!1}},mounted(){(0,s.mK)({limit:20,offset:1,name:""}).then((t=>{this.tableData=t.data.items,this.totalCount=t.data.total})).catch((()=>{this.$message.error("请求错误")}))},methods:{handleCurrentChange(t){(0,s.mK)({limit:20,offset:20*(t-1),name:this.serdata}).then((t=>{this.tableData=t.data.items,this.totalCount=t.data.total})).catch((()=>{this.$message.error("请求错误")})),this.currentPage=t},serchdata(){let t={limit:20,offset:1,name:this.serdata};(0,s.mK)(t).then((t=>{this.tableData=t.data.items,this.totalCount=t.data.total})).catch((()=>{this.$message.error("请求错误")}))}}}),c=p,u=a(3736),i=(0,u.Z)(c,l,r,!1,null,"439f9660",null),b=i.exports}}]);
//# sourceMappingURL=565.aae3f7f2.js.map