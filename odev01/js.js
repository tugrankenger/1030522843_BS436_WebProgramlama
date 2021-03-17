img_array=['im_1.jpeg','im_2.jpeg','im_3.jpeg'];
var selectTrue = 1;
let endIndex;
function random_image(){
    const msg = document.getElementById("msg");
    random_index= Math.floor(Math.random()*img_array.length);
    if(random_index==endIndex){
        random_index= (random_index+1)%img_array.length;
    }
    endIndex=random_index;
    selected_image= img_array[random_index];
   
    if(selectTrue == 0){
        msg.innerHTML="you couldn't find the cat! to new game <a href='javascript:;' onclick='location.reload()'>click</a>";
        document.getElementById("img1").onclick= false;
        document.getElementById("img2").onclick= false;
        document.getElementById("img3").onclick= false;
    }
    if(selected_image ==img_array[2]){
        msg.innerHTML="you won! to new game <a href='javascript:;' onclick='location.reload()'>click</a>";
        selectTrue = 0;
        document.getElementById("img1").onclick= false;
        document.getElementById("img2").onclick= false;
        document.getElementById("img3").onclick= false;
        
    }else{
        selectTrue--;
    }
    //document.getElementById("img_1").src=`./img/${selected_image}`
    var img = document.createElement('img');
    img.src = `./img/${selected_image}`;
    img.className="img_tag";
    img.id="img_1";
    document.getElementById('img1').appendChild(img);
}
function random_image_2(){
    random_index= Math.floor(Math.random()*img_array.length);
    if(random_index==endIndex){
        random_index= (random_index+1)%img_array.length;
    }
    endIndex=random_index;
    selected_image= img_array[random_index];
    
    if(selectTrue == 0){
        msg.innerHTML="you couldn't find the cat! to new game <a href='javascript:;' onclick='location.reload()'>click</a>";
        document.getElementById("img2").onclick= false;
        document.getElementById("img1").onclick= false;
        document.getElementById("img3").onclick= false;
    }
    if(selected_image ==img_array[2]){
        msg.innerHTML="you won! to new game <a href='javascript:;' onclick='location.reload()'>click</a>";
        selectTrue = 0;
        document.getElementById("img2").onclick= false;
        document.getElementById("img1").onclick= false;
        document.getElementById("img3").onclick= false;
    }else{
        selectTrue--;
    }
    //document.getElementById("img_2").src=`./img/${selected_image}`
    var img = document.createElement('img');
    img.src = `./img/${selected_image}`;
    img.className="img_tag";
    img.id="img_2";
    document.getElementById('img2').appendChild(img);
}
function random_image_3(){
    random_index= Math.floor(Math.random()*img_array.length);
    if(random_index==endIndex){
        random_index= (random_index+1)%img_array.length;
    }
    endIndex=random_index;
    selected_image= img_array[random_index];
    
    if(selectTrue == 0){
        msg.innerHTML="you couldn't find the cat! to new game <a href='javascript:;' onclick='location.reload()'>click</a>";
        document.getElementById("img3").onclick= false;
        document.getElementById("img1").onclick= false;
        document.getElementById("img2").onclick= false;
    }
    if(selected_image ==img_array[2]){
        msg.innerHTML="you won! to new game <a href='javascript:;' onclick='location.reload()'>click</a>"; 
        selectTrue = 0;
        document.getElementById("img3").onclick= false; 
        document.getElementById("img1").onclick= false;
        document.getElementById("img2").onclick= false;
    }else{
        selectTrue--;
    }
    //document.getElementById("img_3").src=`./img/${selected_image}`
    var img = document.createElement('img');
    img.src = `./img/${selected_image}`;
    img.className="img_tag";
    img.id="img_3";
    document.getElementById('img3').appendChild(img);
}