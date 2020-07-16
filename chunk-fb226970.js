(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fb226970"],{"0d43":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container container-padding grid-md"},[i("div",{staticClass:"columns"},[i("div",{staticClass:"column col-6 col-sm-12"},[i("balance"),i("dashboard")],1),i("div",{staticClass:"column col-6 col-sm-12"},[i("tinterface")],1)])])},a=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section"},[i("div",{staticClass:"section-item section-item-filled"},[i("div",{staticClass:"toast mb"},[i("div",{staticClass:"mb05"},[t._v("Mining "),i("span",{staticClass:"text-primary"},[t._v("1 SVX")]),t._v(" Burns "),i("span",{staticClass:"text-warning text-semibold"},[t._v(t._s(t.miningCost)+" SOV")])]),i("ul",{staticClass:"text-sm"},[i("li",[t._v("Reward per action: "),i("span",{staticClass:"text-primary"},[t._v(t._s(t.miningRate))]),t._v(" SVX")]),i("li",[t._v("Reward per transaction: "),i("span",{staticClass:"text-primary"},[t._v(t._s(t.total.miningRate))]),t._v(" SVX")]),i("li",[t._v("Total Burn per ransaction: "),i("span",{staticClass:"text-error"},[t._v(t._s(t.total.burn))]),t._v(" SOV")]),i("li",[t._v("Bonus for staking SVX: "),i("span",{class:[t.miningBonus>=50?"text-success":"text-warning"]},[t._v(t._s(t.miningBonus)+"%")])])])]),i("div",{staticClass:"form-group mb"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.targetMiningRate,expression:"targetMiningRate"}],staticClass:"form-input",attrs:{type:"number",min:"0",step:"0.01",required:""},domProps:{value:t.targetMiningRate},on:{input:function(e){e.target.composing||(t.targetMiningRate=e.target.value)}}}),i("label",[t._v("Target reward")])]),i("div",{staticClass:"mb05 flex-centered-horizontal flex-centered-vertical"},[i("label",{staticClass:"form-switch mr05"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.isAuto,expression:"isAuto"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isAuto)?t._i(t.isAuto,null)>-1:t.isAuto},on:{change:function(e){var i=t.isAuto,s=e.target,a=!!s.checked;if(Array.isArray(i)){var n=null,o=t._i(i,n);s.checked?o<0&&(t.isAuto=i.concat([n])):o>-1&&(t.isAuto=i.slice(0,o).concat(i.slice(o+1)))}else t.isAuto=a}}}),i("i",{staticClass:"form-icon"}),i("span",{staticClass:"text-secondary text-sm ml05"},[t._v("Auto")])]),i("button",{staticClass:"btn btn-primary btn-lg flex ml05",on:{click:t.submit}},[t._v(" Burn mine x"+t._s(t.range)+" ")])]),i("div",{staticClass:"text-sm text-secondary text-center"},[t._v(" Mine when reward is ≥ "+t._s(t.targetMiningRate)+" ")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.range,expression:"range"}],staticClass:"slider mb",attrs:{type:"range",min:"1",max:"200",step:"1"},domProps:{value:t.range},on:{__r:function(e){t.range=e.target.value}}}),i("div",{staticClass:"text-sm text-secondary text-center"},[t._v("Bundled mining actions per transaction")]),i("bars",{attrs:{isAuto:t.isAuto}})],1)])},o=[],r=i("2f62"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{staticStyle:{height:"10px",width:"100%","margin-top":"1rem"}},[i("rect",{staticStyle:{"border-radius":"5px 0 0 5px"},attrs:{id:"rect1",x:"0",y:"0",width:"9%",height:"10",fill:t.color}}),i("rect",{attrs:{id:"rect2",x:"10%",y:"0",width:"9%",height:"10",fill:t.color}}),i("rect",{attrs:{id:"rect3",x:"20%",y:"0",width:"9%",height:"10",fill:t.color}}),i("rect",{attrs:{id:"rect4",x:"30%",y:"0",width:"9%",height:"10",fill:t.color}}),i("rect",{attrs:{id:"rect5",x:"40%",y:"0",width:"9%",height:"10",fill:t.color}}),i("rect",{attrs:{id:"rect6",x:"50%",y:"0",width:"9%",height:"10",fill:t.color}}),i("rect",{attrs:{id:"rect7",x:"60%",y:"0",width:"9%",height:"10",fill:t.color}}),i("rect",{attrs:{id:"rect8",x:"70%",y:"0",width:"9%",height:"10",fill:t.color}}),i("rect",{attrs:{id:"rect9",x:"80%",y:"0",width:"9%",height:"10",fill:t.color}}),i("rect",{attrs:{id:"rect10",x:"90%",y:"0",width:"9%",height:"10",fill:t.color}})])},l=[],u={props:["isAuto"],data:()=>({color:"rgba(255,255,255,.1)",count:0}),mounted(){this.$bus.$on("tick",()=>{this.isAuto&&this.tick()})},methods:{tick(){this.count+=1,this.count=this.count<=11?this.count:1,this.count<=10&&document.getElementById("rect"+this.count).setAttribute("fill","#fff"),this.count>=2&&document.getElementById("rect"+(this.count-1)).setAttribute("fill",this.color)}}},h=u,m=i("2877"),d=Object(m["a"])(h,c,l,!1,null,null,null),g=d.exports,p={data:()=>({targetMiningRate:0,quantity:150,range:1,isAuto:!1,miningRate:0,miningBonus:0,pollingIsAuto:null,polling:null}),computed:{...Object(r["b"])({eos:t=>t.blockchain.eos,scatter:t=>t.blockchain.scatter}),total(){return{miningRate:parseFloat((this.miningRate*this.range).toFixed(4))||0,burn:parseFloat((.014*this.quantity*this.range).toFixed(2))||0}},miningCost(){const t=(this.total.burn/this.total.miningRate).toFixed(4);return t==1/0?0:t}},watch:{scatter(t){t&&this.getData()},isAuto(t){if(t)return this.submit(),this.pollingIsAuto=setInterval(()=>this.submit(),5e3),this.$notice.info("Auto mine <b>start</b>"),!1;this.pollingIsAuto&&(clearInterval(this.pollingIsAuto),this.$notice.warning("Auto mine <b>stop</b>"))}},mounted(){this.polling=setInterval(()=>this.getData(),1e3)},methods:{getData(){const t=this.eos.getTableRows({json:"true",code:"svxmintofeos",scope:"svxmintofeos",table:"accounts"}),e=this.eos.getTableRows({json:"true",code:"svxmintofeos",scope:"SVX",table:"stat"}),i=this.eos.getTableRows({json:"true",code:"svxmintofeos",scope:this.scatter.name,table:"accounts"});Promise.all([t,e,i]).then(t=>{const e=parseFloat(t[0].rows[0].balance),i=parseFloat(t[1].rows[0].supply),s=parseFloat(t[2].rows[0].svxpower);let a=s/i*1e4;a=a>50?50:Math.floor(parseFloat(a).toFixed(2));let n=e/2e4*(1+a/100)*1;this.miningRate=parseFloat(n.toFixed(4)),this.miningBonus=a})},submit(){const t=this.range,e={account:"sovmintofeos",name:"transfer",authorization:[{actor:this.scatter.name,permission:"active"}],data:{from:this.scatter.name,to:"sovdexrelays",quantity:"150.0000 SOV",memo:"mine SVX"}};if(this.miningRate<this.targetMiningRate&&!this.isAuto&&this.$notice.info("Reward is below target"),this.miningRate>=this.targetMiningRate){this.miningRate>=this.targetMiningRate&&!this.isAuto&&this.$notice.info("Mine"),console.log("======================"),console.log(e);for(var i=[],s=0;s<t;s++)i[s]=e;console.log(i),this.eos.transaction({actions:i}).then(()=>{console.log("[mine] Success"),this.isAuto||this.$notice.success("Mine success"),this.$bus.$emit("tick")}).catch(t=>console.error(t))}},beforeDestroy(){this.polling&&clearInterval(this.polling)}},components:{bars:g}},v=p,f=(i("68d6"),Object(m["a"])(v,n,o,!1,null,"1ea74352",null)),b=f.exports,x={components:{tinterface:b}},w=x,_=Object(m["a"])(w,s,a,!1,null,null,null);e["default"]=_.exports},"68d6":function(t,e,i){"use strict";var s=i("7249"),a=i.n(s);a.a},7249:function(t,e,i){}}]);
//# sourceMappingURL=chunk-fb226970.js.map