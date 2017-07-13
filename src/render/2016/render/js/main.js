function qs(el){
    return document.querySelector(el);
};
function qsa(el){
    return document.querySelectorAll(el);
};

var cabecalho = document.getElementById('header'),
    banner = document.getElementById('banner');


var sectionsIds = [
    "#sobre",
    "#palestrantes",
    "#programacao",
    "#parcerias",
    "#onde",
    "#ingressos",
    "#contato",
    "#dicas"
];
var sections = [];
for (var i = 0; i < sectionsIds.length; i++) {
    var id = sectionsIds[i];
    sections.push(qs(id));
}
function changeBodyClass(section){
    var idName = section.getAttribute('id');
}


// HANDLERS

var interval;
function animate(time,callback){
    var now = new Date();

    clearInterval(interval);
    var go = function (){
        var timePassed = new Date() - now;
        var prop = timePassed/time;
        
        if (timePassed < time){
            interval = setTimeout(function (){
                go();
            },1000/60)
        }else{
            prop = 1;
        }
        if (callback)
            callback( 1 - Math.pow(1 - prop,3));
    }
    go();
}

[].forEach.call(qsa("#header a, #banner .wrapper > a"),function (el){
    el.onclick=function (ev){
        ev.preventDefault();
        var sectionId = el.getAttribute('href');
        var sectionY = qs(sectionId).offsetTop - 60;

        var windowY = window.pageYOffset;
        var diff =  sectionY - windowY;


        console.log(sectionY);
        qs("#header nav").setAttribute('class','');
        animate(1000,function (prop){
            // console.log(prop);
            var newScrollYValue = (diff*prop) + windowY;
            // console.log(newScrollYValue);
            window.scrollTo(0,newScrollYValue);
        });
    }
});

// onready
document.onready=function (ev){
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var firstDate = new Date();
    var secondDate = new Date(2016,09,08);

    var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
    qs("#banner .day").innerHTML = (diffDays == 0) ? 1 : diffDays;
}

// ONCLICK
qs("#btnHamburgerMenu").onclick=function(ev){
    ev.preventDefault();
    var classValue = (qs("#header nav").getAttribute("class") == "opened")? "":"opened";
    qs("#header nav").setAttribute("class",classValue);
}

// ONSCROLL
window.onscroll=function (ev){
    var 
    y = window.scrollY,
    menuHeight = qs("#header").offsetHeight;
    
    if (y > menuHeight){
        cabecalho.className = "active";
    }else{
        cabecalho.className = "";
    }
};


function _animarComClasse(collection){
    var i = 0;
    [].forEach.call(collection,function (el){
        (function (el){
            var cl = el.getAttribute('class');
            cl = cl.replace('animate-hide','').trim();
            setTimeout(function (){
                el.setAttribute('class', cl);
            },i*300);
        })(el);
        i++;
    });
}



window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

if (mobileAndTabletcheck()){
    
    // qs('.video video').remove();

}




// var parceiros = document.querySelector('#parceiros .slider');
// var parceirosHeight = parceiros.offsetHeight;
// var parceirosLogos = document.querySelectorAll('#parceiros .slider img');

// for (var i = 0; i < parceirosLogos.length; i++) {

//     var parceiro = parceirosLogos[i];
//     var offsetImg = (parceirosHeight - 70) - (parceiro.offsetHeight / 2);
//     parceiro.style.marginTop = ''+offsetImg+'px';
// }



// $('#parceiros .slider').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     arrows: false,
//     variableWidth: true,
//     adaptiveHeight: true,
//     autoplaySpeed: 2000,
// });
