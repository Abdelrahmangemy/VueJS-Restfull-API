<template>
    <div>
        <div class="card m-auto w-50">
            <div class="card-header">
                <h2>User Login</h2>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <label for="Email">Email </label>
                    <input v-model="user.email" type="email" class="form-control" id="Email" placeholder="Enter Email" >
                    <!--<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
                </div>
                <div class="form-group">
                    <label for="Pass">Password</label>
                    <input v-model="user.password" type="password" class="form-control" id="Pass" placeholder="Enter password">
                </div>
                
                <button type="submit" @click="userLogin()" class="btn btn-primary">Login</button>
                <router-link :to="{name:'register'}" type="submit" >Register</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import iziToast from '../../../../node_modules/izitoast/dist/js/iziToast.js' 

export default {
    data(){
        return{
            user: {
                email:null,
                password:null
            },
        }
    },
    methods: {
        userLogin(){
            axios.post('/login', {
                email:    this.user.email,
                password: this.user.password,
            })
            .then(response => {
                iziToast.success({
                    title: 'OK',
                    message: 'Login Successfully ',
                });
                localStorage.setItem('AToken',response.data.access_token);
                console.log(response);
                this.$router.push('/dashboard');
            })  
            .catch(error => {
                console.log(error);
            });
        }
    }
}
</script>




