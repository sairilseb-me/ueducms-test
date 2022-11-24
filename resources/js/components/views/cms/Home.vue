<template>
  <v-container fluid>
    <navbar></navbar>
    <v-row class="justify-center mt-3">
        <v-col cols="12" md="10">
          <v-card flat>
            <v-card-title color="grey">
              Book List
              <v-spacer></v-spacer>
              <v-text-field prepend-icon="mdi-magnify" placeholder="Search">Search</v-text-field>
            </v-card-title>
           <v-row class="mx-2">
            <v-col cols="12" md="6" v-for="(book, index) in bookList" :key="index">
              <v-card>
                <v-card-title>{{ book.title }}</v-card-title>
                <v-card-text class="pb-0">{{ book.content }}</v-card-text>
                <div class="mx-2 py-3 d-flex justify-space-around">
                  <v-chip small class="my-1" router to="#">Author: {{ book.author }}</v-chip>
                  <v-chip small class="my-1">Category: {{ book.category }}</v-chip>
                </div>
                <v-card-actions class="px-2 d-flex justify-space-between">
                  <v-btn text class="primary mb-2"><v-icon>mdi-currency-usd</v-icon> Buy</v-btn>
                  <v-btn text class="warning mb-2"><v-icon>mdi-cart-plus</v-icon> Add to Cart</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
           </v-row>
          </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>

import Navbar from '../UI/Navbar.vue';
export default {
  components: {
    'navbar': Navbar,
  },
    data: () => ({
      bookList: [
        {
          title: 'Test 1',
          content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus necessitatibus quisquam veritatis non, natus impedit quibusdam delectus fuga molestiae itaque, at quae fugit culpa atque error facere minus tenetur numquam!',
          author: 'Nobody 001',
          category: 'horror',
          published: '1985-01-02'
        },
        {
          title: 'Test 2',
          content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus necessitatibus quisquam veritatis non, natus impedit quibusdam delectus fuga molestiae itaque, at quae fugit culpa atque error facere minus tenetur numquam!',
          author: 'Nobody 002',
          category: 'adventure',
          published: '1990-14-05'
        },
        {
          title: 'Test 3',
          content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus necessitatibus quisquam veritatis non, natus impedit quibusdam delectus fuga molestiae itaque, at quae fugit culpa atque error facere minus tenetur numquam!',
          author: 'Nobody 003',
          category: 'comedy',
          published: '1990-14-05'
        }
      ]
    }),
    computed: {
     headers(){
      return [
        {
          text: 'Title',
          value: 'title'
        },
        {
          text: 'Category',
          value: 'category'
        },
        {
          text: 'Author',
          value: 'author'
        },
        {
          text: 'Publisher',
          value: 'publisher'
        }
      ]
     }
    },
    methods: {
      onClickView(item){
        console.log(item.firstname)
      }
    }
}
</script>