<template>
    <v-container fluid>
        <v-row>
            
            <v-col cols="12" md="10" background-color="grey">
                <h1>Add New Page</h1>
                <v-container>
                    <v-text-field outlined label="Title" class="text-center"></v-text-field>
                    <v-textarea outlined label="Content"></v-textarea>
                    <div style="width:500px">
                        <v-file-input
                            label="Upload Image"
                            filled
                            prepend-icon="mdi-camera"
                        ></v-file-input>
                    </div>
                    <v-select :items="category" outlined label="Category"></v-select>
                </v-container>
            </v-col>
            <v-col cols="12" md="2">
                <v-btn text @click="triggerSidebar">
                    <v-icon>
                        mdi-menu
                    </v-icon>
                </v-btn>
                <v-navigation-drawer v-model="showSidebar" right app>
                    <v-list-item>
                        <v-list-item-content>
                            <v-col cols="2" md="2" class="px-0">
                                <v-btn text @click="triggerSidebar" small class="px-0">
                                    <v-icon>
                                        mdi-close
                                    </v-icon>
                                </v-btn>
                            </v-col>
                            <h1>Test</h1>
                        </v-list-item-content>
                    </v-list-item>
                </v-navigation-drawer>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        showSidebar: false,
        category: [
            'Suspense',
            'Horror',
            'Adventure',
            'Drama',
            'Action',
            'Sci-fi'
        ]
    }),
    methods: {
        triggerSidebar(){
            this.showSidebar = !this.showSidebar
        }
    }
}
</script>