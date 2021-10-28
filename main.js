canvas = document.getElementById("myCanvas");
friknob = canvas.getContext("2d");

car1_x = 10;
car1_y = 10;
car1_width = 100;
car1_height = 90;
background_image = "food.png";
car1_i_m_a_gE = "car1-very-slow.png";

car2_x = 10;
car2_y = 100;
car2_width = 100;
car2_height = 90;
//background_image = "food.png";
car2_i_m_a_gE = "car2-very-slow.png";

function load_on() {
    backgroundimg = new Image();
    backgroundimg.onload = remainer;
    backgroundimg.src = background_image;

    car1img = new Image();
    car1img.onload = roveress1;
    car1img.src = car1_i_m_a_gE;
    car2img = new Image();
    car2img.onload = roveress2;
    car2img.src = car2_i_m_a_gE;
}

function remainer() {
    friknob.drawImage(backgroundimg, 0, 0, canvas.width, canvas.height);
}

function roveress1() {
    friknob.drawImage(car1img, car1_x, car1_y, car1_width, car1_height);
}

function roveress2() {
    friknob.drawImage(car2img, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", key_down);

function key_down(e) {
    key_pressed = e.keyCode;
    console.log(key_pressed);

    if (key_pressed == '38') {
        up();
        console.log("up");
    }
    if (key_pressed == '40') {
        down();
        console.log("down");
    }
    if (key_pressed == '37') {
        left();
        console.log("left");
    }
    if (key_pressed == '39') {
        right();
        console.log("right");
    }
}

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;

        remainer();
        roveress1();
    }
}

function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;

        remainer();
        roveress1();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 11

        remainer();
        roveress1();
    }
}

function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 9

        remainer();
        roveress1();
    }

    if (key_pressed == '38') {
        up();
        console.log("up");
    }
    if (key_pressed == '40') {
        down();
        console.log("down");
    }
    if (key_pressed == '37') {
        left();
        console.log("left");
    }
    if (key_pressed == '39') {
        right();
        console.log("right");
    }
}

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;

        remainer();
        roveress2();
    }
}

function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;

        remainer();
        roveress2();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 11

        remainer();
        roveress2();
    }
}

function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 9

        remainer();
        roveress2();
    }
}