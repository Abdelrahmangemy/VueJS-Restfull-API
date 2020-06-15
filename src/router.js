import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
        {
            path: '/',
            name: 'frontend-master',
            component: ()=>import('../src/views/frontend/frontend-master'),
            redirect:{path:'/home'},
            children:[
                {
                    path:'home',
                    name:'home-page',
                    component: ()=>import('../src/views/frontend/home/home.vue')
                },
                {
                    path:'product-details',
                    name:'product-details',
                    component: ()=>import('../src/views/frontend/home/product-details.vue')
                },
                {
                    path:'Logout',
                    name:'Logout',
                    component: ()=>import('../src/views/frontend/Auth/Logout.vue')
                },
            ]
        },
        {
            path:'/admin-login',
            name:'admin-login',
            component: ()=>import('../src/views/frontend/Auth/auth-master.vue'),
            redirect:{path:'/admin-login/login'},
            children:[
                
                {
                    path:'login',
                    name:'login',
                    component: ()=>import('../src/views/frontend/Auth/login.vue')
                },
                {
                    path:'register',
                    name:'register',
                    component: ()=>import('../src/views/frontend/Auth/Register.vue')
                },
                
            ]
        },
        {
            path:'/dashboard',
            name:'dashboard',
            component: ()=>import('../src/views/admin/admin-master.vue'),
            children:[
                {
                    path:'add-category',
                    name:'add-category',
                    component:()=>import('../src/views/admin/category/add_category.vue'),
                },
                {
                    path:'all-category',
                    name:'all-category',
                    component:()=>import('../src/views/admin/category/all_category.vue'),
                },
                {
                    path:'edit-category/:category_id',
                    name:'edit-category',
                    component:()=>import('../src/views/admin/category/edit_category.vue'),
                },
                {
                    path:'all-product',
                    name:'all-product',
                    component:()=>import('../src/views/admin/product/all-product'),
                },
                

            ]
        },

    
        
    ],
});
