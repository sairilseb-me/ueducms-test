<template>
  <v-container fluid>
    <v-app-bar depressed color="white">
        <v-toolbar-title>EUDUCMS</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text outlined>Sign out</v-btn>
    </v-app-bar>

    <v-row class="justify-center mt-3">
        <v-col cols="12" md="10">
          <v-card>
            <v-card-title>
              Person Data
              <v-spacer></v-spacer>
              <v-text-field prepend-icon="mdi-magnify" placeholder="Search">Search</v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="personData"
            >
            <template v-slot:item="row">
              <tr>
                <td>{{ row.item.firstname }}</td>
                <td>{{ row.item.lastname }}</td>
                <td>{{ row.item.address }}</td>
                <td>{{ row.item.phone }}</td>
                <td>
                  <v-btn depressed class="mx-2 text-black" small color="grey">View</v-btn>
                  <v-btn depressed class="mx-2 text-black" small color="yellow">Edit</v-btn>
                </td>

              </tr>
            </template>
            </v-data-table>
          </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    data: () => ({
       personData: [
        {
          firstname: 'Sairil',
          lastname: 'Seberiaga',
          address: 'San Miguel Jordan Guimaras',
          phone: '0992928929890'
        },
        {
          firstname: 'Jermaine',
          lastname: 'Seberiaga',
          address: 'San Miguel Jordan Guimaras',
          phone: '0990292902902'
        }
       ]
    }),
    computed: {
     headers(){
      return [
        {
          text: 'First Name',
          value: 'firstname'
        },
        {
          text: 'Last Name',
          value: 'lastname'
        },
        {
          text: 'Address',
          value: 'address'
        },
        {
          text: 'Phone',
          value: 'phone'
        }
      ]
     }
    }
}
</script>