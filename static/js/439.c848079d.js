"use strict";(self["webpackChunkfront_vue"]=self["webpackChunkfront_vue"]||[]).push([[439],{9589:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"bridge"},[t("Titlel",{scopedSlots:e._u([{key:"nametext",fn:function(){return[t("span",[e._v("农名工工资")])]},proxy:!0},{key:"contont",fn:function(){return[t("div",[t("div",{staticClass:"control"},[t("el-button",{attrs:{type:"primary"},on:{click:e.backgo}},[e._v("上一级")]),t("el-date-picker",{staticStyle:{width:"155px",margin:"0 15px"},attrs:{type:"month",placeholder:"选择日期",format:"yyyy 年 MM 月","value-format":"yyyy-MM"},model:{value:e.mounthyear,callback:function(t){e.mounthyear=t},expression:"mounthyear"}}),t("el-button",{attrs:{type:"primary"},on:{click:function(t){e.$store.state.uplodeg=!0}}},[e._v("导入")]),t("el-button",{attrs:{type:"warning"},on:{click:function(t){return e.addwid()}}},[e._v("新增")]),t("div",{staticClass:"elserch"},[t("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入姓名"},model:{value:e.serdata,callback:function(t){e.serdata=t},expression:"serdata"}},[t("el-select",{attrs:{slot:"prepend",placeholder:"全部"},slot:"prepend",model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},[t("el-option",{attrs:{label:"全部",value:140101}})],1),t("el-button",{attrs:{slot:"append"},on:{click:e.serchdata},slot:"append"},[e._v("搜索")])],1)],1)],1),t("el-table",{staticClass:"tableAuto",attrs:{data:e.tableData,stripe:"","table-layout":"auto","header-cell-style":{background:"linear-gradient(180deg,rgba(10, 74, 216, 0.70) 30%,rgba(5, 49, 146, 0.30))",color:"#00CFFF !important",border:"none"}}},[t("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("div",[t("i",{staticClass:"el-icon-edit",on:{click:function(t){return e.changerow(r.row)}}}),t("i",{staticClass:"el-icon-circle-close",on:{click:function(t){return e.deletrow(r.row)}}})])]}}])}),t("el-table-column",{attrs:{type:"index",label:"序号"}}),t("el-table-column",{attrs:{label:"年月"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.year)+"-"+e._s(t.row.month)+" ")]}}])}),t("el-table-column",{attrs:{prop:"deptName","show-overflow-tooltip":"",label:"工队"}}),t("el-table-column",{attrs:{prop:"workerName",label:"姓名"}}),t("el-table-column",{attrs:{prop:"typeOfWork",label:"工种/职务"}}),t("el-table-column",{attrs:{prop:"bankName",label:"开户行名称"}}),t("el-table-column",{attrs:{prop:"cardNo",label:"工资卡账号"}}),t("el-table-column",{attrs:{prop:"payBefore",label:"预支工资(元)"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.payBefore)+" ")]}}])}),t("el-table-column",{attrs:{prop:"cutCount",label:"代缴代扣(元)"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.cutCount)+" ")]}}])}),t("el-table-column",{attrs:{prop:"temperatureSubsidies",label:"高温补助"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.temperatureSubsidies)+" ")]}}])}),t("el-table-column",{attrs:{prop:"grossPay",label:"本月应付工资(元)"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.grossPay)+" ")]}}])}),t("el-table-column",{attrs:{label:"实付"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.actualPay)+" ")]}}])})],1),t("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.PageSize,layout:"prev, pager, next, jumper",total:e.totalCount},on:{"current-change":e.handleCurrentChange}})],1)]},proxy:!0}])}),t("Uplodezip"),t("el-dialog",{attrs:{title:"新增",visible:e.wokerdilog,width:"50%"},on:{"update:visible":function(t){e.wokerdilog=t}}},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"进场时间"}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"month",placeholder:"选择日期",format:"yyyy 年 MM 月","value-format":"yyyy-MM"},model:{value:e.entryDate,callback:function(t){e.entryDate=t},expression:"entryDate"}})],1),t("el-form-item",{attrs:{label:"姓名",prop:"workerName"}},[t("el-input",{model:{value:e.ruleForm.workerName,callback:function(t){e.$set(e.ruleForm,"workerName",t)},expression:"ruleForm.workerName"}})],1),t("el-form-item",{attrs:{label:"身份证",prop:"idNum"}},[t("el-input",{model:{value:e.ruleForm.idNum,callback:function(t){e.$set(e.ruleForm,"idNum",t)},expression:"ruleForm.idNum"}})],1),t("el-form-item",{attrs:{label:"开户行名称",prop:"bankName"}},[t("el-input",{model:{value:e.ruleForm.bankName,callback:function(t){e.$set(e.ruleForm,"bankName",t)},expression:"ruleForm.bankName"}})],1),t("el-form-item",{attrs:{label:"工资卡账号",prop:"cardNo"}},[t("el-input",{model:{value:e.ruleForm.cardNo,callback:function(t){e.$set(e.ruleForm,"cardNo",t)},expression:"ruleForm.cardNo"}})],1),t("el-form-item",{attrs:{label:"预支工资(元)",prop:"payBefore"}},[t("el-input",{model:{value:e.ruleForm.payBefore,callback:function(t){e.$set(e.ruleForm,"payBefore",t)},expression:"ruleForm.payBefore"}})],1),t("el-form-item",{attrs:{label:"代缴代扣(元)",prop:"cutCount"}},[t("el-input",{model:{value:e.ruleForm.cutCount,callback:function(t){e.$set(e.ruleForm,"cutCount",t)},expression:"ruleForm.cutCount"}})],1),t("el-form-item",{attrs:{label:"高温补助(元)",prop:"temperatureSubsidies"}},[t("el-input",{model:{value:e.ruleForm.temperatureSubsidies,callback:function(t){e.$set(e.ruleForm,"temperatureSubsidies",t)},expression:"ruleForm.temperatureSubsidies"}})],1),t("el-form-item",{attrs:{label:"应付工资(元)",prop:"grossPay"}},[t("el-input",{model:{value:e.ruleForm.grossPay,callback:function(t){e.$set(e.ruleForm,"grossPay",t)},expression:"ruleForm.grossPay"}})],1),t("el-form-item",{attrs:{label:"实付",prop:"actualPay"}},[t("el-input",{model:{value:e.ruleForm.actualPay,callback:function(t){e.$set(e.ruleForm,"actualPay",t)},expression:"ruleForm.actualPay"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.wokerdilog=!1}}},[e._v("关 闭")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submit("ruleForm")}}},[e._v("提 交")])],1)],1),t("el-dialog",{attrs:{title:"工人工资修改",visible:e.wokerdilogtwo,width:"50%"},on:{"update:visible":function(t){e.wokerdilogtwo=t}}},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"年"}},[t("el-input",{attrs:{disabled:""},model:{value:e.ruleForm.year,callback:function(t){e.$set(e.ruleForm,"year",t)},expression:"ruleForm.year"}})],1),t("el-form-item",{attrs:{label:"月"}},[t("el-input",{attrs:{disabled:""},model:{value:e.ruleForm.month,callback:function(t){e.$set(e.ruleForm,"month",t)},expression:"ruleForm.month"}})],1),t("el-form-item",{attrs:{label:"姓名",prop:"workerName"}},[t("el-input",{attrs:{disabled:""},model:{value:e.ruleForm.workerName,callback:function(t){e.$set(e.ruleForm,"workerName",t)},expression:"ruleForm.workerName"}})],1),t("el-form-item",{attrs:{label:"开户行名称",prop:"bankName"}},[t("el-input",{attrs:{disabled:""},model:{value:e.ruleForm.bankName,callback:function(t){e.$set(e.ruleForm,"bankName",t)},expression:"ruleForm.bankName"}})],1),t("el-form-item",{attrs:{label:"工资卡账号",prop:"cardNo"}},[t("el-input",{attrs:{disabled:""},model:{value:e.ruleForm.cardNo,callback:function(t){e.$set(e.ruleForm,"cardNo",t)},expression:"ruleForm.cardNo"}})],1),t("el-form-item",{attrs:{label:"预支工资(元)",prop:"payBefore"}},[t("el-input",{model:{value:e.ruleForm.payBefore,callback:function(t){e.$set(e.ruleForm,"payBefore",t)},expression:"ruleForm.payBefore"}})],1),t("el-form-item",{attrs:{label:"代缴代扣(元)",prop:"cutCount"}},[t("el-input",{model:{value:e.ruleForm.cutCount,callback:function(t){e.$set(e.ruleForm,"cutCount",t)},expression:"ruleForm.cutCount"}})],1),t("el-form-item",{attrs:{label:"高温补助(元)",prop:"temperatureSubsidies"}},[t("el-input",{model:{value:e.ruleForm.temperatureSubsidies,callback:function(t){e.$set(e.ruleForm,"temperatureSubsidies",t)},expression:"ruleForm.temperatureSubsidies"}})],1),t("el-form-item",{attrs:{label:"应付工资(元)",prop:"grossPay"}},[t("el-input",{model:{value:e.ruleForm.grossPay,callback:function(t){e.$set(e.ruleForm,"grossPay",t)},expression:"ruleForm.grossPay"}})],1),t("el-form-item",{attrs:{label:"实付",prop:"actualPay"}},[t("el-input",{model:{value:e.ruleForm.actualPay,callback:function(t){e.$set(e.ruleForm,"actualPay",t)},expression:"ruleForm.actualPay"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.wokerdilogtwo=!1}}},[e._v("关 闭")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitchange("ruleForm")}}},[e._v("提 交")])],1)],1)],1)},l=[],o=(r(7658),r(549)),s=r(7325),u=r(298),i=(r(4720),{inject:["reload"],components:{Titlel:o["default"],Uplodezip:s.Z},filters:{pay(e){return e/100}},data(){return{parentid:"",serdata:"",select:"",tableData:[],currentPage:1,totalCount:1,pageSizes:[1,2,3,4],PageSize:20,wokerdilog:!1,wokerdilogtwo:!1,ruleForm:{bankName:"",cardNo:"",cutCount:null,grossPay:null,idNum:"",month:"",payBefore:null,telephone:"",temperatureSubsidies:null,workerId:"",workerName:"",year:"",actualPay:null},rules:{idNum:[{required:!0,message:"请输入",trigger:"blur"}],bankName:[{required:!0,message:"请输入",trigger:"blur"}],cardNo:[{required:!0,message:"请输入",trigger:"blur"}],typeOfWork:[{required:!0,message:"请输入",trigger:"blur"}],workerName:[{required:!0,message:"请输入",trigger:"blur"}]},entryDate:"",mounthyear:""}},mounted(){this.parentid=this.$route.query.parentid,this.ruleForm.deptId=this.$route.query.parentid,(0,u.X3)({deptId:this.parentid,pageSize:20,month:"",pageNum:1,year:"",workerName:""}).then((e=>{this.tableData=e.data.items,this.totalCount=e.data.total})).catch((()=>{this.$message.error("请求错误")}))},methods:{serchdata(){console.log(this.mounthyear),null!=this.mounthyear?(0,u.X3)({deptId:this.parentid,pageSize:20,month:this.mounthyear.substring(5,8),pageNum:1,year:this.mounthyear.substring(0,4),workerName:this.serdata}).then((e=>{this.tableData=e.data.items,this.ruleForm.cutCount=this.ruleForm.cutCount/100,this.ruleForm.grossPay=this.ruleForm.grossPay/100,this.ruleForm.payBefore=this.ruleForm.payBefore/100,this.ruleForm.temperatureSubsidies=this.ruleForm.temperatureSubsidies/100,this.ruleForm.actualPay=this.ruleForm.actualPay/100,this.totalCount=e.data.total})).catch((()=>{this.$message.error("请求错误")})):(0,u.X3)({deptId:this.parentid,pageSize:20,month:"",pageNum:1,year:"",workerName:this.serdata}).then((e=>{this.tableData=e.data.items,this.ruleForm.cutCount=this.ruleForm.cutCount/100,this.ruleForm.grossPay=this.ruleForm.grossPay/100,this.ruleForm.payBefore=this.ruleForm.payBefore/100,this.ruleForm.temperatureSubsidies=this.ruleForm.temperatureSubsidies/100,this.ruleForm.actualPay=this.ruleForm.actualPay/100,this.totalCount=e.data.total})).catch((()=>{this.$message.error("请求错误")}))},handleCurrentChange(e){(0,u.X3)({deptId:this.parentid,pageSize:20,month:"",pageNum:e,year:"",workerName:""}).then((e=>{this.tableData=e.data.items,this.totalCount=e.data.total})).catch((()=>{this.$message.error("请求错误")})),this.currentPage=e},submit(e){let t=this.entryDate;this.ruleForm.year=t.substring(0,4),this.ruleForm.month=t.substring(5,8),this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;(0,u.Ib)(this.ruleForm).then((e=>{200==e.code?(this.wokerdilog=!1,this.$message.success("添加成功"),this.reload()):this.$message.error(e.message)})).catch((()=>{this.$message.error("失败")}))}))},changerow(e){this.ruleForm=e,this.wokerdilogtwo=!0},submitchange(){(0,u.ob)(this.ruleForm).then((e=>{200==e.code?(this.wokerdilog=!1,this.$message.success("修改成功"),this.reload()):this.$message.error(e.data.detail)}))},addwid(){this.wokerdilog=!0},deletrow(e){this.$confirm("是否确认删除"+e.workerName+"的数据记录","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{(0,u.HF)(e.id).then((e=>{200==e.code&&(this.$message.success(e.data),this.reload())}))})).catch((()=>{this.$message({type:"info",message:"已取消删除"})}))},backgo(){this.$router.push({path:"/synthesize/team/index",query:{isback:!0,grandeid:this.$route.query.grandeid,type:0}})}},watch:{mounthyear(e){(0,u.X3)({deptId:this.parentid,pageSize:20,month:e.substring(5,8),pageNum:1,year:e.substring(0,4),workerName:""}).then((e=>{this.tableData=e.data.items,this.totalCount=e.data.total})).catch((()=>{this.$message.error("请求错误")}))}}}),n=i,m=r(3736),c=(0,m.Z)(n,a,l,!1,null,"b80254a2",null),p=c.exports}}]);
//# sourceMappingURL=439.c848079d.js.map