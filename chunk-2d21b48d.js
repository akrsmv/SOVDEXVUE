(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21b48d"],{beb6:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container container-padding grid-xs"},[s("balance"),s("dashboard"),s("div",{staticClass:"section"},[s("div",{staticClass:"section-item section-item-filled"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column col-6 col-sm-12"},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.stakeCount,expression:"stakeCount"}],staticClass:"form-input",attrs:{type:"number",min:"0",max:t.balance,placeholder:"Enter SVX count",required:""},domProps:{value:t.stakeCount},on:{input:function(e){e.target.composing||(t.stakeCount=e.target.value)}}}),s("label",[t._v("Max "+t._s(t.balance))])]),s("button",{staticClass:"btn btn-primary btn-block",attrs:{disabled:t.$v.stakeCount.$invalid},on:{click:t.stake}},[s("span",[t._v("Stake")]),t.stakeCount>0?s("span",{staticStyle:{"margin-left":"5px"}},[t._v(t._s(t.stakeCount)+" SVX")]):t._e()])]),s("div",{staticClass:"column col-6 col-sm-12"},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.unstakeCount,expression:"unstakeCount"}],staticClass:"form-input",attrs:{type:"number",min:"0",max:t.stakedBalance,required:""},domProps:{value:t.unstakeCount},on:{input:function(e){e.target.composing||(t.unstakeCount=e.target.value)}}}),s("label",[t._v("Max "+t._s(t.stakedBalance))])]),s("div",{staticClass:"text-sm text-secondary"}),s("button",{staticClass:"btn btn-primary btn-block",attrs:{disabled:t.$v.unstakeCount.$invalid},on:{click:t.unstake}},[s("span",[t._v("Unstake")]),t.unstakeCount>0?s("span",{staticStyle:{"margin-left":"5px"}},[t._v(t._s(t.unstakeCount)+" SVX")]):t._e()])])]),s("div",{staticClass:"text-sm text-secondary mt05"},[t._v("Staked "+t._s(t.stakedBalance)+" SVX")]),t.discount>=5?s("div",{staticClass:"text-sm text-secondary"},[t._v("Discount "+t._s(t.discount)+"%")]):t._e()]),s("div",{staticClass:"text-sm text-secondary container"},[t._v("Stake 777k+ SVX for automatic node payouts")])])],1)},n=[],o=s("2f62"),i=s("b5ae"),c={data:()=>({feeDiscount:0}),computed:{discount(){let t=0;return this.feeDiscount<5?t=0:this.feeDiscount<=10?t=5:this.feeDiscount<15?t=10:this.feeDiscount<20?t=15:this.feeDiscount<25?t=20:this.feeDiscount<30?t=25:this.feeDiscount<35?t=30:this.feeDiscount<40?t=35:this.feeDiscount<45?t=40:this.feeDiscount<50?t=45:this.feeDiscount<55||(this.feeDiscount<60?t=55:this.feeDiscount<65?t=60:this.feeDiscount<70?t=65:this.feeDiscount<75?t=70:this.feeDiscount>=80&&(t=75)),t}},mounted(){},watch:{scatter(t){t&&this.getFeeDiscount()}},methods:{async getFeeDiscount(){const t=await this.eos.getTableRows({json:"true",code:"svxmintofeos",scope:"SVX",table:"stat"}).then(t=>parseFloat(t.rows[0].supply)),e=await this.eos.getTableRows({json:"true",code:"svxmintofeos",scope:this.scatter.name,table:"accounts"}).then(t=>parseFloat(t.rows[0].svxpower));t&&e&&(this.feeDiscount=e/t*1e4)}}},u={mixins:[c],data:()=>({stakeCount:0,unstakeCount:0,balance:0,stakedBalance:0,polling:null}),computed:{...Object(o["b"])({eos:t=>t.blockchain.eos,scatter:t=>t.blockchain.scatter})},watch:{scatter(t){t&&this.getBalance()}},validations(){return{stakeCount:{required:i["required"],between:Object(i["between"])(1,parseFloat(this.balance))},unstakeCount:{required:i["required"],between:Object(i["between"])(1,parseFloat(this.stakedBalance))}}},mounted(){this.polling=setInterval(()=>{this.getBalance(),this.getFeeDiscount()},1e3)},methods:{stake(){confirm(`Stake ${this.stakeCount} SVX?`)&&this.eos.transaction({actions:[{account:"svxmintofeos",name:"stake",authorization:[{actor:this.scatter.name,permission:"active"}],data:{account:this.scatter.name,value:this.$options.filters.eosAmountFormat(this.stakeCount)}}]}).then(()=>{this.$notice.success(`Staked ${this.stakeCount} SVX`),this.getBalance(),this.clear()}).catch(t=>{console.error("[stake | stake]",t),this.$notice.error("Stake error")})},unstake(){confirm(`Un-Stake ${this.unstakeCount} SVX?`)&&this.eos.transaction({actions:[{account:"svxmintofeos",name:"unstake",authorization:[{actor:this.scatter.name,permission:"active"}],data:{account:this.scatter.name,value:this.$options.filters.eosAmountFormat(this.unstakeCount)}}]}).then(()=>{this.$notice.success(`Unstaked ${this.unstakeCount} SVX`),this.getBalance(),this.clear()}).catch(t=>{console.error("[stake | unstake]",t),this.$notice.error("Unstake error")})},getBalance(){this.eos.getTableRows({json:"true",code:"svxmintofeos",scope:this.scatter.name,table:"accounts"}).then(t=>{const e=parseFloat(t.rows[0].balance),s=parseFloat(t.rows[0].storebalance);this.balance=Math.floor(e-s),this.stakedBalance=Math.floor(s)})},clear(){this.stakeCount=0,this.unstakeCount=0}},beforeDestroy(){this.polling&&clearInterval(this.polling)}},r=u,l=s("2877"),h=Object(l["a"])(r,a,n,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d21b48d.js.map