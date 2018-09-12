class Test{
    constructor(){
        this.a = 'hello world 2018-09-11'
    }
}
let test = new Test();
document.body.innerHTML = test.a;
alert('first-cache');