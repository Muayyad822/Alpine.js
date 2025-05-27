document.addEventListener('alpine:init', () => {
    Alpine.data('signupForm', () => ({
        username:'',
        password: '',
        passwordConfirm: '',
        belt:'',
        bio:'',
        newsletter: true,
        showPassword: false,
        showConfirmPassword: false,
        submitForm(){
            console.log(this.username, this.password, this.belt, this.bio, this.newsletter);
        }
    }))
})