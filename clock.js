function ModelViewDOM(){  //DOM View
    let myModelClock=null;
    const digitSize=70;
    const countDigits=12;
    const clockSize=600;
    const radius=clockSize/2-20;
    this.init=function(clock){
     myModelClock=clock;
    }

    this.drawClocks=function(){
        let clock=document.createElement('div');
        clock.classList.add('clock');
        clock.style.cssText='border:solid purple 5px;width:600px;height:600px;margin: auto;border-radius:50%;background-color:pink;position:relative;margin-top:100px;'
        myModelClock.append(clock);
        
        for(let i=1;i<13;i++){
            let digit=document.createElement('div');
            digit.classList.add('digit');
            digit.style.cssText='width:80px;height:80px;border-radius:50%;background-color:violet;position:absolute;transform:translate(-25%,-25%);border:solid 3px purple;'
            const digitAngle=i*30;
            let angleEachDigitRadians=digitAngle * Math.PI / 180;
            let left=((radius-digitSize/2)*Math.sin(angleEachDigitRadians)+radius) +"px";
            let top=((-radius+digitSize/2)*Math.cos(angleEachDigitRadians)+radius) +"px";
            digit.style.left=left;
            digit.style.top=top;
            digit.textContent=i;  
            clock.append(digit);
        }

        handHours=document.createElement('div');
        handHours.classList.add('handHours');
        handHours.style.cssText='width:14px;height:190px;background-color:BlueViolet  ;position:absolute;top:20%;left:50%;border-radius:30%;transform-origin: 50% 93%;'
        clock.append(handHours);

        handMinutes=document.createElement('div');
        handMinutes.classList.add('handMinutes');
        handMinutes.style.cssText='width:12px;height:240px;background-color:BlueViolet ;position:absolute;top:14%;left:50%;border-radius:30%;transform-origin: 50% 90%;'
        clock.append(handMinutes);

        let handSeconds=document.createElement('div');
        handSeconds.classList.add('handSeconds');
        handSeconds.style.cssText='width:10px;height:250px;background-color:Indigo ;position:absolute;left:50%;top:10%;border-radius:30%;transform-origin: 50% 95%;'
        clock.append(handSeconds);

        circle=document.createElement('div');
        circle.style.cssText='width:50px; height:50px; border-radius:50%; position:absolute; top:46%;left:46%;background-color:purple;'
        clock.append(circle);
        }

        
        this.tickTack=function(hrPosition,minPosition,secPosition){
            let handHours=myModelClock.querySelector('.handHours');
            let handMinutes=myModelClock.querySelector('.handMinutes');
            let handSeconds=myModelClock.querySelector('.handSeconds');
            handHours.style.transform = "rotate(" + hrPosition + "deg)";
            handMinutes.style.transform = "rotate(" + minPosition + "deg)";
            handSeconds.style.transform = "rotate(" + secPosition + "deg)";
           }     

};

function ModelViewSVG(){
    let myModelClock=null;
    let digitSize=70;
    let countDigits=12;
    let clockSize=600;
    const radius=clockSize/2-20;
    this.init=function(clock){
        myModelClock=clock;
       }

    this.drawClocks=function(){
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width","610");
        svg.setAttribute("height","610");
        svg.setAttribute('transform','translate(500,100)');
        clock.append(svg);

        let clock=document.createElementNS(svg.namespaceURI,"circle");
        clock.setAttribute('r','300');
        clock.setAttribute('cx','300');
        clock.setAttribute('cy','300');
        clock.setAttribute('fill','orange');
        clock.setAttribute('stroke','purple');
        clock.setAttribute('stroke-width','5px');
        clock.setAttribute('transform','translate(5,5)');
        svg.append(clock);

        for(let i=1;i<13;i++){
            let digit=document.createElementNS(svg.namespaceURI,"circle");
            digit.setAttribute('r','40px');
            digit.setAttribute('fill','violet');
            digit.setAttribute('stroke','purple');
            digit.setAttribute('stroke-width','3px');
            const digitAngle=i*30;
            let angleEachDigitRadians=digitAngle * Math.PI / 180;
            let cx=((radius-digitSize/2)*Math.sin(angleEachDigitRadians)+radius) +"px";
            let cy=((-radius+digitSize/2)*Math.cos(angleEachDigitRadians)+radius) +"px";
            digit.setAttribute('cx',cx);
            digit.setAttribute('cy',cy);
            digit.setAttribute('transform','translate(26,26)');
            let number=document.createElementNS(svg.namespaceURI,"text");
            number.setAttribute('x',cx);
            number.setAttribute('y',cy);
            number.setAttribute('font-size','40px');
            number.setAttribute('font-weight','bold');
            number.setAttribute('fill','black');
            number.textContent=`${i}`;
        if(i!==10&&i!==11&&i!=12){
            number.setAttribute('transform','translate(14,37)');
        }
        else{
            number.setAttribute('transform','translate(6,37)');
        }
        svg.append(digit);
        svg.append(number);
        }

        let handHours=document.createElementNS(svg.namespaceURI,"line");
        handHours.setAttribute('stroke-width','12px');
        handHours.setAttribute('stroke','BlueViolet');
        handHours.setAttribute('x1','300px');
        handHours.setAttribute('y1','300px');
        handHours.setAttribute('x2','300px');
        handHours.setAttribute('y2','140px');
        handHours.setAttribute('stroke-linecap','round');
        handHours.setAttribute('transform','rotate(300 300 300)');
        svg.append(handHours);

        let handMinutes=document.createElementNS(svg.namespaceURI,"line");
        handMinutes.setAttribute('stroke-width','8px');
        handMinutes.setAttribute('stroke','Indigo');
        handMinutes.setAttribute('x1','300px');
        handMinutes.setAttribute('y1','300px');
        handMinutes.setAttribute('x2','300px');
        handMinutes.setAttribute('y2','80px');
        handMinutes.setAttribute('stroke-linecap','round');
        handMinutes.setAttribute('transform','rotate(300 300 300)');
        svg.append(handMinutes);

       let handSeconds=document.createElementNS(svg.namespaceURI,"line");
       handSeconds.setAttribute('stroke-width','6px');
       handSeconds.setAttribute('stroke','red');
       handSeconds.setAttribute('x1','300px');
       handSeconds.setAttribute('y1','300px');
       handSeconds.setAttribute('x2','300px');
       handSeconds.setAttribute('y2','60px');
       handSeconds.setAttribute('stroke-linecap','round');
       handSeconds.setAttribute('transform','rotate(300 300 300)');
       svg.append(handSeconds);

       let circle=document.createElementNS(svg.namespaceURI,"circle");
       circle.setAttribute('r','25px');
       circle.setAttribute('cx','300px');
       circle.setAttribute('cy','300px');
       circle.setAttribute('fill','purple');
       circle.setAttribute('transform','translate(5,5)');
       svg.append(circle);
       }

       this.tickTack=function(hrPosition,minPosition,secPosition){
        let handHours=myModelClock.querySelector('.handHours');
        let handMinutes=myModelClock.querySelector('.handMinutes');
        let handSeconds=myModelClock.querySelector('.handSeconds');
        handHours.setAttribute('transform',`translate(0,0) rotate(${hrPosition} 300 300)`);
        handMinutes.setAttribute('transform',`translate(0,0) rotate(${minPosition} 300 300)`);
        handSeconds.setAttribute('transform',`translate(0,0) rotate(${secPosition} 300 300)`); 
       } 
};

