const Vue = require("vue");
const VueRouter = require("vue-router");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: {
      template: `<h1>Selamat datang di SPA Modern & Simple!</h1>`,
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: {
      template: `<h1>Profile</h1><p>Informasi profil Anda akan ditampilkan di sini.</p>`,
    },
  },
  {
    path: "/portofolio",
    name: "Portofolio",
    component: {
      template: `<h1>Portofolio</h1><p>Daftar portofolio Anda akan ditampilkan di sini.</p>`,
    },
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    component: {
      template: `<h1>Contact Us</h1><p>Informasi kontak Anda akan ditampilkan di sini.</p>`,
    },
  },
];

const router = new VueRouter({
  routes,
});

const app = new Vue({
  router,
}).$mount("#app");
