document.addEventListener('alpine:init', () => {
    Alpine.data('signupForm', () => ({
        username: '',
        password: '',
        passwordConfirm: '',
        belt: '',
        bio: '',
        newsletter: true,
        showPassword: false,
        showConfirmPassword: false,
        errors: {},

        validateForm() {
            this.errors = {}

            if (this.username.length < 3) {
                this.errors.username = "Username must be atleast 3 characters"
            }

            if (this.password.length < 6) {
                this.errors.password = "Password must be atleast 6 characters"
            }

            if (this.password != this.passwordConfirm) {
                this.errors.passwordConfirm = "Passwords do not match"
            }

            if (!this.belt) {
                this.errors.belt = "Choose a belt color"
            }

            if (this.bio.length < 10) {
                this.errors.bio = "Bio must be atleast 10 characters"
            }

        },

        submitForm() {
            this.validateForm()
            console.log(this.errors);
            console.log(this.username, this.password, this.belt, this.bio, this.newsletter);
        }
    }))
})