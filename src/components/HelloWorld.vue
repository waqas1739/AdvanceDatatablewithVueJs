<template>
  <v-data-table
    :headers="headers"
    :items="patients"
    item-key="name"
    class="elevation-1"
    :search="search"
    :custom-filter="filterText"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Patients DataTable</v-toolbar-title>
        <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="orange" dark class="mb-2" v-on="on">Enter New Patients Data</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.name" label="Patients name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.id" label="ID"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.cell_count" label="Cell Count"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.blood_count" label="Blood Count"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.prediction" label="Prediction"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.contact" label="Contact"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    data: () => ({
        search: '',
      headers: [
        {
          text: 'Patients Data',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'ID', value: 'id' },
        { text: 'Cell Count', value: 'cell_count' },
        { text: 'Blood Count', value: 'blood_count' },
        { text: 'Prediction', value: 'prediction' },
        { text: 'Time', value: 'time' },
        { text: 'Email', value: 'email'},
        { text: 'Contact', value: 'contact' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      patients: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        id: 0,
        cell_count: 0,
        blood_count: 0,
        prediction: 0,
        time: 0,
      },
      defaultItem: {
        name: '',
        id: 0,
        cell_count: 0,
        blood_count: 0,
        prediction: 0,
        time: 0,
      },
    }),
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
    },
    created () {
      this.initialize()
    },
    methods: {
      filterText (value, search) {
        return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().indexOf(search) !== -1
      },
      initialize () {
        this.patients = [
          {
            name: 'Waqas Javed',
            id: 0,
            cell_count: 0,
            blood_count: 0,
            prediction: 0,
            time: 0,
            email: 'email',
            contact: '+491000000'
          },
          {
            name: 'Alveena Mir',
            id: 0,
            cell_count: 0,
            blood_count: 0,
            prediction: 0,
            time: 0,
            email: 'email',
            contact: '+491000000'
          },
          {
            name: 'Alina M.Raus',
            id: 0,
            cell_count: 0,
            blood_count: 0,
            prediction: 0,
            time: 0,
            email: 'email',
            contact: '+491000000'
          },
          {
            name: 'Sandra Barakat',
            id: 0,
            cell_count: 0,
            blood_count: 0,
            prediction: 0,
            time: 0,
            email: 'email',
            contact: '+491000000'
          },
          {
            name: 'Illaria DeRosa',
            id: 0,
            cell_count: 0,
            blood_count: 0,
            prediction: 0,
            time: 0,
            email: 'email',
            contact: '+491000000'
          },
          {
            name: 'Julia Kalinzgi',
            id: 0,
            cell_count: 0,
            blood_count: 0,
            prediction: 0,
            time: 0,
            email: 'email',
            contact: '+491000000'
          },
          {
            name: 'Bernadet Kósgov',
            id: 0,
            cell_count: 0,
            blood_count: 0,
            prediction: 0,
            time: 0,
            email: 'email',
            contact: '+491000000'
          },
          {
            name: 'Mùjde Gurbuz',
            id: 0,
            cell_count: 0,
            blood_count: 0,
            prediction: 0,
            time: 0,
            email: 'email',
            contact: '+491000000'
          },
          {
            name: 'Ena Lallic',
            id: 0,
            cell_count: 0,
            blood_count: 0,
            prediction: 0,
            time: 0,
            email: 'email',
            contact: '+491000000'
          },
          {
            name: 'Hanga Maria',
            id: 0,
            cell_count: 0,
            blood_count: 0,
            prediction: 0,
            time: 0,
            email: 'email',
            contact: '+491000000'
          },
          {
            name: 'Rosita',
            id: 0,
            cell_count: 0,
            blood_count: 0,
            prediction: 0,
            time: 0,
            email: 'email',
            contact: '+491000000'
          }
        ]
      },
      editItem (item) {
        this.editedIndex = this.patients.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      deleteItem (item) {
        const index = this.patients.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.patients.splice(index, 1)
      },
      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.patients[this.editedIndex], this.editedItem)
        } else {
          this.patients.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>
