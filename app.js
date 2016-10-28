window.onload = function(){
	main.app.pullDown();
	main.app.disappear();
	main.app.userBuy();
	main.app.imageChange();
	main.app.tap();
	main.app.productList();
	main.app.slide();
	main.app.sportTab();
	main.app.play();
	main.app.evaluate();
	main.app.bar();
	main.app.buy();
	}

var main= {};

main.ui = {};
main.ui.tab = function(alist,blist,classname1,classname2){
	for(var i=0; i<alist.length; i++){
		(function(i){
			alist[i].onmouseover = function(){

				for(var j=0; j<blist.length; j++){
					blist[j].style.display = 'none';
					alist[j].className = classname1;
					}
				this.className = classname2;
				blist[i].style.display = 'block';
				}
			})(i)

		}
	}
/*轮播图*/
main.ui.play = function(oC,oS,oG,oB,liName){
	  var oC= document.getElementById(oC);
	  var oSl = document.getElementById(oS);
	  var oGo = document.getElementById(oG);
	  var oBack = document.getElementById(oB);
	  var aCircle = document.getElementsByClassName(liName);
	  var iNow = 0;
	  var timer = null;
	  var onOff = true;

	  oC.onmouseenter = function(){
		  oGo.style.display = 'block';
		  oBack.style.display = 'block';
		  clearInterval(timer);
		  }

	  oC.onmouseleave = function(){
		  oGo.style.display = 'none';
		  oBack.style.display = 'none';
		  autoPlay();
		  }

	  function color(){
		  for(var i=0; i<aCircle.length; i++){
			  aCircle[i].className = liName;
			  }
		  aCircle[iNow].className = liName + ' circle_active';
		  }

	  function play(){
		  //doMove ( oSl, 'left', 40, -339*iNow
		      startMove(oSl, {'left':-339*iNow},function(){
				  onOff = true;
				  if(iNow==4){
					  iNow = 0;
					  oSl.style.left = 0;
					  }
				  color();
				  });
		  }

	  function autoPlay(){
		 timer = setInterval(function(){
			  iNow++;
			  play();
			  },2000);
		  }

	  for(var i=0; i<aCircle.length; i++){

		  (function(i){
			  aCircle[i].onmouseover = function(){
				  iNow = i;
				  play();
				  color();
				  }
			  })(i)

		  }


	  oGo.onclick = function(){
		  if(onOff){
			  onOff = false;
			  iNow++;
			  }
		  play();

		  }

	  oBack.onclick = function(){
		  if(iNow==0){
			  iNow = 4;
			  oSl.style.left = -1356 + 'px';
			  }
		  if(onOff){
			  onOff = false;
			  iNow--;
			  }
		  startMove ( oSl, {'left' : -339*iNow} , function(){
			  onOff = true;
			  color();
		  })

		  }

	  autoPlay();
	}
main.app = {};

/*上部登录地点以及导航下拉菜单*/
main.app.pullDown = function(){
	var aPull= document.getElementsByClassName('pullDown');
	var aPullList = document.getElementsByClassName('pdList');
	var aArrow = document.getElementsByClassName('arrow');

	for(var i=0; i<aPull.length; i++){
		(function(i){
			aPull[i].onmouseover = function(){
				this.style.backgroundColor = '#fff';
				aPullList[i].style.display = 'block';
				aArrow[i].style.backgroundImage= 'url(img/arrow1.gif)';
				}
			aPull[i].onmouseout = function(){
				this.style.backgroundColor = '#f1f1f1';
				aPullList[i].style.display = 'none';
				aArrow[i].style.backgroundImage= 'url(img/arrow2.gif)';
				}
			})(i)
		}
	}

/*顶部广告消失*/
main.app.disappear = function() {
    var ad = document.getElementById('top_ad_wrap');
    var close = document.getElementById('close');

    close.addEventListener('click', function() {
        ad.classList.add('out');
    }, false);

    ad.addEventListener('transitionend', function() {
        ad.style.display = 'none';
    }, false);
};

/*购物车*/
main.app.userBuy = function(){
	var oBuy = document.getElementById('user_pay');
	var oDivide = oBuy.getElementsByClassName('divide')[0];
	var oPullDown = document.getElementById('user_pay_pullDown');
	oBuy.onmouseover = function(){
		oDivide.style.display = 'block';
		oPullDown.style.display = 'block';
		}
	oBuy.onmouseout = function(){
		oDivide.style.display = 'none';
		oPullDown.style.display = 'none';
		}
	}



