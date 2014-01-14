##Buttons
JMUI提供了基础样式，使用下面的class，可以快速的建立带有样式的按钮。

	<a class="btn btn-primary">我知道了</a>
	<a class="btn btn-primary btn-disabled">我知道了</a>

	<a class="btn btn-danger">取消设置</a>
	<a class="btn btn-danger btn-disabled">取消设置</a>

	<a class="btn btn-info">消息设置</a>
	<a class="btn btn-info btn-disabled">消息设置</a>
###Block Buttons
	
	<a class="btn btn-primary btn-block">立即启用</a>
	<a class="btn btn-danger btn-block">退出登录</a>
	<a class="btn btn-info btn-block">编辑资料</a>

###Button Groups

	<div id="w_v_btn_list" class="btn_group vertical">
		<button class="btn btn_white"><span class="btn_text">1</span></button>
		<button class="btn btn_white"><span class="btn_text">2</span></button>
		<button class="btn btn_white"><span class="btn_text">3</span></button>
	</div>
	<div id="b_v_btn_list" class="btn_group vertical" style="width:150px;float:left;">
		<button class="btn btn_black"><span class="btn_text">1</span></button>
		<button class="btn btn_black"><span class="btn_text">2</span></button>
		<button class="btn btn_black"><span class="btn_text">3</span></button>
	</div>

##Checkboxes

	<label id="checkbox" class="checkbox checkbox_white" for="cb0" style="margin:20px 0;">
		<input id="cb0" name="cb0" type="checkbox" />
		<span class="checkbox_text">0</span>
	</label>


	<fieldset id="bl_checkboxlist" class="checkbox_group">
		<label class="checkbox checkbox_black" for="cb11">
			<input id="cb11" name="cb11" type="checkbox" />
			<span class="checkbox_text">1</span>
		</label>

		<label class="checkbox checkbox_black" for="cb12">
			<input id="cb12" name="cb12" type="checkbox" />
			<span class="checkbox_text">2</span>
		</label>

		<label class="checkbox checkbox_black" for="cb13">
			<input id="cb13" name="cb13" type="checkbox" />
			<span class="checkbox_text">3</span>
		</label>
	</fieldset>


	<fieldset id="v_checkboxlist" class="checkbox_group vertical" style="margin-top:10px">
		<label class="checkbox checkbox_white" for="cb4">
			<input id="cb4" name="cb4" type="checkbox" />
			<span class="checkbox_icon"></span>
			<span class="checkbox_text">1</span>
		</label>

		<label class="checkbox checkbox_white" for="cb5">
			<input id="cb5" name="cb5" type="checkbox" />
			<span class="checkbox_icon"></span>
			<span class="checkbox_text">2</span>
		</label>

		<label class="checkbox checkbox_white" for="cb6">
			<input id="cb6" name="cb6" type="checkbox" />
			<span class="checkbox_icon"></span>
			<span class="checkbox_text">3</span>
		</label>
	</fieldset>

	<fieldset id="bl_v_checkboxlist" class="checkbox_group vertical" style="margin-top:10px">
		<label class="checkbox checkbox_black" for="cb14">
			<input id="cb14" name="cb14" type="checkbox" />
			<span class="checkbox_icon"></span>
			<span class="checkbox_text">1</span>
		</label>

		<label class="checkbox checkbox_black" for="cb15">
			<input id="cb15" name="cb15" type="checkbox" />
			<span class="checkbox_icon"></span>
			<span class="checkbox_text">2</span>
		</label>

		<label class="checkbox checkbox_black" for="cb16">
			<input id="cb16" name="cb16" type="checkbox" />
			<span class="checkbox_icon"></span>
			<span class="checkbox_text">3</span>
		</label>
	</fieldset>

