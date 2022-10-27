<template>
    <v-container class="main-container d-flex align-center">
        <v-row class="justify-center">
            <v-col cols="12" md="8" class="justify-center">
                <v-card>
                    <v-card-title>Register</v-card-title>
                    <v-card-text>
                        <v-text-field outlined label="Name" placeholder="Enter Name here..."></v-text-field>
                        <v-text-field outlined label="Email" placeholder="Enter Email here..."></v-text-field>
                        <v-text-field 
                        outlined 
                        :type="showPassword ? 'text' : 'password'"
                        
                        label="Password" 
                        placeholder="Enter Password here..."
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="showPassword = !showPassword"
                        ></v-text-field>
                    </v-card-text>
                    <v-card-action class="d-flex justify-space-between px-4 pb-4">
                        <v-btn depressed color="secondary" to="/cms/login">Back</v-btn>
                        <v-btn depressed color="primary" >Register</v-btn>
                    </v-card-action>
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