/*快捷购买选项卡组*/
main.app.tap = function(){
	var aPull = document.getElementsByClassName('pull');
	var oPullDown = document.getElementById('quick_pullDown');
	var oUl = document.getElementById('four_options');
	var aLi = oUl.getElementsByTagName('li');
	var aDiv = document.getElementsByClassName('four_list');
	var aVanish = document.getElementsByClassName('vanish');
	var onOff = true;

	main.ui.tab(aLi,aDiv,'','fourActive');

	for(var i=0; i<aPull.length; i++){
		aVanish[i].onclick = function(){
			startMove(oPullDown, {top:208},function(){
				onOff = true;
				})
			}
		aPull[i].onmouseover = function(){
			if(onOff){
				startMove(oPullDown, {top:0},function(){
					onOff = false;
					})
				}

			}
		}
	}

/*上方商品目录选项卡*/
main.app.productList = function(){
	var aClassify = document.getElementsByClassName('classify');
	var aGoodList = document.getElementsByClassName('goodList');
	for(var i=0; i<aClassify.length; i++){
		(function(i){
			aGoodList[i].onmouseover = aClassify[i].onmouseover = function(){
				aClassify[i].style.display = 'block';
				}
			aGoodList[i].onmouseout = aClassify[i].onmouseout = function(){
				aClassify[i].style.display = 'none';
				}
			})(i)
		}
	}

/*今日推荐slide*/
main.app.slide = function(){
	var oOuter = document.getElementById('gallery_today_outer');
	var oInner = document.getElementById('gallery_today_inner');
	var oPrev = document.getElementsByClassName('slide_button_prev')[0];
	var oNext = document.getElementsByClassName('slide_button_next')[0];
	var iNow = 0;
	var onOff = true;

	oOuter.onmouseover = function(){
		oPrev.style.display = 'block';
		oNext.style.display = 'block';
		}
	oOuter.onmouseout = function(){
		oPrev.style.display = 'none';
		oNext.style.display = 'none';
		}

	oNext.onclick = function(){
		if(onOff){
			iNow++;
			onOff = false;
			}

		startMove(oInner, {left:-iNow*1000},function(){
			onOff = true;
			if(iNow==4){
				oInner.style.left = 0;
				iNow = 0;
				}
			});
		}
	oPrev.onclick = function(){
		if(iNow==0){
			oInner.style.left = -4000 + 'px';
			iNow = 4;
			}
		if(onOff){
			iNow--;
			onOff = false;
			}
		startMove(oInner, {left:-iNow*1000}, function(){
			onOff = true;
			});
		}
	}


/*分区内容轮播图*/
main.app.play = function(){
	main.ui.play('sport_o2','sport_slide_list','sport_go','sport_back','l1');

	main.ui.play('toy_o2','toy_slide_list','toy_go','toy_back','l2');

	main.ui.play('food_o2','food_slide_list','food_go','food_back','l3');
	}


/*分区选项卡*/
main.app.sportTab = function(){
	var aList1 = document.getElementsByClassName('sport_child');
	var aTab1 = document.getElementsByClassName('sport_tab');
	main.ui.tab(aTab1,aList1,'sport_tab','sport_tab borderActive');

	var aList2 = document.getElementsByClassName('toy_child');
	var aTab2 = document.getElementsByClassName('toy_tab');
	main.ui.tab(aTab2,aList2,'toy_tab','toy_tab borderActive');

	var aList3 = document.getElementsByClassName('food_child');
	var aTab3 = document.getElementsByClassName('food_tab');
	main.ui.tab(aTab3,aList3,'food_tab','food_tab borderActive');
	}

/*热门晒单*/
main.app.evaluate = function(){
	var oWrap = document.getElementById('evaluate');
	var oInner = oWrap.getElementsByTagName('ul')[0];

	var iNow = -4;
	setInterval(function(){
		iNow++;
		startMove ( oInner, {'top':120*iNow}, function(){
			if(iNow == 0){
				iNow = -4;
				oInner.style.top = -480 + 'px';
				}
			})
		},2000)
	}

