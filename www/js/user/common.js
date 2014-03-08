$(function() {

	//defult set
	var _sideBarCt = $('#sideBar-Container');
	var _sideBar = $('#sideBar');
	var _bMenu = $('#btn_menu');
	var deviceH = screen.height;

	window.onload=function() {
		sideBar.def();
	};

	function SideBar () {
		this.sideBarCt = _sideBarCt,
		this.def = function() {
			_sideBarCt.css("height",deviceH + "px");
		},
		this.open = function () {
			_sideBarCt.css({"z-index":"10000","opacity":"1"});
		},
		this.click = function(e) {
			var targetId = e.target.id;
			if(targetId !== "sideBar") {
				this.close();
			} else {
				this.menu(targetId);
			}
		},
		this.menu = function(id) {
			console.log(id);
		},
		this.close = function () {
			_sideBarCt.css({"z-index":"0","opacity":"0"});	
		}
	};
	var sideBar = new SideBar;

	function BtnMenu() {
		this.click = function (e) {
			sideBar.open();
		}
	}
	var btnMenu = new BtnMenu;

	_bMenu.click(function(e) {
		btnMenu.click(e);
	});
	_sideBarCt.click(function(e) {
		sideBar.click(e);
	})


})