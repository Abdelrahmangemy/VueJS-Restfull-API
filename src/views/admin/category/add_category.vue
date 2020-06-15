<template>
    <div>
        <h2 class="text-center mb-3" >Add Category</h2>
            <form @submit.prevent="category_add()">
              <div class="form-group row">
                <label for="name" class="col-sm-2 col-form-label">Category Name</label>
                <div class="col-sm-10">
                  <input type="text" :class="{ 'is-invalid': form.errors.has('name') }" v-model="form.name" class="form-control" id="category_name" name="category_name" placeholder="Enter Category Name">
                  <has-error :form="form" field="name"></has-error>
                </div>
              </div>
             
              
              <div class="form-group row">
                
                <div class="col-sm-10">
                  <button type="submit" class="btn btn-primary">Add Category</button>
                </div>
              </div>
            </form>
          </div>
</template>

<script>
import Form from 'vform'
import iziToast from '../../../../node_modules/izitoast/dist/js/iziToast.js' 
//import iziToasts from '../../../../node_modules/izitoast/dist/css/iziToast.min.css'

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
      category_add(){
      this.form.post('/category', this.form )
      .then(response => {
        iziToast.success({
            title: 'OK',
            message: 'Successfully inserted record!',
        });
        this.$router.push({name:'all-category'});
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      },
    },
}
</script>