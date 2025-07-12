import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Registro } from './registro/registro'
import { Login } from './login/login'
import { Detalle } from './detalle/detalle'
import { Chat } from './chat/chat'
import { Posts } from './posts/posts'
import { Products } from './products/products';

export const routes: Routes = [
    {
        path:'home',
        component: Home
    },
    {
        path:'products',
        component: Products
    },
    {
        path:'products/:product_id',
        component: Detalle
    },
    {
        path:'registro',
        component: Registro
    },
    {
        path: 'login',
        component: Login
    },
    {
        path:'chat',
        component: Chat
    },
    {
        path:'posts',
        component: Posts
    }
];