## Radios

	<label id="bl_radio" for="radio21" class="radio radio_black" style="margin:20px 0;">
		<input id="radio21" type="radio" name="radio" value="0"/>
		<span class="radio_text">0</span>
	</label>

	<fieldset id="radioList" class="radio_group">
		<label for="radio1" class="radio radio_white">
			<input id="radio1" type="radio" name="radio" value="1"/>
			<span class="radio_text">1</span>
		</label>

		<label for="radio2" class="radio radio_white">
			<input id="radio2" type="radio" name="radio" value="2"/>
			<span class="radio_text">2</span>
		</label>

		<label for="radio3" class="radio radio_white">
			<input id="radio3" type="radio" name="radio" value="3"/>
			<span class="radio_text">3</span>
		</label>
	</fieldset>
	<fieldset id="v_radioList" class="radio_group vertical" style="margin-top:10px;">
		<label for="radio4" class="radio radio_white">
			<input id="radio4" type="radio" name="radio" value="4"/>
			<span class="radio_icon"></span>
			<span class="radio_text">4</span>
		</label>

		<label for="radio5" class="radio radio_white">
			<input id="radio5" type="radio" name="radio" value="5"/>
			<span class="radio_icon"></span>
			<span class="radio_text">5</span>
		</label>
		<label for="radio6" class="radio radio_white">
			<input id="radio6" type="radio" name="radio" value="6"/>
			<span class="radio_icon"></span>
			<span class="radio_text">6</span>
		</label>
	</fieldset>

	<fieldset id="v_bl_radioList" class="radio_group vertical" style="margin-top:10px;">
		<label for="radio24" class="radio radio_black">
			<input id="radio24" type="radio" name="radio" value="4"/>
			<span class="radio_icon"></span>
			<span class="radio_text">4</span>
		</label>

		<label for="radio25" class="radio radio_black">
			<input id="radio25" type="radio" name="radio" value="5"/>
			<span class="radio_icon"></span>
			<span class="radio_text">5</span>
		</label>

		<label for="radio26" class="radio radio_black">
			<input id="radio26" type="radio" name="radio" value="6"/>
			<span class="radio_icon"></span>
			<span class="radio_text">6</span>
		</label>
	</fieldset>

##Progress
	
	<div id="progress" class="progress" style="margin-top:20px;">
		<div class="progress_wrap">
			<span class="bar_text"></span>
			<div class="bar bar_image"></div>
		</div>
	</div>
	<div id="progress_g" class="progress" >
		<div class="progress_wrap">
			<span class="bar_text"></span>
			<div class="bar bar_green"></div>
		</div>
	</div>
	<div id="progress_b" class="progress" >
		<div class="progress_wrap">
			<span class="bar_text"></span>
			<div class="bar bar_blue"></div>
		</div>
	</div>
	<div id="progress_y" class="progress">
		<div class="progress_wrap">
			<span class="bar_text"></span>
			<div class="bar bar_yellow"></div>
		</div>
	</div>

## Text Input

	<p>
	<input type="text" class="input input_white" placeholder="text input" style="margin-top:20px;"></input>
	<textarea id="textarea" class="input input_white" placeholder="textarea" style="margin-top:10px;"></textarea>
	</p>
	<p>
	<div class="input_group" style="margin-top:10px;">
		<input type="text" class="input input_white" placeholder="text input"></input>
		<input type="text" class="input input_white" placeholder="text input"></input>
		<input type="text" class="input input_white" placeholder="text input"></input>
	</div>
	</p>

	<p>
	<div class="icon_input icon_input_white" style="margin-top:20px;">
		<span class="input_icon"></span>
		<input type="text" placeholder="icon input"/>
	</div>
	</p>
	<p>
	<textarea id="autoGrowTextArea" class="input input_white" placeholder="auto grow textarea" style="margin-top:10px;"></textarea>
	</p>
	<p>
	<div class="icon_input_group" style="margin-top:10px;">
		<div class="icon_input icon_input_white">
			<span class="input_icon"></span>
			<input type="text" placeholder="icon input" />
		</div>
		<div class="icon_input icon_input_white">
			<span class="input_icon"></span>
			<input type="text" placeholder="icon input"/>
		</div>
		<div class="icon_input icon_input_white">
			<span class="input_icon"></span>
			<input type="text" placeholder="icon input" />
		</div>
	</div>
	</p>