function ModelViewCanvas(){
    const canvas=document.querySelector('#clock');
    const ctx=canvas.getContext('2d');
    let radius=canvas.height/2;
    radius=radius*0.95;
    ctx.translate(radius,radius);

    this.createClock=function(){
        ctx.beginPath();
        ctx.arc(0,0,radius,0,2*Math.PI);
        ctx.fillStyle='pink';
        ctx.closePath();
        ctx.fill();
        this.createCircles(ctx,radius);
        this.createDate(ctx,radius);
    }

    setInterval(this.createClock, 1000);

     this.createCircles=function(ctx, radius) {
        let angle;
        let num;
        ctx.font = radius * 0.16 + "px Arial";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
    
        for (num = 1; num < 13; num++) {
            angle = num * Math.PI / 6;
            ctx.rotate(angle);
            ctx.translate(0, -radius * 0.80);
            ctx.rotate(-angle);
            ctx.beginPath();
            ctx.arc(3,-4,45,0,2*Math.PI);
            ctx.fillStyle='violet';
            ctx.closePath();
            ctx.fill();
            ctx.fillStyle='purple';
            ctx.fillText(num.toString(), 0, 0);
            ctx.rotate(angle);
            ctx.translate(0, radius * 0.80);
            ctx.rotate(-angle);
        }
    }

    this.tickTack=function(ctx,radius){
        let the_date=new Date();
        let hr=the_date.getHours();
        let min=the_date.getMinutes();
        let sec=the_date.getSeconds();
        hour = (hr * Math.PI / 6) + (min * Math.PI / (6 * 60)) + (sec * Math.PI / (360 * 60));
        createHand(ctx, hour, radius * 0.5, radius * 0.07);
        minute = (min * Math.PI / 30) + (sec * Math.PI / (30 * 60));
        createHand(ctx, minute, radius * 0.7, radius * 0.04);
        second = (sec * Math.PI / 30);
        createHand(ctx, second, radius * 0.8, radius * 0.02);
       }

    this.createHand=function(ctx, pos, length, width) {
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.lineCap = "round";
        ctx.moveTo(0, 0);
        ctx.rotate(pos);
        ctx.lineTo(0, -length);
        ctx.stroke();
        ctx.rotate(-pos);
    }
};


function MyModel(){
    let myClockView=null;

    this.init=function(myClock){
        myClockView=myClock;
    }

    this.createClocks=function(){
        myClockView.drawClocks();
    }

    setInterval(this.createDate=function(){
        let date = new Date();
        let hr = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();

        let hrPosition = hr * 360 / 12 + (min * (360 / 60) / 12); 
        let minPosition = min * 360 / 60 + (sec * (360 / 60) / 60) ; 
        let secPosition= sec * 360 / 60; 

        myClockView.tickTack(hrPosition,minPosition,secPosition);
    },1000)

};

function MyController(){ 
   
    let myModelContainer = null;
    let myModel = null;
   
    this.init=function(clock,container){
     myModelContainer=container;
     myModel=clock;

        addEventListener("DOMContentLoaded", this.loadClocks);
        addEventListener("DOMContentLoaded", this.startClocks); 
    } 

    this.loadClocks=function(){
        myModel.createClocks();
    }

    this.startClocks=function(){
        myModel.createDate();
    }
};

const appView = new ModelViewDOM();
const appModel = new MyModel();
const appController = new MyController();
const myClock = document.body;

appView.init(myClock);
appModel.init(appView);
appController.init(appModel,myClock);

const appView2 = new ModelViewDOM();
const appModel2 = new MyModel();
const appController2 = new MyController();
const myClock2 = document.body;

appView2.init(myClock2);
appModel2.init(appView2);
appController2.init(appModel2,myClock2);

const appView3 = new ModelViewSVG();
const appModel3 = new MyModel();
const appController3 = new MyController();
const myClock3 = document.body;

appView3.init(myClock3);
appModel3.init(appView3);
appController3.init(appModel3,myClock3);