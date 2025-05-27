document.addEventListener('alpine:init', () => {
    Alpine.data('counter', () => ({
        count:0,
        name:"Ade",
        logCount(){
            console.log(this.count);
        }
    }))
})