----

##Toggle Switch

	<div id="toggleSwitch" class="toggle_switch" style="display:block;margin-top:20px;">
		<div class="toggle_wrap">
			<div class="toggle_text">
				<span class="toggle_text_blue">on</span>
				<span class="toggle_text_white">off</span>
			</div>
			<a class="toggle_handler toggle_handler_white"></a>
		</div>
	</div>
	<div id="bl_toggleSwitch" class="toggle_switch" style="display:block;margin-top:30px;">
		<div class="toggle_wrap">
			<div class="toggle_text">
				<span class="toggle_text_blue">on</span>
				<span class="toggle_text_black">off</span>
			</div>
			<a class="toggle_handler toggle_handler_black"></a>
		</div>
	</div>

同样的它也需要的少许js
	
	//toggleSwitch
	var ts = new MUI.ToggleSwitch({
	id:"toggleSwitch"
	});
	var bl_ts = new MUI.ToggleSwitch({
	id:"bl_toggleSwitch"
	});
	var b_ts = new MUI.ToggleSwitch({
	id:"b_toggleSwitch"
	});

##Image Switch

	<div id='image_slider' class='imagechange' style="margin-top:20px;">
		<div class="wrap">
			<div>
				<img src="http://www.cnblogs.com/images/cnblogs_com/Cson/290336/t_3a.jpg">
			</div>
			<div>
				<img src="http://www.cnblogs.com/images/cnblogs_com/Cson/290336/t_436d106e37b424ba42169473.jpg">
			</div>
			<div>
				<img src="http://www.cnblogs.com/images/cnblogs_com/Cson/290336/t_6a.jpg">
			</div>
			<div>
				<img src="http://www.cnblogs.com/images/cnblogs_com/Cson/290336/t_10a.jpg">
			</div>
			<div>
				<img src="http://www.cnblogs.com/images/cnblogs_com/Cson/290336/t_1a.jpg">
			</div>
		</div>
		<ul class="btnsWrap">
		</ul>
	</div>

同样的它也需要的少许js

	//imagechange
	var ic = new MUI.ImageChange({
	id:"image_slider",
	isAutoChange:true,
	autoChangeTime:3000,
	canSwipe:true
	});

##Select

	<div id="g_menuSelector" class="select select_green" style="margin-top:20px;">
		<span class="select_text"></span>
		<select>
			<option>cson</option>
			<option>小c</option>
		</select>
	</div>

同样的它也需要的少许js

	var g_sel = new MUI.Select({
	id:"g_menuSelector"
	});

##Slider

	<div id="slider" class="slider slider_white" style="margin-top:20px;">
		<input type="range" />
		<a class="slider_handler"></a>
	</div>		
	
	<div id="v_slider" class="slider slider_white vertical" style="float:left;">
		<input type="range" />
		<a class="slider_handler"></a>
	</div>	
	

同样的它也需要少许js

	var sl = new MUI.Slider({
		id:"slider"
	});

	var v_sl = new MUI.Slider({
		id:"v_slider",
		vertical:true
	});

##Dialog

Dialog我们做到尽量模拟原生态的移动弹出窗口形式

	<input id="none" type="button" value="none effect" class="dialogbtn">
	<input id="fade" type="button" value="fade effect" class="dialogbtn">
	<input id="pop" type="button" value="pop effect" class="dialogbtn">

	<div class="row" style="height:0;">
		<div class="mask" style="z-index: 1000;"></div>

		<div id="dialog" class="dialog" style="z-index: 1001;margin:0;left:23%;top:-300px;">
			<div class="header">
				<h4>Dialog Header</h4>
			</div>
			<div class="content">
				<p style = "line-height:80px;text-align:center;font-size:36px;color:#333;cursor:pointer">
				click me to hide
				</p>
			</div>
		</div>
	</div>

