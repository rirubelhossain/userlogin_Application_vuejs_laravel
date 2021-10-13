<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="card">
                    <div class="card-header">
                        Login Form
                    </div>
                    <div class="card-body">
                        <div class="card-body">
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" v-model="email" id="email" name="email">
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" v-model="password" id="password"
                                       name="password">
                            </div>

                            <button type="submit" class="btn btn-success" @click="submitLogin">Login</button>
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
            email: null,
            password: null
        }
    },
    methods: {
        submitLogin() {
            axios.post("/api/login", {
                email: this.email,
                password: this.password
            }).then(res => {
                localStorage._token = res.data.token;
                alert(res.data.message);
                this.$router.push({name: 'profile'});
            }).catch(err => {
                alert(err.response.data.message)
            })

        }
    }
}
</script>
