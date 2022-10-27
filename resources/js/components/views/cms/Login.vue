<template>
    <v-container class="main-container d-flex align-center">
        <v-row class="justify-center">
            <v-col cols="8" md="8">
                <v-card class="pb-1">
                    <v-card-title>
                        <h2 class="font-weight-regular text-center">Login</h2>
                    </v-card-title>
                    
                    <v-card-text>
                       
                        <v-text-field append-icon="mdi-email" label="Email" outlined placeholder="Enter email..."></v-text-field>
                        <v-text-field 
                        :type="showPassword? 'text': 'password'" 
                        outlined 
                        placeholder="Enter Password..."
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="showPassword = !showPassword"
                        label="Password"
                        ></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-row class="justify-center mb-3">
                            <v-btn depressed class="primary px-15">Login</v-btn>
                        </v-row>
                    </v-card-actions>
                    <p class="pl-3">No account yet? <router-link :to="{name: 'cms-register'}">Register</router-link> </p>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        showPassword: false,
    })
}
</script>

<style scoped>
    .main-container{
        height: 100vh;
    }
</style>