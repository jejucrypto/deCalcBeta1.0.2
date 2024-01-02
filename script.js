const iniPop1 = document.getElementById("initialPopulation");
        const curPop1 = document.getElementById("currentPopulation");
        const iniTime1 = document.getElementById("initialTime");
        const curTime1 = document.getElementById("currentTime");
        const finTime1 = document.getElementById("finalTime");

        

        function print() { 
        
            let futPopC = iniPop1.value;   
            let futPopK = Math.log(curPop1.value/futPopC)/curTime1.value;
            let futPop = futPopC*Math.exp(futPopK*finTime1.value);
        
            document.getElementById("c").innerHTML = "C="+futPopC;
            document.getElementById("k").innerHTML = "K="+futPopK;
            document.getElementById("futPop1").innerHTML = "Future Population="+futPop;

        }