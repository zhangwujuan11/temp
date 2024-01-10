"use strict";(self["webpackChunkfront_vue"]=self["webpackChunkfront_vue"]||[]).push([[113],{5113:function(e,t,i){i.r(t),i.d(t,{default:function(){return x}});var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"partybuild"},[t("div",{staticClass:"maincon"},[t("div",{attrs:{id:"domId"}}),t("div",{attrs:{id:"bim-ele-detail-table"}}),t("el-drawer",{attrs:{modal:!1,visible:e.drawer,direction:"ltr",wrapperClosable:!1},on:{"update:visible":function(t){e.drawer=t}}},[t("Progress",{attrs:{list:e.list,dlirelode:e.dlirelode},on:{sondata:e.meetfunction}})],1),t("el-button",{staticClass:"oldtable",attrs:{type:"primary"},on:{click:function(t){return e.dra()}}},[e._v(" 构件列表"),t("i",{staticClass:"el-icon-d-arrow-right"})]),t("el-drawer",{attrs:{title:"建设堆积图",visible:e.drawertwo,direction:"ltr"},on:{"update:visible":function(t){e.drawertwo=t}}},[t("div",{ref:"main",staticStyle:{width:"100%",height:"100%"}})]),t("el-button",{staticClass:"newtable",attrs:{type:"primary"},on:{click:function(t){return e.drawert()}}},[e._v(" 堆积图"),t("i",{staticClass:"el-icon-d-arrow-right"})]),t("el-dialog",{staticClass:"topdilog",attrs:{title:"",modal:!1,visible:e.dialogVisible,width:"100%","close-on-click-modal":!1,"show-close":!1},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("el-form",{ref:"form",attrs:{model:e.form,"label-width":"65px"}},[t("el-form-item",{attrs:{label:"顺序"}},[t("el-input",{model:{value:e.form.sequence,callback:function(t){e.$set(e.form,"sequence",t)},expression:"form.sequence"}})],1),t("el-form-item",{attrs:{label:"完成时间"}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期",format:"yyyy 年 MM 月 dd 日"},model:{value:e.form.endDate,callback:function(t){e.$set(e.form,"endDate",t)},expression:"form.endDate"}})],1),t("el-form-item",{attrs:{label:"工程进度"}},[t("el-input",{model:{value:e.form.progress,callback:function(t){e.$set(e.form,"progress",t)},expression:"form.progress"}})],1),t("el-form-item",{attrs:{label:"验收状态"}},[t("el-select",{attrs:{placeholder:"请选择"},on:{change:function(t){return e.builderchange()}},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[t("el-option",{attrs:{label:"未开始",value:101001}}),t("el-option",{attrs:{label:"建设中",value:101002}}),t("el-option",{attrs:{label:"已完成",value:101003}})],1)],1),t("el-form-item",{attrs:{label:"权重"}},[t("el-input",{model:{value:e.form.weight,callback:function(t){e.$set(e.form,"weight",t)},expression:"form.weight"}})],1),t("el-form-item",{attrs:{label:"安全等级"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.securityLevel,callback:function(t){e.$set(e.form,"securityLevel",t)},expression:"form.securityLevel"}},[t("el-option",{attrs:{label:"低",value:1}}),t("el-option",{attrs:{label:"中",value:2}}),t("el-option",{attrs:{label:"高",value:3}})],1)],1),t("el-form-item",{staticStyle:{width:"100%"}},[t("div",{staticClass:"dilofooter"},[t("el-button",{attrs:{type:"success"},on:{click:e.onSubmit}},[t("i",{staticClass:"el-icon-check",staticStyle:{"font-weight":"1000"}}),e._v(" 确认")]),t("el-button",{on:{click:e.dialogfalse}},[t("i",{staticClass:"el-icon-close",staticStyle:{"font-weight":"1000"}}),e._v("取消")])],1)])],1),e.stakedilog?t("div",{staticClass:"stakedilog"},[t("p",{staticClass:"titles"},[e._v("桩检数据详情")]),e.stakeinfo?t("div",{staticClass:"morep"},[t("p",[e._v("混凝土强度:"+e._s(e.stakeinfo.concreteStrength))]),t("p",[e._v("创建时间:"+e._s(e.stakeinfo.createDate))]),t("p",[e._v("数据文件:"+e._s(e.stakeinfo.dataFile))]),t("p",[e._v("部门名称:"+e._s(e.stakeinfo.deptName))]),t("p",[e._v("GPS状态:"+e._s(e.stakeinfo.gpsIsValid))]),t("p",[e._v("GPS维度:"+e._s(e.stakeinfo.gpsLatitude))]),t("p",[e._v("GPS经度:"+e._s(e.stakeinfo.gpsLongitude))]),t("p",[e._v("设备编号:"+e._s(e.stakeinfo.machineId))]),t("p",[e._v("桩径:"+e._s(e.stakeinfo.pileDiameter))]),t("p",[e._v("桩长:"+e._s(e.stakeinfo.pileLength))]),t("p",[e._v("桩号:"+e._s(e.stakeinfo.pileNo))]),t("p",[e._v("检测的剖面数量:"+e._s(e.stakeinfo.sectionCount))]),t("p",[e._v("检测流水号:"+e._s(e.stakeinfo.serialNo))]),t("p",[e._v("测点间距:"+e._s(e.stakeinfo.step))]),t("p",[e._v("测试时间:"+e._s(e.stakeinfo.testTime))]),t("p",[e._v("声测管数量:"+e._s(e.stakeinfo.tubeCount))])]):e._e(),e.stakeinfo?e._e():t("div",{staticStyle:{"text-align":"center",width:"100%","line-height":"200px"}},[e._v(" 暂无数据 ")])]):e._e()],1)],1)])},s=[],l=i(4471);function o(e){return(0,l.Z)({url:"v1/bimface/viewToken",method:"get"})}function n(){return(0,l.Z)({url:"v1/bimface/elements/actions/color",method:"get"})}function r(e){return(0,l.Z)({url:"v1/bimface/elements/"+e.elementId,method:"get"})}function d(e){return(0,l.Z)({url:"/v1/bimface/progress/actions/pileByMonth",method:"get"})}function c(e){return(0,l.Z)({url:"/v1/bimface/elements",method:"get",params:e})}function u(e){return(0,l.Z)({url:"/v1/bimface/elements/"+e,method:"get"})}function m(e){return(0,l.Z)({url:"/v1/bimface/elements/"+e.id,method:"put",data:e.data})}function p(e){return(0,l.Z)({url:"/v1/bridge/get/"+e,method:"get"})}var f=function(){var e=this,t=e._self._c;return t("div",{staticClass:"progress"},[t("div",{staticClass:"serchbox"},[t("span",[e._v("构件列表")]),t("el-input",{staticClass:"serinput",model:{value:e.input,callback:function(t){e.input=t},expression:"input"}},[t("el-select",{staticStyle:{width:"100px"},attrs:{slot:"prepend",placeholder:"构建类型"},slot:"prepend",model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},[t("el-option",{attrs:{label:"全部",value:""}}),t("el-option",{attrs:{label:"桩",value:"stake"}}),t("el-option",{attrs:{label:"桥墩",value:"pier"}}),t("el-option",{attrs:{label:"梁",value:"bridge"}}),t("el-option",{attrs:{label:"桥面板",value:"panel"}}),t("el-option",{attrs:{label:"护栏",value:"guardBar"}}),t("el-option",{attrs:{label:"道路线",value:"way"}}),t("el-option",{attrs:{label:"其他",value:"other"}})],1)],1),t("el-button",{staticClass:"serbtn",on:{click:function(t){return e.gojian()}}},[e._v("搜索")])],1),t("ul",{staticClass:"proul"},e._l(e.datalist,(function(i,a){return t("li",{key:a,on:{click:function(t){return e.proulli(i)}}},[t("p",{staticClass:"proultitle",attrs:{title:i.elementName}},[e._v(e._s(i.elementName))]),null==i.endDate?t("span",{staticClass:"list-detail-end-time"},[e._v("完成时间：未计划")]):t("span",{staticClass:"list-detail-end-time"},[e._v("完成时间："+e._s(e._f("endDate")(i.endDate)))]),t("p",{staticClass:"gray-font"},[e._v(" 状态："),101003==i.status?t("el-button",{attrs:{type:"success",size:"mini"}},[e._v("已完成")]):e._e(),101002==i.status?t("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("建设中")]):e._e(),101001==i.status?t("el-button",{attrs:{type:"info",size:"mini"}},[e._v("未完成")]):e._e()],1),t("div",{staticStyle:{display:"flex"}},[t("div",{staticClass:"col-xs-4"},[t("div",{staticClass:"ele-detail-panel-top seq-1-top"},[e._v(e._s(i.sequence))]),t("div",{staticClass:"ele-detail-panel-bottom seq-1-bottom"},[e._v("顺序")])]),t("div",{staticClass:"col-xs-4"},[t("div",{staticClass:"ele-detail-panel-top seq-2-top"},[e._v(e._s(e._f("elementType")(i.elementType)))]),t("div",{staticClass:"ele-detail-panel-bottom seq-2-bottom"},[e._v("类型")])]),t("div",{staticClass:"col-xs-4"},[t("div",{staticClass:"ele-detail-panel-top seq-3-top"},[e._v(e._s(i.position))]),t("div",{staticClass:"ele-detail-panel-bottom seq-3-bottom"},[e._v("位置")])])]),"stake"==i.elementType?t("p",{staticStyle:{"text-align":"center"}},[t("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("桩检数据")])],1):e._e()])})),0),t("div",{staticStyle:{width:"97%",height:"90px","background-color":"#ebebeb",display:"flex","justify-content":"center","align-items":"center"}},[e.total>9?t("el-pagination",{staticStyle:{width:"100%"},attrs:{background:"","current-page":e.currentPage,layout:"prev, pager, next, jumper","page-size":9,total:e.total},on:{"current-change":e.whatepage,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}}):e._e()],1)])},h=[],g=(i(4720),{inject:["reload"],props:["list","dlirelode"],data(){return{input:"",datalist:this.list,select:"",total:null,currentPage:1}},filters:{endDate(e){var t=new Date(e);function i(e){return e<10&&(e="0"+e),e}var a=t.getFullYear(),s=t.getMonth()+1,l=t.getDate();t.getHours(),t.getMinutes(),t.getSeconds();return a+"-"+i(s)+"-"+i(l)},elementType(e){return"stake"==e?"桩":"pier"==e?"桥墩":"bridge"==e?"梁":"panel"==e?"桥面板":"guardBar"==e?"护栏":"way"==e?"道路线":"light"==e?"路灯":"other"==e?"其他":void 0}},mounted(){this.gojian()},methods:{starVideotLoading(){var e=this;e.videoLoading=this.$loading({lock:!0,text:"拼命加载中...",spinner:"el-icon-loading",target:document.querySelector(".video_loading"),background:"rgba(0,0,0,.5)"})},endVideoLoading(){var e=this;e.videoLoading.close()},gojian(){this.starVideotLoading(),c({limit:9,offset:0,elementName:this.input,type:this.select}).then((e=>{this.datalist=e.data.items,this.total=e.data.total,this.endVideoLoading()}))},whatepage(e){this.starVideotLoading(),c({limit:9,offset:e,elementName:this.input,type:this.select}).then((e=>{this.datalist=e.data.items,this.total=e.data.total,this.endVideoLoading()}))},proulli(e){this.$emit("sondata",e)}},watch:{dlirelode(e){this.gojian()}}}),v=g,b=i(3736),y=(0,b.Z)(v,f,h,!1,null,"07260dd9",null),w=y.exports,_={name:"depet",inject:["reload"],data(){return{viewToken:"a7c49f0a880d4dff9bd5d932e1ff5e1d",viewer3D:"",model3D:"",colorElements:"",app:"",iewAdded:!1,isMapLoaded:!1,loaderConfig:null,drawer:!1,drawertwo:!1,charts:"",list:[],dialogVisible:!1,form:{endDate:null,progress:0,securityLevel:0,sequence:0,status:null,weight:0},dependid:null,stakedilog:!1,stakeinfo:{},dlirelode:!1,vv:""}},components:{Progress:w},mounted(){this.$nextTick((()=>{o().then((e=>{var t=this,i=new BimfaceSDKLoaderConfig;i.viewToken=e.data.viewToken,this.viewToken=e.data.viewToken,n().then((e=>{this.colorElements=e.data,BimfaceSDKLoader.load(i,t.successCallback,t.failureCallback)}))}))}))},methods:{onSubmit(){m({data:this.form,id:this.dependid}).then((e=>{if(200==e.code)if(this.dialogVisible=!1,this.stakedilog=!1,this.dlirelode=!this.dlirelode,101002==this.form.status){var t="#f573cf";"1"==this.form.securityLevel?t="#ffff00":"2"==this.form.securityLevel?t="#FF8000":"3"==this.form.securityLevel&&(t="#ff0000");let e=new Glodon.Web.Graphics.Color(t,.5);this.model3D.overrideComponentsColorById([this.dependid],e)}else if(101003==this.form.status){let e=new Glodon.Web.Graphics.Color("#327d1c",.5);this.model3D.overrideComponentsColorById([this.dependid],e)}else this.model3D.restoreComponentsColorById([this.dependid]);else this.$message.error("失败")}))},setButtonText(e,t){var i=document.getElementById(e);null!=i&&"BUTTON"==i.nodeName&&(i.innerText=t)},successCallback(e){var t=this,i=document.getElementById("domId"),a=new Glodon.Bimface.Application.WebApplication3DConfig;if(a.domElement=i,a.Toolbars=[],a.enableLogarithmicDepthBuffer=!0,null!=a.domElement){var s=new Glodon.Bimface.Application.WebApplication3D(a);s.addView(e.viewToken);var l=s.getViewer();t.viewer3D=l,l.addEventListener(Glodon.Bimface.Viewer.Viewer3DEvent.ViewAdded,(function(){t.viewAdded=!0,window.onresize=function(){l.resize(document.documentElement.clientWidth,document.documentElement.clientHeight-40)};let e=new Glodon.Bimface.Plugins.TileMap.MapConfig;e.viewer=l,e.basePoint={x:6e5,y:18e4},e.modelPosition=[119.3636,25.519],e.modelRotationZ=215.5*Math.PI/180,e.modelAltitude=0;let i=new Glodon.Bimface.Plugins.TileMap.Map(e);i.setMapSource({credit:Glodon.Bimface.Common.Credit.Amap,url:"https://webst01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=6&x={x}&y={y}&z={z} "});let a=l.getModel(),s=new Glodon.Web.Graphics.Color("#327d1c",.5);a.overrideComponentsColorById(t.colorElements.completeEle,s);let o=new Glodon.Web.Graphics.Color("#f573cf",.5);a.overrideComponentsColorById(t.colorElements.buildingEle,o),t.model3D=a,l.addEventListener(Glodon.Bimface.Viewer.Viewer3DEvent.MouseClicked,t.getData)})),l.render()}},failureCallback(e){console.log(e)},getData(e){if(void 0!=e.elementId){if(e.elementId.split("-").length>2)return;this.dependid=e.elementId}r(e).then((e=>{this.form={beginDate:"",endDate:e.data.endDate,progress:e.data.progress,securityLevel:e.data.securityLevel,sequence:e.data.sequence,status:e.data.status,weight:e.data.weight},this.dialogVisible=!0})).catch((()=>{console.log("error")}))},drawert(){this.drawertwo=!0,d().then((e=>{this.charts=this.$echarts.init(this.$refs.main,null,{devicePixelRatio:2.5}),this.charts.setOption({color:["rgba(3, 179, 39,1)","rgba(36, 164, 255,1)","rgba(255, 177, 64, 1)"],tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},toolbox:{itemSize:20,itemGap:30,right:50},legend:{data:e.data.legend,icon:"rect",itemHeight:10,itemWidth:15,top:"30",left:"3%",textStyle:{color:"#000"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",axisLine:{show:!0},boundaryGap:!1,data:e.data.xaxis}],yAxis:[{type:"value",axisLine:{show:!0}}],series:[{name:"已完成",type:"line",stack:"Total",areaStyle:{},symbol:"none",emphasis:{focus:"series"},data:e.data.yaxis.已完成},{name:"建设中",type:"line",stack:"Total",areaStyle:{},symbol:"none",emphasis:{focus:"series"},data:e.data.yaxis.建设中},{name:"未开始",type:"line",stack:"Total",areaStyle:{},symbol:"none",emphasis:{focus:"series"},data:e.data.yaxis.未开始}]})}))},starVideotLoading(){var e=this;e.videoLoading=this.$loading({lock:!0,text:"拼命加载中...",spinner:"el-icon-loading",target:document.querySelector(".video_loading"),background:"rgba(0,0,0,.5)"})},endVideoLoading(){var e=this;e.videoLoading.close()},dra(){this.starVideotLoading(),c({limit:9,offset:0,elementName:""}).then((e=>{this.drawer=!0,this.list=e.data.items,this.endVideoLoading()}))},meetfunction(e){this.dependid=e.elementId,u(e.elementId).then((e=>{this.form={beginDate:"",endDate:e.data.endDate,progress:e.data.progress,securityLevel:e.data.securityLevel,sequence:e.data.sequence,status:e.data.status,weight:e.data.weight},this.dialogVisible=!0})),"stake"==e.elementType&&p(e.elementName).then((e=>{null!=e.data?this.stakeinfo=e.data:this.stakeinfo=null,this.stakedilog=!0})),this.viewer3D.getModel().clearSelectedComponents(),this.viewer3D.getModel().setSelectedComponentsById([e.elementId]),this.viewer3D.getModel().zoomToSelectedComponents()},dialogfalse(){this.dialogVisible=!1,this.stakedilog=!1},builderchange(){101001==this.form.status?this.form.progress=0:101002==this.form.status?this.form.progress=10:101003==this.form.status&&(this.form.progress=100)}}},k=_,C=(0,b.Z)(k,a,s,!1,null,"260f483c",null),x=C.exports}}]);
//# sourceMappingURL=113.6ab0c9e3.js.map