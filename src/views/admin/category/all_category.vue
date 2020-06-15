<template>

    <div>
        <h2 class="text-center mb-3" >All Categories</h2>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Category Name</th>
                    <th scope="col">Created At</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(category,index) in categories" :key="index">
                    <th scope="row">{{category.id}}</th>
                    <td>{{category.name}}</td>
                    <td>{{category.created_at}}</td>
                    <td>
                        <div class="btn-group">
                            <router-link :to="{name:'edit-category',params:{category_id:category.id}}" class="btn btn-outline-warning">Edit</router-link >
                            <button @click="deleteCategory(category.id)" :to="{name:'edit-category'}"  class="btn btn-outline-danger">Delete</button >
                        </div>
                    </td>
                </tr>
                
            </tbody>
            </table>
    </div>
</template>

<script>
import axios from 'axios'
import iziToast from '../../../../node_modules/izitoast/dist/js/iziToast.js'

export default {
    data(){
        return{
            categories:[]
        }
    },
    methods:{
        get_all_categories(){
            axios.get('/category')
            .then(response => {
                this.categories = response.data;
                //console.log(response.data);
            })
        },
        deleteCategory(id){
            axios.delete('/category/'+id)
            .then(response => {
                iziToast.error({
                    title: 'Warning',
                    message: 'Category deleted Successfully',
                });
                this.get_all_categories();
                console.log(response)
            })
        }
    },
    mounted(){
        this.get_all_categories();
    }
}
</script>