function $(id) {
	return document.getElementById(id);
}

document.onkeydown = grabEvent;
function grabEvent(_event){
	if (_event.type == 'keydown') {
		document.onkeypress = null;
	};
	var code = Event(_event);
	switch(code){
		case "KEY_UP": //
		    ctl.up();
			return 0;
			break;
		case "KEY_DOWN": //
			ctl.down();
			return 0;
			break;
		case "KEY_LEFT": //
			ctl.left();
			return 0;
			break;
		case "KEY_RIGHT": //
			ctl.right();
			return 0;
			break;	
		default:
			break;
	}
}
window.onload = init;
var menuNo=0;
function init(){
	inputPad.show();
//	通过ctl控制当前模块
	ctl=inputPad;
}


var ctl={};
ctl={
	back:function(){
                      
	},
	left:function(){
	},
	right:function(){
	},                                                                    
	up:function(){
	},
	down:function(){
	},
	enter:function(){
	}
};
//以json为模块,submenu
var inputPad={
	$f:$('Focus'),
	show:function(){
		this.$f.style.display='block';
		this.change();
	},
	hide:function(){
		this.$f.style.display='none';
	},
	div:[
	    [{top: 50,left: 50,width: 200,height: 200},
		{top: 50,left: 300,width: 100,height: 200},
		{top: 50,left: 450,width: 100,height: 200},
		{top: 50,left: 600,width: 100,height: 200},
		{top: 300,left: 50,width: 95,height: 100},
		{top: 300,left: 155,width: 95,height: 100},
		{top: 300,left: 300,width: 100,height: 100},
		{top: 300,left: 450,width: 100,height: 100},
		{top: 300,left: 600,width: 100,height: 100}
		],
		[
		{top: 100,left: 100,width: 100,height: 100},
		{top: 50,left: 300,width: 100,height: 200},
		{top: 50,left: 450,width: 100,height: 200},
		{top: 50,left: 600,width: 100,height: 200},
		{top: 300,left: 50,width: 95,height: 100},
		{top: 300,left: 155,width: 95,height: 100},
		{top: 300,left: 300,width: 100,height: 100},
		{top: 300,left: 450,width: 100,height: 100},
		{top: 300,left: 600,width: 100,height: 100}
		],
		[
		{top: 150,left: 150,width: 100,height: 100},
		{top: 50,left: 300,width: 100,height: 200},
		{top: 50,left: 450,width: 100,height: 200},
		{top: 50,left: 600,width: 100,height: 200},
		{top: 300,left: 50,width: 95,height: 100},
		{top: 300,left: 155,width: 95,height: 100},
		{top: 300,left: 300,width: 100,height: 100},
		{top: 300,left: 450,width: 100,height: 100},
		{top: 300,left: 600,width: 100,height: 100}
		]
	],
	index:0,
	left:function(){
		if(this.index<=0){
			return;
		}
		this.index--;
		this.change();		
	},
	right:function(){
		if(this.index>=(this.div[0].length-1)){
			return;
		}
		this.index++;
		this.change();
	},
	up:function(){
		if(this.index<=3){
			this.hide();
			menuPad.show();
			ctl=menuPad;
		}
		if (this.index>=5) {
		this.index=this.index-5;			
		} 
		if(this.index==4) {
		this.index=this.index-4;		
		}
		this.change();	
	},
	down:function(){
		if(this.index>=(this.div.length-1)){
			return;
		}
		if (this.index==0) {
		this.index=this.index+4;	
		} else{
		this.index=this.index+5>8 ? this.index:this.index+5;	
		}
		
		this.change();
	},
		change:function(){
		this.$f.style.top=this.div[menuNo][this.index].top+'px';
		this.$f.style.left=this.div[menuNo][this.index].left+'px';
		this.$f.style.width=this.div[menuNo][this.index].width+'px';
		this.$f.style.height=this.div[menuNo][this.index].height+'px';
	}
};
// menu模块

