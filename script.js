const ERROR = document.getElementById("error");
const FLU = document.getElementById("flu");
const MAN = document.getElementById("man");
const INPUT = document.getElementById("peso");
const BOTON = document.getElementById("calcular");

BOTON.addEventListener("click", () => {
 let peso = INPUT.valueAsNumber;

    if (peso > 0 && peso <= 30) {
      ERROR.style.display = "none";

      let res = holliday(peso);
      let mant = (res/24)*1.5;
      FLU.innerHTML = (res/24) + "  cc/hr";
      FLU.style.display = "block";
      MAN.innerHTML = "m+m/2  " + mant + "  cc/hr";
      MAN.style.display = "block";
    } else if (peso > 30) {
        ERROR.style.display = "none";

        let respuesta = Superf_Corporal(peso);
        let mante = (respuesta * 2000)
        FLU.innerHTML = respuesta * 1500  + " diario " + (respuesta*1500)/24 + " cc/hr";
        FLU.style.display = "block";
        MAN.innerHTML = mante +" diario " + mante/24 +" cc/hr";
        MAN.style.display = "block";
        
        /*let flujo = Superf_Corporal(peso) //* 1500;
        let man = Superf_Corporal (peso) //* 2000;
        FLU.innerHTML = flujo + " cc/hr";
        FLU.style.display = "block";
        MAN.innerHTML = "m+m/2 " + flujo +" cc/hr";
        MAN.style.display = "block";

        /*let flujo = ((peso * 4) + 7 ) / (peso + 90);
        console.log = flujo 
        FLU.innerHTML = flujo * 1500 + " cc/hr";
        FLU.style.display = "block";
        MAN.innerHTML = "m+m/2 " + flujo * 2000 +" cc/hr";
        MAN.style.display = "block";
        /*let res = Superf_Corporal(peso * 1500);
        let mant = (res)*2000;
        FLU.innerHTML = (res) + " cc/hr";
        FLU.style.display = "block";
        MAN.innerHTML = "m+m/2 "+ mant + " cc/hr";
        MAN.style.display = "block"
        console.log(res)*/
    } else {
      console.log("error");
      ERROR.style.display = "block";
      FLU.style.display = "none";
      MAN.style.display = "none";
    }
});

function holliday (peso) {
    let volumen;
    if (peso <= 10) {
        volumen = peso*100
    } else if (peso > 10 && peso <= 20) {
        volumen = 1000 + (peso-10)*50
    } else {
        volumen = 1500 + (peso-20)*20
    }
    return volumen;
}

function Superf_Corporal (peso) {
    let flujo; 
    if (peso > 30) {
        flujo = ((peso * 4) + 7 ) /( peso + 90)
    }
    return flujo;

}


/*volumen/24 para cc por hora*/
