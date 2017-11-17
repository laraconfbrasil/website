function qs(el){
    return document.querySelector(el);
};

function qsa(el){
    return document.querySelectorAll(el);
};

var cabecalho = document.getElementById('header');

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

[].forEach.call(qsa("#header a"),function (el){
    el.onclick=function (ev){
        ev.preventDefault();
        var sectionId = el.getAttribute('href');
        var sectionY = qs(sectionId).offsetTop - 60;
        var windowY = window.pageYOffset;
        var diff =  sectionY - windowY;

        qs("#header nav").setAttribute('class','');

        animate(1000,function (prop){
            var newScrollYValue = (diff*prop) + windowY;
            window.scrollTo(0,newScrollYValue);
        });
    }
});

document.onready=function (ev){
    qs("#sympla-widget-169502").style = '';

    [].forEach.call(qsa('.grade'), function (element) {
        element.onclick = function (event) {
            event.preventDefault();

            if (this.id == 'dia17') {
                qs('#grade-dia17').className = '';
                qs('#grade-dia18').className = 'esconder';

                qs('#dia17').className = 'active';
                qs('#dia18').className = 'grade';
            } else {
                qs('#grade-dia17').className = 'esconder';
                qs('#grade-dia18').className = '';

                qs('#dia17').className = 'grade';
                qs('#dia18').className = 'active';
            }
        }
    });
}

qs("#btnHamburgerMenu").onclick = function(ev){
    ev.preventDefault();
    var classValue = (qs("#header nav").getAttribute("class") == "opened")? "":"opened";
    qs("#header nav").setAttribute("class",classValue);
}

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
