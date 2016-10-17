window.onload = function(){
    main.app.disappear();
    main.app.pullDown();
    main.app.userBuy();
    main.app.imageChange();
    main.app.tap();
};
var main={};

main.app = {};

main.app.pullDown = function(){
    var aPull = document.getElementsByClassName('pullDown');
    var aPullList = document.getElementsByClassName('pdList');
    var aArrow = document.getElementsByClassName('arrow');

    for(var i = 0; i<aPull.length;i++){
        (function(i){
            aPull[i].onmouseover = function(){
                this.style.backgroundColor = '#fff';
                aPullList[i].style.display = 'block';
                aArrow[i].style.backgroundImage = 'url(img/arrow1.gif)';
            }
            aPull[i].onmouseout = function(){
                this.style.backgroundColor = '#f1f1f1';
                aPullList[i].style.display = 'none';
                aArrow[i].style.backgroundImage = 'url(img/arrow2.gif)';
            }
        })(i)
    }
}

main.app.disappear = function(){
    var ad = document.getElementById('top_ad_wrap');
    var close = document.getElementById('close');

    close.addEventListener('click',function(){
        ad.classList.add('out');
    },false);

    ad.addEventListener('transitionend',function(){
        ad.style.display = 'none';
    },false);
};

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

// 轮播图
main.app.imageChange= function(){
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


    left.onclick = function(){
        index-- ;
        if(index < 0 ){
            index = 5 ;
        }
        change(index);
    }

    //点击右箭头

    right.onclick = function(){
        index++ ;
        if(index>=numList.length){
            index = 0;
        }
        change(index);
    }

    //当鼠标停留在图片上面时候，停止计时器
    flash.onmouseover = function(){
        clearInterval(timer);
    }

    //当鼠标离开图片时候，开始计时器
    flash.onmouseout = function(){
        timer = setInterval(run,2000);
    }

    //当鼠标停留在页签上时，停止计时器并手动切换
    for(var i = 0; i<numList.length; i++){
        numList[i].a = i;
        numList[i].onmouseover = function(){
            clearInterval(timer);
            change(this.a);
            //这里卡了好久 忘记change()传的参数是number

        }
    }
    //定义计时器
    timer = setInterval(run,2000);

    //封装函数run

    function run(){
        index++;
        if(index>=numList.length){
            index = 0;
        }
        change(index);
    }

    //封装函数change()

    function change(curIndex){
        for(var i = 0; i<numList.length; i++){
            PList[i].style.display = 'none';
            numList[i].className = '';
        }
        PList[curIndex].style.display = 'block';
        numList[curIndex].className = 'active';
    }
}

// main.ui = {};
// main.ui.tab = function(alist,blist,classname1,classname2){
//     for(var i = 0; i<alist.length; i++){
//         (function(i){
//             alist[i].onmouseover = function(){
//                 for(var j = 0; j<blist.length; j++){
//                     blist[j].style.display = 'none';
//                     alist[j].className = classname1;
//                 }
//                 this.className = classname2;
//                 blist[i].style.display = 'block';
//             }
//         })(i)
//     }
// }
main.app.tap = function(){
    var aPull = document.getElementsByClassName('pull');
    var oPullDown = document.getElementById('quick_pullDown');
    var oUl = document.getElementById('four_options');
    var aLi = oUl.getElementsByTagName('li');
    var aDiv = document.getElementsByClassName('four_list');
    var aVanish = document.getElementsByClassName('vanish');
    var onOff = true;
    // var top1 = 208;
    // var top2 =0;

    for(var i = 0; i<aLi.length; i++){
        (function(i){
            aLi[i].onmouseover = function(){
                for(var j = 0; j<aDiv.length; j++){
                    aDiv[j].style.display = 'none';
                }
                aDiv[i].style.display = 'block';
            }
        })(i)
    };

    for(var i = 0; i<aPull.length; i++){
        aVanish[i].onclick = function(){
            oPullDown.style.top = '208px';
            onOff = true;
        }

        aPull[i].onmouseover = function(){
            if(onOff){
                oPullDown.style.top = '0px';
                onOff = false;
            }
        }
        }
    }
