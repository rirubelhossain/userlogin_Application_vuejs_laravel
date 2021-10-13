<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="card">
                    <div class="card-header">
                        Register Form
                    </div>
                    <div class="card-body">
                        <div class="card-body">
                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input v-model="name" type="text" class="form-control" id="name" name="name">
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input v-model="email" type="email" class="form-control" id="email" name="phone">
                            </div>
                            <div class="mb-3">
                                <label for="phone" class="form-label">Phone</label>
                                <input v-model="phone" type="text" class="form-control" id="phone" name="phone">
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input v-model="password" type="text" class="form-control" id="password" name="phone">
                            </div>

                            <button type="submit" class="btn btn-success" @click="submitRegister">Register</button>
                            <!--<a href="" class="btn btn-success">Back to Main</a>       -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            name: null,
            email: null,
            phone: null,
            password: null
        }
    },


    methods: {
        submitRegister() {
            axios.post("/api/register", {
                name: this.name,
                email: this.email,
                phone: this.phone,
                password: this.password
            }).then(res => {
                alert(res.data.message);

                this.$router.push({name: 'login'})
            }).catch(error => {
                alert(error.response.data.message);
            });
        }
    }
}
</script>
