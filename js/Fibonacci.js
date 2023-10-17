//Brain and Keith
function fibinache(n) {
    if(n<=2){
        return n-1;
    }else {
        return fibinache(n-1)+ fibinache(n-2);
    }
}
 

module.exports = fibinache;