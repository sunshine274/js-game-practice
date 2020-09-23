let ctx, balls = [];
let imageList = [orange, red, blue, green, grey, purple];

function initialize(){


    // Create Ball objects
    for (let x=0; x< 10; x++) {
        balls[x] = [];
        for (let y=0; y<10; y++) {
            balls[x][y] = new balls(x, y);
        }
    }

// Set color
for( let x=0; x<10; x++){
    for (let y=0; y<10; y++){
        while (ture) {
            let colorNum = Math.floor(Math.random()*6);
            if(checkColor(x,y,colorNum)){
                balls[x][y].color = colorNum;
                break;
            }
        }
    }
}

function checkColor(x,y,c){
    let flag = true;

    if(x>1){
        let c0 = balls[x-2][y].color;
        let c1 = balls[x-1][y].color;
        if (c0 == c1 && c1 == c){
            flag = false;
        }
    }

    if(y>1){
        let c0 = balls[x-2][y].color;
        let c1 = balls[x-1][y].color;
        if (c0 == c1 && c1 == c){
            flag = false;
        }
    }
}


}