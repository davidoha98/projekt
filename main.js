var sec = 60; var nek = 0; var lifney = 0; var fish = 0; var namb = 10; var rama = 1; var start1 = 0; var hovwered = 1;
function start() {
    start1 = 1;
    koteret()
    t = setInterval(timer, 1000);
}
function koteret() {
    var threedee1 = document.querySelector(".threedee1");
    var threedee2 = document.querySelector(".threedee2");
    if (start1 == 1) {
        threedee2.style.display = "block";
        threedee1.style.display = "none";
    } else {
        threedee2.style.display = "none";
        threedee1.style.display = "block";
    }
}
function leahar() {
    if (start1 == 1) {
        if (hovwered == 1) {
            hovwered = 0;
            s = setTimeout(random, 300 - (rama - 1) * 50);
        }
    }
}
function miyad() {
    if (start1 == 1) {
        hovwered = 0;
        m = setTimeout(random, 0);
    }
}
function timer() {
    if (start1 == 1) {
        if (sec > 0) {
            sec--;
            document.querySelector("#timer").innerHTML = (sec);
        }
        else {
            yafe.style.animation = "none";
            sec = 60;
            document.querySelector("#timer").innerHTML = (sec);
            start1 = 0; addplayer();
        }
    }
}
var yafe = document.querySelector(".mistovev");
function startTimer() {
    if (start1 == 1) {
        yafe.style.animation = "rotation 1s infinite linear";
    }
}
function lehitzot() {
    if (start1 == 1) {
        nek += rama * 10; namberaluf()
        document.querySelector("#nekudot").innerHTML = (nek);
    }
}
function smol() {
    if (start1 == 1) {
        fish++;
        nek -= rama;
        document.querySelector("#fishulim").innerHTML = (fish);
        document.querySelector("#nekudot").innerHTML = (nek);
    }
}
function namberaluf() {
    namb--;
    document.querySelector("#namberaluf").innerHTML = (namb);
    if (namb < 1) {
        rama++;
        sec += 10;
        namb = 10;
        document.querySelector("#rama").innerHTML = (rama);
        document.querySelector("#namberaluf").innerHTML = (namb);
        document.querySelector("#timer").innerHTML = (sec);
    }
}
function random() {
    if (start1 == 1) {
        if (hovwered != 1) {
            var blueMassElement = document.getElementById('mistovev');
            var documentHeight = document.documentElement.clientHeight;
            var documentWidth = document.documentElement.clientWidth;
            currentTop = Math.floor(Math.random() * documentHeight) % 470;
            currentLeft = Math.floor(Math.random() * documentWidth) % 640;
            blueMassElement.style.left = currentLeft + "px";
            blueMassElement.style.top = currentTop + "px";
            hovwered = 1;
        }
    }
};
var player = [
    { names: "דוד", tactical: "2", dates: "08/15/2018", },
    { names: "חיים", tactical: "1", dates: "04/08/2004", },
    { names: "זבולון", tactical: "5", dates: "06/13/2020", },
    { names: "עובדיה", tactical: "4", dates: "12/22/1987", },
    { names: "יוסף", tactical: "3", dates: "06/01/1999", },];
player.sort(function (b, a) {
    return a.tactical - b.tactical
})
var playerjson = localStorage.getItem("allplayers");
bdika()
function bdika() {
    if (playerjson != null) {
        var arr = JSON.parse(playerjson);
        if (arr.length > 0) {
            var listplayer = arr.splice(0, 5)
            player = listplayer;
        }
    }
}
var main = document.querySelector(".main");
createHTML();
function createHTML() {
    var toAppend = "";
    player.forEach(function (playerfix,) {
        toAppend += `
        <span class="tooltip">${playerfix.tactical} ${playerfix.names}
        <span class="tooltiptext"> ${playerfix.dates}</span></span><br>`
    });
    main.innerHTML = toAppend;
}
var now = new Date();
var daviz = (now.getDate()) + "/" + (now.getMonth() + 1) + "/" + (now.getFullYear());
function addplayer() {
    if (nek > player[4].tactical) {
        alert("כל הכבוד...\nצברתם  " + nek + "  נקודות חיוביות,\nעם  " + fish + "  נקודות החמצה.\nולפי כמות הנקודות שצברתם תוכלו להיכנס כעת לרשימת האלופים,");
        while (names == "" || names == null) {
            var names = prompt("הכנס את שמך בכדי להיכנס לרשימת האלופים");
        }
        var tactical = nek;
        var dates = daviz;
        var newplayer = {
            names: names,
            tactical: tactical,
            dates: dates,
        };
        point = tactical;
        player.push(newplayer);
        player.sort(function (b, a) {
            return a.tactical - b.tactical
        })
        updatingjson()
        var newSpan = document.createElement("sapn");
        var i = player.length - 1;
        newSpan.id = "newplayer";
        newSpan.className = "newplayer";
        createHTML();
        function createHTML() {
            var toAppend = "";
            var hi = player.splice(0, 5)
            for (let i = 0; i < 1; i++) {
                hi.forEach(function (player,) {
                    toAppend += `<span class="tooltip">${player.tactical} ${player.names}
                    <span class="tooltiptext"> ${player.dates}</span></span>
                    <br>`});
                main.innerHTML = toAppend;
            }
        }
        koteret(), bdika(), ipus()
    } else {
        alert(`עליך להשיג יותר נקודות מהאחרון ברשימה מצד ימין בשביל להיכנס לרשימת ציונים גבוהים \n
        \nלא נורא אפשר תמיד לנסות עוד פעם!!`)
        start1 = 0;
        koteret(), bdika(), ipus()
    }
}
function updatingjson() {
    var playerjson = JSON.stringify(player);
    localStorage.setItem("allplayers", playerjson)
}
function stop() {
    clearInterval(t);
    yafe.style.animation = "none";
    start1 = 0;
    document.querySelector("#timer").innerHTML = (sec);
    koteret()
}
function ipus() {
    sec = 60; nek = 0; fish = 0; namb = 10; rama = 1; start1 = 0;
    document.querySelector("#timer").innerHTML = (sec);
    document.querySelector("#nekudot").innerHTML = (nek);
    document.querySelector("#fishulim").innerHTML = (fish);
    document.querySelector("#namberaluf").innerHTML = (namb);
    document.querySelector("#rama").innerHTML = (rama);
    clearInterval(t);
    var blueMassElement = document.getElementById('mistovev');
    blueMassElement.style.left = 0 + "px";
    blueMassElement.style.top = 0 + "px";
}