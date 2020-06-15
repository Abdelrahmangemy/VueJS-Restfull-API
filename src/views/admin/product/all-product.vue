<template>
    <div>
        <h2 class="text-center mb-3" >All Products</h2>
        <div class="btn btn-outline-success float-right" @click="addProductModal()">Add Product</div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Product Category</th>
                    <th scope="col">Product Description</th>
                    <th scope="col">Product price</th>
                    <th scope="col">Product image</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product,index) in products" :key="index">
                <th scope="row">{{product.id}}</th>
                    <td>{{product.pro_name}}</td>
                    <td>{{product.category_id}}</td>
                    <td>{{product.pro_info}}</td>
                    <td>{{product.pro_price}}</td>
                    <td>
                        <img :src="'http://localhost/CarShop-master/public/images/'+product.image" class="img-fluid">
                    </td>
                    <td>{{product.stock}}</td>
                    <td>
                        <div @click="editProductModal(product)" class="btn btn-outline-warning">Edit</div>
                        <div @click="delete_product(product.id)" class="btn btn-outline-danger">Del</div>
                    </td>
                </tr>
                
            </tbody>
            </table>
    
            <pagination :data="products" @pagination-change-page="getResults"></pagination>

            <!-- Modal -->
            <div class="modal fade" id="product-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                    <form @submit.prevent="editMode ? product_update() : product_add()">        
                    <div class="modal-header">
                        <h5 v-if="editMode" class="modal-title text-success">Update Product</h5>
                        <h5 v-else class="modal-title text-success">Add Product</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        
                            <div class="form-group">
                                <label for="pro_name">Product Name </label>
                                <input type="text" name="product_name" :class="{ 'is-invalid': form.errors.has('pro_name') }" v-model="form.pro_name" class="form-control" id="product_name" placeholder="Enter Product Name">
                                <has-error :form="form" field="pro_name"></has-error>
                            </div>
                            <div class="form-group">
                                <label for="category_id">Product Category</label>
                                <select :class="{ 'is-invalid': form.errors.has('category_id') }" v-model="form.category_id" class="form-control" id="category_id" name="category_id">
                                    <option value="">---------select a category----------</option>
                                    <option v-for="(category,index) in categories" :key="index" :value="category.id">{{category.name}}</option>
                                </select>
                                <has-error :form="form" field="category_id"></has-error>
                            </div>
                            <div class="form-group">
                                <label for="pro_info">Product Description </label>
                                <textarea v-model="form.pro_info" :class="{ 'is-invalid': form.errors.has('pro_info') }" class="form-control" name="product_info" id="product_info" cols="30" rows="2" placeholder="Enter Your Product Description"></textarea>
                                <has-error :form="form" field="pro_info"></has-error>
                            </div>
                            <div class="form-group">
                                <label for="pro_code">Product Code </label>
                                <input :class="{ 'is-invalid': form.errors.has('pro_code') }" v-model="form.pro_code" type="text" name="product_code" class="form-control" id="product_code" placeholder="Enter Product Code">
                                <has-error :form="form" field="pro_code"></has-error>
                            </div>
                            <div class="form-group">
                                <label for="pro_price">Product Price</label>
                                <input :class="{ 'is-invalid': form.errors.has('pro_price') }" v-model="form.pro_price" type="number" name="product_price" class="form-control" id="product_price" placeholder="Enter Product Price">
                                <has-error :form="form" field="pro_price"></has-error>
                            </div>
                            <div class="form-group">
                                <label for="spl_price">Sale Price</label>
                                <input :class="{ 'is-invalid': form.errors.has('spl_price') }" v-model="form.spl_price" type="number" name="sale_price" class="form-control" id="sale_price" placeholder="Enter Product Sale Price">
                                <has-error :form="form" field="spl_price"></has-error>
                            </div>
                            <div class="form-group">
                                <label for="stock">Stock </label>
                                <input :class="{ 'is-invalid': form.errors.has('stock') }" v-model="form.stock" type="number" name="stock" class="form-control" id="stock" placeholder="Enter Product Stock Number">
                                <has-error :form="form" field="stock"></has-error>
                            </div>
                            <div class="form-group">
                                <label for="image">Product Image </label> <br>
                                <!--<img :src="form.image" alt="" class="img-fluid">-->
                                <img :src="imageUpdateMode ?'http://localhost/CarShop-master/public/images/'+form.image :form.image" alt="" class="img-fluid">
                                <div v-if="!form.image" class="custom-file">
                                <input  type="file" @change="fileChangeEvent" class="custom-file-input" id="validatedInputGroupCustomFile" :class="{ 'is-invalid': form.errors.has('image ') }" >
                                <label class="custom-file-label" for="validatedInputGroupCustomFile">Choose file...</label>
                                <has-error :form="form" field="image "></has-error>
                                <div class="invalid-feedback">
                                    Example invalid input group feedback
                                </div>
                                </div>
                                <div v-else>
                                    <button @click="removeImage()" type="button" class="btn btn-outline-warning mt-2" > Remove Image</button>
                                </div>
                            </div>
                        
                        

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button v-if="editMode" type="submit" class="btn btn-primary">Update Product</button>
                        <button v-else type="submit" class="btn btn-primary">Add Product</button>
                    </div>
                    </form>
                    </div>
                </div>
            </div>
    
    
    </div>

