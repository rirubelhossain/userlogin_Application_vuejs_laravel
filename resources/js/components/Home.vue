<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-12">
                <h3> Hello {{ name }}</h3>
            </div>

            <div class="col-6">
                <div class="list-group" v-if="auth===false">
                    <router-link to="/register" class="list-group-item">Register</router-link>
                    <router-link to="/login" class="list-group-item">Login</router-link>
                </div>

                <div class="list-group" v-else>
                    <a href="#" class="list-group-item" @click="logout">Logout</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        if (localStorage._token != undefined) {
            axios.get("/api/user", {
                headers: {'Authorization': `bearer ${localStorage._token}`}
            }).then(res => {
                this.name = res.data.user.name;
                this.auth = true
            });
        }
    },
    data() {
        return {
            name: "Guest",
            auth: false
        }
    },

    methods: {
        logout() {
            axios.get("/api/logout").then(res => {
                alert(res.data.message);
                localStorage.clear();
                this.auth = false;
            }).catch(err => {
                alert(err.response.data.message);
            })
        }
    }
}
</script>
