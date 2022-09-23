const clock = document.querySelector(".clock")
const container = document.getElementById("container")


let msec = 0, second=0, minutes=0, hours=0, intervalId;

const startClock=()=>{
    console.log('start')
    if(!intervalId){
        intervalId = setInterval(()=>{
        if(msec < 999){
            msec = msec+10
        }
        else if(second >= 59){
            second=0
            minutes++
        }
        else if(minutes > 59){
            minutes=0
            hours++
        }
        else{
            second++
            msec=0
        }

        const msecSemiFinal = msec.toString()
        const msecFinal = msecSemiFinal.slice("",2)
        const secFinal = second.toString().padStart(2,"0")
        const minFinal = minutes.toString().padStart(2,"0")
        const hrFinal = hours.toString().padStart(2,"0")

        clock.innerHTML=`${hrFinal}:${minFinal}:${secFinal}:${msecFinal}`
        
        container.style.backgroundImage = "url('assets/bg22.gif')"
        container.style.backgroundSize = "100% 100vh"

    },10)
}
}
const stopClock=()=>{
    clearInterval(intervalId)
    intervalId=null
    container.style.backgroundImage = "none"
    
}