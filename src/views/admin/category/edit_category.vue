<template>
    <div>
        <h2 class="text-center mb-3" >Edit Category</h2>
            <form @submit.prevent="category_update()">
              <div class="form-group row">
                <label for="name" class="col-sm-2 col-form-label">Category Name</label>
                <div class="col-sm-10">
                  <input type="text" :class="{ 'is-invalid': form.errors.has('name') }" v-model="form.name" class="form-control" id="category_name" name="category_name" placeholder="Enter Category Name">
                  <has-error :form="form" field="name"></has-error>
                </div>
              </div>
             
              
              <div class="form-group row">
                
                <div class="col-sm-10">
                  <button type="submit" class="btn btn-primary">Update Category</button>
                </div>
              </div>
            </form>
          </div>
</template>

<script>
import Form from 'vform'
import axios from 'axios'
import iziToast from '../../../../node_modules/izitoast/dist/js/iziToast.js'

export default {
    data(){
        return{
          form: new Form({
            name:null,
            category_description:null,
            publication_status:null,
            unpublished:null
          })
        }
    },
    methods:{
      sigleCategory(){
          axios.get('/category/'+this.$route.params.category_id)
            .then(response => {
                this.form.fill(response.data)
                console.log(response);
            })
      },

      category_update(){
      this.form.put('/category/'+this.$route.params.category_id )
      .then(response => {
        iziToast.success({
            title: 'OK',
            message: 'Successfully Updated record!',
        });
        this.$router.push({name:'all-category'});
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      },
    },
    mounted(){
        this.sigleCategory();
    }
}
</script>