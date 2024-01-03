module.exports=function(first,last){
    this.first=first;
    this.last=last;
    this.msg=function(){
        return `Hello! ${this.first} ${this.last}`
    }
}