/*滚动条*/
main.app.bar = function(){
	var oBar = document.getElementById('bar');
	var aLi = document.getElementsByClassName('elevator');
	var aUp = document.getElementsByClassName('up');
	var aDown = document.getElementsByClassName('down');
	oBar.style.top = (document.documentElement.clientHeight - 90)/2 + 'px';
	oBar.style.left = (document.documentElement.clientWidth - 1210)/2 - 40 + 'px';
	var h = { f0:700, f1:1600, f2:2100, f3:2650 }
	var timer = null;


	document.body.onscroll  = function(){
		var scrolltop = document.body.scrollTop || document.documentElement.scrollTop;
		for(var i=0; i<aDown.length; i++){
			aDown[i].style.display = 'none';
			aUp[i].style.display = 'block';
			}
		var y = scrolltop;
		if(y>h.f0){
			oBar.style.display = 'block';
			if(y>=h.f0&&y<h.f2){
				aDown[0].style.display = 'block';
				aUp[0].style.display = 'none';
				}
			if(y>=h.f2&&y<h.f3){
				aDown[1].style.display = 'block';
				aUp[1].style.display = 'none';
				}
			if(y>=h.f3){
				aDown[2].style.display = 'block';
				aUp[2].style.display = 'none';
				}
			}
		else{
			oBar.style.display = 'none';
			}
		}

	for(var i=0; i<aLi.length; i++){
		(function(i){
			aLi[i].onclick = function(){
				clearInterval(timer);
				var scrolltop = document.body.scrollTop || document.documentElement.scrollTop;
				var iNow = scrolltop;
				var j = i+1;
				if(iNow > h['f'+j]){
					timer = setInterval(function(){
						iNow = iNow -50;
						if(iNow<h['f'+j]){
							 iNow = h['f'+j];
							 clearInterval(timer);
							 }
						document.documentElement.scrollTop = iNow;
						document.body.scrollTop  = iNow;
						},30)
					}
				else{
					timer = setInterval(function(){
						iNow = iNow + 50;
						if(iNow>h['f'+j]){
							iNow = h['f'+j]
							clearInterval(timer);
							}
						document.documentElement.scrollTop = iNow;
						document.body.scrollTop  = iNow;
						},30)
					}
				}
			})(i)
		}

	}

/*右侧购物车*/
main.app.buy = function(){
	var aBtn = document.getElementsByClassName('menu_block_child');
	var oMain = document.getElementById('right_buy_wrap');
	var oMenu = document.getElementById('menu_block');
	var oClose = document.getElementById('right_buy_close');
	var onOff = true;

	oMenu.style.display = 'block';
	oMenu.style.top = document.documentElement.clientHeight/2 - 105 + 'px'

	aBtn[1].onclick = aBtn[3].onclick = function(){
		if(onOff){
			startMove ( oMain, {'right': 0});
			}
		else{
			startMove ( oMain, {'right': -288});
			}
		onOff = !onOff;
		}
	oClose.onclick = function(){
		startMove ( oMain, {'right': -288});
		onOff = !onOff;
		}
	}


main.app.imageChange = function() {
    var flash = document.getElementById('flash');
    var pic = document.getElementById('pic');
    var PList = pic.getElementsByTagName('li');
    var num = document.getElementById('num');
    var numList = num.getElementsByTagName('li');
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    var index = 0;
    var timer = null;

    //点击左箭头


    left.onclick = function() {
        index--;
        if (index < 0) {
            index = 5;
        }
        change(index);
    }

    //点击右箭头

    right.onclick = function() {
        index++;
        if (index >= numList.length) {
            index = 0;
        }
        change(index);
    }

    //当鼠标停留在图片上面时候，停止计时器
    flash.onmouseover = function() {
        clearInterval(timer);
    }

    //当鼠标离开图片时候，开始计时器
    flash.onmouseout = function() {
        timer = setInterval(run, 2000);
    }

    //当鼠标停留在页签上时，停止计时器并手动切换
    for (var i = 0; i < numList.length; i++) {
        numList[i].a = i;
        numList[i].onmouseover = function() {
            clearInterval(timer);
            change(this.a);
            //这里卡了好久 忘记change()传的参数是number

        }
    }
    //定义计时器
    timer = setInterval(run, 2000);

    //封装函数run

    function run() {
        index++;
        if (index >= numList.length) {
            index = 0;
        }
        change(index);
    }

    //封装函数change()

    function change(curIndex) {
        for (var i = 0; i < numList.length; i++) {
            PList[i].style.display = 'none';
            numList[i].className = '';
        }
        PList[curIndex].style.display = 'block';
        numList[curIndex].className = 'active';
    }
}
