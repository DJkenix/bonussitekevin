function addition() {
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var c = Number(a) * Number(b);
    t1.value = c;

    var a = document.getElementById("n3").value;
    var b = document.getElementById("n4").value;
    var d = Number(a) * Number(b);
    t2.value = d;

    var a = document.getElementById("n5").value;
    var b = document.getElementById("n6").value;
    var e = Number(a) * Number(b);
    t3.value = e;


    t4.value = c + d + e;
}

function reset1() {
    window.location.reload();
}
