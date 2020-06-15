<template>
    <div>
	<section>
		<div class="container">
			<div class="row">
				<div class="col-12"><h3>Latest Product</h3></div>
			</div>
			<div class="row">            
				
				<div v-for="(product,index) in products" :key="index" class="col-md-3">
                                    <div class="product-wrapper">
                                        <div class="product-img">
                                            <router-link :to="{ name: 'product-details', params:{product_id: product.id}}"> <img :src="'http://localhost/CarShop-master/public/images/'+product.image" alt=""></router-link>
                                            <!--<a href="#"> <img class="secondary-img" src="../../../assets/frontend/img/product-img/product1.jpg"
                                                    alt=""></a>-->
                                            <span>hot</span>
                                            <div class="product-action">
                                                <a href="#"><i class="far fa-eye"></i></a>
                                                <a href="#"><i class="fas fa-balance-scale"></i></a>
                                                <a href="#"><i class="fas fa-heart"></i></a>
                                            </div>
                                        </div>
                                        <div class="product-content text-center">
                                            <h3><a href="#">{{product.pro_name}}</a></h3>
                                            <div class="rating">
                                                <i class="fas far fa-star"></i>
                                                <i class="fas far fa-star"></i>
                                                <i class="fas far fa-star"></i>
                                                <i class="fas far fa-star"></i>
                                                <i class="fas far fa-star"></i>
                                            </div>
                                            <p>{{product.pro_info}}</p>
                                            <div class="price">
                                                <span>{{product.spl_price}} </span>
                                                <span><del>{{product.pro_price}}</del></span>
                                            </div>
                                            <div class="cart-btn">
                                                <a href="#">Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                <!--Single product End-->
				</div>
			</div>
		</div>
	</section>
    <pagination :data="laravelData" @pagination-change-page="getResults"></pagination>

	<!--Product Area-->
    <!--Footer-section start-->
    <footer>
        <div class="container">
            <div class="footer-area">
                <div class="row">
                    <div class="col-lg-3 col-sm-6 mb-sm-5">
                        <div class="footer-widget">
                            <h3>About</h3>
                            <ul>
                                <li><a href="#">News & Stories</a></li>
                                <li><a href="#"> History</a></li>
                                <li><a href="#">Our Studio</a></li>
                                <li><a href="#">Showrooms</a></li>
                                <li><a href="#">Stockists</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 mb-sm-5">
                        <div class="footer-widget">
                            <h3>About</h3>
                            <ul>
                                <li><a href="#">News & Stories</a></li>
                                <li><a href="#"> History</a></li>
                                <li><a href="#">Our Studio</a></li>
                                <li><a href="#">Showrooms</a></li>
                                <li><a href="#">Stockists</a></li>
                            </ul>

                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 ">
                        <div class="footer-widget">
                            <h3>About</h3>
                            <ul>
                                <li><a href="#">News & Stories</a></li>
                                <li><a href="#"> History</a></li>
                                <li><a href="#">Our Studio</a></li>
                                <li><a href="#">Showrooms</a></li>
                                <li><a href="#">Stockists</a></li>
                            </ul>

                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 ">
                        <div class="footer-widget">
                            <h3>About</h3>
                            <ul>
                                <li><a href="#">News & Stories</a></li>
                                <li><a href="#"> History</a></li>
                                <li><a href="#">Our Studio</a></li>
                                <li><a href="#">Showrooms</a></li>
                                <li><a href="#">Stockists</a></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-bottom-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-7 col-sm-8 ">
                        <div class="footer-menu  d-flex align-items-center ">
                            <nav class="">
                                <ul>
                                    <li><a href="#">About Us </a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">FAQs</a></li>
                                    <li><a href="#">Order Tracking</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="col-md-5 col-sm-4 ">
                        <div class="footer-icon d-flex justify-content-end align-items-center">
                            <span>Connect with us:</span>
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-skype"></i></a>
                            <a href="#"><i class="fab fa-skype"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!--Footer-section End-->
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return{
            products:[],
        }
    },
    methods:{
        get_all_products(){
            axios.get('/product')
            .then(response => {
                this.products = response.data
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            });
        },
        getResults(page = 1) {
			axios.get('/product?page=' + page)
				.then(response => {
					this.laravelData = response.data;
				});
		}
    },
    created(){
        this.get_all_products();
        this.getResults();
    }
}
</script>