"use strict";(self["webpackChunkfront_vue"]=self["webpackChunkfront_vue"]||[]).push([[96],{5096:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"contata"},[e("el-form",{ref:"dynamicValidateForm",staticClass:"demo-dynamic",attrs:{model:t.dynamicValidateForm,"label-width":"100px"}},[e("el-form-item",{attrs:{prop:"money",label:"总资产"}},[e("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入总资产"},model:{value:t.dynamicValidateForm.money,callback:function(e){t.$set(t.dynamicValidateForm,"money",e)},expression:"dynamicValidateForm.money"}})],1),t._l(t.dynamicValidateForm.domains,(function(a,i){return e("el-form-item",{key:a.key,attrs:{label:"股票"+(i+1)}},[e("el-form-item",{attrs:{prop:"domains."+i+".name",rules:{required:!0,message:"股票名称不能为空",trigger:"blur"}}},[e("el-input",{attrs:{placeholder:"请输入股票名称"},model:{value:a.name,callback:function(e){t.$set(a,"name",e)},expression:"domain.name"}})],1),e("el-form-item",{attrs:{prop:"domains."+i+".money",rules:{required:!0,message:"市值不能为空",trigger:"blur"}}},[e("el-input",{attrs:{placeholder:"请输入市值"},model:{value:a.money,callback:function(e){t.$set(a,"money",e)},expression:"domain.money"}})],1),e("el-form-item",{attrs:{prop:"domains."+i+".profit",rules:t.validateTaskName}},[e("el-input",{attrs:{placeholder:"请输入盈亏"},model:{value:a.profit,callback:function(e){t.$set(a,"profit",e)},expression:"domain.profit"}})],1),e("el-form-item",{attrs:{prop:"domains."+i+".proportion",rules:t.validateproportion}},[e("el-input",{attrs:{placeholder:"请输入盈亏比"},model:{value:a.proportion,callback:function(e){t.$set(a,"proportion",e)},expression:"domain.proportion"}}),t._v(" % ")],1),e("el-form-item",{attrs:{prop:"domains."+i+".chicang"}},[e("el-input",{attrs:{placeholder:"请输入持仓"},model:{value:a.chicang,callback:function(e){t.$set(a,"chicang",e)},expression:"domain.chicang"}})],1),e("el-form-item",{attrs:{prop:"domains."+i+".keyong"}},[e("el-input",{attrs:{placeholder:"请输入可用"},model:{value:a.keyong,callback:function(e){t.$set(a,"keyong",e)},expression:"domain.keyong"}})],1),e("el-form-item",{attrs:{prop:"domains."+i+".chegnben"}},[e("el-input",{attrs:{placeholder:"请输入成本"},model:{value:a.chegnben,callback:function(e){t.$set(a,"chegnben",e)},expression:"domain.chegnben"}})],1),e("el-form-item",{attrs:{prop:"domains."+i+".xianjia"}},[e("el-input",{attrs:{placeholder:"请输入现价"},model:{value:a.xianjia,callback:function(e){t.$set(a,"xianjia",e)},expression:"domain.xianjia"}})],1),e("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"danger"},on:{click:function(e){return e.preventDefault(),t.removeDomain(a)}}},[t._v("删除")])],1)})),e("el-form-item",[e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitForm("dynamicValidateForm")}}},[t._v("提交")]),e("el-button",{on:{click:t.addDomain}},[t._v("新增股票")])],1)],2),e("el-dialog",{attrs:{visible:t.open,width:"400px","append-to-body":"","close-on-click-modal":!1},on:{"update:visible":function(e){t.open=e}}},[e("h4",{staticStyle:{"margin-bottom":"20px",display:"flex","flex-wrap":"wrap","align-items":"center","line-height":"23px"}},[e("p",[e("span",{staticStyle:{"font-weight":"normal",color:"#606266"}},[t._v("总资产")]),t._v(" "),e("i",{staticClass:"el-icon-view",on:{click:function(e){t.ishow=!t.ishow}}})]),e("p",{staticStyle:{width:"100%"}},[t.ishow?e("span",[t._v(t._s(t._f("thousands")(t.dynamicValidateForm.money)))]):t._e(),t.ishow?t._e():e("span",{staticStyle:{"padding-left":"7px"}},[t._v("****")])])]),e("table",{attrs:{border:"0",cellspacing:"0",id:"printrable",width:"100%"}},[e("th",{staticStyle:{"text-align":"left","font-weight":"normal"}},[t._v("市值"),e("i",{staticClass:"el-icon-d-caret"})]),e("th",{staticStyle:{"text-align":"right","padding-right":"15px"}},[t._v("盈亏")]),e("th",{staticStyle:{"text-align":"right","padding-right":"15px"}},[t._v("持仓/可用")]),e("th",{staticStyle:{"text-align":"right","padding-right":"15px"}},[t._v("成本/现价"),e("i",{staticClass:"el-icon-caret-right"})]),t._l(t.dynamicValidateForm.domains,(function(a,i){return e("tr",{key:i,class:a.profit>0?"red":"biled"},[e("td",{staticStyle:{width:"107px"}},[e("span",[e("span",{staticStyle:{"font-family":"'smYuanTiVF'"}},[t._v(t._s(a.name))]),t._v(" "),e("br"),t._v(" "+t._s(t._f("thousands")(a.money))+" ")])]),e("td",{staticStyle:{"text-align":"right","padding-right":"15px"}},[e("span",[t._v(" "+t._s(t._f("thousands")(a.profit))+" "),e("br"),t._v(" "+t._s(a.proportion)+"% ")])]),e("td",{staticStyle:{"text-align":"right","padding-right":"15px"}},[e("span",[t._v(" "+t._s(t._f("thousands")(a.chicang))+" "),e("br"),t._v(" "+t._s(t._f("thousands")(a.keyong))+" ")])]),e("td",{staticStyle:{"text-align":"right","padding-right":"15px"}},[e("span",[t._v(" "+t._s(t._f("thousands")(a.chegnben))+" "),e("br"),t._v(" "+t._s(t._f("thousands")(a.xianjia))+" ")])])])}))],2),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.open=!1}}},[t._v("取 消")])],1)])],1)},n=[],o=(a(7658),{filters:{thousands(t){var e=Number(t),a=e.toFixed(2).replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,"$&,");return a}},data(){return{dynamicValidateForm:{domains:[{name:"",profit:"",proportion:"",chicang:"",keyong:"",chegnben:"",xianjia:""}],money:0},validateTaskName:[{required:!0,message:"盈亏不能为空",trigger:"blur"},{pattern:/^^(\-|\+)?\d+(\.\d+)?$/,message:"输入正确的盈亏格式",trigger:"blur"}],validateproportion:[{required:!0,message:"盈亏不能为空",trigger:"blur"},{pattern:/^^(\-|\+)?\d+(\.\d+)?$/,message:"输入正确的盈亏比格式",trigger:"blur"}],open:!0,ishow:!0}},methods:{submitForm(t){this.$refs[t].validate((t=>{if(!t)return console.log("error submit!!"),!1;this.open=!0}))},resetForm(t){this.$refs[t].resetFields()},removeDomain(t){var e=this.dynamicValidateForm.domains.indexOf(t);-1!==e&&this.dynamicValidateForm.domains.splice(e,1)},addDomain(){this.dynamicValidateForm.domains.push({value:"",key:Date.now()})}}}),r=o,l=a(3736),s=(0,l.Z)(r,i,n,!1,null,"3c9ce654",null),d=s.exports}}]);
//# sourceMappingURL=96.ee9cfbfb.js.map