<template>
    <div>
        <div class="card m-auto w-50">
            <div class="card-header">
                <h2>User Register</h2>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <label for="Name">Name</label>
                    <input v-model="user.name" type="text" class="form-control" id="Name" placeholder="Enter Name" >
                    <!--<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
                </div>
                <div class="form-group">
                    <label for="Email">Email </label>
                    <input v-model="user.email" type="email" class="form-control" id="Email" placeholder="Enter Email" >
                    <!--<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
                </div>
                <div class="form-group">
                    <label for="Pass">Password</label>
                    <input v-model="user.password" type="password" class="form-control" id="Pass" placeholder="Enter password">
                </div>
                
                <button type="submit" @click="userRegister()" class="btn btn-primary">Register</button>
                <router-link :to="{name:'login'}" type="submit" >Login</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            user: {
                name:null,
                email:null,
                password:null
            },
        }
    },
    methods: {
        userRegister(){
            axios.post('/register', {
                name:     this.user.name,
                email:    this.user.email,
                password: this.user.password,
            })
            .then(function (response) {
                localStorage.setItem('AToken',response.data.access_token);
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}
</script>