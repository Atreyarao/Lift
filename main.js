var lift = document.getElementById("li");

function moveU() {
    var liftFloor = lift.dataset.floor;
    if (liftFloor !== "1") {
        alert("Already Up");
        return;
    }
    move("320px", () => {
        lift.dataset.floor = "2";
        lift.style.top = "320px";
        var sup = document.getElementById("Sup");
        if (sup.dataset.set === "0") move("0", () => {
            lift.dataset.floor = "3";
            lift.style.top = "0";
        }); else {
            sup.dataset.set = "0";
            sup.style.color = "black";
            setTimeout(function () {
                move("0", () => {
                    lift.dataset.floor = "3";
                    lift.style.top = "0";
                });
            }, 2000);
        }
    })
}

function move(t, clbk) {
    console.log(t);
    lift.animate([
        { top: t }
    ], {
        duration: 5000
    })
    setTimeout(function () { clbk(); }, 5000);
}


function setData(e) {
    if (e.dataset.set === "0") {
        e.dataset.set = "1";
        e.style.color = "green"
    } else {
        e.dataset.set = "0";
        e.style.color = "green"
    }
}

function moveD() {
    var liftFloor = lift.dataset.floor;
    if (liftFloor !== "3") {
        alert("Already down");
        return;
    }
    move("320px", () => {
        lift.style.top = "320px";
        lift.dataset.floor = "2";
        var sdown = document.getElementById("Sdown");
        if (sdown.dataset.set === "0") move("630px", () => {
            lift.style.top = "610px";
            lift.dataset.floor = "1";
        }); else {
            sdown.dataset.set = "0";
            sdown.style.color = "black"
            setTimeout(function () {
                move("610px", () => {
                    lift.style.top = "610px";
                    lift.dataset.floor = "1";
                });
            }, 2000);
        }
        console.log("done");
    })

}