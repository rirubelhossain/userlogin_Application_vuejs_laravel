<template>
    <div class="container">
        <div class="form-group row">
            <label class="col-form-label">Name : </label>
            <input class="form-control" type="text" v-model="name">
        </div>

        <div class="form-group row">
            <label class="col-form-label">Email : </label>
            <input class="form-control" type="email" v-model="email">
        </div>

        <div class="form-group row">
            <label class="col-form-label">Phone : </label>
            <input class="form-control" type="text" v-model="phone">
        </div>

        <!-- <div class="form-group row">
            <label class="col-form-label">Password : </label>
            <input class="form-control" type="password" v-model=password>
        </div> -->

        <div class="form-group row">
            <button type="submit" class="btn btn-primary" @click="profileSubmit">Update</button>
            <button type="submit" class="btn btn-success" @click="logout">Logout</button>
        </div>
    </div>
</template>

<script>
export default {

    mounted() {
        if (localStorage._token == undefined) {
            alert("Unauthorized");
            this.$router.push({name: 'login'})
        } else {
            axios.get("/api/user", {
                headers: {'Authorization': `bearer ${localStorage._token}`}
            }).then(res => {
                this.name = res.data.user.name
                this.email = res.data.user.email
                this.phone = res.data.user.phone
            }).catch(err => {

                alert(err.response.data.message)
                console.log(err.response.data.message);

                this.$router.push({name: "login"})
            });
        }
    },

    data() {
        return {
            name: null,
            email: null,
            phone: null,
            password: null
        }
    },

    methods: {
        profileSubmit() {
            axios.post("/api/user", {
                name: this.name,
                email: this.email,
                phone: this.phone,
                password: this.password
            }).then(res => {
                alert(res.data.message);
            }).catch(err => {
                alert(err.response.data.message)
            })
        },

        logout() {
            axios.get("/api/logout").then(res => {
                alert(res.data.message);
                localStorage.clear();
                this.$router.push("home");
            }).catch(err => {
                alert(err.response.data.message)
            })
        }
    }
}
</script>
