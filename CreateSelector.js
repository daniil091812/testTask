export class CreateSelector{
    div
    arrow
    constructor(placeholder, info ) {
        this.placeholder = placeholder;
        this.info = info;
    }



    create(){
        this.div = document.createElement("div");
        this.div.style.marginTop = "35px";
        this.div.style.height = "64px";
        this.div.style.borderRadius = "8px";
        this.div.style.boxShadow = "0 16px 32px rgba(202, 203, 210, 0.25)";
        this.div.style.backgroundColor = "#FFFFFF";
        return this.div;
    }
}
