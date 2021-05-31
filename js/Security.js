class Security {

    constructor(){

        // Add code to create the input and button elements
        this.button1 = createButton("Check");
this.button1.position(100, 130, 10, 10);
this.button2 = createButton("Check");
this.button2.position(700, 230, 10, 10);
this.button3 = createButton("Check");
this.button3.position(100, 320, 10, 10);
this.input1 = createInput("Answer");
this.input1.position(100, 100, 10, 10);
this.input2 = createInput("Answer");
this.input2.position(700, 200, 10, 10);
this.input3 = createInput("Answer");
this.input3.position(100, 280, 10, 10);


    }

    display(){

        // Add code to make the buttons function as expected
        this.button1.mousePressed(()=>{
            if(system.authenticate(accessCode1,this.input1.value())){
              this.button1.hide();
              this.input1.hide();
              score += 1;
            }
           });
          
           this.button2.mousePressed(()=>{
            if(system.authenticate(accessCode2,this.input2.value())){
              this.button2.hide();
              this.input2.hide();
              score += 1;
            }
           });
          
           this.button3.mousePressed(()=>{
            if(system.authenticate(accessCode3,this.input3.value())){
              this.button3.hide();
              this.input3.hide();
              score += 1;
            }
           });

    }
}