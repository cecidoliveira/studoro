let timer;


export function contTemp({tempPomodoro, setTempPomodoro}){
    clearInterval(timer);

    let counter = tempPomodoro.split(':');
    let min = parseInt(counter[0]);
    let seg = parseInt(counter[1]);
    
    
    timer = setInterval(() => {
        if(seg == 0){
            if(min == 0){
                clearInterval(timer);
                seg = 1;       
            }else{
                min--;
                seg = 60; 
            }
        }
        seg --;

        setTempPomodoro(`${min < 10 ? "0" + min : min}:${seg < 10 ? "0" + seg : seg}`)

    }, 1000);
}

export function stopContTemp(){
    clearInterval(timer)
}