var data2301 = ["蒋天乐","罗博文","李彦尧","韦彩菊","唐俊辰","宋波进","黄凯旋","邓志凯","张耀誉","韦桂霞","曾令嘉","郑小柔","吕云飞","黄盈","黄照雷","杨浩","林国涛","韦振海","韦忠豪","黄朝涛","邓忠成","蓝玉婷","廖国锦","陆彦标","方小芬","龙乾峰","杨世庄","张宝戈","黄海霞","袁志宝","石雲超","黄锈婷","曾洁","莫会喜","秦德海","韦世武","蒙祖权","黄甫师","赖张麒","党莺灵"];

var data2302 = ["黄毅献","耿雪怡","陈秋丽","王茜","蒋雄彬","王淦涛","赖盛校","农千熠","袁梓强","李俊燊","韦秋社","卢天鸿","韦淋潇","王竑霖","赵华朗","谭威浪","杨露","黄山","莫雄","黎华芬","黄新培","黄宝岳","蓝虹体","韦海兵","陈志鸿","卢冰","陆心怡","覃焰龙","何雨","陈宛璐","马立福","方德文","杨律","胡桂凯","邓国义","苏明慧","张永烽","岑杰","陈海亮","钟玲丹"];

var data2303 = ["周大沛","曾宇晨","郑雅丹","梁广妹","庞文涛","吴先诚","李海丽","陆嘉瑜","葛东山","翁琬茸","李明涌","陈奕翔","梁桓溢","李光柳","林毅丰","吴泔琏","李怿宇","吴云理","钟荣升","罗宁","张欢亮","吴涣辉","刘慧娟","张依贝","黄祖驹","罗雨晴","梁德季","罗雪连","闭宗灿","张洋","莫其富","黄钰翔","李美玲","黄永旺","李兰","毛俞宣","郭柔柔","李岚","谭贞豪","莫伟杰"];

var ulobj = document.getElementById("nameData");
var lis = ulobj.children;
var myselect = document.getElementById('sclass');
var myclass = "-1";
myselect.onchange = function() {
    var bi = this.selectedIndex;
    var mybj = this[bi].value;
    myclass = mybj;
    if(mybj.indexOf("2301")>=0){
         mydata = data2301;
    } else if(mybj.indexOf("2302")>=0){
            mydata = data2302;
	} else{
         mydata = data2303;
    }
    
    for(var i=0;i<lis.length;i++){
        lis[i].innerHTML=mydata[i];
    }
}

var myNum = 0;
var numselect = document.getElementById('snum');
numselect.onchange = function() {
    var bi = this.selectedIndex;
    myNum = this[bi].value;
}

var btn1 = document.getElementById("btnstart");


btn1.onclick = function(){
    if(myclass=="-1"){
        alert('请选择班级！');
        return;
    }else if(myNum==0){
        alert('请选择人数！');
        return;
    }
    clearInterval(window.idTime);
    window.idTime =  setInterval(function(){
        for(var i=0;i<lis.length;i++){
            lis[i].style.backgroundColor="#CCC";
        }
    
        // var myNum = document.getElementById('num1').value;

        var mybian = [];
        while(mybian.length<myNum){
            var ba = Math.floor(Math.random()*(200-1)+1);
            ba %= 39;
            if(mybian.indexOf(ba)<0){
                mybian.push(ba);
            } 
        }
        if(mybian.length!=myNum){
            alert(myNum);
        }
        for(var i=0;i<mybian.length;i++){
            lis[mybian[i]].style.backgroundColor="red";
        }
    },100);
}

var btn2 = document.getElementById("btnend");
btn2.onclick = function(){
    clearInterval(window.idTime);
}