var menuPad={
	$f:$('menuFocus'),
	show:function(){
		this.$f.style.display='block';
		this.change();
	},
	hide:function(){
		this.$f.style.display='none';
	},
	div:[
		{top: 10,left: 50,width: 100,height: 30},
		{top: 10,left: 200,width: 100,height: 30},
		{top: 10,left: 350,width: 100,height: 30},
	],
	menucontent:[
		{No1: '1-1',No2:' 1-2',No3:' 1-3',No4: '1-4',No5:' 1-5',No6:' 1-6',No7: '1-7',No8:' 1-8',No9:' 1-9',},
		{No1: '2-1',No2:' 2-2',No3:' 2-3',No4: '2-4',No5:'2-5',No6: '2-6',No7:' 2-7',No8:' 2-8',No9: '2-9',},
		{No1: '3-1',No2: '3-2',No3: '3-3',No4: '3-4',No5: '3-5',No6: '3-6',No7: '3-7',No8: '3-8',No9: '3-9',},
	],
	index:0,
	left:function(){
		if(this.index<=0){
			return;
		}
		this.index--;
		menuNo=this.index;
		this.change();	
		this.changemenu();
		
	},
	right:function(){
		if(this.index>=(this.div.length-1)){
			return;
		}
		this.index++;
		menuNo=this.index;
		this.change();
		this.changemenu();
	},
	up:function(){
//		if(this.index<=0){
//			
//			return;
//		}
//		if (this.index>=5) {
//		this.index=this.index-5;			
//		} 
//		if(this.index==4) {
//		this.index=this.index-4;		
//		}
//		this.change();	
	},
	down:function(){
//		if(this.index>=(this.div.length-1)){
//			return;
//		}
//		if (this.index==0) {
//		this.index=this.index+4;	
//		} else{
//		this.index=this.index+5>8 ? this.index:this.index+5;	
//		}
//		
//		this.change();
			this.hide();
			inputPad.show();
			ctl=inputPad;
	},
		change:function(){
		this.$f.style.top=this.div[this.index].top+'px';
		this.$f.style.left=this.div[this.index].left+'px';
		this.$f.style.width=this.div[this.index].width+'px';
		this.$f.style.height=this.div[this.index].height+'px';
	},
		changemenu:function(){
			$('div1').innerHTML=this.menucontent[this.index].No1;
			$('div2').innerHTML=this.menucontent[this.index].No2;
			$('div3').innerHTML=this.menucontent[this.index].No3;
			$('div4').innerHTML=this.menucontent[this.index].No4;
			$('div5').innerHTML=this.menucontent[this.index].No5;
			$('div6').innerHTML=this.menucontent[this.index].No6;
			$('div7').innerHTML=this.menucontent[this.index].No7;
			$('div8').innerHTML=this.menucontent[this.index].No8;
			$('div9').innerHTML=this.menucontent[this.index].No9;
			if (this.index==0) {
//			top,left,width,height
				$('div1').style.top=50+'px';$('div1').style.left=50+'px';$('div1').style.width=200+'px';$('div1').style.height=200+'px';
				$('div2').style.top=50+'px';$('div2').style.left=300+'px';$('div2').style.width=100+'px';$('div2').style.height=200+'px';
				$('div3').style.top=50+'px';$('div3').style.left=450+'px';$('div3').style.width=100+'px';$('div3').style.height=200+'px';
				$('div4').style.top=50+'px';$('div4').style.left=600+'px';$('div4').style.width=100+'px';$('div4').style.height=200+'px';
				$('div5').style.top=300+'px';$('div5').style.left=50+'px';$('div5').style.width=95+'px';$('div5').style.height=100+'px';
				$('div6').style.top=300+'px';$('div6').style.left=155+'px';$('div6').style.width=95+'px';$('div6').style.height=100+'px';
				$('div7').style.top=300+'px';$('div7').style.left=300+'px';$('div7').style.width=100+'px';$('div7').style.height=100+'px';
				$('div8').style.top=300+'px';$('div8').style.left=450+'px';$('div8').style.width=100+'px';$('div8').style.height=100+'px';
				$('div9').style.top=300+'px';$('div9').style.left=600+'px';$('div9').style.width=100+'px';$('div9').style.height=100+'px';
//          color
				$('div1').style.backgroundColor='#3086b7';
				$('div2').style.backgroundColor='#b3d330';
				$('div3').style.backgroundColor='#35b9bf';
				$('div4').style.backgroundColor='#41a332';
				$('div5').style.backgroundColor='#7fd3ff';
				$('div6').style.backgroundColor='#ee5557';
				$('div7').style.backgroundColor='#3086b7';
				$('div8').style.backgroundColor='#35b9bf';
				$('div9').style.backgroundColor='#41a332';
			}
			if (this.index==1) {
				$('div1').style.top=100+'px';$('div1').style.left=100+'px';$('div1').style.width=100+'px';$('div1').style.height=100+'px';
//				$('div2').style.top=50+'px';$('div2').style.left=300+'px';$('div2').style.width=100+'px';$('div2').style.height=200+'px';
//				$('div3').style.top=50+'px';$('div3').style.left=450+'px';$('div3').style.width=100+'px';$('div3').style.height=200+'px';
//				$('div4').style.top=50+'px';$('div4').style.left=600+'px';$('div4').style.width=100+'px';$('div4').style.height=200+'px';
//				$('div5').style.top=300+'px';$('div5').style.left=50+'px';$('div5').style.width=95+'px';$('div5').style.height=100+'px';
//				$('div6').style.top=300+'px';$('div6').style.left=155+'px';$('div6').style.width=95+'px';$('div6').style.height=100+'px';
//				$('div7').style.top=300+'px';$('div7').style.left=300+'px';$('div7').style.width=100+'px';$('div7').style.height=100+'px';
//				$('div8').style.top=300+'px';$('div8').style.left=450+'px';$('div8').style.width=100+'px';$('div8').style.height=100+'px';
//				$('div9').style.top=300+'px';$('div9').style.left=600+'px';$('div9').style.width=100+'px';$('div9').style.height=100+'px';
				for (var i=1;i<document.getElementById('list1').getElementsByTagName('div').length;i++) {
					$('div'+i+'').style.backgroundColor='#41a332';
				}
			}
			if (this.index==2) {
				$('div1').style.top=150+'px';$('div1').style.left=150+'px';$('div1').style.width=100+'px';$('div1').style.height=100+'px';
				for (var i=1;i<document.getElementById('list1').getElementsByTagName('div').length;i++) {
					$('div'+i+'').style.backgroundColor='#7fd3ff';
				}
			}
		}
};