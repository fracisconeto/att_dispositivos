const { createApp, ref } = Vue
          createApp({
            setup() {
              const cart = ref(0);
              const addToCart = () => {
                cart.value += 1;
              }
               
        const image = ref('./assets/img/enormosauro.png');
        const changeImage = (variantImage) => {
          image.value = variantImage;
        }
              return {
              product_title: ref('T-shirt'),
              image,
              inStock: ref(15),
              details: ref(['50% cotton', '30% polyester', '20% wool ']),
              variants: [{id:1, color: 'blue'}, {id:2, color: 'green'}],
              cart: ref(0),
              variants: 
              [{id:1, color: 'blue', image: './assets/img/enormosauro.png'},
              {id:2, color: 'green', image: './assets/img/ben10.png'}],
              cart,
              addToCart,
              changeImage
              }
            }
          }).mount('#app')