js代码

	//dialog
	var currentEffect,
		currentDialogFlg;

	var dialog = new MUI.Dialog({
		id:"dialog"
	});
	dialog.elem.onclick = function(){
		dialog.hide(currentEffect);
		currentDialogFlg = false;
	}	

	$E.on($D.id("none"),"click",function(){
		currentEffect = "none";
		dialog.show("none");
		currentDialogFlg = true;
	});
	$E.on($D.id("fade"),"click",function(){
		currentEffect = "fade";
		dialog.show("fade");
		currentDialogFlg = true;
	});
	$E.on($D.id("pop"),"click",function(){
		currentEffect = "pop";
		dialog.show("pop");
		currentDialogFlg = true;
	});

##ToolBar

	<div class="toolbar_header header_black">
		<h1 style="color:white;">header</h1>
	</div>
	<p>content</p>
	<p>content</p>
	<p>content</p>
	<div class="toolbar_footer footer_black">
		<h4 style="color:white;">footer</h4>
	</div>

##List and Group List

	<ul id="list1" class="list list_white conner_round_vertical_group" style="margin-top:30px;">
		<li class="list_item">
		<a  class="list_text">ListItemA</a>
		</li>
		<li class="list_item">
		<a  class="list_text">ListItemB</a>
		</li>
		<li class="list_item">
		<a  class="list_text">ListItemC</a>
		</li>
	</ul>

	<ul id="groupList" class="group_list" style="margin-top:20px;">
		<li class="list_group">
		<div class="list_group_title list_group_blue_title">
			<h4>Group1</h4>
		</div>
		<div class="list_group_body">
			<ul class="list list_white">
				<li class="list_item">
				<a  class="list_text">ListItemA</a>
				</li>
				<li class="list_item">
				<a  class="list_text">ListItemB</a>
				</li>
				<li class="list_item">
				<a  class="list_text">ListItemC</a>
				</li>
			</ul>
		</div>
		</li>	
		<li class="list_group">
		<div class="list_group_title list_group_blue_title">
			<h4>Group2</h4>
		</div>
		<div class="list_group_body">
			<ul class="list list_white">
				<li class="list_item">
				<a  class="list_text">ListItemA</a>
				</li>
				<li class="list_item">
				<a  class="list_text">ListItemB</a>
				</li>
				<li class="list_item">
				<a  class="list_text">ListItemC</a>
				</li>
			</ul>
		</div>
		</li>	
	</ul>

所需js代码如下

	//list
	var list1 = new MUI.List({
	id:"list1"
	});

	var groupList = new MUI.GroupList({
	id:"groupList"
	});

----

##Tab

	<div id="a_tab" class="tab">
		<ul class="tab_head">
			<li class="active">head_1</li>
			<li>head_2</li>
			<li>head_3</li>
			<li>head_4</li>
		</ul>
		<ul class="tab_body">
			<li>
				<div>tab-body-1</div>
			</li>
			<li>
				<div>tab-body-2</div>
			</li>
		
			<li>
				<div>tab-body-3</div>
			</li>
			<li>
				<div>tab-body-4</div>
			</li>
		</ul>
	</div>

所需js
	
	var tb2 = new MUI.Tab({
		id:"a_tab",
		animate:"true"
	});

##拖动切换

	<div id='slider' class='swipeChange'>
		<div class="wrap">
			<div><div>1</div></div>
			<div><div>2</div></div>
			<div><div>3</div></div>
			<div><div>4</div></div>
			<div><div>5</div></div>
		</div>
	</div>

所需js
	
	var sc = new MUI.SwipeChange({
		id:"slider",
		currentIndex:1,
		canSwipe:true
	});