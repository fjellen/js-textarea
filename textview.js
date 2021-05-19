function textView(area1, area2, spinner) {
    /*  ============ Event listeners ============= */
    this.square = null;
    this.area1 = area1;
    this.area2 = area2;
    this.timeout = null;
    this.spinner = spinner;

    this.keyUp = (e) => { 
        this.area2.value = e.target.value.split("").reverse().join("");

        this.timeout = setTimeout(() => {
            if (this.square && this.square.parentNode)
            {
                this.square.parentNode.removeChild(this.square);
                this.square = null;
                this.spinner.style.display = "none";
            }
        }, 1000);
    }
    area1.addEventListener(
        'keyup',
        this.keyUp
    );

    this.keyDown = (e) => {
        if (this.square) return;

        this.square = createSquare();
        insertSquare(this.square, document.body);
        this.spinner.style.display = "block";

    }
    area1.addEventListener(
        'keydown',
        this.keyDown
    );
}