</template>

<script>
import axios from 'axios'
import Form from 'vform'
import iziToast from '../../../../node_modules/izitoast/dist/js/iziToast.js' 
import $ from 'jquery'

export default {
    data(){
        return{
            editMode:false,
            imageUpdateMode:false,
            products:[],
            categories:[],
            form: new Form({
                id:null,
                pro_name:null,
                category_id:null,
                pro_code:null,
                pro_price:null,
                pro_info:null,
                spl_price:null,
                stock:null,
                image:null,
            
          })
        }
    },
    methods:{
        getResults(page = 1) {
			axios.get('/product?page=' + page)
				.then(response => {
					this.laravelData = response.data;
				});
		},
        fileChangeEvent(e){
           this.imageUpdateMode = false
           var file = e.target.files[0] ;
           const reader = new FileReader();
           //console.log(reader);
            if (file['size'] < 2079152) {
                reader.onload = ()=> {
                this.form.image = reader.result ;
                iziToast.success({
                        title: 'Success',
                        message: 'Product image is Added !' + file['size'],
                    });
                }
                reader.readAsDataURL(file); 
           }else{
               iziToast.error({
                    title: 'Warning',
                    message: 'Product image is large '+file['size'],
                });
           }
           
        },
        removeImage(){
            this.imageUpdateMode = false
            this.form.image = '';
        },
        get_all_products(){
            axios.get('/product')
            .then(response => {
                this.products = response.data
            })
            .catch(error => {
                console.log(error)
            });
        },
        get_all_categories(){
            axios.get('category')
            .then(response => {
                this.categories = response.data
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            });
        },
        addProductModal(){
            this.imageUpdateMode = true
            this.editMode = false
            this.form.clear()
            $('#product-modal').modal('show')
        },
        product_add() {
            this.form.post('/product',this.form)
            .then(response => {
                this.get_all_products();
                $('#product-modal').modal('hide')
                iziToast.success({
                    title: 'OK',
                    message: 'Product Added Successfully!',
                });
                this.$router.push({name:'all-product'});
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        delete_product(id){
            axios.delete('/product/'+id)
            .then(response => {
                this.get_all_products();
                iziToast.error({
                    title: 'Warning',
                    message: 'Product deleted Successfully',
                });
                console.log(response);
            })
        },
        editProductModal(product){
            this.editMode = true
            $('#product-modal').modal('show')
            this.form.fill(product)
        },
        product_update() {
            this.form.put('product/'+this.form.id)
            .then(response => {
                this.get_all_products()
                $('#product-modal').modal('hide')
                iziToast.success({
                    title: 'OK',
                    message: 'Product Updated Successfully!',
                });
                console.log(response);
            })
        }
    },
    created(){
        this.get_all_products();
        this.get_all_categories();
        this.getResults();
    }
}
</script>