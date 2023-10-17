function fibinache(n) {
    if(n<=1){
        return n;
    }else {
        return fibinache(n-1)+ fibinache(n-2);
    }
} 

module.exports = fibinache;